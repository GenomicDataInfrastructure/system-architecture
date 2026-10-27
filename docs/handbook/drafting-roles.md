---
title: Drafting and review roles
slug: /handbook/drafting-roles
sidebar_position: 7
hide_page_meta: true
---

# Drafting and review roles

Pages are drafted with AI assistance, wave by wave, and reviewed by people (decision D-026). This page describes the roles that take part. Each role can be filled by a person or by an AI agent: the instructions and the checks are the same. People stay responsible for the content. An agent never approves a page.

## How a wave runs

1. **Sources.** The architecture lead adds the documents for the wave to the shared source collection. The source librarian looks for missing deliverables and lists what each page needs.
2. **Draft.** The writer drafts every page of the wave on one branch, following the [page choreography](/handbook/choreography) (steps 4 to 8) and the [recipe](/handbook/recipes) for each page.
3. **Review by the roles below.** The reviewers, the specialists the page's `audience` calls for, and the reader test run at the same time. Each returns a list of findings.
4. **Fix.** The writer answers every finding: fixed, or declined with a reason. Disagreements go to the architecture lead.
5. **Pull request.** One pull request per wave (wave 4: one per scope). The page `status` becomes `review`. The pull request says that the pages were drafted with AI assistance, which roles reviewed them, and what is still open.
6. **Human review.** Taskforce reviewers and specialists comment on the pull request, using the [review checklists](/handbook/review-checklists). Their comments go back to the writer, and steps 4 to 6 repeat until a reviewer approves.

## Roles

| Role | Does | Model and effort, when an agent fills it |
|---|---|---|
| [Source librarian](#source-librarian) | Finds and summarises the sources for each page | Claude Opus 5.5, high |
| [Writer](#writer) | Drafts the pages of a wave and answers every finding | Claude Opus 5.5, high |
| [Architecture reviewer](#architecture-reviewer) | Checks structure, arc42 fit, interfaces and consistency | Claude Opus 5.5, high |
| [Governance reviewer](#governance-reviewer) | Checks every claim against the governance and the wording against the glossary | Claude Fable 5.1, high |
| [Legal specialist](#legal-specialist) | Checks legal acts, roles and responsibilities | Claude Fable 5.1, high |
| [DPO specialist](#dpo-specialist) | Checks data protection | Claude Opus 5.5, high |
| [Security specialist](#security-specialist) | Checks security | Claude Opus 5.5, high |
| [ELSI specialist](#elsi-specialist) | Checks ethical, legal and societal aspects | Claude Opus 5.5, high |
| [Reader test](#reader-test) | Reads the page with no context, as a non-specialist would | Claude Opus 5.5, high |

The governance and legal reviews use the most capable model because their errors cost most: a claim the governance doesn't make, or a task given to the wrong actor.

### Source librarian {#source-librarian}

- **Reads:** the page's `governance_refs` and *What this page must answer* questions; the source collection (its index of deliverables with Zenodo links, and the plain-text copies for searching).
- **Does:** for each page, lists the governance sections that apply and what each says that matters; the other sources worth citing and why; examples and good practice (choreography step 5). Proposes `src/data/sources.json` entries (status `candidate`, Zenodo or official URL). Lists deliverables that are missing from the collection, with their links.
- **Returns:** one source list per page.

### Writer {#writer}

- **Reads:** the source lists, the recipe, `AGENTS.md`, the neighbouring pages, and chapter 11.
- **Does:** drafts the pages. Follows the writing rules in `AGENTS.md`: front matter, *In short* box, `<GovRef>` and `<Cite>`, glossary and acronym links, interfaces first, the target state with what the GDI MVP already delivers, diagrams in draw.io, open points in chapter 11. Summarises sources in its own words. Sets `owner` to the person responsible for the page, never to an agent. Runs `npm run check` and `npm run build`.
- **Returns:** the drafted pages, and an answer to each finding.

### Architecture reviewer {#architecture-reviewer}

- **Checks:** the general checklist of the [review checklists](/handbook/review-checklists), with most weight on: *fits arc42* (the recipe and the arc42 documentation for the section), *interfaces first*, *consistent* with neighbouring pages, approved pages and ADRs, *both axes covered* (types of use and types of dataset), *diagrams*, and the implementer checklist for chapters 5 to 8.

### Governance reviewer {#governance-reviewer}

- **Checks:** every claim that rests on the governance matches the section cited; `governance_refs` lists every section the page implements; governance definitions are used word for word; points the governance leaves open are recorded in chapter 11 and not presented as settled; quotes are short and attributed; the governance is cited by section, never by page.

### Legal specialist {#legal-specialist}

- **Checks:** the legal expert checklist. Also: the EHDS, the GDPR and NIS2 are cited correctly; the HealthData@EU implementing act is cited as a draft; tasks that the law gives to Member States or to health data access bodies are not given to another actor.

### DPO specialist {#dpo-specialist}

- **Checks:** the data protection officer checklist.

### Security specialist {#security-specialist}

- **Checks:** the security advisor checklist.

### ELSI specialist {#elsi-specialist}

- **Checks:** the ELSI specialist checklist.

### Reader test {#reader-test}

- **Reads:** only the rendered page, with no other context.
- **Checks:** whether a reader from a ministry or a DPO office understands the *In short* box and can answer the page's key questions; sentences that are too long or too technical; terms and acronyms used before they are explained.

## Findings

Every role returns its findings in the same form, one per line:

| Field | Content |
|---|---|
| Where | Page and line, or section heading |
| What | The problem, in one sentence |
| Rule | The checklist item, `AGENTS.md` rule or decision it breaks, or the source it contradicts |
| Severity | **Must fix** or **nice to have** |
| Suggestion | Concrete wording, where possible |

A role that finds nothing says so.

## Rules for AI-assisted drafting

- A person is the `owner` of every page and answers for it. Only a human reviewer sets `status: approved`.
- Every claim is traceable to a cited source. An agent that can't find a source for a claim marks it as an open point instead of guessing.
- The source collection is kept outside the repository. Pages cite the public record (Zenodo or official URL), never a local file. Drafts and internal documents in the collection are background only, unless the taskforce agrees to cite them.
- Sources are summarised in our own words. Only definitions and short passages are quoted, with attribution.
