# Session log

Newest first. Keep each entry to a few lines: what was done, what is next, where things are.

## 2026-09-18 — Preparing publication on GitHub (B. Pacheco with Claude)
- Done: target set to GenomicDataInfrastructure/system-architecture (D-010); site config, README, CHANGELOG, REUSE.toml, LICENSES, code of conduct and REUSE check workflow added. Merge with the template repository simulated: REUSE compliant, build passes.
- Next: first commit, merge with the remote template (`-X ours`), remove template Docker files, push; enable GitHub Pages (source: GitHub Actions) and branch protection; confirm copyright holder in REUSE.toml.

## 2026-09-18 — Phase 0: Docusaurus skeleton (B. Pacheco with Claude)
- Decided: D-005 to D-009 (structure, target state, technology neutrality, draft IA citation, generated traceability).
- Done: Docusaurus 3.10 site; 12 arc42 chapters as placeholder pages, each listing the questions it must answer and the governance sections to implement; 6 reader guides (draft); glossary from governance section III (draft); ADR-0001 and ADR template; governance section catalogue (155 sections) in `src/data/governance.json`; source register; generated traceability, document status and sources pages; page metadata box; CODEOWNERS, PR and issue templates, CI (check + build) and Pages deploy workflows; README and CONTRIBUTING.
- Next: first commit; GitHub set-up (see CONTRIBUTING, "One-time GitHub set-up"); assign owners per chapter; start writing with chapter 3 (context and scopes) and 8.1/8.2 (data protection by design, controllers and processors). Open questions left: Q-003, Q-005, Q-006, Q-008.

## 2026-09-18 — Plan drafted (B. Pacheco with Claude)
- Done: read the governance master document and the draft HealthData@EU implementing regulation; checked arc42 guidance for large systems (FAQ J-1); found candidate GDI / B1MG / B1MG+ sources; drafted `planning/architecture-plan.md`; created `AGENTS.md` (AI-tool agnostic contributor guide) and moved the files into the repository.
- Next: answer open questions Q-001 to Q-008 in `planning/decisions.md`; then Phase 0 (repository, Docusaurus skeleton, governance ID catalogue, source register).
