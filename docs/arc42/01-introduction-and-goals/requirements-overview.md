---
title: "1.1 Requirements overview"
sidebar_position: 1
slug: /introduction/requirements
owner: "@brunopacheco1"
reviewers: []
status: draft
wave: 2
audience: [policy, legal, elsi, implementer]
governance_refs: ["I", "II.1", "II.3", "II.4", "V.1.3", "V.2.4", "V.2.6", "VI.1.1", "VI.1.3", "VI.1.5", "VI.2.2", "VI.3.2", "VI.4.1", "VI.4.4", "VI.4.5", "VI.4.6", "VII.1.1", "VII.1.2", "VII.1.3", "VII.2.1", "VII.2.2", "VII.2.3", "VII.2.4", "VII.3.1", "VII.3.4", "VII.4.1", "VII.4.2", "VII.4.3", "VII.4.6", "VII.4.7", "VII.5.1", "VII.5.3", "VII.5.4", "VII.5.5", "VII.5.6", "VIII.1.1", "VIII.1.2", "VIII.1.3", "VIII.2.1", "VIII.2.2", "VIII.3.1", "VIII.3.3", "VIII.3.4", "VIII.4.1", "VIII.5.1", "VIII.5.2", "VIII.5.3", "VIII.6.1", "VIII.8.2", "VIII.10.1", "VIII.11.1", "VIII.11.2", "VIII.11.4"]
last_reviewed:
---

<InShort>

- The system must support the whole data lifecycle: bringing data in (inclusion), finding and requesting them (access), and analysing them in a secure processing environment (use).
- Most requirements apply to all four types of use. Healthcare reuse has its own fast track, and some rules apply only to research, or to research and healthcare reuse. The type of dataset decides who reviews and decides on access.
- The European Health Data Space adds requirements for the Genome EDIC only once the Genome EDIC joins HealthData@EU, the EU network for cross-border access to health data. Some 1+MG requirements go further, such as counting how many people match a search across countries.

</InShort>

## Goals and the most important requirements

The system serves the goals described in [chapter 1](/introduction): the data stay in the countries, Users see one system, every processing step has a [controller](/glossary#controller), and data subjects are informed and their choices respected <GovRef id="I" /> <GovRef id="II.1" />. Five requirements matter most, because the rest depend on them:

1. **One catalogue and one access procedure** for all data, whatever the country or the [type of dataset](/concepts/dataset-types) (REQ-AC-2, REQ-AC-4).
2. **Analysis only in a secure processing environment** (<Acronym id="SPE" />), with no download of personal data (REQ-US-1).
3. **Access only for the four types of use**, each with its own form and review (REQ-AC-4, REQ-AC-5) <GovRef id="II.3" />.
4. **The access decision follows the type of dataset**: a [1+MG Data Holder](/glossary#1mg-data-holder) decides on 1+MG compliant datasets, the [Genome EDIC](/glossary#genome-edic) on 1+MG cohort datasets (REQ-AC-7).
5. **Common data models and metadata**, so that data from many countries can be found and analysed together (REQ-IN-1).

The tables below list the requirements by phase of the lifecycle <GovRef id="II.1" />. Each has an identifier, so that other pages can refer to it. They say *what* the system must do; chapters 4 to 8 say how. The column *Type of use* follows the governance, which marks rules that apply only to some types of use in the title of each section.

## Data inclusion

| ID | Requirement | Type of use | Governance |
|---|---|---|---|
| REQ-IN-1 | [1+MG Data Providers](/glossary#1mg-data-provider) can transform their data into the common data models, and describe them with metadata, including <Acronym id="ELSI" /> metadata that say which uses the consent allows. The [Genome EDIC Assembly of Members](/glossary#genome-edic-assembly-of-members) adopts the models. | All | <GovRef id="VI.1.1" /> <GovRef id="VI.2.2" /> <GovRef id="VI.3.2" /> |
| REQ-IN-2 | Each [Genome EDIC Member Country](/glossary#genome-edic-member-country) decides, before any data are included, who is responsible for disclosing its data. The system records the resulting type of each dataset. | All | <GovRef id="VI.1.3" /> |
| REQ-IN-3 | The 1+MG Data Provider can record each [data subject](/glossary#data-subject)'s consent preferences and objections as ELSI metadata. Before including anyone, it has a positive ethics assessment, asks for consent in a way that limits the imbalance of power in healthcare, and performs a data protection impact assessment (<Acronym id="DPIA" />). | All | <GovRef id="VI.1.5" /> |
| REQ-IN-4 | The [1+MG NCP](/glossary#1mg-national-coordination-point-1mg-ncp) (the national coordination point) can check the data before they are made available, and send their metadata to the central data catalogue. | All | <GovRef id="VI.4.4" /> |
| REQ-IN-5 | Direct identifiers are replaced by [key-coded identifiers](/glossary#key-coded-identifier), and the Member Country provides the national link between identity and key-coded identifier. | All | <GovRef id="VI.4.1" /> <GovRef id="V.2.4" /> |
| REQ-IN-6 | A [1+MG Data Host](/glossary#1mg-data-host) stores the data in 1+MG compliant local IT infrastructure, connected for discovery, built with data protection by design and by default, and without unnecessary copies. | All | <GovRef id="VI.4.6" /> |

## Data access

| ID | Requirement | Type of use | Governance |
|---|---|---|---|
| REQ-AC-1 | A [User Organisation](/glossary#user-organisation) registers once, names its Users and keeps that information up to date. The [Genome EDIC CC](/glossary#genome-edic-central-coordination-genome-edic-cc) keeps the registry, provides the terms of use and vets each organisation, on behalf of the 1+MG Data Holders for 1+MG compliant datasets. | All | <GovRef id="VII.1.1" /> <GovRef id="VII.1.2" /> <GovRef id="VII.1.3" /> |
| REQ-AC-2 | One central data catalogue lists all datasets. Externally governed datasets are labelled as such. | All | <GovRef id="VII.2.1" /> |
| REQ-AC-3 | [Subject-level data discovery](/glossary#subject-level-data-discovery) returns counts of matching records, only among records whose data subjects allowed discovery for the stated type of use, with safeguards set by a DPIA. It logs each query and flags suspicious searches. The User first states the purpose and the search criteria, and agrees to use the search only to check whether enough data are available. | Research, policy development, <Acronym id="QM" /> | <GovRef id="VI.1.5" /> <GovRef id="VII.2.2" /> <GovRef id="VII.2.3" /> <GovRef id="VII.2.4" /> |
| REQ-AC-4 | One access request, through the Genome EDIC CC, covers all 1+MG data. There is one form per type of use, which integrates into the form of the European Health Data Space (<Acronym id="EHDS" />). | All | <GovRef id="VII.3.1" /> |
| REQ-AC-5 | The [1+MG DAC](/glossary#1mg-dac) (the central data access committee) reviews each request, in principle within 5 working days, and the national reviewers within their deadlines. For research and policy development, an additional review committee, with representatives of the groups concerned, is called on for projects that may affect vulnerable people or groups, or lead to discrimination. | Research, policy development, QM (additional committee: research, policy development) | <GovRef id="VII.4.1" /> <GovRef id="VII.4.2" /> <GovRef id="VII.4.6" /> <GovRef id="VII.4.7" /> <GovRef id="VII.5.1" /> |
| REQ-AC-6 | Healthcare reuse has a fast track: a request in up to three stages (statistics first, then individual records, then questions to the treating healthcare professional, each justified), a check by two people within 1 to 3 working days, a check of the User's status as a licensed healthcare professional, and no access decision per request. | Healthcare reuse | <GovRef id="VII.3.4" /> <GovRef id="VII.4.3" /> <GovRef id="VII.5.4" /> |
| REQ-AC-7 | The access decision is taken by the 1+MG Data Holder (1+MG compliant datasets) or by the Genome EDIC (1+MG cohort datasets). A full or partial refusal gives reasons, with the option to resubmit, and there is a redress procedure. The Genome EDIC CC issues the [data use agreement](/glossary#data-use-agreement) and records every step of the request automatically. | All | <GovRef id="VII.5.4" /> <GovRef id="VII.5.5" /> <GovRef id="VII.5.6" /> |
| REQ-AC-8 | After a positive decision, data subjects are informed about the project, with a lay summary, within 1 working day, and their consent or objection is collected where needed. | Research (except recruitment into clinical studies), policy development, QM | <GovRef id="VII.5.3" /> |

:::caution[Open points]
- Who informs data subjects after an access decision: the 1+MG NCP, or another national body. See [chapter 11](/risks#national-information-flow).
- Whether healthcare reuse and recruitment into clinical trials need new consent, or a new chance to object. See [chapter 11](/risks#repeated-consent).
:::

## Data use

| ID | Requirement | Type of use | Governance |
|---|---|---|---|
| REQ-US-1 | Users analyse the data only in a 1+MG SPE, or where applicable in the SPE of the European Commission, and never export personal data. | All | <GovRef id="VIII.2.2" /> |
| REQ-US-2 | The Genome EDIC acts as [processor](/glossary#processor) towards the User Organisation for the federated SPEs, under a data processing agreement that names the sub-processors. | All | <GovRef id="VIII.2.1" /> |
| REQ-US-3 | The 1+MG Data Host releases only the data the data use agreement covers. All SPEs meet the same minimum requirements, let Users import their own data and tools after a security review, and revoke access at once on a suspected breach. | All | <GovRef id="VIII.3.3" /> |
| REQ-US-4 | Users confirm each year that they still need access, and can pause it for a [sleeping period](/glossary#sleeping-period). | All | <GovRef id="VIII.3.1" /> |
| REQ-US-5 | Data stay federated, unless the Member Country allows temporary [pooling](/glossary#pooling) in a certified SPE. | Research only | <GovRef id="VIII.3.4" /> <GovRef id="V.1.3" /> |
| REQ-US-6 | Where the data subject consented and the treating healthcare professional agrees, Users can put questions to that professional, within the consent and as approved by the 1+MG DAC, without receiving contact data or the identity of the professional or the patient. Users report what they observe about additional variants in their own patient, where the report can be separated from the User so that it is no longer personal data, or otherwise with the patient's consent. | Healthcare reuse | <GovRef id="VIII.4.1" /> <GovRef id="VIII.5.3" /> <GovRef id="VIII.10.1" /> |
| REQ-US-7 | Data stay available for reproducing analyses (archiving). | Research, healthcare reuse | <GovRef id="VIII.8.2" /> |
| REQ-US-8 | The User Portal captures the information about each project that data subjects must receive, and passes it to the central and national information portals. | All | <GovRef id="VIII.1.2" /> |
| REQ-US-9 | Users report the clinically actionable incidental findings on the list the Genome EDIC CC keeps, only where the dataset's flag shows that the data subject agreed to their return; without the flag, nothing is reported. The Genome EDIC CC passes findings only to the entity mandated nationally to inform data subjects. | All | <GovRef id="VIII.11.1" /> <GovRef id="VIII.11.2" /> <GovRef id="VIII.11.4" /> |
| REQ-US-10 | Rules on intellectual property and commercialisation of results apply. | Research only | <GovRef id="VIII.6.1" /> |
| REQ-US-11 | The Genome EDIC CC must publish regularly aggregate statistics on access, and a register of access requests and approvals. It should publish a register of authorised projects, and communicate results to data subjects and the public. Users provide a lay summary of their results; 1+MG NCPs provide the information in the country's languages. | All | <GovRef id="VII.5.5" /> <GovRef id="VIII.1.1" /> <GovRef id="VIII.1.2" /> <GovRef id="VIII.1.3" /> |
| REQ-US-12 | Users can invite data subjects to take part in studies only through the national information chain, in line with each data subject's preferences. They never receive contact data. | Research | <GovRef id="VIII.5.1" /> <GovRef id="VIII.5.2" /> <GovRef id="VIII.5.3" /> |

:::caution[Open points]
- When 1+MG data may be processed in the SPE of the European Commission. See [chapter 11](/risks#commission-spe).
- Who decides on pooling for 1+MG compliant datasets. See [chapter 11](/risks#pooling-decision).
- The legal basis for Users to report incidental findings, and the national route. See [chapter 11](/risks#incidental-findings).
:::

Two requirements apply across the phases:

- **Rights change the data.** When data subjects exercise their rights, datasets are versioned, so that each User knows which version they use <GovRef id="V.2.6" />.
- **Common security requirements.** Every [1+MG IT infrastructure provider](/glossary#1mg-it-infrastructure-provider) is audited by an external body against the minimum requirements of the Genome EDIC CC, and/or works towards certification; an SPE that pools data from other Member Countries must be certified <GovRef id="V.1.3" />.

The system gives access only for the four types of use, and offers no route for screening the data for secondary findings, which the governance excludes <GovRef id="II.4" />. It need not support the other things the governance leaves out: data not related to individuals, Users and members from third countries, and data from countries that are not members of the Genome EDIC. [Chapter 1](/introduction#what-is-outside-the-governance) explains each, and what the system still does for them.

## What differs per type of dataset

The type of dataset changes who reviews, who decides and who is controller, not what the User does. [8.12 Types of dataset](/concepts/dataset-types) describes each phase per type. In short:

- **1+MG compliant datasets:** the 1+MG Data Holder states with whom applications are shared <GovRef id="VI.4.5" />, delegates the vetting of User Organisations <GovRef id="VII.1.1" />, organises the review <GovRef id="VII.4.6" />, decides, and performs the DPIA <GovRef id="VII.5.4" />.
- **1+MG cohort datasets:** the Member Country decides who reviews, and a national veto is possible where applicable <GovRef id="VII.4.7" /> ([chapter 11](/risks#national-veto)); the Genome EDIC CC adopts and documents the decision <GovRef id="VII.5.5" />.
- **Externally governed datasets:** listed in the catalogue and importable into an SPE. No 1+MG access requirement applies to them: the User follows the dataset's own procedure <GovRef id="VII.3.1" /> <GovRef id="VIII.3.3" />.

## Requirements from the EHDS

The HealthData@EU requirements of the EHDS apply to the Genome EDIC only once it is an [authorised participant in HealthData@EU](/glossary#authorised-participant-in-healthdataeu) (EHDS Art. 75(4)) <Cite id="ehds" />. That is a target, not a status: the Commission connects an authorised participant by implementing decision (Art. 75(13)), under the conditions and compliance checks of the implementing act under Art. 75(12)(b), still a draft <Cite id="hdeu-ia-draft" />. Separately, the EHDS applies to 1+MG Data Providers and 1+MG Data Holders that are health data holders in any case: its rules on secondary use apply from 26 March 2029, and for genomic data from 26 March 2031 (Art. 51(1)(f), 105). [2.1](/constraints/legal) gives the legal frame; [8.11](/concepts/ehds-integration) the design.

| ID | Requirement | Source |
|---|---|---|
| REQ-EH-1 | Acquire the technical capability to connect to HealthData@EU, and meet its requirements and technical specifications. | EHDS Art. 75(6); the draft implementing act under Art. 75(12) <Cite id="hdeu-ia-draft" /> |
| REQ-EH-2 | Publish a dataset catalogue that the EU dataset catalogue can connect to. | EHDS Art. 79 |
| REQ-EH-3 | Receive health data access applications forwarded automatically through HealthData@EU. | EHDS Art. 67(3) |
| REQ-EH-4 | Where a 1+MG SPE also serves a health data access body, meet the EHDS rules for SPEs, including access logs kept for at least one year. | EHDS Art. 73; <GovRef id="VIII.3.3" /> |

Some 1+MG requirements go beyond the EHDS. Subject-level data discovery has no equivalent in the EHDS <GovRef id="VII.2.3" />. For SPEs, the EHDS asks health data access bodies for regular audits, including by third parties (EHDS Art. 73(3)); the governance asks every 1+MG IT infrastructure provider for an audit by an external body and/or work towards certification, and certification for an SPE that pools data from other Member Countries <GovRef id="V.1.3" />.

:::caution[Open points]
- The EHDS requirements for health data access applications are still under discussion, so the 1+MG form may have to change. See [chapter 11](/risks#ehds-access-applications).
- The HealthData@EU implementing act is still a draft. See [chapter 11](/risks#healthdata-eu-act).
:::

## Where the requirements come from

The requirements summarise the governance <Cite id="dg" />. B1MG+, an EU-funded project that supports the 1+MG initiative (its outputs are expert input, not decisions), revisited the 1+MG use cases against the current governance, and shows who needs what for each <Cite id="b1mgplus-d2.6" />.

The GDI minimum viable product (<Acronym id="MVP" />) already covers part of REQ-AC-2: the User Portal and the central dataset catalogue are in production, with access management for externally governed datasets. The 1+MG access request (REQ-AC-4) and the rest follow when the Genome EDIC is operational ([ADR-0003](/decisions/0003-implementation-in-steps), proposed). [Chapter 1](/introduction#target-state-and-what-gdi-already-delivers) lists what GDI delivers.

:::caution[Open point]
Until the Genome EDIC is operational, only externally governed datasets can be accessed through the system. See [chapter 11](/risks#genome-edic-operational).
:::
