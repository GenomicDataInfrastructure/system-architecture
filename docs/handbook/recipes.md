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

## Fit with arc42

Every page must cover what arc42 asks for its section, or say why not (decision D-024). Before you write (step 5 of the [page choreography](/handbook/choreography)), read the arc42 documentation for your section at `https://docs.arc42.org/section-N/`: its *content*, *motivation* and *form*, and the tips and FAQ entries it links to ([faq.arc42.org](https://faq.arc42.org)). Each recipe below starts from that guidance, and says where we depart from it.

arc42 may be customised (FAQ K-1). These departures are agreed, and don't need to be explained again in a pull request:

| Where | arc42 | What we do, and why |
|---|---|---|
| The whole document | One arc42 per system; very large systems are split into modules linked together (FAQ J-1) | One arc42 for the Genome EDIC. Chapters 5 and 7 are split by scope and by level, and each Member Country describes its choices in a national implementation profile (decisions D-005, D-018). |
| Every page | Only the sections | An *In short* box, and a box with owner, reviewers, status and governance references. These help readers who aren't architects, and make review and traceability visible. |
| 1.3 | A table *role · contact · expectations* | Contacts are roles, not named people: the Genome EDIC CC and each 1+MG NCP. The site is public. What readers need from the documentation is in the reader guides. |
| Chapter 2 | Organisational and political constraints, technical constraints, conventions (FAQ C-2-2) | Pages by source: legal (2.1), governance (2.2), organisational (2.3), technical (2.4). The conventions (terminology, diagram notation, ADRs) are in this handbook, and the chapter overview links to them. |
| 3.1 | The system as one black box; no internal components in the context view, except for large heterogeneous systems (FAQ C-3-3) | The system is shown with its European and national parts, so that the diagram shows which scope handles each exchange. |
| 3.2 | Technical context; for information systems, often better in the deployment view (FAQ C-3-2) | Kept short: the channels and standards of each exchange. Hosting and networks are in chapter 7. |
| 3.3 | Not an arc42 section | Added: the scopes of responsibility (decision D-018), because responsibility in the Genome EDIC doesn't follow the system boundary. |
| Chapter 11 | Risks and technical debt, ordered by priority | Also the register of open points and open questions (decision D-023). Open points are listed alphabetically within their group; risks and debt by priority. |
| Chapter 12 | A table *term · definition* | One heading per term, so that each term has a stable anchor for links (decision D-022). The acronyms are a table. |

---

## Chapter overview

**Purpose:** orient the reader and send them to the right sub-page. Keep it under one screen.

**Headings:**

1. *In short*
2. One diagram that shows how the sub-pages fit together. For 5 and 5.x, this is the level-1 or level-2 building block diagram (a C4 container diagram). See [Diagrams](/handbook/diagrams).
3. **Pages in this chapter:** one line per sub-page, saying what question it answers.

For **5, 5.1, 5.2 and 5.3**, also give the reason for the decomposition: arc42 describes each level as a *white box* with an overview diagram, the reason for the decomposition, the building blocks and their important interfaces (docs.arc42.org/section-5).

**Avoid:** repeating the content of the sub-pages.

## Requirements and stakeholders

**Purpose:** say what the system must do (1.1) and who cares about it (1.3).

**1.1 headings:** Requirements by lifecycle phase (inclusion, access, use), as a table: *requirement · type of use · governance section*. Then requirements that come from the EHDS rather than the governance.

**1.3 headings:** a table *stakeholder · role in the governance · what they expect from the architecture · where the page answers it*. Then how to contact each group, and what readers need from the documentation.

**arc42:** 1.1 briefly states the goals and the 3 to 5 most important requirements, and links to the rest (FAQ C-1-1). 1.3 lists everyone who must know the architecture, be convinced of it, work with it, or take decisions about it, with their expectations of the architecture *and* its documentation (docs.arc42.org/section-1). Search broadly: auditors and developers of external interfaces are often forgotten (FAQ C-1-3). Expectations should be confirmed with the stakeholders themselves (tip 1-20).

**Tip:** keep requirements at the level of "what", not "how". The "how" belongs in chapters 4 to 8.

## Quality goals and quality scenarios

**Purpose:** 1.2 names the 3 to 5 most important quality goals. Chapter 10 makes them measurable.

**1.2 headings:** a table *priority · quality goal · motivation (governance principle) · where it is addressed*.

**10 headings:**

1. **Quality tree:** a nested list or a tree diagram, from the quality goals down to scenarios.
2. **Quality scenarios:** a table *ID · quality · source · stimulus · environment · response · measure*.

Example scenario: *"A User runs a subject-level query (stimulus) against the national discovery endpoint in normal operation (environment). The endpoint returns only counts at or above the agreed threshold, and logs the query (response). 100 % of test queries below the threshold return no count (measure)."*

**arc42:** keep 1.2 short: the top 3 to 5 quality goals. Chapter 10 gives a quality overview (a quality tree, using ISO/IEC 25010 or the arc42 quality model) and quality scenarios: usage, change, and failure scenarios, each with a measurable response (docs.arc42.org/section-10).

## Constraints

**Purpose:** list what limits our freedom, and what each limit means for the design.

**Headings:** one table per page: *constraint · source (legal act, governance section, standard) · consequence for the architecture*.

Example row: *"Personal data may not be downloaded by Users" · <GovRef id="II.2" /> (federated principle) · "Every analysis runs in an SPE. Only non-personal results leave it (see 8.8)."*

**arc42:** anything that limits the freedom of design, implementation or the development process, as a table with explanations (docs.arc42.org/section-2). Types: organisational and political, technical, and conventions (FAQ C-2-2). Say what each constraint costs or rules out (tip 2-2): that is the *consequence* column.

**Avoid:** explaining the law. One line per constraint, with a link to the source.

## Context

**Purpose:** show what is inside the system, what is outside, and what crosses the boundary.

**Headings:**

1. **Context diagram** (a C4 system context diagram, see [Diagrams](/handbook/diagrams)): the system in the middle as one box, the people, organisations and external systems around it, one arrow per exchange. For 3.3, a diagram of the scopes and who belongs to each.
2. **Table of partners:** *actor or external system · scope it talks to · what it sends · what it receives · governance section*.
3. For 3.2 only: **channels and protocols** per interface.
4. For 3.3 only: **which governance actor operates which scope**, and how to read the scoped chapters 5 and 7.

**arc42:** 3.1 shows the system as a black box, and every communication partner with its domain inputs and outputs. Combine a diagram with a table, keep it at overview level, and group similar partners. 3.2 maps those exchanges to technical channels (docs.arc42.org/section-3, FAQ C-3-1 and C-3-2). Don't show internal components in the context view (FAQ C-3-3); for our agreed exception, see [Fit with arc42](#fit-with-arc42).

## Solution strategy

**Purpose:** the few fundamental choices, and why.

**Headings:** a table *goal or constraint · approach we chose · where it is detailed*. Then, for each major choice, one short paragraph with the reason and a link to its ADR.

**arc42:** the fundamental decisions (technology, decomposition, how the quality goals are reached, organisation), kept compact. Link each approach to the quality goals of 1.2, and always give the reason (docs.arc42.org/section-4).

## Building block

**Purpose:** describe one component as a black box, clearly enough that two countries implementing it would build compatible things.

**Headings:**

1. **Responsibility:** what it does, in two or three sentences.
2. **Operated by:** the governance actor and the scope (European, national or User Organisation). Say when a 1+MG IT infrastructure provider operates it on the actor's behalf.
3. **Interfaces:** a table *interface · provided or required · partner · standard or protocol · data exchanged*.
4. **Data it handles:** personal data? Which categories? Stored, or only passed through? Which retention?
5. **Quality and security needs:** link to the relevant quality scenarios and concepts in chapter 8.
6. **Governance requirements:** for each `GovRef`, one line on how this component meets it.
7. **Differences per type of dataset** (1+MG compliant, 1+MG cohort, externally governed), where there are any. See [8.12 Types of dataset](/concepts/dataset-types).
8. **Reference implementation:** the matching GDI Starter Kit component (national scope) or GDI central service (European scope). A country that uses other tools must meet the interfaces above (decisions D-007, D-020).
9. **Open points,** each linked to its entry in [chapter 11](/risks#open-points).

**arc42:** each building block is described as a *black box*: purpose and responsibility, interfaces, quality and performance characteristics, location (for us, the reference implementation), the requirements it fulfils, and open issues (docs.arc42.org/section-5). The headings above follow that template.

**Avoid:** presenting a product as the requirement. The requirement is the function and its interfaces; the product is the reference implementation.

## Runtime scenario

**Purpose:** show step by step how actors and building blocks work together for one lifecycle step. These pages let legal, ELSI and DPO readers check that the governance is implemented.

**Headings:**

1. **Trigger and outcome:** what starts the scenario, and what is true at the end.
2. **Actors and building blocks involved,** with their scope.
3. **Sequence diagram** (UML notation, see [Diagrams](/handbook/diagrams)). Each participant is an actor or a building block, with its scope in brackets: for example *1+MG User Portal (European)* or *1+MG Data Host (national)*.
4. **Steps:** a table *# · step · actor · building block · scope · governance section · personal data involved?*
5. **Alternatives and exceptions:** refusal, withdrawal of consent, errors.
6. **Data protection notes:** what is minimised, logged, or checked in this scenario, with links to chapter 8.
7. **Differences per type of use** (research, policy development, QM, healthcare reuse), where there are any.
8. **Differences per type of dataset** (1+MG compliant, 1+MG cohort, externally governed), where there are any: who reviews, who decides, who is controller. See [8.12 Types of dataset](/concepts/dataset-types).

**Tip:** the steps table is the traceability backbone. Every governance responsibility in `governance_refs` should appear in at least one row.

**arc42:** only the architecturally relevant scenarios: important uses, critical external interfaces, operation, and error handling. Keep them schematic (docs.arc42.org/section-6).

## Deployment

**Purpose:** where the building blocks run, and who operates what.

**Headings:**

1. **Deployment diagram** (a C4 deployment diagram, see [Diagrams](/handbook/diagrams)), with the central, national and local levels.
2. **Nodes:** a table *node · hosted by · building blocks deployed · security zone*.
3. For 7.2: **deployment patterns.** For each pattern: when it fits (national situation), pros, cons, and an example country, if one is willing to be named.
4. **Trust boundaries and network connections** between scopes.

**arc42:** the infrastructure in levels (level 1: locations and environments; level 2: inside selected nodes), and which building blocks run where, with the reasons (docs.arc42.org/section-7). Say which environments each level needs (for example test and production) where it matters.

## Crosscutting concept

**Purpose:** one rule or mechanism that applies across components and scenarios.

**Headings:**

1. **The problem:** why this concept is needed, in plain language.
2. **The rule:** what every component must do. Use "must" and "should" consistently.
3. **How it works:** mechanism, standards, diagram if useful.
4. **Where it applies:** links to the building blocks and scenarios.
5. **Legal and governance basis:** GDPR articles, governance sections, EHDS articles.
6. **Open points,** each linked to its entry in [chapter 11](/risks#open-points).

For **8.1 (data protection by design and by default)**, add a table *GDPR principle (Art. 5 and Art. 25) · mechanisms · pages*. For **8.2 (controllers and processors)**, add a table *processing operation · lifecycle phase · controller(s) · processor(s) · building block · legal basis*.

**arc42:** only the essential concepts, and how they work. Link each concept to its building blocks, and the building blocks back to it (docs.arc42.org/section-8).

## Architecture decision record

Use the [ADR template](/decisions/template). One decision per ADR. Keep it under one page. State the options you rejected, and why.

**When to write one:** the decision affects more than one scope, changes an interface, implements a governance choice, or was disputed in a review.

**arc42:** only architecturally significant decisions, with context, decision, status (proposed, accepted, deprecated, superseded) and consequences. Give the criteria, the rejected alternatives and the date (docs.arc42.org/section-9).

## Risks and technical debt

Chapter 11 is the one place that lists what is not decided yet, what could go wrong, and what we owe (decision D-023). Every pull request that raises such a point adds its entry here, and the page marks the point in a box that links to the entry.

**Headings:**

1. **Open points and open questions,** in three groups: *open in the governance* (the governance says itself that a point is still to be defined, discussed or clarified), *open in the architecture* (the governance doesn't answer, but the architecture needs an answer), and *dependencies* (outside work we depend on).
2. **Risks:** what could go wrong and harm the system or its users, for example national readiness.
3. **Technical debt:** shortcuts taken on purpose, to be paid back later.

**arc42:** a list of risks and technical debt, ordered by priority, with measures to reduce them (docs.arc42.org/section-11). The open points are our addition (see [Fit with arc42](#fit-with-arc42)).

**One entry per point.** Each entry is a level-4 heading with a fixed, short anchor, so that links keep working when the title changes. Add open points in alphabetical order of their title within their group, so that pull requests rarely add entries at the same place. Order risks and technical debt by priority, highest first.

```md
#### Who chooses the type of a dataset {#dataset-type-choice}

- **What is open:** … <GovRef id="II.1" />
- **Why it matters:** …
- **Tracked in:** [issue #85](https://github.com/GenomicDataInfrastructure/system-architecture/issues/85).
```

For a **risk**, use *What could happen*, *Probability* (low, medium or high), *Impact* (low, medium or high), *Mitigation*, *Owner* and *Tracked in*. For **technical debt**, use *What we owe*, *Why we took it*, *Impact* and *How to pay it back*, and *Tracked in*.

On the page that raises the point, link each point to its entry:

```md
:::caution[Open point]
The governance doesn't say who chooses the type of a dataset. See [chapter 11](/risks#dataset-type-choice).
:::
```

**Rules:**

- Only the chapter 11 entry links to the GitHub issue; pages link to the entry.
- Add every governance section an entry cites to `governance_refs` of chapter 11, one per line.
- When a point is settled (an ADR, a new governance version, or a finished piece of work), remove its entry and update the pages that link to it. `npm run check` and `npm run build` fail while a page still links to a removed entry.
- If two pull requests add entries at the same place, Git reports a conflict: keep both entries.

## Reference pages

- **Glossary:** governance definitions are quoted word for word (decision D-016). Architecture terms are marked "architecture term".
- **Reader guides:** each question links to the page that answers it. Add questions as pages are written. Remove none without asking the architecture lead.
- **National implementation profile template:** keep it to one page per country: national actors, deployment pattern, and a table *common requirement · how the country meets it · evidence*.

**arc42:** the glossary holds the important domain and technical terms, so that everyone understands them the same way, without synonyms (docs.arc42.org/section-12). For our agreed departure, see [Fit with arc42](#fit-with-arc42).
