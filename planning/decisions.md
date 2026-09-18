# Documentation decisions and open questions

Log decisions about how we write and organise the architecture documentation (not architecture decisions about the system; those go in chapter 9 as ADRs).

Format: `D-NNN | date | decision | decided by | reason`

## Decisions
- D-001 | 2026-09-18 | Use the arc42 template | Taskforce (B. Pacheco) | Requested template; well known to implementers.
- D-002 | 2026-09-18 | Publish with Docusaurus on GitHub Pages | Taskforce (B. Pacheco) | Static site, versioned, reviewable through pull requests.
- D-003 | 2026-09-18 | Track authorship and review in GitHub: page front matter, CODEOWNERS, branch protection, PR template, Project board, tagged releases | Proposed, to confirm | No extra tool; approvals are timestamped and attributable.
- D-004 | 2026-09-18 | Keep planning context in `planning/` and `AGENTS.md` in the repository | B. Pacheco | Context must survive across chat sessions and new taskforce members; `AGENTS.md` keeps the repository AI-tool agnostic.
- D-005 | 2026-09-18 | Structure: one top-level arc42; chapters 5 and 7 split into European, national and local scopes; each Member Country fills in a national implementation profile | B. Pacheco | Answers Q-001. Easiest to read and keep consistent; respects implementation freedom.
- D-006 | 2026-09-18 | Describe the Genome EDIC target state for all four uses (research, policy development, QM in healthcare, healthcare reuse); flag what the GDI MVP already delivers | B. Pacheco | Answers Q-002.
- D-007 | 2026-09-18 | Components are technology-neutral (functions, interfaces, standards), mapped to the GDI Starter Kit as reference implementation | B. Pacheco | Answers Q-007. Keeps national implementation freedom.
- D-008 | 2026-09-18 | Cite the draft HealthData@EU implementing regulation openly, labelled as a Commission draft | B. Pacheco | Answers Q-004. Its text is not copied into the repository.
- D-009 | 2026-09-18 | Traceability is generated: pages list governance section IDs in `governance_refs`; the site builds the traceability matrix and document status page from front matter; `npm run check` validates it in CI | B. Pacheco (Phase 0) | One source of truth; no hand-maintained matrix.
- D-010 | 2026-09-18 | Publish in the public repository GenomicDataInfrastructure/system-architecture (GitHub Pages: genomicdatainfrastructure.github.io/system-architecture); keep the GDI OSS template's REUSE licensing (docs CC-BY-4.0, code Apache-2.0) and code of conduct; drop its Docker files and workflows | B. Pacheco | Answers Q-005. Follows GDI open-source practice.
- D-011 | 2026-09-18 | Track roles and responsibilities only with GitHub issues (one per page; assignee = owner; reviewers named in the issue and requested on the pull request) and the page front matter (`owner`, `reviewers`, `status`, `last_reviewed`). No CODEOWNERS, review teams or Project board for now; `main` requires one approval and passing CI | B. Pacheco | Replaces the CODEOWNERS and Project board parts of D-003; simpler for a small taskforce. Can be revisited when the taskforce grows.

## Open questions
- Q-003: Is the governance master document (2025-12-22, "for voting") final, and is there a public URL or DOI to link to?
- Q-006: How familiar are taskforce authors with Git and GitHub?
- Q-008: Which GDI / B1MG / B1MG+ deliverables are priority sources (Zenodo community listings cannot be fetched automatically)?
