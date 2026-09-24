<!--
SPDX-FileCopyrightText: 2024 PNED G.I.E.

SPDX-License-Identifier: CC-BY-4.0
-->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
