---
title: "ADR-0002 Who decides on access, per type of dataset"
slug: /decisions/0002-disclosure-paths-per-dataset
sidebar_position: 2
owner: "@brunopacheco1"
reviewers: []
status: draft
wave: 1
audience: [policy, legal, dpo, implementer]
governance_refs: ["II.1", "III", "VI.4.4", "VII.2.1", "VII.3.1", "VII.4.3", "VII.4.6", "VII.4.7", "VII.5.1", "VII.5.4", "VII.5.5", "VIII.3.3"]
last_reviewed:
---

<InShort>

- For 1+MG compliant datasets, a 1+MG Data Holder in the Member Country decides on access. For 1+MG cohort datasets, the Genome EDIC decides.
- Each Member Country decides which path applies to its data. The Genome EDIC does not decide this.
- The system supports both paths for every dataset, and lists externally governed datasets without deciding on access to them.

</InShort>

| Field | Value |
|---|---|
| Status | Proposed |
| Date | 2026-09-24 |
| Deciders | B. Pacheco (architecture lead); to be confirmed by the taskforce |

## Context

The governance defines three types of dataset <GovRef id="III" />:

- **1+MG compliant datasets:** a 1+MG Data Holder discloses them to Users, as controller.
- **1+MG cohort datasets:** the Genome EDIC discloses them to Users, as controller.
- **Externally governed datasets:** they meet inclusion criteria on quality and ELSI and can be found in the catalogue, but access follows their own rules, not the 1+MG data governance.

For the access decision, the governance describes two alternative scenarios. In the first, the legal responsibility is at national level (1+MG compliant data). In the second, it lies with the Genome EDIC legal entity (1+MG cohort data) <GovRef id="II.1" />. GDI Pillar I voted to keep the legal responsibility for the access decision at national level <Cite id="dg" />. Externally governed datasets were added afterwards, for Data Providers that cannot follow the harmonised governance when no 1+MG Data Holder is available in their country <GovRef id="VII.2.1" />.

The governance does not say who chooses the path for a given dataset.

## Options considered

1. **Only 1+MG compliant data.** Simple, but it leaves out countries or Data Providers without a 1+MG Data Holder, and ignores the cohort scenario of the governance.
2. **The Genome EDIC decides on all data.** This contradicts the vote for national responsibility and the principle that data remain under national responsibility.
3. **Support all three types. The Member Country decides which path applies to its data.** The catalogue entry of each dataset records the path.

## Decision

Option 3.

- **The Member Country decides** which organisation acts as 1+MG Data Holder for its data, or whether its data are made available as 1+MG cohort data with the Genome EDIC as controller. A 1+MG Data Holder is always an organisation in a Genome EDIC Member Country <GovRef id="III" />.
- **The system supports both paths for every dataset,** and a single access request can cover datasets of both types.
- **The catalogue entry of each dataset states its type and who reviews and decides.** For 1+MG cohort data, the 1+MG NCP already provides this information <GovRef id="VI.4.4" />.

| | 1+MG compliant datasets | 1+MG cohort datasets | Externally governed datasets |
|---|---|---|---|
| **Who decides on access** | The 1+MG Data Holder <GovRef id="VII.5.4" /> | The Genome EDIC. The Genome EDIC CC adopts and documents the decision <GovRef id="VII.5.5" /> | Not the Genome EDIC: the Data Provider's own procedure, or a health data access body under the EHDS <GovRef id="VII.3.1" /> |
| **Who reviews** | As the 1+MG Data Holder decides, without conflicts of interest, considering the opinion of the 1+MG DAC <GovRef id="VII.4.6" /> | 1+MG Data Providers and/or Local DACs, as the Member Country determines, and the 1+MG DAC <GovRef id="VII.4.7" />. A national veto is possible where applicable <GovRef id="VII.5.1" /> | Outside the governance |
| **Data protection impact assessment** | The 1+MG Data Holder, supported by the Genome EDIC CC <GovRef id="VII.5.5" /> | The Genome EDIC CC, with prior consultation of the data protection authority <GovRef id="VII.5.5" /> | Outside the governance |
| **What the system does** | Routes the request to each 1+MG Data Holder and collects the decisions | Routes the request to the reviewers, records the Genome EDIC decision and informs stakeholders through the 1+MG NCP <GovRef id="VII.5.5" /> | Lists the dataset, sends Users to the Data Provider or the EU dataset catalogue <GovRef id="VII.3.1" />, and lets Users import the data into an SPE <GovRef id="VIII.3.3" /> |

:::caution[Open point]
The governance does not say who chooses between the two paths. This ADR assumes that the Member Country does. To be confirmed with the Genome EDIC governance bodies.
:::

## Consequences

How the three types work in each phase of the lifecycle is described in [8.12 Types of dataset](/concepts/dataset-types).


- **European scope:** access request management (5.1.2) handles both paths in one request. For 1+MG cohort data, the Genome EDIC CC takes the decision and the data protection impact assessment. The Genome EDIC CC remains the one-stop shop: the User follows the same procedure whatever the path.
- **National scope:** access decision support (5.2.2) serves 1+MG Data Holders and Local DACs. Each Member Country records its choices in its national implementation profile.
- **User Organisation scope:** no difference in how to apply.
- **Catalogue** (5.1.1, 5.2.1): every dataset carries its type and its reviewers.
- **Controllers** (8.2): the controller for the access decision differs per path.
- **Healthcare reuse fast track:** the four-eyes check is organised differently per path <GovRef id="VII.4.3" />.
