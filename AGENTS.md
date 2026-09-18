# Genome EDIC System Architecture — guide for contributors and coding agents

Read this first. It tells you what this repository is, where the plan lives and which rules to follow. It applies to human authors and to any AI assistant or coding agent working in this repository; the repository does not depend on a specific AI tool.

## What this repository is
The Genome EDIC system architecture, written with the arc42 template and published as a Docusaurus site on GitHub Pages. It must:
- respect the 1+MG Data Governance (Genome EDIC Secondary Use Framework, master document version 2025-12-22);
- implement data protection by design and by default (GDPR Art. 25);
- cover three scopes: European (Genome EDIC CC), national (1+MG NCP node) and local (1+MG Data Provider / Data Host).

Primary audience: implementers. Also read by ministries, legal experts, ELSI specialists, security advisors and DPOs, so write in plain, direct language.

## Where the context lives
| File | What it holds | Update when |
|---|---|---|
| `planning/architecture-plan.md` | Agreed structure, chapter outline, sources, tooling, phases | The plan changes |
| `planning/decisions.md` | Decisions about the documentation itself, and open questions | A decision is taken or a question is raised |
| `planning/session-log.md` | Short handover notes: what was done, what is next | At the end of every working session |
| `CONTRIBUTING.md` | Review workflow, front matter, writing rules, GitHub set-up | The workflow changes |
| `docs/` | The published architecture (arc42 chapters, reader guides, appendices) | Normal writing work |
| `src/data/governance.json` | Catalogue of governance sections (IDs for `governance_refs` and `<GovRef>`) | The governance document changes |
| `src/data/sources.json` | Source register (IDs for `<Cite>`) | A new source is cited |

Files outside `docs/` are not published on the site.

## Commands
- `npm start` — live preview.
- `npm run check` — validate front matter of all pages (run before every commit).
- `npm run build` — build the site; fails on broken links or anchors.

## Rules for writing
1. Every page has front matter: `title`, `slug`, `owner`, `reviewers`, `status`, `audience`, `governance_refs`, `last_reviewed`. The metadata box at the top of the page is generated from it; do not write it by hand.
2. Every page opens with `<InShort>` (at most three plain-language bullets).
3. Cite governance sections as `<GovRef id="VII.2.3" />` (Roman section numbers from the governance master document) and list them in `governance_refs`. This feeds the traceability page.
4. Cite other sources as `<Cite id="gdi-d3.4" />` and add new ones to `src/data/sources.json`.
5. Use the governance definitions word for word (e.g. "1+MG Data Holder", "Genome EDIC CC", "key-coded identifier", not "pseudonym"). See the glossary (chapter 12).
6. Short sentences, active voice, one idea per paragraph. Explain every acronym on first use.
7. Describe components by function, interfaces and standards; name products only as examples or in the GDI Starter Kit reference mapping (decision D-007).
8. The architecture describes the Genome EDIC target state for all four uses (research, policy development, QM in healthcare, healthcare reuse); flag what the GDI MVP already delivers (decision D-006).

## Things to be careful with
- The HealthData@EU implementing regulation is a Commission **draft** (Ref. Ares(2026)8339104). Cite it as a draft with `<Cite id="hdeu-ia-draft" />` (decision D-008). Do not copy its text into this repository.
- The governance master document is **not public** (decision D-012). Cite it by section number with `<GovRef>`, summarise in your own words, and quote only short passages with attribution (e.g. glossary definitions). Never copy long passages.
- Governance items marked "under discussion" (cyan) in the master document are open. Flag them in chapter 11 (Risks) and do not present them as settled.
- Do not change a page's `status` to `approved` yourself; only a reviewer does that, in a pull request.
