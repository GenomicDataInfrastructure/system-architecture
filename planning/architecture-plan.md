# Genome EDIC System Architecture — Plan (draft 0.1, 18 Sep 2026)

Purpose: plan for writing the Genome EDIC system architecture (arc42), published as a Docusaurus site on GitHub, traceable to the 1+MG Data Governance (Genome EDIC Secondary Use Framework, master document version 2025-12, published as the annex of GDI D2.4) and implementing data protection by design and by default (GDPR Art. 25).

## 1. How to organise the scopes (European, national, User Organisation)

arc42 advice for large systems (arc42 FAQ J-1): modularise. Put global goals, business context, solution strategy, principles and crosscutting concepts in one top-level document; document subsystems separately; decisions and requirements cascade downwards.

Recommended structure: **one top-level arc42 + scope views + national profiles**.

- **Top level (shared, one copy):** ch. 1–4, 8–12. Goals, legal constraints, context, strategy, crosscutting concepts (data protection by design and default, security, identity and access, logging, metadata, consent and legal basis, dataset versioning), decisions, quality, risks, glossary.
- **Scope views (ch. 5 split by scope of responsibility, decision D-018):** building block level 1 = the three scopes; level 2 = components in each scope.
  - European scope — what the Genome EDIC is responsible for, operated by the Genome EDIC CC: 1+MG User Portal, central data catalogue, access request management, 1+MG DAC tooling, User Organisation registry, help desk, communication infrastructure, connection to HealthData@EU.
  - National scope — what a Genome EDIC Member Country is responsible for, whichever organisations it assigns the roles to: 1+MG NCP node and national catalogue, access review support for 1+MG Data Holders / Local DACs, national SPE(s), data subject rights and transparency tools, and what 1+MG Data Providers / Data Hosts run (1+MG compliant local IT infrastructure, data transformation, subject-level discovery endpoint, storage and dataset versioning).
  - User Organisation scope — what a User Organisation and its Users must provide: registration, onboarding and offboarding of Users, access requests, review for healthcare reuse.
- **Deployment view (ch. 7) split by IT level:** central, national and local, the levels named in the governance's definition of the 1+MG IT infrastructure provider. The 1+MG IT infrastructure provider is a role that can appear in any scope.
- **Runtime view (ch. 6) organised by the governance lifecycle**, not by technology: Data inclusion (4 steps), Data access (5 steps), Data use (SPE, reaching back, publications, archiving, incidental findings), data subject rights, incidents. Each scenario cites the governance section it implements.
- **National implementation profile (template):** the governance gives countries implementation freedom. Each Member Country documents its own node with a short arc42-canvas-style profile showing how it meets the common requirements.

Why this works for the governance: the governance assigns rights and duties per actor per lifecycle step. Scopes map to actors (Genome EDIC, EDIC CC, 1+MG DAC = European; NCP, Data Holder, Data Provider, Data Host, Local DAC = national; User Organisation, User = User Organisation). Within a country, the Member Country decides which organisation takes which role, so the architecture does not split national from local. The lifecycle maps to the runtime view.

## 2. Making it readable for non-implementers

- **Reader guides** (landing pages per audience): policy makers, legal experts, ELSI specialists, security advisors, DPOs, implementers. Each is a list of the questions that audience asks, each linked to the section that answers it.
- **Fixed page header on every page:** "In short" (3 bullets, plain language), "Who should read this", "Governance requirements implemented here" (links to DG sections).
- **Governance traceability matrix (appendix):** every governance requirement gets an ID (e.g. `DG-VII.2.3`) and points to the architecture sections that implement it; gaps are shown explicitly.
- **Controller/processor map (ch. 8):** for each processing operation, who is controller, joint controller, processor, and which component does the processing.
- **Plain-language style guide:** short sentences, active voice, one idea per paragraph, terms from the governance definitions used verbatim.

## 3. Chapter outline and audience mapping

| arc42 chapter | Content for Genome EDIC | Main audiences |
|---|---|---|
| 1 Introduction and goals | Mission, 4 uses (research, policy, QM, healthcare reuse), top quality goals, stakeholders | All, policy makers |
| 2 Constraints | GDPR, EHDS (Reg. 2025/327), HealthData@EU implementing act (draft), EDIC decision, NIS2, DG principles, national law | Legal, DPO, policy |
| 3 Context and scope | Actors from DG, the three scopes, external systems (HealthData@EU, HDABs, LS Login, EHDS catalogue) | All |
| 4 Solution strategy | Federated, data stays in country, one-stop shop, virtual cohort, no download of personal data, DPbDD strategy | All |
| 5 Building block view | Level 1 scopes, level 2 components per scope | Implementers, security |
| 6 Runtime view | Lifecycle scenarios with DG references | Implementers, legal, ELSI, DPO |
| 7 Deployment view | Central hosting, national deployment patterns, local hosting (by IT level) | Implementers, security |
| 8 Crosscutting concepts | DPbDD, security/ISMS, AAI, logging and audit, consent and legal basis, key-coded identifiers, output control, dataset versioning, metadata, controller/processor map | DPO, security, ELSI |
| 9 Architecture decisions | ADRs (e.g. decentralised access decision, consent as legal basis, federation vs pooling) | Policy, implementers |
| 10 Quality requirements | Quality tree and scenarios (privacy, security, interoperability, scalability) | Security, implementers |
| 11 Risks and technical debt | Open DG items, EHDS dependencies, national readiness | Policy, all |
| 12 Glossary | DG definitions reused | All |
| Appendices | Traceability matrix, source register, national profile template | Legal, DPO, NCPs |

## 4. Sources (candidates, to confirm)

- 1+MG Data Governance master document, version 2025-12, published as the annex of GDI D2.4 Framework for data governance — https://zenodo.org/records/19096953 (decision D-016)
- Draft Commission Implementing Regulation on HealthData@EU, Ref. Ares(2026)8339104 (draft, not adopted) — https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/16155-European-Health-Data-Space-technical-requirements-for-HealthData@EU_en
- GDI D3.4 Updated infrastructure status report and roadmap — https://zenodo.org/records/17990533
- GDI D6.3 Requirements for data quality and distributed analysis — https://zenodo.org/records/13920170
- GDI D6.6 Recommendations on data curation and ELSI compliance — https://zenodo.org/records/10723494
- GDI D8.7 Semantic interoperability scenarios — https://zenodo.org/records/11550316
- GDI D8.2 Integration of genomics and phenotypic data — https://zenodo.org/records/19131159
- GDI Starter Kit — https://github.com/GenomicDataInfrastructure/starter-kit
- B1MG D4.2 Secure data access demonstrator — https://zenodo.org/records/7590822
- B1MG M4.1 Technology and ELSI compliance check — https://zenodo.org/records/8427449
- B1MG D3.5 Phenotypic and clinical metadata framework — https://zenodo.org/records/7554481
- B1MG D5.1 Maturity level model — https://zenodo.org/records/8383706
- B1MGplus D2.8 Cybersecurity compliance report — https://zenodo.org/records/17207301
- B1MGplus M2.1 Overview of policies — https://zenodo.org/records/17639018
- B1MGplus D2.6 Use case report — https://zenodo.org/records/20055661
- arc42 FAQ J-1 (large systems) — https://faq.arc42.org/questions/J-1/

## 5. Docusaurus site

- `docs/` one folder per arc42 chapter; `docs/arc42/05-building-block-view/{european,national,user-organisation}`; `docs/readers/` reader guides; `docs/appendix/`.
- Front matter per page: `owner`, `reviewers`, `status`, `audience`, `governance_refs`, `last_reviewed`.
- MDX components: `<GovRef id="VII.2.3"/>` (link + tooltip to the DG section), `<InShort>`, `<AudienceBadges>`; source register in `src/data/sources.json` with DOIs, rendered as a bibliography.
- Diagrams drawn in draw.io (`.drawio.svg` in `static/diagrams/`, shown with `<Diagram>`); C4 notation for structure diagrams, UML sequence diagrams for runtime scenarios (decision D-019). Mermaid only in the handbook.
- Local search plugin; versioned docs per release; GitHub Actions deploys to GitHub Pages.
- Auto-generated "Document status" page from front matter.

## 6. Tracking authorship, review and versions

Use GitHub itself — no extra tool.

1. Front matter on each page: owner, reviewers, status (draft / in review / approved), last_reviewed.
2. One GitHub issue per page: the assignee is the page owner; reviewers are named in the issue and requested on the pull request (decision D-011 — no CODEOWNERS or teams for now).
3. Branch protection on `main`: changes only via pull request, at least one approval, CI must pass. Each approval is recorded with name and timestamp.
4. Pull request template: checklist (governance refs checked, plain-language check, DPO/security sign-off where relevant).
5. Docusaurus `showLastUpdateAuthor` and `showLastUpdateTime`: every page shows who last changed it and when, from git history.
6. Issue labels (`chapter-NN`, `scope-*`, `needs-*`) give the views per chapter, scope and specialist review; a Project board can be added later.
7. Releases: tag document versions (v0.1, v0.2, v1.0), snapshot with Docusaurus versioning, CHANGELOG; optional Zenodo–GitHub integration to mint a DOI per release.
8. CI check: validates front matter and flags pages whose `last_reviewed` is older than a set period.

## 7. Phases

0. Setup: repo, Docusaurus skeleton, conventions, governance ID catalogue, source register.
1. Foundations: ch. 1–4, glossary, reader guides.
2. Governance core: ch. 6 runtime scenarios and ch. 8 data protection and security concepts.
3. Scopes: ch. 5 per scope, ch. 7 per IT level; national profile template.
4. Decisions, quality, risks: ch. 9–11; traceability matrix complete.
5. Reader testing per audience, taskforce review, v1.0 release.
