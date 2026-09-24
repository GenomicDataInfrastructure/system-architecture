#!/usr/bin/env node
// GitHub set-up for the system-architecture repository, using the GitHub CLI (`gh`).
// Run `issues` again whenever pages are added; see "Page issues" in CONTRIBUTING.md.
//
//   node scripts/github/setup.mjs labels    create or update the issue labels
//   node scripts/github/setup.mjs issues    create one issue per page
//   node scripts/github/setup.mjs protect   protect the main branch
//   node scripts/github/setup.mjs all       all of the above, in this order
//
// Add DRY_RUN=1 in front to print the gh commands without running them.
// Add UPDATE_BODIES=1 to `issues` to rewrite the text of existing issues (resets their checkboxes).
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
const WAVES = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/waves.json'), 'utf8')).waves;

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

/** Anchor of the page recipe in docs/handbook/recipes.md that fits this page. */
function recipeFor(rel, slug) {
  // Single-page chapters have their own recipe, even though their file is an index.md.
  const singlePage = {
    '/solution-strategy': 'solution-strategy',
    '/quality': 'quality-goals-and-quality-scenarios',
    '/risks': 'risks-and-technical-debt',
    '/glossary': 'reference-pages',
  };
  if (singlePage[slug]) return singlePage[slug];
  if (/\/index\.mdx?$/.test(rel)) return 'chapter-overview';
  const byPrefix = [
    ['/introduction/requirements', 'requirements-and-stakeholders'],
    ['/introduction/stakeholders', 'requirements-and-stakeholders'],
    ['/introduction/quality-goals', 'quality-goals-and-quality-scenarios'],
    ['/quality', 'quality-goals-and-quality-scenarios'],
    ['/constraints', 'constraints'],
    ['/context', 'context'],
    ['/solution-strategy', 'solution-strategy'],
    ['/building-blocks', 'building-block'],
    ['/runtime', 'runtime-scenario'],
    ['/deployment', 'deployment'],
    ['/concepts', 'crosscutting-concept'],
    ['/decisions', 'architecture-decision-record'],
    ['/risks', 'risks-and-technical-debt'],
  ];
  const hit = byPrefix.find(([prefix]) => slug.startsWith(prefix));
  return hit ? hit[1] : 'reference-pages';
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
  for (const w of WAVES) {
    defs.push([`wave-${w.id}`, '5319e7', `Writing wave ${w.id}: ${w.name}`]);
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
  const wave = WAVES.find((w) => w.id === Number(d.wave));
  return [
    `**Page file:** \`${page.rel}\``,
    `**Live page:** ${SITE}${d.slug}`,
    `**Audience:** ${(d.audience ?? []).join(', ') || '—'}`,
    `**Governance sections:** ${refs.length ? refs.join(', ') : '—'}`,
    `**Writing wave:** ${wave ? `${wave.id} — ${wave.name} ([writing order](${SITE}/handbook/writing-order#wave-${wave.id}))` : '—'}`,
    `**How to write it:** follow the [page choreography](${SITE}/handbook/choreography) and the [recipe for this kind of page](${SITE}/handbook/recipes#${recipeFor(page.rel, d.slug)}).`,
    '',
    '### What the page must answer',
    '',
    questions || '_See the page._',
    '',
    '### Steps',
    '',
    '- [ ] 1. Claim: assign this issue to the owner; set `owner` in the front matter',
    '- [ ] 2. Reviewers agreed in a comment here; `reviewers` set; `needs-…` labels added if a specialist must review',
    '- [ ] 3. Kick-off: scope note posted here (in scope, out of scope, key messages, open points)',
    '- [ ] 4. Sources listed here and added to `src/data/sources.json`',
    '- [ ] 5. Examples and best practices noted here',
    '- [ ] 6. Outline in a draft pull request (`status: draft`)',
    '- [ ] 7–8. Page written and self-checked',
    '- [ ] 9. Review: `status: in-review`, reviewers requested on the pull request',
    '- [ ] 10. Approved and merged (`status: approved`, `last_reviewed` set) — this closes the issue',
    '- [ ] 11. Follow-up issues opened for gaps; ADRs for decisions',
    '',
    `See [CONTRIBUTING.md](https://github.com/${REPO}/blob/main/CONTRIBUTING.md) for the workflow and writing rules.`,
  ].join('\n');
}

function issues() {
  const existing = gh(
    ['issue', 'list', '--repo', REPO, '--label', 'page', '--state', 'all', '--limit', '500', '--json', 'title,url'],
    {json: true},
  ) ?? [];
  const existingByTitle = new Map(existing.map((i) => [i.title, i.url]));

  let created = 0;
  for (const page of trackedPages()) {
    const title = `[page] ${page.data.title}`;
    const chapter = chapterKey(page.rel);
    const scope = scopeKey(page.rel);
    const waveLabel = page.data.wave ? `wave-${page.data.wave}` : null;
    if (existingByTitle.has(title)) {
      // Existing issue: make sure it has its wave label (added after the first run).
      const url = existingByTitle.get(title) || title;
      if (waveLabel) gh(['issue', 'edit', url, '--repo', REPO, '--add-label', waveLabel]);
      // UPDATE_BODIES=1 rewrites the issue text. It resets the step checkboxes, so use it only before work starts.
      if (process.env.UPDATE_BODIES === '1') gh(['issue', 'edit', url, '--repo', REPO, '--body-file', '-'], {input: issueBody(page)});
      continue;
    }
    const labelList = ['page', chapter && `chapter-${chapter}`, scope && `scope-${scope}`, waveLabel].filter(Boolean).join(',');
    const url = gh(['issue', 'create', '--repo', REPO, '--title', title, '--label', labelList, '--body-file', '-'], {
      input: issueBody(page),
    });
    created++;
    console.log(`issue: ${title}${url ? ` → ${url}` : ''}`);
  }
  console.log(`issues: ${created} created, ${existingByTitle.size} already existed (wave labels updated)`);
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
