---
title: "ADR-0003 Build the system in steps, starting with externally governed datasets"
slug: /decisions/0003-implementation-in-steps
sidebar_position: 3
owner: "@brunopacheco1"
reviewers: ["@rwwh", "@kjellp", "@TroelsRasmussen"]
status: in-review
wave: 1
audience: [policy, legal, dpo, security, implementer]
governance_refs: ["II.4", "III", "VI.1.3", "VI.1.5", "VII.3.2", "VII.4.4", "VII.5.4", "VII.5.5", "VIII.3.1"]
last_reviewed:
---

<InShort>

- This architecture decision record (ADR) decides the order in which the system offers the three types of dataset of ADR-0002.
- Until the Genome EDIC is operational, the system gives access only to externally governed datasets, because the Genome EDIC can't be assumed to be in place before the Genomic Data Infrastructure (GDI) project ends. The two 1+MG types follow when it is: 1+MG compliant datasets first, then 1+MG cohort datasets (proposed).
- Who runs the central services, and who answers for data protection and security, between the end of GDI and an operational Genome EDIC is still open.

</InShort>

| Field | Value |
|---|---|
| Status | Proposed |
| Date | 2026-10-27 |
| Deciders | B. Pacheco (architecture lead); to be confirmed by the taskforce |

## Context

[ADR-0002](/decisions/0002-disclosure-paths-per-dataset) decides that the target architecture supports all three types of dataset, and that each Genome EDIC Member Country chooses between the two 1+MG types. This ADR decides when each type can be offered.

- **The 1+MG paths need the Genome EDIC.** The [Genome EDIC CC](/glossary#genome-edic-central-coordination-genome-edic-cc) is the one-stop shop for Users, and the [1+MG DAC](/glossary#1mg-dac) reviews access requests <GovRef id="III" />.
- **The Genome EDIC can't be assumed to be operational before GDI ends** in March 2027 <Cite id="gdi-d4.4" />, because of the administrative process to create a European Digital Infrastructure Consortium (EDIC) <Cite id="gdi-d3.4" />.
- **The type of a dataset is part of the consent at inclusion.** It names the controller for the disclosure, so it is decided before any data are included <GovRef id="VI.1.3" /> <GovRef id="VI.1.5" />. Changing it later needs new information to data subjects, and new consent where consent is the legal basis (ADR-0002).
- **The <Acronym id="GDI" /> project works with data that need no 1+MG access decision:** Genome of Europe data, which the Genome of Europe consortium uses under its own legal basis, and data not related to individuals <Cite id="gdi-d3.4" />.

## Options considered

The criteria:

1. **Works now:** the system delivers access to some data before the Genome EDIC is operational.
2. **Follows the governance and the vote for national responsibility** ([ADR-0002](/decisions/0002-disclosure-paths-per-dataset), criterion 1).
3. **Asks no more of the Genome EDIC than it can do** at each step.
4. **No Member Country has to inform its data subjects again** because the system changed the order of the paths.
5. **One procedure for Users** at every step; each step adds a route, it doesn't change what Users do.

All options start with step 1 (externally governed datasets only), which is the only way to meet criterion 1. They differ in the order of the two 1+MG types.

| Option | 2. Governance | 3. Asks of the Genome EDIC | 4. No new information to data subjects | 5. One procedure |
|---|---|---|---|---|
| **C1. 1+MG compliant first, then 1+MG cohort** | Yes: the national path, which the vote kept as the rule, comes first | Least: in step 2 it doesn't act as controller for access decisions | Yes, if countries that prefer cohort data wait for step 3 instead of including data as compliant and switching | Yes |
| **C2. Both 1+MG types together** | Yes | Most: it must act as controller for access decisions, and its Genome EDIC CC must have done its DPIA, as soon as it is operational | Yes: no country waits | Yes |
| **C3. 1+MG cohort first** | No: puts the Genome EDIC's path before the national path the vote kept as the rule | High: as C2, from the start | Only for countries that want cohort data | Yes |

## Decision

Option C1, in these steps:

| Step | Starts when | Types of dataset | Who decides on access | What the system adds |
|---|---|---|---|---|
| **1. GDI** | Now, until the Genome EDIC is operational | Externally governed datasets (see below). Also discovery that needs no access decision: metadata search, and data that the governance treats as not related to individuals <GovRef id="II.4" /> | The dataset's own governance, for example the Genome of Europe's own access procedure | Catalogue entries that state their type; the central User Portal is the one entry point, and sends Users to the dataset's own access procedure; import into an <Acronym id="SPE" />, after a security review by the 1+MG IT infrastructure provider <GovRef id="VIII.3.1" /> |
| **2. 1+MG compliant datasets** | The Genome EDIC is operational (the Genome EDIC CC and the 1+MG DAC work), the Member Country has named a [1+MG Data Holder](/glossary#1mg-data-holder), and that 1+MG Data Holder has done its data protection impact assessment (<Acronym id="DPIA" />), with prior consultation of the data protection authority <GovRef id="VII.5.4" /> | Adds 1+MG compliant datasets | The 1+MG Data Holder, considering the opinion of the 1+MG DAC | Access request management routes requests to the 1+MG DAC and, through the [1+MG NCP](/glossary#1mg-national-coordination-point-1mg-ncp), to each 1+MG Data Holder <GovRef id="VII.3.2" /> <GovRef id="VII.4.4" /> ([5.1.2](/building-blocks/european/access-request-management), [5.2.2](/building-blocks/national/access-decision-support)) |
| **3. 1+MG cohort datasets** | The Genome EDIC can act as controller for access decisions, and its Genome EDIC CC has done the DPIA <GovRef id="VII.5.5" /> | Adds 1+MG cohort datasets | The Genome EDIC | National review, with a national veto where applicable; the Genome EDIC CC records the decision and informs stakeholders through the 1+MG NCP <GovRef id="VII.5.5" /> |
| **Later** | Genomic data can be shared through the European Health Data Space (<Acronym id="EHDS" />) | The interim governance of May 2025 may change <Cite id="gdi-d3.4" /> | To be decided then | The connection to HealthData@EU ([8.11](/concepts/ehds-integration)) |

**Step 1 in detail.** The main externally governed datasets are Genome of Europe data, for use by the Genome of Europe consortium. GDI frames this as primary use under the Genome of Europe's own legal basis; from the 1+MG side, the architecture reads it as an externally governed dataset <Cite id="gdi-d3.4" />. Data not related to individuals include allele frequencies: how often each variant of a gene occurs in a population. The governance leaves access to them to a separate data governance, expected from the Genome of Europe project <GovRef id="II.4" />. Aggregate data like these can still reveal whether a person is in a dataset; the safeguards are described in [8.8](/concepts/output-control).

**Later.** If the Genome EDIC becomes an authorised participant in HealthData@EU (EHDS Art. 75(4)), its access decisions would count as access approvals by an authorised participant (EHDS Art. 2(2)) <Cite id="ehds" />. The Genome EDIC is not a health data access body, and issues no data permits. Details are in [8.11](/concepts/ehds-integration).

Three rules keep the steps compatible:

- **Build the interfaces for all three types from step 1.** Every catalogue entry states its type from the first dataset on, and the system uses it to send each User to the right procedure: in step 1 the dataset's own, later the 1+MG access request. Each step adds a route; it doesn't change what Users do.
- **1+MG compliant before 1+MG cohort (proposed).** The national path is the one the vote kept as the rule, as an interim governance <Cite id="gdi-d3.4" />. It also asks less of the Genome EDIC, which doesn't have to act as controller for access decisions. Member Countries that prefer the Genome EDIC to decide should wait for step 3, rather than include data as 1+MG compliant and switch later: the type is part of the consent at inclusion, so a switch means informing data subjects again, and new consent where consent is the legal basis <GovRef id="VI.1.3" /> <GovRef id="VI.1.5" />.
- **Each Member Country moves at its own pace.** A country offers 1+MG compliant datasets once the Genome EDIC is operational and the country has named a 1+MG Data Holder. A country that is not a full member of the Genome EDIC offers only externally governed datasets ([ADR-0002](/decisions/0002-disclosure-paths-per-dataset)).

:::caution[Open points]
- **Step 1 roles.** Steps 2 and 3 depend on an operational Genome EDIC. Until then, who runs the central User Portal and catalogue, who is controller and processor for the central services and the SPEs, and which security baseline, incident reporting and revocation apply, is not decided. See [chapter 11](/risks#genome-edic-operational).
- **Access to data not related to individuals** waits for a separate data governance from the Genome of Europe project <GovRef id="II.4" />. See [chapter 11](/risks#genome-of-europe-governance).
- **Who sets and checks the inclusion criteria** on quality and ELSI for externally governed datasets <GovRef id="III" />, and whether Genome of Europe data meet them. See [chapter 11](/risks#external-inclusion-criteria).
:::

:::caution[Risk]
GDI may end before the Genome EDIC is operational, leaving the central services without an operator. See [chapter 11](/risks#gdi-end-gap).
:::

## Consequences

- **Easier:** the system delivers access to data before the Genome EDIC exists; the Genome EDIC takes on the role of controller for access decisions only in step 3; each Member Country chooses its moment.
- **Harder:** countries that prefer 1+MG cohort datasets wait for step 3; the interfaces must carry the type of every dataset from step 1, before two of the three paths exist; until the Genome EDIC is operational, the responsibilities for the central services rest on arrangements that are not decided yet.
- **Per scope:** in the [European scope](/glossary#european-scope), [5.1.2](/building-blocks/european/access-request-management) gains a route per step. In the [national scope](/glossary#national-scope), [5.2.2](/building-blocks/national/access-decision-support) is needed from step 2. In the [User Organisation scope](/glossary#user-organisation-scope), nothing changes in how to apply.
