#!/usr/bin/env node
// Re-exports the draw.io diagrams in static/diagrams/ so that they follow the diagram rules
// (docs/handbook/diagrams.md, decision D-019): light colours only, the editable diagram embedded
// (uncompressed), no embedded fonts. Run it after editing a diagram. Needs the draw.io desktop app.
//
//   npm run diagrams                          every diagram
//   npm run diagrams -- 3.3-scopes.drawio.svg one diagram
//
// Set DRAWIO to the draw.io executable if it is not found automatically.

import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DIR = path.join(ROOT, 'static/diagrams');

function findDrawio() {
  const candidates = [
    process.env.DRAWIO,
    '/Applications/draw.io.app/Contents/MacOS/draw.io',
    'drawio',
    'draw.io',
  ].filter(Boolean);
  for (const c of candidates) {
    try {
      execFileSync(c, ['--version'], {stdio: 'ignore'});
      return c;
    } catch {}
  }
  console.error('diagrams: draw.io desktop not found. Install it from https://www.drawio.com or set DRAWIO to its path.');
  process.exit(1);
}

function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return walk(p);
    return e.name.endsWith('.drawio.svg') ? [p] : [];
  });
}

if (!fs.existsSync(DIR)) {
  console.log('diagrams: no static/diagrams/ folder, nothing to export');
  process.exit(0);
}
const args = process.argv.slice(2);
const files = args.length ? args.map((a) => path.join(DIR, a)) : walk(DIR);
const drawio = findDrawio();
for (const file of files) {
  if (!fs.existsSync(file)) {
    console.error(`diagrams: ${path.relative(ROOT, file)} not found`);
    process.exitCode = 1;
    continue;
  }
  const tmp = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'diagrams-')), path.basename(file));
  execFileSync(
    drawio,
    ['-x', '-f', 'svg', '-e', '-u', '--theme', 'light', '--embed-svg-fonts', 'false', '-b', '0', '-o', tmp, file],
    {stdio: 'ignore'},
  );
  fs.copyFileSync(tmp, file);
  console.log(`diagrams: exported ${path.relative(ROOT, file)}`);
}
