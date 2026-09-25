# Genome EDIC System Architecture — guide for contributors and coding agents

Read this first. It tells you what this repository is, where the plan lives and which rules to follow. It applies to human authors and to any AI assistant or coding agent working in this repository; the repository does not depend on a specific AI tool.

## What this repository is
The Genome EDIC system architecture, written with the arc42 template and published as a Docusaurus site on GitHub Pages. It must:
- respect the 1+MG Data Governance (Genome EDIC Secondary Use Framework, master document version 2025-12, published as the annex of GDI D2.4: https://zenodo.org/records/19096953);
- implement data protection by design and by default (GDPR Art. 25);
- cover three scopes of responsibility: European (Genome EDIC), national (Genome EDIC Member Country: 1+MG NCP, 1+MG Data Holders, 1+MG Data Providers, 1+MG Data Hosts, Local DACs) and User Organisation (the User Organisation and its Users). Deployment is described at central, national and local level (decision D-018).

Primary audience: implementers. Also read by ministries, legal experts, ELSI specialists, security advisors and DPOs, so write in plain, direct language.

## Where the context lives
| File | What it holds | Update when |
|---|---|---|
| `planning/architecture-plan.md` | Agreed structure, chapter outline, sources, tooling, phases | The plan changes |
| `planning/decisions.md` | Decisions about the documentation itself, and open questions | A decision is taken or a question is raised |
| `planning/session-log.md` | Short handover notes: what was done, what is next | At the end of every working session |
| `CONTRIBUTING.md` | Review workflow, front matter, writing rules, page issues, releases | The workflow changes |
| `docs/handbook/` | Taskforce handbook: writing order (waves), page choreography, page recipes, sources, review checklists | The way we write changes |
| `src/data/waves.json` | The six writing waves (the `wave` field of each page refers to them) | The writing order changes |
| `docs/` | The published architecture (arc42 chapters, reader guides, appendices) | Normal writing work |
| `src/data/governance.json` | Catalogue of governance sections (IDs for `governance_refs` and `<GovRef>`) | The governance document changes |
| `src/data/sources.json` | Source register (IDs for `<Cite>`) | A new source is cited |
| `src/data/acronyms.json` | Acronyms and their meaning (IDs for `<Term>`; generates the glossary's acronym table) | A new acronym is used |
| `static/diagrams/` | Diagrams (draw.io, `.drawio.svg`), shown with `<Diagram>`; rules in `docs/handbook/diagrams.md` | A diagram is added or changed |

Files outside `docs/` are not published on the site.

## Commands
- `npm start` — live preview.
- `npm run check` — validate front matter of all pages (run before every commit).
- `npm run build` — build the site; fails on broken links or anchors.
- `npm run diagrams` — re-export the draw.io diagrams in `static/diagrams/` (light colours, editable copy embedded); run it after editing a diagram. Needs the draw.io desktop app.

## Rules for writing

When you help write a page, follow the steps in `docs/handbook/choreography.md` and the matching recipe in `docs/handbook/recipes.md`.

1. Every page has front matter: `title`, `slug`, `owner`, `reviewers`, `status`, `wave`, `audience`, `governance_refs`, `last_reviewed`. The metadata box at the top of the page is generated from it; do not write it by hand.
2. Every page opens with `<InShort>` (at most three plain-language bullets).
3. Cite governance sections as `<GovRef id="VII.2.3" />` (Roman section numbers from the governance master document, never page numbers) and list them in `governance_refs`. This feeds the traceability page.
4. Cite other sources as `<Cite id="gdi-d3.4" />` and add new ones to `src/data/sources.json`.
5. Use the governance definitions word for word (e.g. "1+MG Data Holder", "Genome EDIC CC", "key-coded identifier", not "pseudonym"). See the glossary (chapter 12).
6. Short sentences, active voice, one idea per paragraph. Link the first use of each acronym on a page to the glossary with `<Term id="SPE" />` (tooltip with its meaning); add new acronyms to `src/data/acronyms.json` (decision D-021). Acronyms inside a governance term ("1+MG Data Holder", "Genome EDIC CC") are covered by the term's glossary entry.
7. Interfaces first: describe each component by its function, interfaces and standards, then name its reference implementation (the GDI Starter Kit component for national nodes, or the GDI central service for the European scope). Say that a Member Country may use other tools that meet the same interfaces (governance II.2; decisions D-007, D-020).
8. The architecture describes the Genome EDIC target state for all four uses (research, policy development, QM in healthcare, healthcare reuse); flag what the GDI MVP already delivers (decision D-006).
9. Diagrams follow `docs/handbook/diagrams.md` (decision D-019): draw.io, saved as `.drawio.svg` in `static/diagrams/` and shown with `<Diagram>`; notation chosen per diagram (C4 by default for structure) and named in the legend; a white background; a legend with the section and *Last edited* date, updated on every edit. No Mermaid in architecture pages.

## Things to be careful with
- The HealthData@EU implementing regulation is a Commission **draft** (Ref. Ares(2026)8339104), published for feedback on the Have your say portal: https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/16155-European-Health-Data-Space-technical-requirements-for-HealthData@EU_en. Cite it as a draft with `<Cite id="hdeu-ia-draft" />` (decisions D-008, D-017). Do not copy its text into this repository; link to it.
- The governance master document is **published** under CC BY 4.0 as the annex of GDI D2.4 (decision D-016). Cite the document with `<Cite id="dg" />` and its sections by number with `<GovRef>`, never by page. Summarise in your own words, and quote only definitions and short passages, with attribution. The published document numbers the overview section as "I."; its ID here is `IV`.
- The published governance has no "under discussion" marking. Where a section says a point is still open (for example "to be discussed" or "still to be clarified"), flag it in chapter 11 (Risks) and do not present it as settled.
- Do not change a page's `status` to `approved` yourself; only a reviewer does that, in a pull request.
