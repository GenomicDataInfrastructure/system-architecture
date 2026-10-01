# Session log

Newest first. Keep each entry to a few lines: what was done, what is next, where things are.

## 2026-10-01 — Previews live; open pull requests brought up to date (B. Pacheco with Claude)
- #124 (D-025) and #126 merged; the Pages source is switched to the `gh-pages` branch. The site and every `pr-<number>/` preview are served from it: `https://genomicdatainfrastructure.github.io/system-architecture/` and `…/pr-<number>/`.
- Lessons from the switch, for the record: the first switch was saved with branch `main`, which served a Jekyll rendering of the repository for a few minutes; it was set right with `gh api -X PUT repos/…/pages -f build_type=legacy -f 'source[branch]=gh-pages' -f 'source[path]=/'`, and a build had to be requested (`gh api -X POST repos/…/pages/builds`) because the switch alone started none. Previews come from pushes: closing and reopening a pull request started no run.
- #126: `.nojekyll` is now created by the production deploy only (`touch build/.nojekyll`), not from `static/`, because the deploy action never deletes it and the folder of a closed pull request survived as an empty `pr-124/.nojekyll`. That leftover was removed by hand from `gh-pages`.
- The six open page branches (#84, #92, #110, #114, #117, #118) merged `main` (a merge, not a rebase: shared branches, signed commits). Only #118 conflicted, in chapter 11 (`genome-edic-operational`): main's GDI D3.4 citation kept, together with the branch's link to the ADR's *Implementation in steps*. #110 also closed a merge of 3.3 into 3.1 that had been left uncommitted in the primary checkout, then merged the updated 3.3. All six have a passing *Check* run, a preview comment and a live preview.
- Next: reviewers for the six branches at the kick-off (they can now read each page in its preview); legal review of the VI.1.3 reading in #118.

## 2026-10-01 — Reader test of the seven open pages against the published governance; fixes applied (B. Pacheco with Claude)
- Fact check of 8.12, ADR-0002, 12 Glossary, 1.3, 3.1, 2.2 and 3.3 against the full D2.4 (body and annex, version 2025-12), role-playing legal expert, DPO, implementer, security advisor, ELSI specialist and policy maker. Findings and fixes are posted on each page issue (#88, #83, #69, #13, #11, #7, #4). The main ones:
  - **VI.1.3** already gives the Member Country the national strategy for downstream disclosure and the nomination of 1+MG Data Holders: the basis of ADR-0002 option B1. What stays open (#85) is the level of the choice and whether a country may nominate no 1+MG Data Holder.
  - The vote on national responsibility is in the **D2.4 body, section 3** (Pillar I GOV group); the annex refers to it (VII.2.1) and says Pillar I voted on an earlier version (II.1). Pages cite D2.4 for it, D3.4 only for the May 2025 date and the interim framing.
  - Healthcare reuse has **no formal access decision** per request (VII.5.4, VII.5.5): the "who decides" tables are marked research, policy development and QM, with a healthcare reuse row.
  - "With whom the application is shared" is published for **both** 1+MG types (VI.4.4, VI.4.5); the inclusion phase differs per type (controller VI.2.2; data held legally by the Data Holder VI.4.5 or the Genome EDIC III).
  - V.1.3: external audit **and/or** certification; 2.2 required both.
  - The 1+MG IT infrastructure provider works for the European or the national scope (glossary, 3.3, 1.3 aligned with the 3.3 diagram).
  - GDI ends in March 2027 (ADR-0002 said 2026).
- #123 merged: chapter 11 (`dataset-type-choice` rewritten on VI.1.3; `genome-edic-operational` moved there from #118) and 8.12. All six draft branches (#84, #92, #110, #114, #117, #118) got their fixes in one signed commit each, merged `main`, and link the new entry where they depend on the GDI step plan. The branch PR descriptions carry a "Reader test 2026-10-01" section.
- GDI D3.4 (dropped into `~/Downloads` during the session) confirms the claims cited to it: the May 2025 member-state vote for decentralised controllership as an interim governance until genomics is shared through the EHDS (section 4.3); the Genome EDIC can't be assumed before GDI ends (section 1); Genome of Europe data for the Genome of Europe consortium (sections 4.3, 4.8); allele frequencies and metadata search without an access decision (sections 4.1.2, 4.8). Two nuances recorded on the pages: D3.4 frames the Genome of Europe data as primary use under that project's own legal basis (the architecture reads them as externally governed datasets), and it expects the project to end about a year after late 2025; the pages say March 2027 (architecture lead). Section numbers added in prose next to each `<Cite id="gdi-d3.4" />`; `gdi-d3.4` set to `published` in `sources.json`.
- Next:
  - reviewers for the six branches at the kick-off; legal review of the VI.1.3 reading in #118;
  - per-PR site previews for reviewers (suggested; GitHub Pages serves one site, so previews go into per-PR subfolders of the `gh-pages` branch, or a preview service). Done the same day: D-025, entry above.

## 2026-10-01 — Pull request previews (B. Pacheco with Claude)
- Decided D-025: every pull request gets a rendered preview of the whole site at `…/system-architecture/pr-<number>/`, on the `gh-pages` branch next to the published site; Netlify / Cloudflare Pages documented as the alternative.
- Done: `.github/workflows/preview.yml` (build with `PR_NUMBER`, publish to `pr-<number>/`, one comment per pull request, folder removed on close); `deploy.yml` now publishes `main` to the root of `gh-pages` and keeps the `pr-*` folders; `docusaurus.config.ts` derives `baseUrl`, `noIndex` and a preview banner from `PR_NUMBER`. Checked locally: `PR_NUMBER=999 npm run build` passes with `onBrokenLinks`/`onBrokenAnchors: 'throw'`, and every asset and page link is under `/system-architecture/pr-999/` (`<Diagram>` uses `useBaseUrl`). CONTRIBUTING ("Previews and publication"), choreography steps 6 and 9, plan and changelog updated.
- Next, once this is merged (in this order): wait for the *Deploy to GitHub Pages* run to create the `gh-pages` branch; in *Settings > Pages* switch the source to *Deploy from a branch*, `gh-pages`, `/ (root)`; check the site and open a test pull request to see its preview comment. Until the switch, the published site is simply not updated. Done the same day: entry above.

## 2026-09-28 — 3.3 and 2.2 re-checked against the glossary, ADR-0002 and 1.3 (B. Pacheco with Claude)
- 3.3 *Scopes* (#13, draft PR #84): the Member Country chooses between the two 1+MG types, and the level of the choice is still to be confirmed (as in ADR-0002); flag what GDI delivers (D-006, cites `gdi-d3.4`). The glossary already follows 3.3.
- 2.2 *Governance principles* (#7, draft PR #92): Users start from the 1+MG User Portal whatever the type of dataset; for externally governed datasets the portal sends them to the dataset's own procedure (VII.3.1, as in ADR-0002).
- D-022 checked on all wave 1 branches: the types of dataset link to 8.12. Fixed in 2.2 and in 3.1 (#110), which linked "externally governed datasets" to the glossary.
- #84 and #92 merge cleanly with `main` and with every other open wave 1 PR. Both patches were checked with `npm run check` and `npm run build` before committing. No new reader tests: a few sentences changed.
- #13 and #7 now have steps 1 and 3–8 ticked: all six wave 1 pages (#4, #7, #11, #13, #69, #83) are at the same point, waiting for reviewers.
- Next:
  - the kick-off: reviewers for all six pages, and the `needs-…` labels for #4, #7 and #11 (#13 has `needs-legal`, #83 has `needs-legal` and `needs-dpo`);
  - the open questions in #117 and #118;
  - after #84 is merged, retarget #110 to `main`.

## 2026-09-28 — 3.1 re-checked against the glossary, ADR-0002 and 1.3 (B. Pacheco with Claude)
- #121 merged (previous session log); branch deleted.
- 3.1 *Business context* (#11, draft PR #110, still stacked on #84) already matched #114, #117 and #118. One addition, to flag what GDI delivers (D-006): until the GDI project ends, externally governed datasets are the only datasets Users can get access to through the system, for example Genome of Europe data (cites `gdi-d3.4`; ADR-0002, proposed). No new reader test: one sentence added.
- #110 merges cleanly with `main`, #92, #114, #117 and #118. #11 now has steps 1 and 3–8 ticked, like #4, #69 and #83; the re-check is posted on #11.
- Next:
  - decide which `needs-…` labels #4 and #11 get (both pages touch legal, security, DPO and ELSI duties);
  - the same re-check for 3.3 (#13, #84) and 2.2 (#7, #92);
  - reviewers for all wave 1 PRs at the kick-off, and the open questions in #117 and #118.

## 2026-09-28 — 1.3 re-checked against the glossary and ADR-0002 (B. Pacheco with Claude)
- #120 merged (previous session log); branch deleted.
- 1.3 *Stakeholders* (#4, draft PR #114) aligned with #117 and #118: the 1+MG IT infrastructure provider is "a role, in any scope" (as in D-018, 3.3 and the glossary; this settles the question the PR had left for reviewers); the GDI project gives access only to externally governed datasets until it ends, the other types follow once the Genome EDIC is operational (ADR-0002, proposed; cites `gdi-d3.4`). No new reader test: two lines changed.
- #114 merges cleanly with #84, #92, #110, #117 and #118. #4 now has steps 1 and 3–8 ticked, like #69 and #83; the re-check is posted on #4.
- Next:
  - decide which `needs-…` labels #4 gets (the page touches legal, security, DPO and ELSI duties; the PR template lists all four sign-offs);
  - reviewers for #114, #117 and #118 (with those for 3.3, 2.2 and 3.1 at the kick-off);
  - the open questions in #117 and #118 (see the entry below).

## 2026-09-28 — Glossary and ADR-0002: steps 3–8 done, reader-tested (B. Pacheco with Claude)
- #119 merged (previous session log); branch deleted. Both #69 and #83 now have steps 1 and 3–8 ticked; only reviewers (step 2), review and approval remain.
- 12 *Glossary* (#69, draft PR #117):
  - scope note, sources (no new ones) and the arc42 check (tips 12-1 to 12-6) posted on #69; comparable examples: EHDS Art. 2 (refer to the GDPR instead of redefining), the 1+MG Framework (no glossary);
  - new departure, explained in #117: no translations (arc42 tip 12-4); national names belong in the national implementation profile;
  - self-check fixes: first acronyms linked (GDI, EHDS, GDPR, ELSI, WG5; "WG" added to `acronyms.json`); *Open point* box on the accreditation of 1+MG IT infrastructure (`accreditation`, #93); link to the 3.3 diagram;
  - reader test, two runs: a note under each type of dataset says who decides on access (VII.3.1, VII.5.4, VII.5.5, added to `governance_refs`); the box covers all the details still "to be defined"; the actors not tied to one scope; "Data Access Committee" capitalised as in the governance.
- ADR-0002 (#83, draft PR #118):
  - `needs-legal` and `needs-dpo` added;
  - scope note, sources (GDI D3.4 checked: §4.4 supports one entry point for Users) and the arc42 check posted on #83; comparable examples: EGA (a DAC per dataset decides; the archive routes) and EHDS Art. 67(3) (one application, each health data access body decides for its country);
  - open departure: arc42 tip 9-9 asks for one decision per ADR; the owner's recommendation is to keep one ADR, with splitting the steps as the alternative;
  - reader test, two runs: the Decision names its three parts (which types, who chooses, when) and what is proposed or open in each; a controller row; the cohort decision made consistent (the Genome EDIC decides, the Genome EDIC CC adopts and documents); externally governed datasets outside the 1+MG request; non-member countries; the User Portal as the entry point in step 1; the order of steps 2 and 3 marked as proposed.
- Next:
  - reviewers for #117 and #118 (with those for 3.3, 2.2, 3.1 and 1.3 at the kick-off); the legal and DPO specialist review for #118;
  - decide in #118: one ADR or two; the order "1+MG compliant before 1+MG cohort"; other records of "externally governed first"; whether the GDI Pillar I vote and the member states' vote of May 2025 are the same;
  - decide in #117: "User organisation" vs "User Organisation"; "Genome EDIC General Assembly" and "1+MG Member Countries" in the quoted definitions; which undefined terms to add (key-coded identifier, 1+MG minimum dataset, 1+MG IT infrastructure, catalogue, Pillar II);
  - the architecture lead to review `gdi-d3.4`, still `candidate` in `sources.json`.

## 2026-09-28 — Glossary claimed; ADR-0002 broadened with implementation in steps (B. Pacheco with Claude)
- Before claiming the glossary: the four open wave 1 branches (1.3, 2.2, 3.1, 3.3) don't edit the glossary or `acronyms.json`, and all their glossary links and `<Acronym>` IDs resolve on `main`.
- 12 *Glossary* claimed (owner B. Pacheco, issue #69, draft PR #117): European and national scope aligned with D-018 and the 3.3 draft; intro to the architecture terms, linking to 3.3; the three types of dataset point on to 8.12; the intro explains the order of the terms. No heading changed. Questions in the PR: "User organisation" (governance) versus "User Organisation" (all other pages); "Genome EDIC General Assembly" in one definition; candidate terms (key-coded identifier, 1+MG minimum dataset).
- ADR-0002 *Who decides on access, per type of dataset* (issue #83, draft PR #118) broadened: seven situations the decision must cover; five criteria; options A1–A5 (which types the system supports) and B1–B3 (who chooses the type); decision A5 + B1. New *Implementation in steps* in the consequences: step 1 is GDI, with externally governed datasets only (Genome of Europe data) and discovery without an access decision; then 1+MG compliant, then 1+MG cohort datasets once the Genome EDIC is operational; later the EHDS. The type of dataset is part of the interfaces from step 1. Source: GDI D3.4 (§1, §4.3, §4.8), which also says the May 2025 vote on national access decisions is interim until the EHDS. Also: first mentions linked, open points #104 and #105 added to the box.
- New chapter 11 dependency `genome-edic-operational` (#116), in #118.
- Both PRs: signed commits; check, build and CI pass.
- Next:
  - reviewers for #117 and #118 (with those for 3.3, 2.2, 3.1 and 1.3 at the kick-off);
  - confirm in #118 where the "externally governed first" decision is recorded besides D3.4, the order "1+MG compliant before 1+MG cohort", and whether to split the steps into their own ADR (the ADR is now longer than one page);
  - answer the glossary questions in #117;
  - scope note, sources and reader test for #69 and #83 (steps 3–5 and 8).

## 2026-09-28 — Pages checked against arc42 (D-024); 1.3 drafted and reader-tested (B. Pacheco with Claude)
- Decided D-024 (#112 merged): every page is checked against the arc42 documentation for its section (docs.arc42.org, its tips and FAQ) at step 5 and in the self-check. The recipes now say what arc42 asks for each chapter, and list our departures: one document with scoped chapters (FAQ J-1), 1.3 contacts as roles, 3.1 split into its European and national parts (FAQ C-3-3), 3.3 added, chapter 11 as the register (open points in alphabetical order, risks and debt by priority), and glossary headings. Other departures are explained in the pull request, which now has a checkbox for it. The site credits arc42's authors and its CC BY-SA 4.0 licence (introduction, README, footer). The check found gaps only in 1.3, which was not written yet.
- Page 1.3 *Stakeholders* drafted (owner B. Pacheco, issue #4, draft PR #114). It has:
  - a table of the twelve governance actors: their role, what they expect from the architecture (derived from their duties), and where it is answered;
  - how to reach each group: the Genome EDIC CC, each 1+MG NCP, and GitHub issues for the taskforce;
  - the other stakeholders, the six kinds of readers, and who decides on the architecture.
- 1.3 was reader-tested twice, and the fixes are included:
  - the Genome EDIC CC provides the minimum requirements for the audit and certification framework (V.1.2), while the Assembly of Members adopts the policies;
  - IT infrastructure providers are audited and/or certified, and certification is required for an SPE that pools data from several countries (V.1.3);
  - missing stakeholders were added.
- New chapter 11 entry `architecture-adoption` (#113): no body adopts the architecture as a whole, and the taskforce's decision process is not set. The page also links the `accreditation` entry (#93). The reader guides for policy makers and legal experts point to 1.3. Scope note, sources and examples are on #4, with steps 1 and 4–8 ticked. The changes merge cleanly with `main`, #92 and #110. Merged branch `arc42-fit` deleted.
- Next:
  - the kick-off meeting: reviewers for 3.3 (#84), 2.2 (#92), 3.1 (#110) and 1.3 (#114); an owner for chapter 11; who adopts the architecture (#113);
  - a legal look at the licence mix raised in #112 (our content is CC BY 4.0, the arc42 structure is CC BY-SA 4.0);
  - after #84 is merged, check that #110 moves to `main`;
  - after #92 is merged, keep one link to *1+MG Data Provider* in chapter 11;
  - the only wave 1 page still without an owner is 12 Glossary (#69).

## 2026-09-27 — 2.2 and 3.1 drafted and reader-tested; chapter 11 register and its issues (B. Pacheco with Claude)
- 2026-09-25: merged branches deleted (remote and local). Page 2.2 *Governance principles* drafted (owner B. Pacheco, issue #7, draft PR #92): the eight principles of II.2 as design rules (a table of what each means and what it rules out, then one section per principle, each rule citing its governance section), and where principles pull in different directions. Scope note, sources and examples posted on #7.
- 2026-09-27: reader test run twice on 2.2; fixes committed in #92 (data stay in the country "as a rule"; pooling is a national exception the governance describes for research; every node at minimum externally audited; who does what between the Assembly of Members, the Genome EDIC CC and Working Group 3; Users may keep an older dataset version, V.2.1). The reader guides for policy makers and implementers now point to 2.2. #7 steps 1 and 4–8 ticked.
- Open points tracked in issues: #91 who decides on pooling for 1+MG compliant datasets (VIII.3.4), #93 accreditation of 1+MG IT infrastructure providers (III), #94 data and metadata models from 1+MG Working Group 3 (II.1), #95 the draft HealthData@EU implementing act. #85 (who chooses the dataset path) was already open.
- Decided D-023 (#97 merged): chapter 11 is the one register of open points and open questions (open in the governance, open in the architecture, dependencies), risks and technical debt. One entry per point with a fixed anchor (`{#id}`), in alphabetical order within its group; the pull request that raises a point adds its entry; pages link to the entry, and only the entry links to the GitHub issue. `npm run check` rejects an *Open point*, *Risk* or *Technical debt* box without a link to chapter 11 and links to missing entries, and warns on direct issue links in pages. We kept one file rather than one file per entry: conflicts are rare and easy to resolve. Chapter 11 started with 11 open points; 8.12 and ADR-0002 link to them.
- #84 and #92 rebased on `main` after #97 and switched to chapter 11 links. #92 adds its own two entries (pooling, #91; data models, #94); #84 adds none (its points already had entries). The two PRs touch different files. Merged local branches deleted; local `main` up to date.
- Issues for the eight chapter 11 entries that had none: #99 licensed healthcare professional check (VII.4.3), #100 review time for healthcare reuse (VII.4.3), #101 who informs data subjects after an access decision (VII.5.3), #102 repeated consent or objection for healthcare reuse and clinical trials (VII.5.3), #103 legal basis for returning incidental findings (VIII.11.1), #104 when a national veto applies (VII.4.7, VII.5.1), #105 datasets of more than one type (related to #85), #106 EHDS requirements for access applications (VII.3.3). #107 merged: every chapter 11 entry names its issue, and the national veto entry separates what the governance settles from what is open. #107 and #92 both edit chapter 11 without conflict (checked with a three-way merge); *1+MG Data Provider* is linked twice there until both are merged. Merged branches deleted.
- Page 3.1 *Business context* drafted (owner B. Pacheco, issue #11, draft PR #110, stacked on #84 because 3.1's questions come from it): the system as a black box (what the European and national scopes run), a C4 system context diagram in draw.io with the system split into its European and national parts and 13 partners by scope (dashed arrows depend on an open point), a table of what each partner sends and receives, where data about people come in and go out, and scopes versus the system boundary (the User Organisation scope and part of the national scope are outside the system). Reader test run twice; fixes included. New chapter 11 entry `commission-spe` (VIII.2.2, #109). Reader guides for DPOs, policy makers and implementers point to 3.1. Scope note, sources and examples on #11; steps 1 and 4–8 ticked. Its chapter 11 and reader-guide changes merge cleanly with `main` and #92.
- Next: the kick-off meeting, including reviewers for 3.3 (#84), 2.2 (#92; a legal or ELSI member) and 3.1 (#110), and an owner for chapter 11 (still a placeholder); after #84 is merged, check that #110 moves to `main`; after #92 is merged, keep one link to *1+MG Data Provider* in chapter 11; wave 1 pages still without an owner: 1.3 (#4), 12 Glossary (#69).

## 2026-09-25 — 8.12 and D-022 merged, #84 rebased (B. Pacheco with Claude)
- #87 merged (8.12 *Types of dataset*, acronym component, D-021); issue #88 created for 8.12. In 3.3 (#84) the types of dataset link to 8.12, and the first mention of each glossary term links to its entry (18 links).
- #89 merged: decided D-022 (link the first mention of each glossary term on a page; `<Term>` renamed `<Acronym>`, for acronyms only; broken anchors fail the build). Rule texts updated; 8.12 follows the rule. Branch deleted.
- #84 rebased on `main` after #89: four signed commits; 3.3 uses `<Acronym>` for SPE, ELSI and GDI; check and build pass. Still a draft, waiting for reviewers.
- Next: the kick-off meeting (cadence, decision rights, page workflow, milestones, wave 1 owners and reviewers, Pillars I–III); then reviewers for 3.3 (#84) and ADR-0002 (#83); adapt the ways of working to the meeting's decisions.

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
