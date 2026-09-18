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
const pages = [];

for (const file of walk(DOCS).sort()) {
  const rel = path.relative(ROOT, file);
  const {data} = matter(fs.readFileSync(file, 'utf8'));
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
