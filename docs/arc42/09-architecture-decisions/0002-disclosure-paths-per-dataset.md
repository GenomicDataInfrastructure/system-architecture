---
title: "ADR-0002 Support all three types of dataset; the Member Country chooses the 1+MG type"
slug: /decisions/0002-disclosure-paths-per-dataset
sidebar_position: 2
owner: "@brunopacheco1"
reviewers: []
status: draft
wave: 1
audience: [policy, legal, dpo, security, implementer]
governance_refs: ["II.1", "II.2", "II.4", "III", "VI.1.3", "VI.1.5", "VI.4.4", "VI.4.5", "VII.2.1", "VII.2.2", "VII.3.1", "VII.3.2", "VII.4.3", "VII.4.4", "VII.4.6", "VII.4.7", "VII.5.1", "VII.5.4", "VII.5.5", "VIII.3.1", "VIII.3.3"]
last_reviewed:
---

<InShort>

- This architecture decision record (ADR) decides which types of dataset the system supports, and who chooses the type of a dataset. For 1+MG compliant datasets, a 1+MG Data Holder in the Member Country decides on access. For 1+MG cohort datasets, the Genome EDIC decides. Externally governed datasets follow their own rules.
- The target architecture supports all three types. Each Member Country chooses between the two 1+MG types for its datasets, before any data are included. This is still to be confirmed.
- The order in which the types are built is a separate decision: ADR-0003.

</InShort>

| Field | Value |
|---|---|
| Status | Proposed |
| Date | 2026-10-27 (first proposed 2026-09-28) |
| Deciders | B. Pacheco (architecture lead); to be confirmed by the taskforce |

## Context

The governance defines three types of dataset <GovRef id="III" />:

- **[1+MG compliant datasets](/concepts/dataset-types):** a [1+MG Data Holder](/glossary#1mg-data-holder) discloses them to [Users](/glossary#user), as controller.
- **[1+MG cohort datasets](/concepts/dataset-types):** the [Genome EDIC](/glossary#genome-edic) discloses them to Users, as controller.
- **[Externally governed datasets](/concepts/dataset-types):** they meet inclusion criteria on quality and <Acronym id="ELSI" /> and can be found in the catalogue, but access follows their own rules, not the 1+MG data governance.

For the access decision, the governance describes two alternative scenarios. In the first, the legal responsibility is at national level (1+MG compliant data). In the second, it lies with the Genome EDIC legal entity (1+MG cohort data) <GovRef id="II.1" />. How the national default came about:

- After discussion in the GDI Pillar I GOV group of governmental representatives, a vote kept the legal responsibility for the access decision at national level <Cite id="dg" />.
- The governance calls it the vote for a decentralised approach <GovRef id="VII.2.1" />, and notes that Pillar I voted on an earlier version of the text <GovRef id="II.1" />.
- The Genomic Data Infrastructure (<Acronym id="GDI" />) project dates the vote to May 2025, attributes it to the member states, and calls the result an interim governance, until genomic data can be shared through the European Health Data Space (<Acronym id="EHDS" />) <Cite id="gdi-d3.4" />.
- The framework binds the Genome EDIC once its Assembly of Members adopts it <GovRef id="III" />.

The governance added externally governed datasets later, for data providers not willing or able to follow the harmonised governance, where no other 1+MG Data Holder is available in their country <GovRef id="VII.2.1" />.

Two questions remain. This ADR answers them:

- **Which types the system must support.** The governance describes all three, but doesn't say whether the system must offer all of them.
- **Who chooses the type of a dataset, and at which level.** The governance asks each Genome EDIC Member Country to decide on "a national strategy for the responsibility of downstream data disclosure", and to nominate, where applicable, its 1+MG Data Holders <GovRef id="VI.1.3" />. This happens before any data are included, because the choice becomes part of the consent for inclusion <GovRef id="VI.1.3" /> <GovRef id="VI.1.5" />. The governance doesn't say whether the country chooses once, per [1+MG Data Provider](/glossary#1mg-data-provider) or per dataset, nor whether it may nominate no 1+MG Data Holder at all.

When each type can be offered is decided in [ADR-0003](/decisions/0003-implementation-in-steps).

The decision must work in all these situations:

| Situation | Example |
|---|---|
| A [Genome EDIC Member Country](/glossary#genome-edic-member-country) wants the access decision to stay national | It names a 1+MG Data Holder for its data |
| A Member Country prefers the Genome EDIC to decide | It makes its data available as 1+MG cohort data |
| A data provider can't or won't follow the 1+MG data governance | No other 1+MG Data Holder is available in its country <GovRef id="VII.2.1" /> |
| A country is not a full member of the Genome EDIC | Its data providers can't be 1+MG Data Providers <GovRef id="III" />. The governance doesn't consider such data yet; the Member Countries may decide on a model later <GovRef id="II.4" /> |
| The data are governed by another project or by a health data access body | Genome of Europe data for the Genome of Europe consortium <Cite id="gdi-d3.4" />; data made available through the EHDS <GovRef id="VII.3.1" /> |
| Genomic data can be shared through the EHDS | The interim governance of May 2025 may end <Cite id="gdi-d3.4" /> |

## Options considered

The criteria:

1. **Follows the governance:** both scenarios for the access decision stay possible <GovRef id="II.1" />, and the legal responsibility stays at national level by default, as the vote reported in GDI D2.4 decided <Cite id="dg" />.
2. **Covers every situation** in the table above.
3. **One procedure for Users:** they start from one entry point, whatever the type of dataset. Once the Genome EDIC is operational, the [Genome EDIC CC](/glossary#genome-edic-central-coordination-genome-edic-cc) provides it <GovRef id="III" />; before that, the central User Portal does.
4. **A clear controller and processor for every processing step** (<Acronym id="GDPR" /> Art. 4(7), 5(2), 24, 26 and 28) <Cite id="gdpr" />.
5. **Can be built in steps:** the system works before the Genome EDIC is operational, and later adds the other paths without changing the User's procedure or the interfaces (see ADR-0003).

### Which types the system supports

| Option | 1. Governance | 2. Every situation | 3. One procedure | 4. Clear controller | 5. In steps |
|---|---|---|---|---|---|
| **A1. Only 1+MG compliant datasets** | Partly: no cohort scenario | No: leaves out cohort data, external data and countries that are not members | Yes | Yes | No: nothing works before the Genome EDIC is operational |
| **A2. Only 1+MG cohort datasets** (the Genome EDIC decides on all data) | No: against the vote for national responsibility | No | Yes | Yes | No |
| **A3. Only externally governed datasets** | No: the 1+MG data governance is never applied | No: leaves out data that should follow the 1+MG data governance | Partly: one entry point, then each dataset's own procedure | No 1+MG controller: each dataset keeps its own | Yes |
| **A4. 1+MG compliant and 1+MG cohort datasets** | Yes | No: leaves out external data and countries that are not members | Yes | Yes | No |
| **A5. All three types** | Yes | Yes | Yes: one entry point; the two 1+MG paths share one procedure | Yes for the two 1+MG paths; externally governed datasets keep their own | Yes, if the type is part of the interfaces from the start |

For 1+MG compliant datasets, whether the Genome EDIC is joint controller with the 1+MG Data Holder is still open <GovRef id="VII.2.2" /> <GovRef id="VII.5.5" />. The open point affects A1, A4 and A5 alike, so it doesn't change the ranking.

### Who chooses the type of a dataset

- **B1. The Member Country, for its datasets.** The governance already asks it to decide the national strategy for downstream disclosure and to nominate its 1+MG Data Holders <GovRef id="VI.1.3" />. It keeps the responsibility at national level, and uses the freedom the governance gives to each country to organise its national roles <GovRef id="II.2" />. The [1+MG NCP](/glossary#1mg-national-coordination-point-1mg-ncp), mandated by the Member Country, already checks each dataset when it is included <GovRef id="VI.4.4" />.
- **B2. The 1+MG Data Provider, for each dataset.** It is closest to the data and to their legal basis. But a data provider alone can't name a 1+MG Data Holder, or make the Genome EDIC the controller.
- **B3. The [Genome EDIC Assembly of Members](/glossary#genome-edic-assembly-of-members), for all countries.** One rule for everyone, but it takes away a choice the governance leaves to each country <GovRef id="II.2" />.

| Option | 1. Governance | 2. Every situation | 3. One procedure | 4. Clear controller | 5. In steps |
|---|---|---|---|---|---|
| **B1. Member Country** | Yes: it already decides the national strategy <GovRef id="VI.1.3" /> | Yes: each country can choose either 1+MG type | Yes: the type is in the catalogue; Users apply the same way | Yes: the choice names the controller before inclusion | Yes: each country chooses when the path it wants exists |
| **B2. 1+MG Data Provider** | Partly: it can't name a 1+MG Data Holder or make the Genome EDIC controller | Partly: only where the country agrees | Yes | Partly: depends on choices the provider can't make alone | Yes |
| **B3. Assembly of Members** | No: takes away a national choice <GovRef id="II.2" /> | No: one type for all countries | Yes | Yes | Partly: all countries wait for the same path |

## Decision

Options A5 and B1:

- **Which types:** the system supports all three types of dataset.
- **Who chooses:** each Genome EDIC Member Country chooses whether its datasets are 1+MG compliant or 1+MG cohort datasets, as part of its national strategy for downstream disclosure, before any data are included <GovRef id="VI.1.3" />. Still to be confirmed: the level of the choice (per dataset, per 1+MG Data Provider or for the whole country), and whether a country may nominate no 1+MG Data Holder and make all its data available as 1+MG cohort data. A data provider that can't follow the 1+MG data governance offers its data as externally governed datasets <GovRef id="VII.2.1" />.

In detail:

- **The Member Country decides** which organisation acts as 1+MG Data Holder for its data, or whether its data are made available as 1+MG cohort data with the Genome EDIC as controller. A 1+MG Data Holder is always an organisation in a Genome EDIC Member Country <GovRef id="III" />.
- **The system supports both 1+MG paths in every Member Country,** and a single access request can cover datasets of both types.
- **Externally governed datasets are not part of a 1+MG access request.** The User follows the dataset's own procedure.
- **A country that is not a full member of the Genome EDIC** can offer only externally governed datasets: its data providers can't be 1+MG Data Providers <GovRef id="III" />. The governance doesn't consider data from such countries yet <GovRef id="II.4" />, so this is the architecture's reading until the Member Countries decide on a model.
- **The catalogue entry of each dataset states its type and who reviews and decides.** The governance already asks the 1+MG NCP (for cohort data) and the 1+MG Data Holder (for compliant data) to say with whom access applications are shared <GovRef id="VI.4.4" /> <GovRef id="VI.4.5" />.

| | 1+MG compliant datasets | 1+MG cohort datasets | Externally governed datasets |
|---|---|---|---|
| **Who decides on access** (research, policy development, <Acronym id="QM" /> in healthcare) | The 1+MG Data Holder <GovRef id="VII.5.4" /> | The Genome EDIC. The Genome EDIC CC adopts and documents the decision <GovRef id="VII.5.5" /> | Not the Genome EDIC: the data provider's own procedure, or a health data access body under the EHDS <GovRef id="VII.3.1" /> |
| **Controller for the access decision** | The 1+MG Data Holder <GovRef id="III" />; whether the Genome EDIC is joint controller with it is open <GovRef id="VII.2.2" /> <GovRef id="VII.5.5" /> | The Genome EDIC <GovRef id="III" /> | Outside the 1+MG data governance: the dataset's own |
| **Who reviews** (research, policy development, QM in healthcare) | The 1+MG Data Holder organises the review through an internal or external [Local DAC](/glossary#local-dac) without conflicts of interest, and considers the opinion of the [1+MG DAC](/glossary#1mg-dac) <GovRef id="VII.4.6" /> | 1+MG Data Providers and/or Local DACs, as the Member Country determines, and the 1+MG DAC <GovRef id="VII.4.7" />. A national veto is possible where applicable <GovRef id="VII.5.1" /> | Outside the governance |
| **Data protection impact assessment (<Acronym id="DPIA" />)** | The 1+MG Data Holder, with prior consultation of the data protection authority <GovRef id="VII.5.4" />, supported by the Genome EDIC CC <GovRef id="VII.5.5" /> | The Genome EDIC CC, with prior consultation of the data protection authority <GovRef id="VII.5.5" /> | Outside the governance |
| **Healthcare reuse** | No formal access decision per request: access rests on the general data use agreement the [User Organisation](/glossary#user-organisation) signed for healthcare reuse <GovRef id="VII.5.4" />. One member of the 1+MG DAC and a co-reviewer agreed with the 1+MG Data Holder check the request, within 1 to 3 working days <GovRef id="VII.4.3" /> | Same: no access decision per request <GovRef id="VII.4.3" /> <GovRef id="VII.5.4" />. At least two people check it <GovRef id="VII.4.3" /> | Not applicable |
| **What the system does** | Routes the request to the 1+MG DAC and, through the 1+MG NCP, to each 1+MG Data Holder <GovRef id="VII.3.2" /> <GovRef id="VII.4.4" />; collects the decisions, and informs stakeholders through the 1+MG NCP <GovRef id="VII.5.4" /> | Routes the request to the reviewers, records the Genome EDIC decision and informs stakeholders through the 1+MG NCP <GovRef id="VII.5.5" /> | Lists the dataset, sends Users to the data provider or the EU dataset catalogue <GovRef id="VII.3.1" />, and lets Users import the data into an <Acronym id="SPE" />, after a security review by the 1+MG IT infrastructure provider <GovRef id="VIII.3.1" /> <GovRef id="VIII.3.3" /> |

:::caution[Open points]
- **At which level the type is chosen.** The Member Country decides who is responsible for disclosing its data <GovRef id="VI.1.3" />. Whether it chooses once for the country, per 1+MG Data Provider or per dataset, and whether it may nominate no 1+MG Data Holder at all, is open. This ADR leaves the level to the Member Country. To be confirmed with the Genome EDIC governance bodies. See [chapter 11](/risks#dataset-type-choice).
- **Whether the Genome EDIC is joint controller with the 1+MG Data Holder** for 1+MG compliant datasets <GovRef id="VII.2.2" /> <GovRef id="VII.5.5" />. See [chapter 11](/risks#joint-controllership).
- **Whether one dataset can be of more than one type,** for example part of it disclosed as 1+MG compliant data and part as 1+MG cohort data. See [chapter 11](/risks#dataset-multiple-types).
- **When a national veto applies** to 1+MG cohort data ("where applicable") <GovRef id="VII.5.1" />. See [chapter 11](/risks#national-veto).
- **Data from countries that are not members of the Genome EDIC.** The governance considers only data from Genome EDIC Member Countries; models for other countries could be considered, if the Member Countries decide so <GovRef id="II.4" />. Until then, this ADR reads such data as externally governed. See [chapter 11](/risks#non-member-country-data).
:::

## Consequences

How the three types work in each phase of the lifecycle is described in [8.12 Types of dataset](/concepts/dataset-types).

### Per scope

- **[European scope](/glossary#european-scope):** [5.1.2 Access request management](/building-blocks/european/access-request-management) handles both 1+MG paths in one request. For 1+MG cohort data, the Genome EDIC decides; the Genome EDIC CC adopts and documents the decision, and carries out the data protection impact assessment. The Genome EDIC CC remains the one-stop shop: the User follows the same procedure whatever the path.
- **[National scope](/glossary#national-scope):** [5.2.2 Access review and decision support](/building-blocks/national/access-decision-support) serves 1+MG Data Holders and Local DACs. Each Member Country records its choices in its [national implementation profile](/appendix/national-profile-template).
- **[User Organisation scope](/glossary#user-organisation-scope):** no difference in how to apply.
- **Catalogue** ([5.1.1](/building-blocks/european/user-portal-and-catalogue), [5.2.1](/building-blocks/national/ncp-node)): every dataset carries its type and its reviewers.
- **Controllers** ([8.2](/concepts/roles)): the controller for the access decision differs per path.
- **[Healthcare reuse](/runtime/use/healthcare-reuse) fast track:** the four-eyes check is organised differently per path <GovRef id="VII.4.3" />.

### For data subjects

The type of a dataset names the controller for the disclosure. That is part of the information to [data subjects](/glossary#data-subject), and of their consent, at inclusion <GovRef id="VI.1.3" /> <GovRef id="VI.1.5" />. So the type is set before inclusion. Changing it later, for example from 1+MG compliant to 1+MG cohort, needs new information to data subjects, and new consent where consent is the legal basis. ADR-0003 takes this into account in the order of the steps.

### Easier and harder

- **Easier:** every Member Country finds a path that fits its national strategy; Users apply the same way for every 1+MG dataset; data from other projects and from countries that are not members can still be found and used.
- **Harder:** three paths to build and test; every catalogue entry must carry its type from the start; a country that changes its mind about the type must inform its data subjects again.
