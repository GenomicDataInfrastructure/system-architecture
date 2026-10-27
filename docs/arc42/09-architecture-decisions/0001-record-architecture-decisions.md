---
title: "ADR-0001 Record architecture decisions"
slug: /decisions/0001-record-architecture-decisions
sidebar_position: 1
owner: "@brunopacheco1"
reviewers: []
status: draft
wave: 2
audience: [implementer, policy]
governance_refs: ["I", "II.1", "II.2", "V.1.2"]
last_reviewed:
---

<InShort>

- This architecture decision record (ADR) decides that every significant architecture decision is recorded as a short ADR in chapter 9, with its context, the options considered, the decision and its consequences.
- A decision is significant when it affects more than one scope, changes an interface, implements a governance choice, or was disputed in a review.
- ADRs are never deleted. A later ADR can supersede an earlier one; both stay, and each links to the other.

</InShort>

| Field | Value |
|---|---|
| Status | Proposed |
| Date | 2026-10-27 (first proposed 2026-09-18) |
| Deciders | B. Pacheco (architecture lead); to be confirmed by the taskforce |

## Context

Many organisations in many countries will build and run the [Genome EDIC](/glossary#genome-edic) system over several years. People who join later, auditors and Member Countries need to know why the system looks the way it does, including decisions taken before they joined.

The rules will change. The governance expects the Member Countries to keep defining the scope, conditions and requirements together <GovRef id="II.2" />, and leaves the technical requirements to committees and working groups <GovRef id="II.1" />. When a rule changes, it must be possible to find which decisions rested on it.

The [Genome EDIC CC](/glossary#genome-edic-central-coordination-genome-edic-cc) is to be the one authoritative place for all relevant information across the federated system, including its own documentation website <GovRef id="V.1.2" />. Until it is operational, this documentation is a working draft of the architecture taskforce: experts from the GDI project and the 1+MG initiative who write and maintain it. The [Genome EDIC Assembly of Members](/glossary#genome-edic-assembly-of-members) decides on the principles and the minimum requirements <GovRef id="I" />, but no body has been named to adopt the system architecture.

Two kinds of decision exist in this repository, and they are kept apart:

- **Architecture decisions** are about the system: what it does, how it is divided, which interfaces it has. They are <Acronym id="ADR">ADRs</Acronym>, in this chapter, and published.
- **Documentation decisions** are about how this documentation is written and organised. They are numbered D-001, D-002 and so on, and kept in the project's working files, which are not published.

## Options considered

The criteria:

1. **Reasons stay findable:** a reader can find why a decision was taken, by whom and when, years later.
2. **Traceable:** each decision names the governance sections and legal acts it rests on, so that it can be reviewed when they change.
3. **Reviewable:** decisions go through the same review as the pages, in a pull request.
4. **Low effort:** recording a decision takes less than an hour.
5. **Public:** Member Countries, implementers and the public can read the decisions next to the architecture.

| Option | 1. Findable | 2. Traceable | 3. Reviewable | 4. Low effort | 5. Public |
|---|---|---|---|---|---|
| **O1. No separate record:** decisions are only reflected in the pages | No: the reason and the options rejected are lost | No | Partly | Yes | Yes |
| **O2. A decision log in the working files,** like the documentation decisions | Partly: one line per decision, little context | Partly | Yes | Yes | No: not published |
| **O3. ADRs in chapter 9,** one page per decision, in the format of Michael Nygard, a widely used short format for decision records <Cite id="nygard-adr" />, with the options considered | Yes | Yes: each record lists the governance sections | Yes | Yes, with a short template | Yes |
| **O4. Decisions in the issue tracker or a wiki** | Partly: mixed with discussion, hard to find the final word | Partly | Partly | Yes | Partly |

arc42 recommends recording the important decisions in section 9, with their criteria, the alternatives rejected and the date, and names ADRs as a suitable format <Cite id="arc42" />.

## Decision

Option O3. Each significant architecture decision is recorded as an ADR in this chapter, using the [ADR template](/decisions/template). In detail:

- **When to write one.** A decision is significant when it affects more than one scope, changes an interface, implements a governance choice, or was disputed in a review (as in the writing guide, [page recipes](/handbook/recipes#architecture-decision-record)).
- **What it contains.** Context, the criteria and the options considered, the decision, and its consequences for each scope. One decision per ADR, kept to about one page.
- **Status.** Proposed, accepted, deprecated (no longer valid), or superseded by a later ADR.
- **Never deleted.** A decision that no longer holds is deprecated, or superseded by a new ADR. The superseded ADR keeps its text, and links to the ADR that supersedes it; the new ADR links back to the one it supersedes.
- **Numbering.** ADRs are numbered in order: ADR-0001, ADR-0002, and so on. A number is never reused.
- **Date and deciders.** Each ADR gives the date of its current version, the date it was first proposed, and who decided. Until the open point below is settled, the architecture lead proposes, and the taskforce confirms.
- **Review.** An ADR goes through the same review as the pages (the writing guide, [page choreography](/handbook/choreography)). A disagreement about the architecture that review doesn't settle goes to the architecture lead, who may ask for an ADR ([drafting roles](/handbook/drafting-roles)).

:::caution[Open point]
No body has been named to adopt the system architecture, so who confirms an ADR, and when it binds Member Countries, is not decided. See [chapter 11](/risks#architecture-adoption).
:::

## Consequences

- **Easier:** decisions and their reasons stay available to new taskforce members, auditors and Member Countries. When the governance changes, the governance sections in each ADR show which decisions to review.
- **Harder:** writing an ADR takes time. The template is kept short to limit the effort.
- **Per scope:** decisions that affect the [European](/glossary#european-scope), [national](/glossary#national-scope) or [User Organisation scope](/glossary#user-organisation-scope) say so in their consequences. Each Member Country records its own national choices in its [national implementation profile](/appendix/national-profile-template), not as ADRs.
- **Later:** once the Genome EDIC CC runs the documentation system of the federation <GovRef id="V.1.2" />, the ADRs move there with the rest of the architecture.
