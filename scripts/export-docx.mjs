#!/usr/bin/env node
// Exports a set of pages, at one version of the repository, to a Word document for reviewers
// who don't use GitHub (handbook: "Review rounds"). Every page and the cover name the commit,
// so that comments can be matched to the text they were made on.
//
//   npm run export-docx -- --wave 1 --ref wave-1 --pr 133 --round 2 --due "Friday 6 November 2026" --contact "Name (Institution), e-mail"
//   npm run export-docx -- --pages docs/arc42/03-context-and-scope/business-context.md --ref main
//
// Needs Pandoc (https://pandoc.org, `brew install pandoc`, or set PANDOC to its path).
// Diagrams are embedded as PNG when the draw.io desktop app is installed, otherwise as SVG.
// The document follows the GDI deliverable template: its header and footer (logos, funding line),
// page layout, fonts and colours, a project table and a log of changes before the contents, and
// links as footnotes. Styles come from scripts/export-docx-reference.docx: Pandoc's reference
// document with the template's header, footer, text, title and heading styles, plus our shaded
// "In short" and "Box" paragraphs and a page break before each page. Edit it in Word to change
// the look.

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
    else if (key === '--due') opts.due = value;
    else if (key === '--contact') opts.contact = value;
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

const exportedSlugs = new Set(pages.map((p) => p.data.slug));
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

// The GDI template asks for links as footnotes, not embedded in the text. Links to other pages
// of the architecture and to the glossary keep only their text: the reader finds them by their
// number or in the glossary of the website. Links to other sites become footnotes, one per
// address per page.
function footnoteLinks(text) {
  const seen = new Set();
  const internal = (url) => url.startsWith(SITE) && !url.includes('/handbook');
  const note = (url) => (internal(url) || seen.has(url) ? '' : (seen.add(url), `^[${url}]`));
  return text
    .replace(/(?<!!)\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, (_, label, url) => `${label}${note(url)}`)
    .replace(/<(https?:\/\/[^>\s]+)>/g, (_, url) => (internal(url) ? 'the website' : `the website${note(url)}`));
}

// Links between pages are for readers of the website. In this document, a link to a page or a
// section that is in the document becomes a cross-reference: a jump to its heading, with no
// footnote. Other links between pages, and the glossary links on first mention, keep only their
// text. Headings get identifiers made from the page and the website's anchor, so that the links
// find them.
const slugger = (text) => text.trim().toLowerCase().replace(/[^\p{L}\p{N}\s_-]/gu, '').replace(/\s/g, '-');
// Word bookmarks hold at most 40 characters, so pages get short identifiers: p1, p2, …
const pageId = (slug) => `p${[...exportedSlugs].indexOf(slug) + 1}`;
function crossReferences(page, body) {
  const here = pageId(page.data.slug);
  body = body.replace(/^(#{2,6})\s+(.*?)(?:\s*\{#([^}]+)\})?\s*$/gm, (_, hashes, text, id) =>
    `${hashes} ${text} {#${here}--${id ?? slugger(text.replace(/[*_`]/g, ''))}}`);
  return body.replace(/(?<!!)\[([^\]]+)\]\((\/[^)\s#]*)?(?:#([^)\s]+))?\)/g, (all, label, target, anchor) => {
    if (!target && !anchor) return all;
    const slug = target ? target.replace(/\/$/, '') || '/' : page.data.slug;
    if (slug === '/glossary' || !exportedSlugs.has(slug)) return label;
    return `[${label}](#${pageId(slug)}${anchor ? `--${anchor}` : ''})`;
  });
}

// References to the governance and to sources are kept, but small and grey, and adjacent
// governance references are merged: "DG VII.2.3, VII.2.4" instead of two references.
const reference = (text) => `[${text.replace(/[[\]]/g, (c) => `\\${c}`)}]{custom-style="Reference"}`;

// Pandoc gives every column of a Markdown table the same width. Here each column gets a width
// that follows the length of its text, so that short columns don't waste space.
function fitTables(text) {
  return text.replace(/((?:^\|.*\|[ \t]*\n){1})(^\|[ \t:|-]+\|[ \t]*\n)((?:^\|.*\|[ \t]*(?:\n|$))+)/gm, (all, head, sep, body) => {
    const cells = (line) => line.trim().replace(/^\||\|$/g, '').split(/(?<!\\)\|/);
    const rows = [head, ...body.trimEnd().split('\n')].map(cells);
    const n = cells(sep).length;
    if (rows.some((r) => r.length !== n)) return all;
    const weight = Array.from({length: n}, (_, i) =>
      Math.sqrt(Math.max(8, rows.reduce((sum, r) => sum + r[i].trim().length, 0) / rows.length)));
    const total = weight.reduce((a, b) => a + b, 0);
    const dashes = weight.map((w) => '-'.repeat(Math.max(10, Math.round((w / total) * 100))));
    return head + '|' + dashes.join('|') + '|\n' + body;
  });
}

// "General Data Protection Regulation (Regulation (EU) 2016/679)" → "General Data Protection
// Regulation"; other brackets become commas, so that meanings don't nest brackets.
function shortMeaning(meaning) {
  return meaning
    .replace(/\s*\((?:Regulation|Directive|Decision|GDPR|EHDS)\b[^()]*(?:\([^()]*\)[^()]*)*\)/g, '')
    .replace(/\s*\(([^()]*)\)/g, ', $1')
    .trim();
}

// Sentences about how the website works (links, tooltips, enlarging a diagram) are not true in
// Word: they are dropped or reworded here. The pages keep them.
const WEBSITE_ONLY = [
  [/\s*\(select it to open it full size\)/g, ''],
  [/\s*Each term links to its definition in the \[glossary\]\(\/glossary\) the first time it appears\./g, ''],
  [/\s*On other pages, the first mention of each term links to its entry here\./g, ''],
  [/On other pages, the first use of each acronym links to this table, with its meaning as a tooltip\./g,
    'On other pages, the meaning of an acronym follows its first use.'],
  [/The last column links to the pages that answer them;/g, 'The last column names the pages that answer them;'],
];
const websiteOnly = (text) => WEBSITE_ONLY.reduce((t, [re, to]) => t.replace(re, to), text);

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
  body = body.replace(/<GovRef id="([^"]+)"\s+long\s*\/>/g, (_, id) => `DG ${id} — ${govById.get(id)?.title ?? ''}`);
  body = body.replace(/<GovRef id="[^"]+"\s*\/>(?:\s*<GovRef id="[^"]+"\s*\/>)*/g, (run) =>
    reference(`DG ${[...run.matchAll(/id="([^"]+)"/g)].map((m) => m[1]).join(', ')}`));
  body = body.replace(/<Cite id="([^"]+)"\s*\/>/g, (_, id) => {
    cited.add(id);
    return reference(`[${srcById.get(id)?.short ?? id}]`);
  });
  // On the website an acronym shows its meaning as a tooltip. Here the meaning follows the first
  // use, without the legal reference, unless the text around it already spells it out. The glossary
  // has the acronym table, and quotes definitions word for word, so it gets no meanings in its text.
  const isGlossary = page.data.slug === '/glossary';
  body = body.replace(/<Acronym id="([^"]+)"\s*(?:\/>|>([^<]*)<\/Acronym>)/g, (_, id, text, offset, all) => {
    const shown = text ?? id;
    const a = acrById.get(id);
    if (!a || isGlossary || seenAcronyms.has(id)) return shown;
    seenAcronyms.add(id);
    const meaning = shortMeaning(a.meaning);
    const near = (all.slice(Math.max(0, offset - 120), offset) + ' ' + all.slice(offset, offset + 160)).toLowerCase();
    const after = all.slice(offset).replace(/^<Acronym[^>]*>(?:[^<]*<\/Acronym>)?/, '').trimStart();
    const opening = meaning.toLowerCase().split(/\s+/).slice(0, 3).join(' ');
    if (after.startsWith('(') || near.includes(opening)) return shown;
    // "QM in healthcare", "GDI project": the words after the acronym end its meaning already.
    for (const k of [3, 2, 1]) {
      const tail = after.split(/\s+/).slice(0, k).join(' ').replace(/[.,;:]$/, '').toLowerCase();
      if (tail && meaning.toLowerCase().endsWith(` ${tail}`)) return `${shown} (${meaning.slice(0, -tail.length).trim()})`;
    }
    return `${shown} (${meaning})`;
  });
  body = body.replace(/<AcronymTable\s*\/>/g, () =>
    `| Acronym | Meaning |\n|---|---|\n${acronyms.map((a) => `| ${a.id} | ${a.meaning} |`).join('\n')}`);
  body = body.replace(/<([A-Z]\w+)\s*\/>/g, (_, name) => `*[${name}: generated table, see the website]*`);
  body = websiteOnly(body);
  body = crossReferences(page, body);
  body = body.replace(/<Diagram\s+src="([^"]+)"[^>]*\/>/g, (_, src) => `![](${diagram(src)}){width=100%}`);
  body = body.replace(/\b(chapter 11)(?:(?:,| and) chapter 11)+/g, '$1');
  return fitTables(footnoteLinks(body.trim()));
}

const label = opts.wave ? `Wave ${opts.wave}` : 'Selected pages';
const round = opts.round ? `, review round ${opts.round}` : '';
const out = path.resolve(ROOT, opts.out ?? path.join('exports', `${label.toLowerCase().replace(/\s+/g, '-')}${opts.round ? `-round-${opts.round}` : ''}-${sha}.docx`));
fs.mkdirSync(path.dirname(out), {recursive: true});

const people = (list) => [...new Set(list.filter(Boolean))].join(', ');
const owners = people(pages.map((p) => p.data.owner));
const reviewers = people(pages.flatMap((p) => p.data.reviewers ?? []));
const prUrl = opts.pr ? `https://github.com/GenomicDataInfrastructure/system-architecture/pull/${opts.pr}` : '';
// The project table and the log of changes copy the look of the GDI template's tables: shaded,
// right-aligned labels and blue rules. They are written as Word XML, because Markdown tables
// take one table style for all.
const xml = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const rule = (side, val = 'dotted') => `<w:${side} w:val="${val}" w:sz="8" w:space="0" w:color="4b9bd9"/>`;
const cellLabel = (text, align = 'right') =>
  `<w:p><w:pPr><w:spacing w:after="0" w:line="240" w:lineRule="auto"/><w:jc w:val="${align}"/></w:pPr><w:r><w:rPr><w:b/><w:color w:val="656598"/></w:rPr><w:t xml:space="preserve">${xml(text)}</w:t></w:r></w:p>`;
const cellValue = (text) =>
  `<w:p><w:pPr><w:spacing w:after="0" w:line="240" w:lineRule="auto"/></w:pPr><w:r><w:t xml:space="preserve">${xml(text)}</w:t></w:r></w:p>`;
const cell = (width, content, {shade = false, borders = ''} = {}) =>
  `<w:tc><w:tcPr><w:tcW w:w="${width}" w:type="dxa"/><w:tcBorders>${borders}</w:tcBorders>${shade ? '<w:shd w:val="clear" w:fill="c2d5f0"/>' : ''}<w:tcMar><w:top w:w="80" w:type="dxa"/><w:left w:w="80" w:type="dxa"/><w:bottom w:w="80" w:type="dxa"/><w:right w:w="80" w:type="dxa"/></w:tcMar></w:tcPr>${content}</w:tc>`;
const table = (widths, rows) =>
  '```{=openxml}\n<w:tbl><w:tblPr><w:tblW w:w="' + widths.reduce((a, b) => a + b, 0) + '" w:type="dxa"/><w:tblLayout w:type="fixed"/></w:tblPr><w:tblGrid>' +
  widths.map((w) => `<w:gridCol w:w="${w}"/>`).join('') + '</w:tblGrid>' + rows.map((r) => `<w:tr>${r}</w:tr>`).join('') + '</w:tbl>\n```';
const projectTable = (rows) =>
  table([3000, 6000], rows.map(([k, v]) =>
    cell(3000, cellLabel(k), {shade: true, borders: rule('top') + rule('bottom') + rule('right', 'single')}) +
    cell(6000, cellValue(v), {borders: rule('top') + rule('bottom') + rule('left', 'single')})));
const logTable = (rows) => {
  const widths = [1500, 1300, 2700, 3500];
  const head = ['Date', 'Version', 'Who', 'Description'].map((h, i) => cell(widths[i], cellLabel(h, i ? 'left' : 'right'))).join('');
  return table(widths, [head, ...rows.map((r) => r.map((v, i) =>
    cell(widths[i], i ? cellValue(v) : cellLabel(v), {shade: i === 0, borders: rule('bottom') + (i === 1 ? rule('left', 'single') : '')})).join(''))]);
};
const subtitle = (text) => `::: {custom-style="Subtitle"}\n${text}\n:::`;

const tocField = '```{=openxml}\n<w:p><w:pPr><w:pStyle w:val="Subtitle"/><w:pageBreakBefore/></w:pPr><w:r><w:t>Table of contents</w:t></w:r></w:p><w:p><w:r><w:fldChar w:fldCharType="begin" w:dirty="true"/></w:r><w:r><w:instrText xml:space="preserve"> TOC \\o "1-1" \\h \\z \\u </w:instrText></w:r><w:r><w:fldChar w:fldCharType="separate"/></w:r><w:r><w:t>Right-click and choose Update Field to show the contents.</w:t></w:r><w:r><w:fldChar w:fldCharType="end"/></w:r></w:p>\n```';

const parts = [];
parts.push(`---
title: "Genome EDIC system architecture"
subtitle: "${label}${round}: version ${sha} of ${commitDate}, for review"
---

${projectTable([
  ['Project title', 'Genomic Data Infrastructure, grant agreement 101081813'],
  ['Project acronym', 'GDI'],
  ['Document', `Genome EDIC system architecture: ${label.toLowerCase()}${round}`],
  ['Version', `${sha} of ${commitDate}${opts.pr ? `, pull request #${opts.pr}` : ''}`],
  ['Status', 'For review'],
  ['Authors', owners || 'none named'],
  ['Reviewers', reviewers || 'none named'],
])}

${subtitle('Log of changes')}

${logTable([[commitDate, sha, owners || '–', `${label}, version for ${opts.round ? `review round ${opts.round}` : 'review'}`]])}

${tocField}

# How to review this document

This document holds ${opts.wave ? `wave ${opts.wave} of the Genome EDIC system architecture` : 'pages of the Genome EDIC system architecture'}, exactly as on its website at version **${sha}** (${commitDate})${opts.pr ? `, pull request #${opts.pr}^[${prUrl}]` : ''}. Your comments are matched to this version.

- **Your pages.** Comment on the pages assigned to you in the table below; read the others for context. A *specialist* reviewer checks a page against their own field: legal, data protection, security or ethical, legal and societal aspects.
- **What to check.** Is the page correct: does it match the governance and the law? Is anything missing that your community needs? Is it clear to a reader outside the project? The full review checklists are in the taskforce handbook.^[${SITE}/handbook/review-checklists]
- **How to comment.** Use Word comments, or suggest wording with *Track changes*. Please don't restructure the document: the pages are edited on the website, not here. Google Docs works too: upload the file to Google Drive, open it with Google Docs, and download it again as a Word file.
- **By when, and to whom.** Send the file back${opts.due ? ` by **${opts.due}**` : ''} to ${opts.contact ?? 'the architecture lead'}. If you have no comments, reply "no comments": the round closes only when every reviewer has answered.
- **References.** "DG VII.5.4" is a section of the 1+MG Data Governance (version 2025-12, annex of GDI D2.4); names in square brackets, such as [GDI D3.4], are sources, listed at the end. A mention of another page of this document is a cross-reference: Ctrl-click it to go there. Pages mentioned but not in this document, such as 8.12 or chapter 11, are on the website or still to be written.

| Page | Reviewers |
|---|---|
${pages.map((p) => `| ${p.data.title} | ${(p.data.reviewers ?? []).join(', ') || 'none named'} |`).join('\n')}
`);

for (const p of pages) {
  const reviewers = (p.data.reviewers ?? []).join(', ') || 'none named';
  parts.push(`\n# ${p.data.title} {#${pageId(p.data.slug)}}\n\n*Reviewers: ${reviewers} · on the website*^[${site}${p.data.slug ?? ''}]\n\n${toMarkdown(p)}\n`);
}

if (cited.size) {
  parts.push(`\n# References\n\n${[...cited]
    .map((id) => srcById.get(id))
    .filter(Boolean)
    .sort((a, b) => a.short.localeCompare(b.short))
    .map((s) => `- **[${s.short}]** ${s.title}. ${s.url ?? ''}`)
    .join('\n')}\n`);
}

const md = path.join(tmp, 'export.md');
fs.writeFileSync(md, parts.join('\n'));
execFileSync(pandoc, ['-f', 'markdown', '-t', 'docx', `--resource-path=${tmp}`, `--reference-doc=${path.join(ROOT, 'scripts/export-docx-reference.docx')}`, '-o', out, md], {stdio: 'inherit'});
console.log(`export-docx: ${pages.length} pages, version ${sha} → ${path.relative(ROOT, out)}${drawio ? '' : ' (diagrams as SVG: draw.io not found)'}`);
