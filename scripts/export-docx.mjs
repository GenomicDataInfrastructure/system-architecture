#!/usr/bin/env node
// Exports a set of pages, at one version of the repository, to a Word document for reviewers
// who don't use GitHub (handbook: "Review rounds"). Every page and the cover name the commit,
// so that comments can be matched to the text they were made on.
//
//   npm run export-docx -- --wave 1 --ref wave-1 --pr 133
//   npm run export-docx -- --pages docs/arc42/03-context-and-scope/business-context.md --ref main
//
// Needs Pandoc (https://pandoc.org, `brew install pandoc`, or set PANDOC to its path).
// Diagrams are embedded as PNG when the draw.io desktop app is installed, otherwise as SVG.
// Styles (fonts, the shaded "In short" and "Box" paragraphs, table borders, a page break before
// each page) come from scripts/export-docx-reference.docx: Pandoc's default reference document,
// adjusted in Word. Edit it in Word to change the look.

import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import matter from 'gray-matter';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SITE = 'https://genomicdatainfrastructure.github.io/system-architecture';

function parseArgs(argv) {
  const opts = {ref: 'HEAD'};
  for (let i = 0; i < argv.length; i++) {
    const [key, value] = [argv[i], argv[i + 1]];
    if (key === '--wave') opts.wave = Number(value);
    else if (key === '--pages') opts.pages = value.split(',').map((p) => p.trim()).filter(Boolean);
    else if (key === '--ref') opts.ref = value;
    else if (key === '--pr') opts.pr = value;
    else if (key === '--out') opts.out = value;
    else if (key === '--round') opts.round = value;
    else {
      console.error(`export-docx: unknown option ${key}`);
      process.exit(1);
    }
    i++;
  }
  if (!opts.wave && !opts.pages) {
    console.error('export-docx: give --wave N or --pages <file,…>');
    process.exit(1);
  }
  return opts;
}

const git = (...args) => execFileSync('git', args, {cwd: ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024});
const gitBuffer = (...args) => execFileSync('git', args, {cwd: ROOT, maxBuffer: 64 * 1024 * 1024});

function findTool(candidates, versionArg) {
  for (const c of candidates.filter(Boolean)) {
    try {
      execFileSync(c, [versionArg], {stdio: 'ignore'});
      return c;
    } catch {}
  }
  return null;
}

// Natural order of the arc42 folders (01-…, 02-…), then index pages, then sidebar_position.
function sortKey(page) {
  const dir = path.dirname(page.file);
  const isIndex = /\/index\.mdx?$/.test(page.file) ? 0 : 1;
  return [dir, isIndex, page.data.sidebar_position ?? 999, path.basename(page.file)];
}
function compareKeys(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) continue;
    if (typeof a[i] === 'number' && typeof b[i] === 'number') return a[i] - b[i];
    return String(a[i]).localeCompare(String(b[i]), 'en', {numeric: true});
  }
  return 0;
}

const opts = parseArgs(process.argv.slice(2));
const sha = git('rev-parse', '--short', opts.ref).trim();
const commitDate = git('show', '-s', '--format=%cs', opts.ref).trim();
const read = (file) => git('show', `${opts.ref}:${file}`);
const governance = JSON.parse(read('src/data/governance.json'));
const sources = JSON.parse(read('src/data/sources.json'));
const acronyms = JSON.parse(read('src/data/acronyms.json')).acronyms;
const govById = new Map(governance.sections.map((s) => [s.id, s]));
const srcById = new Map((Array.isArray(sources) ? sources : sources.sources).map((s) => [s.id, s]));
const acrById = new Map(acronyms.map((a) => [a.id, a]));
const site = opts.pr ? `${SITE}/pr-${opts.pr}` : SITE;

const files = git('ls-tree', '-r', '--name-only', opts.ref, 'docs')
  .split('\n')
  .filter((f) => /\.mdx?$/.test(f));
let pages = files.map((file) => ({file, ...matter(read(file))}));
if (opts.pages) {
  const wanted = new Set(opts.pages);
  pages = pages.filter((p) => wanted.has(p.file) || wanted.has(p.data.slug));
  if (pages.length !== wanted.size) {
    console.error(`export-docx: found ${pages.length} of ${wanted.size} pages at ${opts.ref}`);
    process.exit(1);
  }
} else {
  pages = pages.filter((p) => p.data.wave === opts.wave && !p.data.hide_page_meta);
}
pages.sort((a, b) => compareKeys(sortKey(a), sortKey(b)));
if (!pages.length) {
  console.error('export-docx: no pages found');
  process.exit(1);
}

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'export-docx-'));
const drawio = findTool([process.env.DRAWIO, '/Applications/draw.io.app/Contents/MacOS/draw.io', 'drawio'], '--version');
const pandoc = findTool([process.env.PANDOC, 'pandoc'], '--version');
if (!pandoc) {
  console.error('export-docx: Pandoc not found. Install it (https://pandoc.org) or set PANDOC to its path.');
  process.exit(1);
}

function diagram(src) {
  const svg = path.join(tmp, src);
  fs.writeFileSync(svg, gitBuffer('show', `${opts.ref}:static/diagrams/${src}`));
  if (!drawio) return svg;
  const png = svg.replace(/\.drawio\.svg$/, '.png');
  execFileSync(drawio, ['-x', '-f', 'png', '-s', '2', '-o', png, svg], {stdio: 'ignore'});
  return png;
}

const cited = new Set();

// Inside a styled box, Word gives list items its list style instead of the box's, so bullets
// become paragraphs that start with "•".
function boxParagraphs(text) {
  const out = [];
  for (const line of text.trim().split('\n')) {
    const item = line.match(/^\s*[-*]\s+(.*)$/);
    if (item) out.push(`• ${item[1]}`);
    else if (!line.trim()) out.push('');
    else if (out.length && out[out.length - 1] !== '') out[out.length - 1] += ` ${line.trim()}`;
    else out.push(line.trim());
  }
  return out.filter((l, i, a) => l !== '' || a[i - 1] !== '').join('\n\n').replace(/\n{3,}/g, '\n\n');
}

// Turns one page's MDX into Pandoc Markdown: components become plain text, boxes become styled blocks.
function toMarkdown(page) {
  const seenAcronyms = new Set();
  let body = page.content;
  body = body.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
  body = body.replace(/<InShort>\s*([\s\S]*?)\s*<\/InShort>/g, (_, inner) =>
    `::: {custom-style="In short"}\n**In short**\n\n${boxParagraphs(inner)}\n:::`);
  body = body.replace(/^:::(\w+)(?:\[([^\]]*)\])?\s*$([\s\S]*?)^:::\s*$/gm, (_, type, title, inner) => {
    const label = title || type[0].toUpperCase() + type.slice(1);
    return `::: {custom-style="Box"}\n**${label}**\n\n${boxParagraphs(inner)}\n:::`;
  });
  body = body.replace(/<GovRef id="([^"]+)"(\s+long)?\s*\/>/g, (_, id, long) => {
    const s = govById.get(id);
    return long && s ? `DG ${id} — ${s.title}` : `DG ${id}`;
  });
  body = body.replace(/<Cite id="([^"]+)"\s*\/>/g, (_, id) => {
    cited.add(id);
    return `[${srcById.get(id)?.short ?? id}]`;
  });
  body = body.replace(/<Acronym id="([^"]+)"\s*(?:\/>|>([^<]*)<\/Acronym>)/g, (_, id, text) => {
    const shown = text ?? id;
    const a = acrById.get(id);
    if (!a || seenAcronyms.has(id)) return shown;
    seenAcronyms.add(id);
    return `${shown} (${a.meaning})`;
  });
  body = body.replace(/<([A-Z]\w+)\s*\/>/g, (_, name) => `*[${name}: generated table, see the website]*`);
  body = body.replace(/\]\((\/[^)\s]*)\)/g, (_, link) => `](${site}${link})`);
  body = body.replace(/<Diagram\s+src="([^"]+)"[^>]*\/>/g, (_, src) => `![](${diagram(src)}){width=100%}`);
  return body.trim();
}

const label = opts.wave ? `Wave ${opts.wave}` : 'Selected pages';
const round = opts.round ? `, review round ${opts.round}` : '';
const out = path.resolve(ROOT, opts.out ?? path.join('exports', `${label.toLowerCase().replace(/\s+/g, '-')}${opts.round ? `-round-${opts.round}` : ''}-${sha}.docx`));
fs.mkdirSync(path.dirname(out), {recursive: true});

const parts = [];
parts.push(`---
title: "Genome EDIC system architecture: ${label}${round}"
subtitle: "Version ${sha} of ${commitDate}, for review"
---

# How to review this document

- **Version.** This document shows the pages exactly as they are in version **${sha}** (${commitDate})${opts.pr ? `, pull request [#${opts.pr}](https://github.com/GenomicDataInfrastructure/system-architecture/pull/${opts.pr})` : ''}. The pages may change after the review round closes; your comments are matched to this version.
- **How to comment.** Use Word comments, or suggest wording with *Track changes*. Please don't restructure the document: each page will be edited on the website, not here. You can also open this file in Google Docs (upload it to Google Drive and open it with Google Docs) and download it again as a Word file.
- **What to check.** The review checklists of the taskforce handbook: ${SITE}/handbook/review-checklists
- **Send it back** to the architecture lead when you are done. The writer starts the next round only when every reviewer has sent their comments.
- **References.** "DG VII.5.4" is a section of the 1+MG Data Governance (version 2025-12, annex of GDI D2.4). Names in square brackets, such as [GDI D3.4], are sources, listed at the end. Links point to the website${opts.pr ? ' preview of the pull request' : ''}.

| Page | Status | File |
|---|---|---|
${pages.map((p) => `| ${p.data.title} | ${p.data.status ?? ''} | \`${p.file}\` |`).join('\n')}
`);

for (const p of pages) {
  const reviewers = (p.data.reviewers ?? []).join(', ') || 'none named';
  parts.push(`\n# ${p.data.title}\n\n*Status: ${p.data.status} · wave ${p.data.wave} · owner ${p.data.owner} · reviewers ${reviewers} · \`${p.file}\` at version ${sha} · on the website: ${site}${p.data.slug ?? ''}*\n\n${toMarkdown(p)}\n`);
}

if (cited.size) {
  parts.push(`\n# Sources cited\n\n${[...cited]
    .map((id) => srcById.get(id))
    .filter(Boolean)
    .sort((a, b) => a.short.localeCompare(b.short))
    .map((s) => `- **[${s.short}]** ${s.title}${s.status ? ` (${s.status})` : ''}. ${s.url ?? ''}`)
    .join('\n')}\n`);
}

const md = path.join(tmp, 'export.md');
fs.writeFileSync(md, parts.join('\n'));
execFileSync(pandoc, ['-f', 'markdown', '-t', 'docx', '--toc', '--toc-depth=1', `--resource-path=${tmp}`, `--reference-doc=${path.join(ROOT, 'scripts/export-docx-reference.docx')}`, '-o', out, md], {stdio: 'inherit'});
console.log(`export-docx: ${pages.length} pages, version ${sha} → ${path.relative(ROOT, out)}${drawio ? '' : ' (diagrams as SVG: draw.io not found)'}`);
