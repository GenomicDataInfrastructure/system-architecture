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
| [ADR-0002](/decisions/0002-disclosure-paths-per-dataset) | Support all three types of dataset; the Member Country chooses the 1+MG type | Proposed |
| [ADR-0003](/decisions/0003-implementation-in-steps) | Build the system in steps, starting with externally governed datasets | Proposed |
| [ADR-0004](/decisions/0004-identity-and-authorisation) | Identity federation and authorisation across scopes | To be decided (wave 3) |
| [ADR-0005](/decisions/0005-identity-link-and-key-coded-identifiers) | Where the link between identity and key-coded identifiers is held | To be decided (wave 3) |
| [ADR-0006](/decisions/0006-trust-boundaries) | Trust boundaries between operators and what each crossing requires | To be decided (wave 3) |
| [ADR-0007](/decisions/0007-catalogue-metadata-and-federation) | Catalogue metadata standard and how catalogues are federated | To be decided (wave 3) |
| [ADR-0008](/decisions/0008-connection-to-healthdata-eu) | How the system connects to HealthData@EU | To be decided (wave 3) |
| [ADR-0009](/decisions/0009-joint-controllership-disclosure) | The Genome EDIC and the 1+MG Data Holder are joint controllers for the disclosure of 1+MG compliant datasets | Proposed |
| [ADR-0010](/decisions/0010-spe-provider-role) | SPE providers are sub-processors for the User's data and controllers for their own platform processing | Proposed |

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
