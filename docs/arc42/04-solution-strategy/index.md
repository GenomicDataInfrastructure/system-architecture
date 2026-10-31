---
title: "4. Solution strategy"
sidebar_label: "4. Solution strategy"
sidebar_position: 4
slug: /solution-strategy
owner: "Bruno Pacheco (LNDS)"
reviewers: ["Dylan Spalding (CSC)", "Rob Hooft (Health-RI)"]
status: draft
wave: 2
audience: [policy, legal, elsi, security, dpo, implementer]
governance_refs: ["I", "II.1", "II.2", "III", "V.1.2", "V.1.3", "V.2.4", "VI.1.1", "VI.1.5", "VI.4.1", "VI.4.6", "VII.1.1", "VII.1.2", "VII.2.1", "VII.2.3", "VII.3.1", "VII.5.5", "VIII.1.2", "VIII.2.1", "VIII.2.2", "VIII.3.1", "VIII.3.3", "VIII.3.4", "VIII.5.1", "VIII.5.3", "VIII.11.2"]
last_reviewed:
---

<InShort>

- The data stay in the countries as a rule. Users analyse personal data only in secure processing environments, and can download only non-personal results. Users still see one system, with one portal, one catalogue and one access request.
- Common interfaces, data models and minimum requirements hold the federation together; behind them, each country chooses its own tools and organisations. The GDI Starter Kit (ready-made software from the GDI project that countries may use or replace) and the GDI central services are the reference implementation, not a requirement.
- Data subjects are informed through national portals, and Users never contact them. Responsibility follows the data lifecycle and the type of dataset, not the location of servers. The system is built in steps, and designed from the start to connect to the European Health Data Space.

</InShort>

## The fundamental choices

In one sentence: the data stay where they are and are analysed where they are, while one central entry point and common rules make the system look like one to its Users and transparent to data subjects.

Each row links an approach to the quality goals of [1.2](/introduction/quality-goals) (QG-1 to QG-4) or the constraint it serves. The design rules that follow from each governance principle are in [2.2 Governance principles](/constraints/governance-principles); this page gives the strategy and its reasons, and links to them.

| Goal or constraint | Approach we chose | Where it is detailed |
|---|---|---|
| QG-1 Data protection, security and data subjects' rights, QG-4 Growth; principle *federated* | **[Federation](#federation-the-data-stay-where-they-are).** Personal data stay with [1+MG Data Hosts](/glossary#1mg-data-host) in their country, and are analysed in 1+MG [secure processing environments](/glossary#secure-processing-environment-spe) (<Acronym id="SPE">SPEs</Acronym>), as a rule in the same country. Pooling is a national exception, for research only. | [2.2 Federated](/constraints/governance-principles#federated), [5.2.3](/building-blocks/national/spe), [chapter 7](/deployment) |
| QG-1; principle *<Acronym id="GDPR" />-compliant* | **[No download of personal data](#no-download-of-personal-data).** Only non-personal results leave an SPE, after output control. | [8.8](/concepts/output-control), [6.3.2](/runtime/use/processing-in-spe) |
| QG-1; GDPR Art. 25 | **[Least data by default](#data-protection-by-design-and-by-default).** [Key-coded identifiers](/glossary#key-coded-identifier) replace names, genomic data are stored apart from clinical data, discovery returns counts only, Users get only the data the agreement covers, no unnecessary copies. | [8.1](/concepts/data-protection-by-design); key-coded identifiers decided in [ADR-0005](/decisions/0005-identity-link-and-key-coded-identifiers) (wave 3), described in [8.7](/concepts/identifiers-and-linkage) |
| QG-1; principle *GDPR-compliant* | **[Data subjects informed through national portals; Users never contact them](#data-subjects-informed-through-national-portals).** | [5.2.4](/building-blocks/national/data-subject-services), [6.3.4](/runtime/use/transparency), [6.4](/runtime/data-subject-rights) |
| QG-2 One system for the User, QG-4; principles *virtual cohort*, *scalable* | **[One-stop shop](#one-stop-shop-for-users).** One central User Portal, catalogue, access request and [User Organisation](/glossary#user-organisation) registry, run by the [Genome EDIC CC](/glossary#genome-edic-central-coordination-genome-edic-cc). National review and decisions sit behind it. | [5.1](/building-blocks/european), [2.2 Scalable](/constraints/governance-principles#scalable) |
| QG-2; principle *virtual cohort* | **[Common data and metadata models](#common-models).** Adopted by the [Genome EDIC Assembly of Members](/glossary#genome-edic-assembly-of-members), applied by every [1+MG Data Provider](/glossary#1mg-data-provider). | [8.10](/concepts/metadata-and-interoperability), [2.2 Virtual cohort](/constraints/governance-principles#virtual-cohort) |
| QG-3 Freedom to implement, and to change; principle *implementation freedom* | **[Interfaces first](#interfaces-first-with-a-reference-implementation).** Each component is specified by its function, interfaces and standards; the <Acronym id="GDI" /> Starter Kit and central services are the [reference implementation](/glossary#reference-implementation). | [2.2 Implementation freedom](/constraints/governance-principles#implementation-freedom), [chapter 5](/building-blocks) |
| QG-1; principle *secure* | **[Trust through common minimum requirements](#trust-through-common-minimum-requirements),** checked by external audit of every node, and/or work towards certification. | [8.3](/concepts/security), [2.3](/constraints/organisational#audit-certification-and-accreditation) |
| QG-3; principle *continuous improvement* | **[Versioned rules and models](#versioned-rules-and-models).** Data models, forms and minimum requirements are inputs with versions, not code. | [2.2 Continuous improvement](/constraints/governance-principles#continuous-improvement), [8.9](/concepts/dataset-versioning) |
| A controller for every step (governance II.1, GDPR) | **[Responsibility follows the lifecycle and the type of dataset](#responsibility-follows-the-lifecycle-and-the-type-of-dataset),** not the servers. | [3.3](/context/scopes), [8.2](/concepts/roles), [8.12](/concepts/dataset-types), [ADR-0002](/decisions/0002-disclosure-paths-per-dataset) |
| The Genome EDIC is not set up yet | **[Build in steps](#build-in-steps),** starting with externally governed datasets, with interfaces for all three types from the first step. | [ADR-0003](/decisions/0003-implementation-in-steps) |
| QG-2; principle *<Acronym id="EHDS" />-proof* | **[Designed to connect to HealthData@EU](#fit-with-the-ehds),** as an authorised participant, once the Commission connects it. | [2.1](/constraints/legal#what-the-ehds-means-for-the-genome-edic); decided in [ADR-0008](/decisions/0008-connection-to-healthdata-eu) (wave 3), described in [8.11](/concepts/ehds-integration) |

The candidate decisions listed in [chapter 9](/decisions) (federated processing, no download, key-coded identifiers, interfaces first) are stated here first. Each is to become an architecture decision record (<Acronym id="ADR" />); until then, this page and the governance give their reasons.

## Federation: the data stay where they are

Personal data stay in the countries, held by 1+MG Data Hosts in [1+MG compliant local IT infrastructure](/glossary#1mg-compliant-local-it-infrastructure) (the hosts' IT that meets the 1+MG requirements, not to be confused with 1+MG compliant datasets), and are analysed in 1+MG SPEs. The rules are in [2.2 Federated](/constraints/governance-principles#federated).

**Why:** the governance calls federation itself "a protective measure" <GovRef id="VIII.3.4" />. It keeps each country in control of its data, and keeps copies few. It also lets the system grow: a new country or dataset joins as a node behind the same interfaces, without moving data. The EHDS states the same idea in its recitals: bringing questions to data instead of moving those data, whenever possible (recital 80) <Cite id="ehds" />. Its operative rules don't require federated computing; they rely on secure processing environments, and allow pooling in the Commission's SPE. The governance chooses federation where it can <GovRef id="VIII.3.3" />.

**What we gave up:** a permanent central copy of all data, which would make analysis across countries simpler. Instead, SPEs should allow efficient analysis across countries, ideally federated across the national SPEs, with high-performance computing where needed <GovRef id="VIII.3.3" />. For research, a Member Country may allow temporary [pooling](/glossary#pooling) in a certified SPE, where the purpose can't be achieved in a federated way, or would be too complicated to implement that way <GovRef id="VIII.3.4" /> <GovRef id="V.1.3" />.

:::caution[Open points]
- Who decides on pooling for 1+MG compliant datasets. See [chapter 11](/risks#pooling-decision).
- When 1+MG data may be processed in the SPE of the European Commission. See [chapter 11](/risks#commission-spe).
:::

## No download of personal data

Users analyse personal data only in a 1+MG SPE, or where applicable in the SPE of the European Commission, and can download only non-personal results <GovRef id="II.2" /> <GovRef id="VIII.2.2" />. Data and software that Users bring into an SPE pass a security review by the [1+MG IT infrastructure provider](/glossary#1mg-it-infrastructure-provider) first <GovRef id="VIII.3.1" /> ([5.2.3](/building-blocks/national/spe)).

The governance provides for a few other exits, each controlled and logged: reports of incidental findings to the entity mandated nationally <GovRef id="VIII.11.2" />, temporary pooling in a certified SPE <GovRef id="VIII.3.4" />, and, where applicable, the SPE of the European Commission <GovRef id="VIII.2.2" /> ([3.1](/context/business#where-data-about-people-come-in-and-go-out)).

**Why:** it is the strongest single safeguard against misuse and re-identification, and it lets one set of SPE controls protect every dataset.

**A consequence for the roles:** because all analysis happens in SPEs that the Genome EDIC sets the rules for, the [Genome EDIC](/glossary#genome-edic) can act as processor for the User Organisation, under one data processing agreement, with the SPE providers as sub-processors <GovRef id="VIII.2.1" />. The governance chose this so that the User Organisation doesn't carry the responsibility for the federated SPE system <GovRef id="VIII.2.1" />.

:::caution[Open point]
Whether SPE providers are only sub-processors, or also controllers for their own platform processing; [ADR-0010](/decisions/0010-spe-provider-role) proposes the split. See [chapter 11](/risks#it-provider-role).
:::

## Data protection by design and by default

Every component starts from the least data and the narrowest access. The mechanisms for each GDPR principle are in [8.1](/concepts/data-protection-by-design). The main ones:

- key-coded identifiers replace names and other direct identifiers; genomic data, which can identify a person by themselves, are stored apart from the clinical data <GovRef id="VI.4.1" />;
- [subject-level data discovery](/glossary#subject-level-data-discovery) returns counts, with safeguards built into the search engine <GovRef id="VII.2.3" />;
- the 1+MG Data Host releases only the data that the [data use agreement](/glossary#data-use-agreement) covers <GovRef id="VIII.3.3" />;
- unnecessary copies are avoided <GovRef id="VI.4.6" />;
- access is reconfirmed each year and can be paused <GovRef id="VIII.3.1" />.

**Why:** the GDPR requires it (Art. 25) <Cite id="gdpr" />, and the governance asks the Genome EDIC CC to drive tools built this way <GovRef id="V.1.2" />. The 1+MG requirements for IT infrastructure were themselves derived from a data protection by design and by default approach, with no access as the default <Cite id="b1mg-dpbdd-it" />.

## Data subjects informed through national portals

Project information is captured once, in the User Portal, and passed to central and national information portals. There, data subjects are informed, set their preferences and exercise their rights <GovRef id="V.2.4" /> <GovRef id="VIII.1.2" />. The link between identity and key-coded identifier stays in the country (decided in [ADR-0005](/decisions/0005-identity-link-and-key-coded-identifiers) (wave 3), described in [8.7](/concepts/identifiers-and-linkage)). Users never receive contact data: invitations to studies go through the national information chain <GovRef id="VIII.5.1" /> <GovRef id="VIII.5.3" />. A public register shows access requests and approvals <GovRef id="VII.5.5" />.

**Why:** the governance makes compliance with data subjects' rights part of the principle *GDPR-compliant* <GovRef id="II.2" />, and makes informing data subjects a national task <GovRef id="V.2.4" />. Keeping the identity link and the contact in the country means no central service ever needs to know who a data subject is. See [5.1.4](/building-blocks/european/transparency-and-reporting), [5.2.4](/building-blocks/national/data-subject-services), [6.3.4](/runtime/use/transparency), [6.4](/runtime/data-subject-rights) and [8.9](/concepts/dataset-versioning).

## One-stop shop for Users

The Genome EDIC CC is the one-stop shop for [Users](/glossary#user), and does centrally what is more efficient there <GovRef id="I" />. It runs the [1+MG User Portal](/building-blocks/european/user-portal-and-catalogue) and the central data catalogue <GovRef id="VII.2.1" />, receives one access request for all data <GovRef id="VII.3.1" />, and registers and vets User Organisations <GovRef id="VII.1.2" />, on behalf of the [1+MG Data Holders](/glossary#1mg-data-holder) for 1+MG compliant datasets <GovRef id="VII.1.1" />. The national review and decisions sit behind it, reached through each [1+MG NCP](/glossary#1mg-national-coordination-point-1mg-ncp).

**Why:** without it, a User would have to register, apply and wait in each country. Central tasks are done once, however many countries join. The GDI project compared central, partly decentralised and fully decentralised access request management, and dropped the fully decentralised option, because it doesn't give Users the harmonised interface the governance requires (GDI D3.4, section 4.4) <Cite id="gdi-d3.4" />. Each country can still run a local tool behind the central one.

**What we gave up:** the central services become a point every country relies on. They hold no data about data subjects, but the integrity of their access decisions and registrations is critical: a 1+MG Data Host releases data on the basis of the data use agreement the Genome EDIC CC issues <GovRef id="VIII.3.3" /> <GovRef id="VII.5.5" /> ([8.3](/concepts/security)).

:::caution[Risk]
A tampered or wrong central access decision or registration could lead national nodes to release data. See [chapter 11](/risks#central-services-integrity).
:::

## Common models

The Genome EDIC Assembly of Members adopts the data models, the metadata models and the <Acronym id="ELSI" /> metadata models for all countries <GovRef id="VI.1.1" />. Every 1+MG Data Provider transforms its data into them before inclusion.

**Why:** a virtual cohort, where the data behave as one dataset, is only possible if every country describes and structures its data the same way <GovRef id="II.2" />. Machine-readable ELSI metadata also let the system check automatically which uses each dataset and each data subject's consent allow, so that discovery and release include only records whose data subjects allow the stated use <GovRef id="VI.1.5" /> <GovRef id="VII.2.3" />.

:::caution[Open point]
The data and metadata models are defined outside this architecture. See [chapter 11](/risks#data-models).
:::

## Interfaces first, with a reference implementation

Each component is described first by its function, interfaces and standards: that is what Member Countries must meet to work together. Chapter 5 follows this for every building block. Its reference implementation is then named: the GDI Starter Kit component for national nodes, or the GDI central service for the European scope <Cite id="gdi-starter-kit" />. A Member Country may use other tools that meet the same interfaces.

**Why:** the governance gives each country freedom in how it fits the system into its national infrastructure <GovRef id="II.2" />, and one organisation may hold several roles <GovRef id="III" />. Specifying products would take that freedom away; specifying nothing would break the federation. The governance doesn't prescribe how components are specified; interfaces first is the architecture's way of applying the principle *implementation freedom*. HealthData@EU works the same way: national contact points and authorised participants must meet common requirements and technical specifications (EHDS Art. 75(6); the draft implementing act under Art. 75(12) <Cite id="hdeu-ia-draft" />), and TEHDAS2 recommends that any conforming solution may be deployed <Cite id="tehdas2-d7.3" />.

## Trust through common minimum requirements

Every node of the federation meets the same minimum requirements, set by the Genome EDIC CC. Each 1+MG IT infrastructure provider is audited by an external body against them, and/or works towards certification; an SPE that pools data from other Member Countries must be certified <GovRef id="V.1.2" /> <GovRef id="V.1.3" />.

**Why:** the nodes are run by different organisations in different countries. Users, 1+MG Data Holders and other nodes can only rely on a node they don't run if it is checked against the same rules. Audit doesn't replace checks at run time: every crossing of a [trust boundary](/glossary#trust-boundary) between nodes run by different organisations is still authenticated and encrypted ([3.1](/context/business); decided in [ADR-0006](/decisions/0006-trust-boundaries) (wave 3), described in [8.3](/concepts/security)).

**What GDI already delivers:** a compliance framework for its nodes, with common standard operating procedures and a Security and Data Protection Committee. The first compliance assessment was postponed until the nodes are operational <Cite id="gdi-ms13" />.

:::caution[Open point]
How 1+MG IT infrastructure providers are accredited is still to be defined. See [chapter 11](/risks#accreditation).
:::

## Versioned rules and models

Data models, metadata models, access request forms and minimum requirements will change. Components treat them as inputs with a version, so that they can be updated without rebuilding the software, and each part of the system says which version it follows. Datasets are versioned too, so that each User knows which version they work with ([8.9](/concepts/dataset-versioning)).

**Why:** the governance expects Member Countries to keep defining the scope, conditions and requirements together <GovRef id="II.2" />, and leaves the technical requirements to committees and working groups <GovRef id="II.1" />. A design that builds one version in would have to be rebuilt each time. The governance doesn't prescribe how to follow its changes; this is the architecture's way of applying the principle *continuous improvement*.

## Responsibility follows the lifecycle and the type of dataset

The three [scopes](/context/scopes) (European, national and User Organisation) are scopes of responsibility, not places where servers run. Each phase of the lifecycle has its own controller or controllers, with its own legal basis <GovRef id="II.1" />. The type of each dataset decides who takes the access decision: a 1+MG Data Holder in the country, or the Genome EDIC. The system supports all three types of dataset, and each Member Country chooses between the two 1+MG types for its datasets ([ADR-0002](/decisions/0002-disclosure-paths-per-dataset), proposed); the level of the choice is still open ([chapter 11](/risks#dataset-type-choice)).

**Why:** responsibility in the Genome EDIC doesn't follow the system boundary. For 1+MG cohort datasets, for example, the Genome EDIC decides on access, but the data stay with a 1+MG Data Host in the country. Designing by responsibility makes every processing step traceable to a controller ([8.2](/concepts/roles)).

:::caution[Open point]
Whether the Genome EDIC is joint controller with the 1+MG Data Holder for 1+MG compliant datasets; [ADR-0009](/decisions/0009-joint-controllership-disclosure) proposes that it is. See [chapter 11](/risks#joint-controllership).
:::

## Build in steps

The system starts with externally governed datasets, and adds 1+MG compliant and then 1+MG cohort datasets once the Genome EDIC is operational ([2.1](/constraints/legal#the-genome-edic-today)). Every catalogue entry states its type from the first step, so that each step adds a way to access data without changing what Users do ([ADR-0003](/decisions/0003-implementation-in-steps), proposed).

In the first step, the datasets follow their own governance, not the [1+MG Data Governance](/glossary#1mg-data-governance). The catalogue labels them as external <GovRef id="VII.2.1" />, and the 1+MG safeguards for purposes and for informing data subjects apply from the second step. [Chapter 1](/introduction#target-state-and-what-gdi-already-delivers) lists what the GDI project already delivers.

**Why:** the Genome EDIC can't be assumed to be operational before GDI ends, in March 2027 <Cite id="gdi-d4.4" />. Building in steps delivers access to some data now, and keeps the later steps compatible.

:::caution[Open points]
- Until the Genome EDIC is operational, who runs the central services, and who is controller and processor for them, is not decided. See [chapter 11](/risks#genome-edic-operational).
- Who sets and checks the quality and ELSI inclusion criteria for externally governed datasets. See [chapter 11](/risks#external-inclusion-criteria).
:::

:::caution[Risk]
GDI may end before the Genome EDIC is operational. See [chapter 11](/risks#gdi-end-gap).
:::

## Fit with the EHDS

The system is designed so that the Genome EDIC can become an authorised participant in HealthData@EU (EHDS Art. 75(4)) <Cite id="ehds" />: its metadata can be integrated into the EU dataset catalogue <GovRef id="VI.1.1" />, its access request form integrates into the EHDS form <GovRef id="VII.3.1" />, and its SPEs should meet the EHDS requirements, so that they can also serve health data access bodies <GovRef id="VIII.3.3" />. The HealthData@EU requirements apply to the Genome EDIC only once it is an authorised participant. The Commission connects an authorised participant by implementing decision (Art. 75(13)), under the conditions and compliance checks of the implementing act under Art. 75(12)(b), still a draft <Cite id="hdeu-ia-draft" />. Separately, the EHDS applies to 1+MG Data Providers and 1+MG Data Holders that are health data holders in any case, from 26 March 2029 (genomic data from 26 March 2031).

The Genome EDIC is not a health data access body. It issues data use agreements, not data permits, and its rules can be stricter than the EHDS where 1+MG needs it ([2.1](/constraints/legal)).

**Why:** fitting the EHDS from the start avoids building formats and interfaces that only work inside 1+MG <GovRef id="II.2" />. Waiting for the final EHDS rules before designing would leave the system without an architecture until 2029.

:::caution[Open point]
The HealthData@EU implementing act is still a draft. See [chapter 11](/risks#healthdata-eu-act).
:::
