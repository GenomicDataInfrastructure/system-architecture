<!--
SPDX-FileCopyrightText: 2024 PNED G.I.E.

SPDX-License-Identifier: CC-BY-4.0
-->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Concept page 8.12 *Types of dataset*: the three types, the rule, how each lifecycle phase differs per type, where it applies, and the open points.
- `<Acronym>` component (named `<Term>` until decision D-022): the first use of an acronym on a page shows its meaning as a tooltip and links to the glossary. Acronyms live in `src/data/acronyms.json`, which also generates the glossary's acronym table (decision D-021); `npm run check` rejects unknown acronyms. New acronyms: 1+MG, CC, IP.
- `<Diagram>` component for draw.io diagrams saved as `.drawio.svg` in `static/diagrams/` (one file is both the editable source and the image; white background and a legend with section and last edit).
- Diagram rules (decision D-019) in a new handbook page *Diagrams*: draw.io, notation per diagram (C4 by default for structure, UML sequence diagrams for runtime), white background, legend with section and *Last edited* date, one colour per scope.
- Chapter 11 lists the open point of ADR-0002 (who chooses the path per dataset, issue #85).
- `npm run diagrams` re-exports every diagram in light colours with its editable copy embedded. `npm run check` fails when a diagram is missing, has no editable copy, uses colours that change in dark mode, or has no *Last edited* date in its legend.
- ADR-0002: who decides on access for each type of dataset (1+MG compliant, 1+MG cohort, externally governed).
- User Organisation scope in chapter 5: 5.3 User Organisation scope and 5.3.1 User Organisation registration and user management.
- Types of dataset (1+MG compliant, 1+MG cohort, externally governed) made visible: a matrix question in 3.3, a "what differs per type of dataset?" question on the pages where it matters, a heading in the building block and runtime scenario recipes, a review checklist item, and a question in the guides for policy makers and legal experts.
- "Applies to" column on the governance traceability page: the notes in square brackets of the governance titles, with types of dataset highlighted.

### Changed

- Writing rule: the first mention of each glossary term on a page links to its glossary entry, or to the concept page that explains it (decision D-022), in `AGENTS.md`, `CONTRIBUTING.md`, the page choreography, the review checklist and the pull request template. 8.12 follows it.
- `<Term>` is renamed `<Acronym>` and stays for acronyms only (decision D-022); `npm run check` reports any `<Term>` left.
- `npm run build` fails on a link to an anchor that doesn't exist, such as a glossary entry whose heading changed (`onBrokenAnchors: 'throw'`).
- Writing rule: "explain every acronym on first use" becomes "link the first use of each acronym on a page to the glossary" (decision D-021), in `AGENTS.md`, `CONTRIBUTING.md`, the review checklist and the pull request template.
- The recipes and ADR-0002 point to 8.12 for the differences per type of dataset.
- "Technology-neutral" becomes "interfaces first" (decision D-020, refining D-007): components are described by function, interfaces and standards, and the GDI Starter Kit and GDI central services are named as reference implementation. Contributor guides, recipes, review checklists and the chapter 9 list of candidate decisions updated.
- GitHub set-up script: refreshing issue text (`UPDATE_BODIES=1`) keeps the steps already ticked; the count of existing issues is correct.
- Scopes are scopes of responsibility: European, national and User Organisation (decision D-018, replacing the scopes of D-005). The former local scope pages move to the national scope as 5.2.5 to 5.2.7.
- Chapter 7 is split by IT level (central, national, local); 7.1 is renamed "Central deployment".
- Governance section catalogue: scope tags follow the new scopes; sections of the 1+MG IT infrastructure provider apply to the European and national scopes; VIII.4.4 (treating healthcare professionals) moves to the national scope.
- Glossary: new scope terms, and "central, national and local level" for deployment.
- GitHub set-up script: labels `scope-european`, `scope-national` and `scope-user-organisation`, given to chapter 5 pages only.
- 6.2.4, 5.1.2 and 5.2.2 no longer assume that every access decision is taken by a 1+MG Data Holder; 5.2.2 is renamed "Access review and decision support".
- Traceability coverage no longer counts ADRs: they are listed, but only the pages that implement a section count.

### Removed

- The local scope and its overview page (5.3 Local scope).
- `planning/github-setup.md`: the one-off GitHub set-up is complete. How to find and create page issues, and the release steps, are now in `CONTRIBUTING.md`.

## [0.2.0] - 2026-09-24

### Added

- Taskforce handbook: writing order in six waves (with generated progress per wave), page choreography, page recipes, sources and examples, review checklists.
- `wave` field on every page, shown in the page header and the document status table.

### Changed

- GitHub set-up script: page issues get a `wave-N` label and link to the page choreography and the recipe for their kind of page; `UPDATE_BODIES=1` refreshes the text of existing issues.
- The architecture now cites the published 1+MG Data Governance (version 2025-12, annex of GDI D2.4, https://zenodo.org/records/19096953) instead of the draft for voting: section catalogue, source register, glossary, traceability page, handbook and contributor guide (decision D-016).
- Governance cross-references use section numbers only. Page numbers are removed from the section catalogue, the traceability table and the section tooltips.
- Section titles VII.1.4, VII.4.1, VII.4.2, VII.4.3, VII.4.6 and VIII.5.1–VIII.5.4 follow the published document; six glossary definitions are aligned word for word with it.
- Chapter 11 lists the governance sections that say a point is still open, instead of the draft's "under discussion" marking.
- The draft HealthData@EU implementing regulation (Ref. Ares(2026)8339104) now links to its public page on the Commission's Have your say portal (initiative 16155) (decision D-017).

### Removed

- The unnumbered overview headings (former IV.1.1 to IV.4.11) from the governance section catalogue; they have no section number in the published document.
- The separate `gdi-d2.4` source entry; it is the same Zenodo record as `dg`.

## [0.1.0] - 2026-09-18

### Added

- Docusaurus site with the arc42 structure for the Genome EDIC system architecture: twelve chapters (placeholders), chapters 5 and 7 split into European, national and local scopes.
- Reader guides for policy makers, legal experts, ELSI specialists, security advisors, data protection officers and implementers.
- Glossary based on the definitions of the 1+MG Data Governance.
- Governance section catalogue, generated traceability matrix, document status page and source register.
- Review tooling: page front matter validation, pull request and issue templates, CI and GitHub Pages deployment.
- GitHub set-up script (`scripts/github/setup.mjs`): labels, one issue per page, branch protection.

### Removed

- Docker image, placeholder `index.html` and Docker publishing workflows from the OSS project template (not used by a documentation site).

[Unreleased]: https://github.com/GenomicDataInfrastructure/system-architecture/compare/v0.2...HEAD
[0.2.0]: https://github.com/GenomicDataInfrastructure/system-architecture/compare/v0.1...v0.2
[0.1.0]: https://github.com/GenomicDataInfrastructure/system-architecture/releases/tag/v0.1
