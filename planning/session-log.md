# Session log

Newest first. Keep each entry to a few lines: what was done, what is next, where things are.

## 2026-09-25 — 8.12 merged, glossary links (B. Pacheco with Claude)
- #87 merged (8.12 *Types of dataset*, `<Term>`, D-021); issue #88 created for 8.12; #84 rebased on `main`. In 3.3 (#84) the types of dataset link to 8.12, SPE, ELSI and GDI use `<Term>`, and the first mention of each glossary term links to its entry (18 links).
- Branch `glossary-links-rule`: decided D-022 (link the first mention of each glossary term on a page; `<Term>` renamed `<Acronym>`, for acronyms only; broken anchors fail the build). Rule texts updated; 8.12 follows the rule.
- Next: once `glossary-links-rule` is merged, rebase #84 and switch its three `<Term>` to `<Acronym>` (`npm run check` points to them). Then the kick-off meeting, as below.

## 2026-09-25 — Ways of working merged, 3.3 reader-tested, kick-off deck (B. Pacheco with Claude)
- 3.3: step 5 done (comparable infrastructures: Federated EGA, ELIXIR, HealthData@EU; C4 system landscape) and noted on #13 with the scope note and sources; `needs-legal` added. Reader test run twice with a reader without context; fixes committed in #84 (dataset types defined, controller named per phase, "the Member Country chooses the type" marked as proposed, acronyms linked to the glossary, "1+MG" added to the glossary). #13 steps 1 and 4–8 ticked.
- Open point of ADR-0002 (who chooses the type of a dataset) tracked in #85 and listed in chapter 11. Set-up script: refreshing issue text keeps ticked steps.
- Decided D-020 "interfaces first" (refines D-007): components described by function, interfaces and standards; the GDI Starter Kit and GDI central services named as reference implementation; countries may use other tools that meet the same interfaces.
- PR #84 split: the ways of working (D-019, D-020, `<Diagram>` and checks, `npm run diagrams`, set-up script, chapter 11 line) went to #86, merged; `main` merged into #84, which now holds only page 3.3, its diagram and the 3.1/3.2 questions (draft, waiting for reviewers).
- Kick-off deck `TF Architecture Kick-off.pptx` (16 slides, GDI template): why, the plan, five principles, six waves, the four-stage page workflow (to agree), roles, three cadence options, the review meeting, seven questions for the meeting, next steps.
- Started branch `terms-and-dataset-types`: concept page 8.12 *Types of dataset* (draft, wave 2); `<Term>` component with `src/data/acronyms.json` generating the glossary's acronym table; decided D-021 (link the first use of each acronym on a page to the glossary). When #84 is merged, its "1+MG" row in the glossary table conflicts with the generated table: keep the generated one ("1+MG" is in `acronyms.json`).
- Next: the kick-off meeting (cadence, decision rights, page workflow, milestones, wave 1 owners and reviewers, Pillars I–III); then reviewers for 3.3 and ADR-0002; after merging 8.12, run `setup.mjs issues` to create its issue and switch the 3.3 glossary links to 8.12; adapt the ways of working to the meeting's decisions.

## 2026-09-24 — Page 3.3 drafted (B. Pacheco with Claude)
- Issue housekeeping after #80 done (renames, labels, new issues #81–#83). Page 3.3 drafted (owner B. Pacheco, issue #13): three scopes, actor-to-scope table, why no local scope, dataset type × phase matrix, IT infrastructure provider as a role, scopes vs deployment levels. Draft pull request open; no reviewers yet.
- Diagrams: the Mermaid scope diagram (hard to read in dark mode and at small sizes) is replaced by a draw.io diagram in C4 notation (`static/diagrams/3.3-scopes.drawio.svg`, white frame, legend with section and last edit), shown with the new `<Diagram>` component. 3.1 and 3.2 questions sharpened: 3.1 = black box and what crosses the boundary, 3.2 = channels and standards; 3.3 = who is responsible inside.
- Decided D-019 (diagram rules): draw.io `.drawio.svg`, notation per diagram (C4 by default), white background, legend with section and *Last edited*, one colour per scope, no shared template, no Mermaid in architecture pages. New handbook page *Diagrams*; `npm run diagrams` re-exports in light colours (the draw.io app saves adaptive colours by default); `npm run check` checks diagrams. The 3.3 diagram now has no grey border (B. Pacheco also aligned the legend).
- Next: step 5 for 3.3; reviewers; reader test.

## 2026-09-24 — Scopes restructured (B. Pacheco with Claude)
- Decided D-018: scopes of responsibility European, national, User Organisation; no local scope; chapter 7 by IT level (central, national, local). ADR-0002 (proposed): the Member Country decides whether its data are 1+MG compliant (national 1+MG Data Holder decides) or 1+MG cohort data (Genome EDIC decides); the system supports both paths per dataset, plus externally governed datasets.
- Done: 5.3.x pages moved to 5.2.5–5.2.7; new 5.3 User Organisation scope and 5.3.1; 7.1 renamed Central deployment; governance scope tags, glossary, reader guides, handbook, script and plan updated.
- Types of dataset made visible: 3.3 matrix question, per-type questions on 1.1, 5.1.1, 5.1.2, 5.2.2 (renamed Access review and decision support), 6.1, 6.2.1, 6.2.3, 6.2.4, 6.3.1, 8.2, 8.6, 8.10; recipes and review checklist; guide questions; "Applies to" column in the traceability table; ADRs no longer count as coverage.
- Next, after merge: rename the GitHub issues of moved or renamed pages (3.3, 5.2.2, 5.2.5–5.2.7, 7.1), close the issue of the old 5.3 Local scope, create the `scope-user-organisation` label, relabel and delete `scope-local`, run `setup.mjs issues` for the new pages; then draft 3.3 (owner: B. Pacheco).

## 2026-09-24 — Published governance (B. Pacheco with Claude)
- The governance is published as the annex of GDI D2.4 (https://zenodo.org/records/19096953, version 2025-12, CC BY 4.0). Decided D-016 (replaces D-012).
- Done: `governance.json` rebuilt against the published document (133 numbered sections, no page numbers; overview printed as "I." keeps ID IV); titles updated; `dg` source points to Zenodo; glossary aligned word for word; page numbers removed from `<GovRef>` and the traceability table; AGENTS.md, handbook, plan and chapter 11 updated. All existing `governance_refs` IDs are unchanged and valid. The published text has no cyan "under discussion" marking; open points are named in III, VII.3.3, VII.4.3, VII.5.3, VIII.11.1.
- Draft HealthData@EU implementing act: now cited through its public Have your say page (initiative 16155), decision D-017; source register, AGENTS.md, handbook and plan updated.
- Changelog split into `[0.1.0]` (what `v0.1` shipped) and `[0.2.0]` (handbook, waves, published governance).
- Tagged `v0.2` (signed) on `main`; published GitHub releases for `v0.1` and `v0.2`; deleted the merged branches.
- The one-off GitHub set-up is complete, so `planning/github-setup.md` is removed. Page issues (searches, creating issues for new pages) and the release steps are now in `CONTRIBUTING.md`.
- Next: assign owners for wave 1; start writing 3.3.

## 2026-09-18 — Writing order and taskforce handbook (B. Pacheco with Claude)
- Decided D-015: six writing waves; handbook for authors and reviewers.
- Done: `wave` field on all 76 pages (wave 1: 3.3, 3.1, 1.3, 2.2, 12); `src/data/waves.json`; handbook (`docs/handbook/`: writing order with generated progress, 11-step page choreography, recipes per kind of page, sources and examples, review checklists); issues now carry `wave-N` labels and link to the choreography and the matching recipe.
- Next: run `labels` and `issues` again (adds wave labels); assign owners for wave 1; start writing 3.3.

## 2026-09-18 — Open questions closed (B. Pacheco with Claude)
- Decided D-012 (governance document not public, cite by section and summarise), D-013 (authors use Git/PRs), D-014 (sources chosen per chapter). No open questions left.
- Next: run the GitHub set-up script; start writing chapter 3.3.

## 2026-09-18 — GitHub set-up simplified (B. Pacheco with Claude)
- Decided D-011: roles tracked only in GitHub issues (assignee = owner) and page front matter; CODEOWNERS, teams and Project board dropped.
- Done: removed `.github/CODEOWNERS`; `scripts/github/setup.mjs` now only creates labels, one issue per page, and the branch rule (one approval + CI); guide, CONTRIBUTING, CHANGELOG and plan updated.
- Next: run `labels`, `issues`, `protect`; tag v0.1; start writing chapter 3.3.

## 2026-09-18 — GitHub set-up prepared (B. Pacheco with Claude)
- Site published at https://genomicdatainfrastructure.github.io/system-architecture/.
- Done: CODEOWNERS switched to GitHub teams (`sysarch-*`); `scripts/github/setup.mjs` creates labels, the "System architecture" Project, one issue per page and the branch rule on `main`; step-by-step guide and request to org owners in `planning/github-setup.md`.
- Next: send the team request to the org owners; run the set-up script; tag v0.1; then start writing chapter 3.3.

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
