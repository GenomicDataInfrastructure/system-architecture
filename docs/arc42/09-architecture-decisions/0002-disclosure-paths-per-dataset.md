---
title: "ADR-0002 Who decides on access, per type of dataset"
slug: /decisions/0002-disclosure-paths-per-dataset
sidebar_position: 2
owner: "@brunopacheco1"
reviewers: []
status: draft
wave: 1
audience: [policy, legal, dpo, implementer]
governance_refs: ["II.1", "II.2", "II.4", "III", "VI.1.3", "VI.1.5", "VI.4.4", "VI.4.5", "VII.2.1", "VII.3.1", "VII.4.3", "VII.4.6", "VII.4.7", "VII.5.1", "VII.5.4", "VII.5.5", "VIII.3.3"]
last_reviewed:
---

<InShort>

- For 1+MG compliant datasets, a 1+MG Data Holder in the Member Country decides on access. For 1+MG cohort datasets, the Genome EDIC decides. Externally governed datasets follow their own rules.
- The target architecture supports all three types. This ADR proposes that each Member Country chooses between the two 1+MG types for its datasets. This is still to be confirmed.
- The system is built in steps (proposed). For access to data, GDI supports only externally governed datasets, because the Genome EDIC can't be assumed to be operational before GDI ends. The other two types follow when it is.

</InShort>

| Field | Value |
|---|---|
| Status | Proposed |
| Date | 2026-09-28 |
| Deciders | B. Pacheco (architecture lead); to be confirmed by the taskforce |

## Context

The governance defines three types of dataset <GovRef id="III" />:

- **[1+MG compliant datasets](/concepts/dataset-types):** a [1+MG Data Holder](/glossary#1mg-data-holder) discloses them to [Users](/glossary#user), as controller.
- **[1+MG cohort datasets](/concepts/dataset-types):** the [Genome EDIC](/glossary#genome-edic) discloses them to Users, as controller.
- **[Externally governed datasets](/concepts/dataset-types):** they meet inclusion criteria on quality and <Acronym id="ELSI" /> and can be found in the catalogue, but access follows their own rules, not the 1+MG data governance.

For the access decision, the governance describes two alternative scenarios. In the first, the legal responsibility is at national level (1+MG compliant data). In the second, it lies with the Genome EDIC legal entity (1+MG cohort data) <GovRef id="II.1" />. <Acronym id="GDI" /> D2.4 reports a vote that the legal responsibility for the access decision stays at national level, after discussion in the GDI Pillar I GOV group (D2.4, section 3) <Cite id="dg" />. The governance refers to it as the vote for a decentralised approach <GovRef id="VII.2.1" />, and notes that Pillar I had voted on an earlier version <GovRef id="II.1" />. GDI D3.4 dates the member states' vote to May 2025 and calls it an interim governance until genomic data can be shared through the European Health Data Space (<Acronym id="EHDS" />) <Cite id="gdi-d3.4" />. The governance added externally governed datasets later, for data providers that cannot follow the harmonised governance when no 1+MG Data Holder is available in their country <GovRef id="VII.2.1" />.

Three questions remain. This ADR answers them:

- **Which types the system must support.** The governance describes all three, but doesn't say whether the system must offer all of them.
- **At which level the type of a dataset is chosen.** The governance asks each Member Country to decide on a national strategy for the responsibility of downstream data disclosure, and to nominate, where applicable, its 1+MG Data Holders <GovRef id="VI.1.3" />, before any data are included <GovRef id="VI.1.5" />. It doesn't say whether the country chooses once, per 1+MG Data Provider or per dataset, nor whether it may nominate no 1+MG Data Holder at all.
- **When each type can be offered.** The 1+MG compliant and 1+MG cohort paths need the Genome EDIC: the [Genome EDIC CC](/glossary#genome-edic-central-coordination-genome-edic-cc) is the one-stop shop for Users, and the [1+MG DAC](/glossary#1mg-dac) reviews access requests <GovRef id="III" />. The Genome EDIC can't be assumed to be operational before GDI ends <Cite id="gdi-d3.4" />.

The decision must work in all these situations:

| Situation | Example |
|---|---|
| A [Genome EDIC Member Country](/glossary#genome-edic-member-country) wants the access decision to stay national | It names a 1+MG Data Holder for its data |
| A Member Country prefers the Genome EDIC to decide | It makes its data available as 1+MG cohort data |
| A data provider can't follow the 1+MG data governance | No 1+MG Data Holder is available in its country <GovRef id="VII.2.1" /> |
| A country is not a full member of the Genome EDIC | Its data providers can't be [1+MG Data Providers](/glossary#1mg-data-provider) <GovRef id="III" />. The governance doesn't consider such data yet; the Member Countries may decide on a model later <GovRef id="II.4" /> |
| The data are governed by another project or by a health data access body | Genome of Europe data for the Genome of Europe consortium <Cite id="gdi-d3.4" />; data made available through the EHDS <GovRef id="VII.3.1" /> |
| The Genome EDIC is not operational yet | The GDI project <Cite id="gdi-d3.4" /> |
| Genomic data can be shared through the EHDS | The interim governance of May 2025 ends <Cite id="gdi-d3.4" /> |

## Options considered

The criteria:

1. **Follows the governance:** both scenarios for the access decision stay possible <GovRef id="II.1" />, and the legal responsibility stays at national level by default, as the member states voted (D2.4, section 3) <Cite id="dg" />.
2. **Covers every situation** in the table above.
3. **One procedure for Users:** they start from one entry point, whatever the type of dataset. Once the Genome EDIC is operational, the Genome EDIC CC provides it <GovRef id="III" />; before that, the central User Portal does.
4. **A clear controller for every access decision,** as data protection by design requires (<Acronym id="GDPR" /> Art. 25) <Cite id="gdpr" />.
5. **Can be built in steps:** the system works before the Genome EDIC is operational, and later adds the other paths without changing the User's procedure or the interfaces.

### Which types the system supports

| Option | 1. Governance | 2. Every situation | 3. One procedure | 4. Clear controller | 5. In steps |
|---|---|---|---|---|---|
| **A1. Only 1+MG compliant datasets** | Partly: no cohort scenario | No: leaves out cohort data, external data and countries that are not members | Yes | Yes | No: nothing works before the Genome EDIC is operational |
| **A2. Only 1+MG cohort datasets** (the Genome EDIC decides on all data) | No: against the vote for national responsibility | No | Yes | Yes | No |
| **A3. Only externally governed datasets** | No: the 1+MG data governance is never applied | No: leaves out data that should follow the 1+MG data governance | Partly: one entry point, then each dataset's own procedure | No 1+MG controller: each dataset keeps its own | Yes |
| **A4. 1+MG compliant and 1+MG cohort datasets** | Yes | No: leaves out external data and countries that are not members | Yes | Yes | No |
| **A5. All three types** | Yes | Yes | Yes: one entry point; the two 1+MG paths share one procedure | Yes for the two 1+MG paths; externally governed datasets keep their own | Yes, if the type is part of the interfaces from the start |

### Who chooses the type of a dataset

- **B1. The Member Country, for its datasets.** The governance already asks it to decide the national strategy for downstream disclosure and to nominate its 1+MG Data Holders <GovRef id="VI.1.3" />. It keeps the responsibility at national level, and uses the freedom the governance gives to each country to organise its national roles <GovRef id="II.2" />. The [1+MG NCP](/glossary#1mg-national-coordination-point-1mg-ncp), mandated by the Member Country, already checks each dataset when it is included <GovRef id="VI.4.4" />.
- **B2. The 1+MG Data Provider, for each dataset.** It is closest to the data and to their legal basis. But a data provider alone can't name a 1+MG Data Holder, or make the Genome EDIC the controller.
- **B3. The [Genome EDIC Assembly of Members](/glossary#genome-edic-assembly-of-members), for all countries.** One rule for everyone, but it takes away a choice the governance leaves to each country <GovRef id="II.2" />.

## Decision

Options A5 and B1, built in steps:

- **Which types:** the system supports all three types of dataset.
- **Who chooses:** each Genome EDIC Member Country chooses whether its datasets are 1+MG compliant or 1+MG cohort datasets, as part of its national strategy for downstream disclosure <GovRef id="VI.1.3" />. Still to be confirmed: the level of the choice (per dataset, per 1+MG Data Provider or for the whole country), and whether a country may nominate no 1+MG Data Holder and make all its data available as 1+MG cohort data. A data provider that can't follow the 1+MG data governance offers its data as externally governed datasets <GovRef id="VII.2.1" />.
- **When:** the system is built in steps, and the order of the two 1+MG types is proposed (see [Implementation in steps](#implementation-in-steps)).

In detail:

- **The Member Country decides** which organisation acts as 1+MG Data Holder for its data, or whether its data are made available as 1+MG cohort data with the Genome EDIC as controller. A 1+MG Data Holder is always an organisation in a Genome EDIC Member Country <GovRef id="III" />.
- **The system supports both 1+MG paths in every Member Country,** and a single access request can cover datasets of both types (from step 3).
- **Externally governed datasets are not part of a 1+MG access request.** The User follows the dataset's own procedure.
- **A country that is not a full member of the Genome EDIC** can offer only externally governed datasets: its data providers can't be 1+MG Data Providers <GovRef id="III" />. The governance doesn't consider data from such countries yet <GovRef id="II.4" />, so this is the architecture's reading until the Member Countries decide on a model.
- **The catalogue entry of each dataset states its type and who reviews and decides.** The governance already asks for the information with whom the access application is shared: from the 1+MG NCP for 1+MG cohort data <GovRef id="VI.4.4" />, from the 1+MG Data Holder for 1+MG compliant data <GovRef id="VI.4.5" />.

| | 1+MG compliant datasets | 1+MG cohort datasets | Externally governed datasets |
|---|---|---|---|
| **Who decides on access** (research, policy development, QM in healthcare) | The 1+MG Data Holder <GovRef id="VII.5.4" /> | The Genome EDIC. The Genome EDIC CC adopts and documents the decision <GovRef id="VII.5.5" /> | Not the Genome EDIC: the data provider's own procedure, or a health data access body under the EHDS <GovRef id="VII.3.1" /> |
| **Controller for the access decision** | The 1+MG Data Holder <GovRef id="III" /> | The Genome EDIC <GovRef id="III" /> | Outside the 1+MG data governance: the dataset's own |
| **Who reviews** (research, policy development, QM in healthcare) | The 1+MG Data Holder organises the review through an internal or external local DAC without conflicts of interest, and considers the opinion of the 1+MG DAC <GovRef id="VII.4.6" /> | 1+MG Data Providers and/or [Local DACs](/glossary#local-dac), as the Member Country determines, and the 1+MG DAC <GovRef id="VII.4.7" />. A national veto is possible where applicable <GovRef id="VII.5.1" /> | Outside the governance |
| **Data protection impact assessment (<Acronym id="DPIA" />)** | The 1+MG Data Holder, with prior consultation of the data protection authority <GovRef id="VII.5.4" />, supported by the Genome EDIC CC <GovRef id="VII.5.5" /> | The Genome EDIC CC, with prior consultation of the data protection authority <GovRef id="VII.5.5" /> | Outside the governance |
| **Healthcare reuse** | No formal access decision per request: access rests on the framework data use agreement of the User Organisation <GovRef id="VII.5.4" />. The 1+MG DAC checks the plausibility of the request within 1 to 3 working days, and two people check it <GovRef id="VII.4.3" /> | Same: no access decision per request <GovRef id="VII.5.5" />. At least two people in the 1+MG DAC check it <GovRef id="VII.4.3" /> | Not applicable |
| **What the system does** | Routes the request to each 1+MG Data Holder and collects the decisions | Routes the request to the reviewers, records the Genome EDIC decision and informs stakeholders through the 1+MG NCP <GovRef id="VII.5.5" /> | Lists the dataset, sends Users to the data provider or the EU dataset catalogue <GovRef id="VII.3.1" />, and lets Users import the data into an <Acronym id="SPE" /> <GovRef id="VIII.3.3" /> |

:::caution[Open points]
- **At which level the type is chosen.** The Member Country decides the national strategy for downstream disclosure <GovRef id="VI.1.3" />. Whether it chooses once for the country, per 1+MG Data Provider or per dataset, and whether it may nominate no 1+MG Data Holder at all, is open. This ADR leaves the level to the Member Country. To be confirmed with the Genome EDIC governance bodies. See [chapter 11](/risks#dataset-type-choice).
- **Whether one dataset can be of more than one type,** for example part of it disclosed as 1+MG compliant data and part as 1+MG cohort data. See [chapter 11](/risks#dataset-multiple-types).
- **When a national veto applies** to 1+MG cohort data ("where applicable") <GovRef id="VII.5.1" />. See [chapter 11](/risks#national-veto).
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

### Implementation in steps

The architecture describes the target state. GDI can't deliver all three types before it ends, so the system is built in steps. Step 1 is what GDI delivers. The order of steps 2 and 3 is proposed.

| Step | Starts when | Types of dataset | Who decides on access | What the system adds |
|---|---|---|---|---|
| **1. GDI** | Now, until GDI ends in March 2027 | Externally governed datasets, for example Genome of Europe data for use by the Genome of Europe consortium. Also discovery that needs no access decision: metadata search, and allele frequencies and other data not related to individuals, which the governance leaves to a separate data governance in the Genome of Europe project <GovRef id="II.4" /> <Cite id="gdi-d3.4" /> | The dataset's own governance, for example the Genome of Europe's own access procedure | Catalogue entries that state their type; the central User Portal is the one entry point, and sends Users to the dataset's own access procedure; import into an SPE |
| **2. 1+MG compliant datasets** | The Genome EDIC is operational (the Genome EDIC CC and the 1+MG DAC work), and the Member Country has named a 1+MG Data Holder | Adds 1+MG compliant datasets | The 1+MG Data Holder, considering the opinion of the 1+MG DAC | Access request management routes requests to the 1+MG DAC and to each 1+MG Data Holder ([5.1.2](/building-blocks/european/access-request-management), [5.2.2](/building-blocks/national/access-decision-support)) |
| **3. 1+MG cohort datasets** | The Genome EDIC can act as controller for access decisions, and its Genome EDIC CC has done the data protection impact assessment | Adds 1+MG cohort datasets | The Genome EDIC | National review, with a national veto where applicable; the Genome EDIC CC records the decision and informs stakeholders through the 1+MG NCP |
| **Later** | Genomic data can be shared through the EHDS | The interim governance of May 2025 may change <Cite id="gdi-d3.4" /> | To be decided then | The connection to HealthData@EU ([8.11](/concepts/ehds-integration)) |

Three rules keep the steps compatible:

- **Build the interfaces for all three types from step 1.** Every catalogue entry states its type from the first dataset on, and the system uses it to send each User to the right procedure: in step 1 the dataset's own, later the 1+MG access request. Each step adds a route; it doesn't change what Users do.
- **1+MG compliant before 1+MG cohort (proposed).** The national path is the default the member states voted for. It also asks less of the Genome EDIC, which doesn't have to act as controller for access decisions. Member Countries that prefer the Genome EDIC to decide wait for step 3.
- **Each Member Country moves at its own pace.** A country offers 1+MG compliant datasets once the Genome EDIC is operational and the country has named a 1+MG Data Holder. A country that is not a full member of the Genome EDIC offers only externally governed datasets.

:::caution[Open point]
Steps 2 and 3 depend on the Genome EDIC being operational, which can't be assumed before GDI ends. See [chapter 11](/risks#genome-edic-operational).
:::
