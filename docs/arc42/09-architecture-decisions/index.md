---
title: "9. Architecture decisions"
sidebar_label: "9. Architecture decisions"
sidebar_position: 9
slug: /decisions
owner: TBD
reviewers: []
status: placeholder
wave: 3
audience: [policy, legal, elsi, security, dpo, implementer]
governance_refs: []
last_reviewed:
---

<InShort>

- _To be written: three plain-language bullets that answer the questions below._

</InShort>

## What this page must answer

- The list of architecture decision records (ADRs), their status and their date.

## Sources to start from

- Other: <Cite id="arc42" />

## Decision log

| ADR | Title | Status |
|---|---|---|
| [ADR-0001](/decisions/0001-record-architecture-decisions) | Record architecture decisions | Proposed |
| [ADR-0002](/decisions/0002-disclosure-paths-per-dataset) | Who decides on access, per type of dataset | Proposed |

## Candidate decisions to record

These choices are already made in the governance or in GDI. They should become ADRs so that their reasons are visible:

- Consent (or a specific legislative act) as the legal basis for making data available <GovRef id="III" />.
- Federated processing in national SPEs instead of pooling data centrally <GovRef id="II.2" />.
- No download of personal data; only non-personal results leave the SPE <GovRef id="II.2" />.
- "Key-coded identifier" instead of "pseudonym" <GovRef id="I" />.
- Interfaces first: components described by function, interfaces and standards, with the GDI Starter Kit and the GDI central services as reference implementation (documentation decisions D-007, D-020).

:::note[Placeholder]
This page has no content yet. The owner replaces this note and the questions above with the content.
:::
