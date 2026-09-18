#!/usr/bin/env node
// One-off GitHub set-up for the system-architecture repository, using the GitHub CLI (`gh`).
// See planning/github-setup.md for the full procedure.
//
//   node scripts/github/setup.mjs labels    create or update the issue labels
//   node scripts/github/setup.mjs issues    create one issue per page
//   node scripts/github/setup.mjs protect   protect the main branch
//   node scripts/github/setup.mjs all       all of the above, in this order
//
// Add DRY_RUN=1 in front to print the gh commands without running them.
// All commands are safe to run again: existing labels and issues are reused, not duplicated.
//
// Roles are tracked with issue assignees (owner) and the page front matter (owner, reviewers).

import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import matter from 'gray-matter';

const OWNER = 'GenomicDataInfrastructure';
const REPO = `${OWNER}/system-architecture`;
const SITE = 'https://genomicdatainfrastructure.github.io/system-architecture';
const DRY_RUN = process.env.DRY_RUN === '1';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const DOCS = path.join(ROOT, 'docs');

// ---------------------------------------------------------------- helpers

function gh(args, {input, json = false, allowFail = false} = {}) {
  const shown = ['gh', ...args].map((a) => (/\s/.test(a) ? JSON.stringify(a) : a)).join(' ');
  if (DRY_RUN) {
    console.log(`[dry-run] ${shown}`);
    return json ? null : '';
  }
  try {
    const out = execFileSync('gh', args, {input, encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe']});
    return json ? JSON.parse(out) : out.trim();
  } catch (e) {
    if (allowFail) return null;
    console.error(`FAILED: ${shown}\n${e.stderr || e.message}`);
    process.exit(1);
  }
}

function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return walk(p);
    return /\.mdx?$/.test(e.name) ? [p] : [];
  });
}

// A Map keeps this order (a plain object would sort the keys '10'–'12' first).
const CHAPTERS = new Map([
  ['01', 'Ch 1 Introduction and goals'],
  ['02', 'Ch 2 Constraints'],
  ['03', 'Ch 3 Context and scope'],
  ['04', 'Ch 4 Solution strategy'],
  ['05', 'Ch 5 Building block view'],
  ['06', 'Ch 6 Runtime view'],
  ['07', 'Ch 7 Deployment view'],
  ['08', 'Ch 8 Crosscutting concepts'],
  ['09', 'Ch 9 Architecture decisions'],
  ['10', 'Ch 10 Quality requirements'],
  ['11', 'Ch 11 Risks and technical debt'],
  ['12', 'Ch 12 Glossary'],
  ['readers', 'Reader guides'],
  ['appendix', 'Appendices'],
]);

function chapterKey(rel) {
  const m = rel.match(/^docs\/arc42\/(\d\d)-/);
  if (m) return m[1];
  if (rel.startsWith('docs/readers/')) return 'readers';
  if (rel.startsWith('docs/appendix/')) return 'appendix';
  return null;
}
function scopeKey(rel) {
  const m = rel.match(/\/(european|national|local)(\/|\.md)/);
  return m ? m[1] : null;
}

/** Pages whose ownership is tracked (every page except landing and generated pages). */
function trackedPages() {
  // Chapters first, then reader guides, then appendices; inside a folder, the index page first,
  // then by sidebar position (the order readers see).
  const rank = (f) => (f.includes('/arc42/') ? 0 : f.includes('/readers/') ? 1 : 2);
  const key = (p) => [
    rank(p.rel),
    path.dirname(p.rel).replace('/european', '/1').replace('/national', '/2').replace('/local', '/3'),
    path.basename(p.rel).startsWith('index.') ? 0 : 1,
    Number(p.data.sidebar_position ?? 99),
  ];
  const cmp = (a, b) => {
    const [ka, kb] = [key(a), key(b)];
    for (let i = 0; i < ka.length; i++) {
      if (ka[i] < kb[i]) return -1;
      if (ka[i] > kb[i]) return 1;
    }
    return 0;
  };
  return walk(DOCS)
    .map((file) => {
      const rel = path.relative(ROOT, file);
      const {data, content} = matter(fs.readFileSync(file, 'utf8'));
      return {rel, data, content};
    })
    .sort(cmp)
    .filter((p) => !p.data.hide_page_meta && p.data.title);
}

// ---------------------------------------------------------------- labels

function labels() {
  const defs = [
    ['page', '1f5f8b', 'Write, review or update a page of the architecture'],
    ['documentation', '0075ca', 'Documentation work'],
    ['reader-question', 'd4c5f9', 'A question the documentation does not answer yet'],
    ['scope-european', 'bfdadc', 'European scope (Genome EDIC CC services)'],
    ['scope-national', 'c2e0c6', 'National scope (1+MG NCP node)'],
    ['scope-local', 'fef2c0', 'Local scope (1+MG Data Provider / Data Host)'],
    ['needs-dpo', 'e99695', 'Needs review by a data protection officer'],
    ['needs-security', 'e99695', 'Needs review by a security advisor'],
    ['needs-legal', 'e99695', 'Needs review by a legal expert'],
    ['needs-elsi', 'e99695', 'Needs review by an ELSI specialist'],
  ];
  for (const [key, name] of CHAPTERS) {
    defs.push([`chapter-${key}`, 'ededed', name]);
  }
  for (const [name, color, description] of defs) {
    gh(['label', 'create', name, '--repo', REPO, '--color', color, '--description', description, '--force']);
  }
  console.log(`labels: ${defs.length} labels created or updated`);
}

// ---------------------------------------------------------------- issues

function issueBody(page) {
  const d = page.data;
  const questions = (page.content.split('## What this page must answer')[1] ?? '')
    .split(/\n## |\n:::/)[0]
    .trim();
  const refs = (d.governance_refs ?? []).map(String);
  return [
    `**Page file:** \`${page.rel}\``,
    `**Live page:** ${SITE}${d.slug}`,
    `**Audience:** ${(d.audience ?? []).join(', ') || '—'}`,
    `**Governance sections:** ${refs.length ? refs.join(', ') : '—'}`,
    '',
    '### What the page must answer',
    '',
    questions || '_See the page._',
    '',
    '### Steps',
    '',
    '- [ ] Owner assigned: assign this issue to the owner and set `owner` in the page front matter',
    '- [ ] Reviewers agreed: mention them in a comment here and set `reviewers` in the front matter',
    '- [ ] Draft written (`status: draft`)',
    '- [ ] Pull request opened, linked to this issue (`status: in-review`)',
    '- [ ] Approved and merged (`status: approved`, `last_reviewed` set) — this closes the issue',
    '',
    `See [CONTRIBUTING.md](https://github.com/${REPO}/blob/main/CONTRIBUTING.md) for the workflow and writing rules.`,
  ].join('\n');
}

function issues() {
  const existing = gh(
    ['issue', 'list', '--repo', REPO, '--label', 'page', '--state', 'all', '--limit', '500', '--json', 'title,url'],
    {json: true},
  ) ?? [];
  const existingTitles = new Set(existing.map((i) => i.title));

  let created = 0;
  for (const page of trackedPages()) {
    const title = `[page] ${page.data.title}`;
    if (existingTitles.has(title)) continue;
    const chapter = chapterKey(page.rel);
    const scope = scopeKey(page.rel);
    const labelList = ['page', chapter && `chapter-${chapter}`, scope && `scope-${scope}`].filter(Boolean).join(',');
    const url = gh(['issue', 'create', '--repo', REPO, '--title', title, '--label', labelList, '--body-file', '-'], {
      input: issueBody(page),
    });
    created++;
    console.log(`issue: ${title}${url ? ` → ${url}` : ''}`);
  }
  console.log(`issues: ${created} created, ${existingTitles.size} already existed`);
}

// ---------------------------------------------------------------- branch protection

function protect() {
  const rules = {
    required_status_checks: {strict: true, contexts: ['check', 'reuse']},
    enforce_admins: false,
    required_pull_request_reviews: {
      required_approving_review_count: 1,
      require_code_owner_reviews: false,
      dismiss_stale_reviews: true,
    },
    restrictions: null,
    required_conversation_resolution: true,
    allow_force_pushes: false,
    allow_deletions: false,
  };
  gh(['api', '-X', 'PUT', `repos/${REPO}/branches/main/protection`, '--input', '-'], {input: JSON.stringify(rules)});
  console.log('protect: main protected (pull request with one approval, checks must pass)');
}

// ---------------------------------------------------------------- main

const commands = {labels, issues, protect};
const cmd = process.argv[2];
if (cmd === 'all') {
  labels();
  issues();
  protect();
} else if (commands[cmd]) {
  commands[cmd]();
} else {
  console.log('Usage: node scripts/github/setup.mjs <labels|issues|protect|all>   (DRY_RUN=1 to preview)');
  process.exit(cmd ? 1 : 0);
}
