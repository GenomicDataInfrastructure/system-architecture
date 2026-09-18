---
title: Page recipes
slug: /handbook/recipes
sidebar_position: 3
hide_page_meta: true
---

# Page recipes

Each chapter of arc42 has its own kind of page. This page says, for each kind, **what a good page contains**, which headings to use, and where to find guidance and examples. The arc42 documentation for each chapter is at `https://docs.arc42.org/section-N/`. Real-world examples are at [arc42.org/examples](https://arc42.org/examples).

Every page, whatever its kind, starts the same way:

```md
<InShort>

- Key message 1, in plain language.
- Key message 2.
- Key message 3 (optional).

</InShort>
```

The box with owner, reviewers, audiences and governance references is generated from the front matter. Don't write it by hand.

| Pages | Recipe |
|---|---|
| Chapter overview pages (`index.md` of each chapter or scope) | [Chapter overview](#chapter-overview) |
| 1.1, 1.3 | [Requirements and stakeholders](#requirements-and-stakeholders) |
| 1.2, 10 | [Quality goals and quality scenarios](#quality-goals-and-quality-scenarios) |
| 2.x | [Constraints](#constraints) |
| 3.1, 3.2, 3.3 | [Context](#context) |
| 4 | [Solution strategy](#solution-strategy) |
| 5.x.y | [Building block](#building-block) |
| 6.x | [Runtime scenario](#runtime-scenario) |
| 7.x | [Deployment](#deployment) |
| 8.x | [Crosscutting concept](#crosscutting-concept) |
| 9 (ADRs) | [Architecture decision record](#architecture-decision-record) |
| 11 | [Risks and technical debt](#risks-and-technical-debt) |
| 12, reader guides, national profile template | [Reference pages](#reference-pages) |

---

## Chapter overview

**Purpose:** orient the reader and send them to the right sub-page. Keep it under one screen.

**Headings:**

1. *In short*
2. One diagram that shows how the sub-pages fit together. For 5 and 5.x, this is the level-1 or level-2 building block diagram.
3. **Pages in this chapter:** one line per sub-page, saying what question it answers.

**Avoid:** repeating the content of the sub-pages.

## Requirements and stakeholders

**Purpose:** say what the system must do (1.1) and who cares about it (1.3).

**1.1 headings:** Requirements by lifecycle phase (inclusion, access, use), as a table: *requirement · type of use · governance section*. Then requirements that come from the EHDS rather than the governance.

**1.3 headings:** a table *stakeholder · role in the governance · what they expect from the architecture · where the page answers it*.

**Tip:** keep requirements at the level of "what", not "how". The "how" belongs in chapters 4 to 8.

## Quality goals and quality scenarios

**Purpose:** 1.2 names the 3 to 5 most important quality goals. Chapter 10 makes them measurable.

**1.2 headings:** a table *priority · quality goal · motivation (governance principle) · where it is addressed*.

**10 headings:**

1. **Quality tree:** a Mermaid mind map or a nested list, from the quality goals down to scenarios.
2. **Quality scenarios:** a table *ID · quality · source · stimulus · environment · response · measure*.

Example scenario: *"A User runs a subject-level query (stimulus) against the national discovery endpoint in normal operation (environment). The endpoint returns only counts at or above the agreed threshold, and logs the query (response). 100 % of test queries below the threshold return no count (measure)."*

**Guidance:** docs.arc42.org/section-10, and ISO/IEC 25010 for the vocabulary of quality attributes.

## Constraints

**Purpose:** list what limits our freedom, and what each limit means for the design.

**Headings:** one table per page: *constraint · source (legal act, governance section, standard) · consequence for the architecture*.

Example row: *"Personal data may not be downloaded by Users" · <GovRef id="II.2" /> (federated principle) · "Every analysis runs in an SPE. Only non-personal results leave it (see 8.8)."*

**Avoid:** explaining the law. One line per constraint, with a link to the source.

## Context

**Purpose:** show what is inside the system, what is outside, and what crosses the boundary.

**Headings:**

1. **Context diagram** (Mermaid flowchart): the system (or the three scopes) in the middle, actors and external systems around it, one arrow per exchange.
2. **Table of partners:** *actor or external system · scope it talks to · what it sends · what it receives · governance section*.
3. For 3.2 only: **channels and protocols** per interface.
4. For 3.3 only: **which governance actor operates which scope**, and how to read the scoped chapters 5 and 7.

**Guidance:** docs.arc42.org/section-3.

## Solution strategy

**Purpose:** the few fundamental choices, and why.

**Headings:** a table *goal or constraint · approach we chose · where it is detailed*. Then, for each major choice, one short paragraph with the reason and a link to its ADR.

## Building block

**Purpose:** describe one component as a black box, clearly enough that two countries implementing it would build compatible things.

**Headings:**

1. **Responsibility:** what it does, in two or three sentences.
2. **Operated by:** the governance actor and the scope (European, national or local).
3. **Interfaces:** a table *interface · provided or required · partner · standard or protocol · data exchanged*.
4. **Data it handles:** personal data? Which categories? Stored, or only passed through? Which retention?
5. **Quality and security needs:** link to the relevant quality scenarios and concepts in chapter 8.
6. **Governance requirements:** for each `GovRef`, one line on how this component meets it.
7. **Reference implementation:** the matching GDI Starter Kit component, if one exists (decision D-007).
8. **Open points.**

**Avoid:** naming products as requirements. Name functions and standards; products only as examples.

## Runtime scenario

**Purpose:** show step by step how actors and building blocks work together for one lifecycle step. These pages let legal, ELSI and DPO readers check that the governance is implemented.

**Headings:**

1. **Trigger and outcome:** what starts the scenario, and what is true at the end.
2. **Actors and building blocks involved,** with their scope.
3. **Sequence diagram** (Mermaid), for example:

   ````md
   ```mermaid
   sequenceDiagram
     actor U as User
     participant P as 1+MG User Portal (European)
     participant N as NCP node (national)
     participant H as Data Host (local)
     U->>P: Submit access request
     P->>N: Route request
     N->>H: Ask for data availability
     H-->>N: Counts only
     N-->>P: Status update
   ```
   ````
4. **Steps:** a table *# · step · actor · building block · scope · governance section · personal data involved?*
5. **Alternatives and exceptions:** refusal, withdrawal of consent, errors.
6. **Data protection notes:** what is minimised, logged, or checked in this scenario, with links to chapter 8.
7. **Differences per type of use** (research, policy development, QM, healthcare reuse), where there are any.

**Tip:** the steps table is the traceability backbone. Every governance responsibility in `governance_refs` should appear in at least one row.

**Guidance:** docs.arc42.org/section-6.

## Deployment

**Purpose:** where the building blocks run, and who operates what.

**Headings:**

1. **Deployment diagram** (Mermaid flowchart with subgraphs for hosting zones).
2. **Nodes:** a table *node · hosted by · building blocks deployed · security zone*.
3. For 7.2: **deployment patterns.** For each pattern: when it fits (national situation), pros, cons, and an example country, if one is willing to be named.
4. **Trust boundaries and network connections** between scopes.

## Crosscutting concept

**Purpose:** one rule or mechanism that applies across components and scenarios.

**Headings:**

1. **The problem:** why this concept is needed, in plain language.
2. **The rule:** what every component must do. Use "must" and "should" consistently.
3. **How it works:** mechanism, standards, diagram if useful.
4. **Where it applies:** links to the building blocks and scenarios.
5. **Legal and governance basis:** GDPR articles, governance sections, EHDS articles.
6. **Open points.**

For **8.1 (data protection by design and by default)**, add a table *GDPR principle (Art. 5 and Art. 25) · mechanisms · pages*. For **8.2 (controllers and processors)**, add a table *processing operation · lifecycle phase · controller(s) · processor(s) · building block · legal basis*.

**Guidance:** docs.arc42.org/section-8.

## Architecture decision record

Use the [ADR template](/decisions/template). One decision per ADR. Keep it under one page. State the options you rejected, and why.

**When to write one:** the decision affects more than one scope, changes an interface, implements a governance choice, or was disputed in a review.

## Risks and technical debt

**Headings:** a table *ID · risk or debt · probability · impact · mitigation · owner · status*. Include the governance items still "under discussion", dependencies on EHDS implementing acts, and national readiness.

## Reference pages

- **Glossary:** governance definitions are quoted word for word (decision D-012). Architecture terms are marked "architecture term".
- **Reader guides:** each question links to the page that answers it. Add questions as pages are written. Remove none without asking the architecture lead.
- **National implementation profile template:** keep it to one page per country: national actors, deployment pattern, and a table *common requirement · how the country meets it · evidence*.
