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

- Docusaurus site with the arc42 structure for the Genome EDIC system architecture: twelve chapters (placeholders), chapters 5 and 7 split into European, national and local scopes.
- Reader guides for policy makers, legal experts, ELSI specialists, security advisors, data protection officers and implementers.
- Glossary based on the definitions of the 1+MG Data Governance.
- Governance section catalogue, generated traceability matrix, document status page and source register.
- Review tooling: page front matter validation, pull request and issue templates, CI and GitHub Pages deployment.
- GitHub set-up script (`scripts/github/setup.mjs`): labels, one issue per page, branch protection.
- Taskforce handbook: writing order in six waves (with generated progress per wave), page choreography, page recipes, sources and examples, review checklists.
- `wave` field on every page, shown in the page header and the document status table.

### Removed

- Docker image, placeholder `index.html` and Docker publishing workflows from the OSS project template (not used by a documentation site).
