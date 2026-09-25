#!/usr/bin/env node
// Collects the front matter of every page in docs/ into src/data/pages.json.
// That file feeds the "Document status" and "Governance traceability" pages.
//
//   node scripts/collect-page-meta.mjs          write src/data/pages.json
//   node scripts/collect-page-meta.mjs --check  also validate front matter; exit 1 on errors (used in CI)

import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DOCS = path.join(ROOT, 'docs');
const OUT = path.join(ROOT, 'src/data/pages.json');
const DIAGRAMS = path.join(ROOT, 'static/diagrams');
const ACRONYMS = new Set(JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/acronyms.json'), 'utf8')).acronyms.map((a) => a.id));
const governance = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/governance.json'), 'utf8'));
const WAVES = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/waves.json'), 'utf8')).waves.map((w) => w.id);

// Keep in sync with src/components/vocab.ts
const AUDIENCES = ['policy', 'legal', 'elsi', 'security', 'dpo', 'implementer'];
const STATUSES = ['placeholder', 'draft', 'in-review', 'approved'];
const REQUIRED = ['title', 'slug', 'owner', 'reviewers', 'status', 'audience', 'wave'];
const REVIEW_MAX_AGE_DAYS = 180;

const govIds = new Set(governance.sections.map((s) => s.id));
const check = process.argv.includes('--check');

function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return walk(p);
    return /\.mdx?$/.test(e.name) ? [p] : [];
  });
}

const errors = [];
const warnings = [];

/** Checks a diagram against the diagram rules (docs/handbook/diagrams.md, decision D-019). */
function checkDiagram(rel, data, src) {
  const file = path.join(DIAGRAMS, src);
  if (!fs.existsSync(file)) return errors.push(`${rel}: diagram "${src}" not found in static/diagrams/`);
  const svg = fs.readFileSync(file, 'utf8');
  if (!svg.includes('content="&lt;mxfile')) {
    errors.push(`${rel}: diagram "${src}" has no editable draw.io copy; save it from draw.io as .drawio.svg`);
  }
  if (svg.includes('light-dark(')) {
    errors.push(`${rel}: diagram "${src}" uses colours that change in dark mode; run \`npm run diagrams\``);
  }
  // The legend text, with tags removed and entities decoded (it appears in the image and in the embedded copy).
  let text = svg;
  for (let i = 0; i < 3; i++) text = text.replace(/<[^>]*>/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
  text = text.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ');
  if (!/Last edited: ?\d{4}-\d{2}-\d{2}/.test(text)) {
    errors.push(`${rel}: diagram "${src}" has no "Last edited: YYYY-MM-DD" in its legend`);
  }
  const section = String(data.title ?? '').match(/^(\d+(?:\.\d+)*)\.?\s/);
  if (section && !text.includes(`Section ${section[1]}`)) {
    warnings.push(`${rel}: the legend of diagram "${src}" does not name section ${section[1]}`);
  }
}
const pages = [];

for (const file of walk(DOCS).sort()) {
  const rel = path.relative(ROOT, file);
  const {data, content} = matter(fs.readFileSync(file, 'utf8'));
  const prose = content.replace(/```[\s\S]*?```/g, ''); // examples in code blocks are not diagrams
  for (const m of prose.matchAll(/<Diagram\b[^>]*\bsrc="([^"]+)"/g)) checkDiagram(rel, data, m[1]);
  for (const m of prose.matchAll(/<Term\b[^>]*\bid="([^"]+)"/g)) {
    if (!ACRONYMS.has(m[1])) errors.push(`${rel}: <Term id="${m[1]}"> is not in src/data/acronyms.json`);
  }
  if (data.hide_page_meta) continue; // landing pages without ownership tracking

  for (const key of REQUIRED) {
    if (data[key] === undefined) errors.push(`${rel}: missing front matter field "${key}"`);
  }
  if (data.status && !STATUSES.includes(data.status)) {
    errors.push(`${rel}: status "${data.status}" is not one of ${STATUSES.join(', ')}`);
  }
  if (data.wave !== undefined && !WAVES.includes(Number(data.wave))) {
    errors.push(`${rel}: wave "${data.wave}" is not one of ${WAVES.join(', ')} (see src/data/waves.json)`);
  }
  for (const a of data.audience ?? []) {
    if (!AUDIENCES.includes(a)) errors.push(`${rel}: audience "${a}" is not one of ${AUDIENCES.join(', ')}`);
  }
  for (const r of data.governance_refs ?? []) {
    if (!govIds.has(String(r))) errors.push(`${rel}: governance_refs "${r}" is not a section of the governance document`);
  }
  if (['in-review', 'approved'].includes(data.status)) {
    if (!data.owner || data.owner === 'TBD') errors.push(`${rel}: status "${data.status}" needs an owner`);
    if (!data.reviewers?.length) errors.push(`${rel}: status "${data.status}" needs at least one reviewer`);
  }
  if (data.status === 'approved') {
    if (!data.last_reviewed) {
      errors.push(`${rel}: approved pages need "last_reviewed"`);
    } else {
      const ageDays = (Date.now() - new Date(data.last_reviewed).getTime()) / 86_400_000;
      if (ageDays > REVIEW_MAX_AGE_DAYS) warnings.push(`${rel}: last review is ${Math.round(ageDays)} days old`);
    }
  }

  pages.push({
    file: rel,
    slug: data.slug,
    title: data.title,
    owner: data.owner ?? '',
    reviewers: data.reviewers ?? [],
    status: data.status ?? 'placeholder',
    wave: Number(data.wave ?? 0),
    audience: data.audience ?? [],
    governance_refs: (data.governance_refs ?? []).map(String),
    last_reviewed: data.last_reviewed ? new Date(data.last_reviewed).toISOString().slice(0, 10) : '',
  });
}

fs.writeFileSync(OUT, JSON.stringify(pages, null, 1) + '\n');
console.log(`collect-page-meta: ${pages.length} pages written to ${path.relative(ROOT, OUT)}`);

for (const w of warnings) console.warn(`WARNING ${w}`);
if (check) {
  for (const e of errors) console.error(`ERROR ${e}`);
  if (errors.length) {
    console.error(`collect-page-meta: ${errors.length} error(s)`);
    process.exit(1);
  }
  console.log('collect-page-meta: front matter OK');
}
