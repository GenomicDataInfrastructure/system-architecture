---
title: "1.1 Requirements overview"
sidebar_position: 1
slug: /introduction/requirements
owner: "@brunopacheco1"
reviewers: []
status: draft
wave: 2
audience: [policy, legal, elsi, implementer]
governance_refs: ["II.2", "II.3", "II.4", "V.1.3", "V.2.2", "V.2.6", "VI.1.1", "VI.1.3", "VI.1.5", "VI.2.2", "VI.3.2", "VI.4.1", "VI.4.4", "VI.4.5", "VII.1.2", "VII.1.3", "VII.1.4", "VII.2.1", "VII.2.3", "VII.2.4", "VII.3.1", "VII.3.2", "VII.4.3", "VII.4.4", "VII.4.6", "VII.4.7", "VII.5.1", "VII.5.3", "VII.5.4", "VII.5.5", "VIII.1.2", "VIII.2.1", "VIII.2.2", "VIII.3.3", "VIII.3.4"]
last_reviewed:
---

<InShort>

- This page lists the essential requirements on the system, in a short "shall" form, grouped by phase of the data lifecycle: bringing data in (inclusion), finding and requesting them (access), and analysing them (use), plus the requirements of the European Health Data Space.
- The full requirements are in the 1+MG Data Governance and the EHDS. Each row points to the section it comes from, and to the page that describes it in detail.
- Duties of organisations stay in the governance; this page says what the system must do to support them.

</InShort>

## How to read this page

The requirements come from the [1+MG Data Governance](/glossary#1mg-data-governance) <Cite id="dg" /> and the European Health Data Space (<Acronym id="EHDS" />) <Cite id="ehds" />. This page lists the ones that shape the architecture. Where a row reads differently from the section it cites, the section prevails, and the difference is a defect to report.

Each row is one requirement on the system:

- **shall**: mandatory;
- **should**: recommended, used only where the governance itself says "should";
- **may**: optional.

Each row has an identifier, so that other pages can refer to it. The column *Type of use* follows the governance, which marks rules that apply only to some types of use. Deadlines and other thresholds are left to [chapter 10](/quality), as quality scenarios. The lifecycle scenarios of [chapter 6](/runtime) give the steps; many of them are still being written.

## The most important requirements

The system serves the goals described in [chapter 1](/introduction). Five requirements matter most, because the rest depend on them:

1. **One catalogue for all datasets, and one access request for all 1+MG data,** whatever the country or the [type of dataset](/concepts/dataset-types); externally governed datasets are listed, but follow their own access procedure (REQ-AC-2, REQ-AC-4).
2. **Analysis only in a secure processing environment** (<Acronym id="SPE" />), with no download of personal data (REQ-US-1).
3. **Access only for the four types of use** <GovRef id="II.3" />, each with its own request form (REQ-AC-4).
4. **The access decision follows the type of dataset**: the system routes each request to those who decide on each dataset, and records the decision (REQ-IN-2, REQ-AC-5, REQ-AC-7a).
5. **Common data and metadata models**, so that data from many countries can be found and analysed together (REQ-IN-1).

## Data inclusion

| ID | Requirement | Type of use | Source | Detail |
|---|---|---|---|---|
| REQ-IN-1 | The system shall let [1+MG Data Providers](/glossary#1mg-data-provider) transform each dataset into the common data models, and describe it with the scientific metadata (including the quality label) and the minimum <Acronym id="ELSI" /> metadata models that the [Genome EDIC Assembly of Members](/glossary#genome-edic-assembly-of-members) adopts. | All | <GovRef id="VI.1.1" /> <GovRef id="VI.2.2" /> <GovRef id="VI.3.2" /> | [6.1](/runtime/data-inclusion), [8.10](/concepts/metadata-and-interoperability) |
| REQ-IN-2 | The system shall record, for each dataset, the type its [Genome EDIC Member Country](/glossary#genome-edic-member-country) chose, and publish in the catalogue with whom access applications for it are shared. | All | <GovRef id="VI.1.3" /> <GovRef id="VI.4.4" /> <GovRef id="VI.4.5" /> | [8.12](/concepts/dataset-types) |
| REQ-IN-3 | The system shall record each [data subject](/glossary#data-subject)'s consent preferences and objections as ELSI metadata, "available alongside the data to be queried". | All | <GovRef id="VI.1.5" /> | [6.1](/runtime/data-inclusion), [8.6](/concepts/legal-basis-and-consent) |
| REQ-IN-5 | The system shall hold personal data under [key-coded identifiers](/glossary#key-coded-identifier), new to the Genome EDIC, instead of direct identifiers. It should store genomic data apart from clinical, phenotypic and demographic data, ideally under a different key-coded identifier. | All | <GovRef id="VI.4.1" /> | Decided in [ADR-0005](/decisions/0005-identity-link-and-key-coded-identifiers) (wave 3), described in [8.7](/concepts/identifiers-and-linkage) |

## Data access

| ID | Requirement | Type of use | Source | Detail |
|---|---|---|---|---|
| REQ-AC-1 | The system shall keep a registry of [User Organisations](/glossary#user-organisation) and their Users, through which the [Genome EDIC CC](/glossary#genome-edic-central-coordination-genome-edic-cc) vets each organisation before any subject-level data discovery or access request. | All | <GovRef id="VII.1.2" /> <GovRef id="VII.1.3" /> | [6.2.1](/runtime/access/registration) |
| REQ-AC-2 | The system shall offer one central data catalogue of all datasets, built from the metadata that the [1+MG NCPs](/glossary#1mg-national-coordination-point-1mg-ncp) send after checking each dataset, in which externally governed datasets are "clearly labelled as external". Subject-level discovery shall be launchable from the catalogue, and each dataset should come with a mock (synthetic) version. | All | <GovRef id="VI.4.4" /> <GovRef id="VI.3.2" /> <GovRef id="VII.2.1" /> | [6.1](/runtime/data-inclusion), [6.2.2](/runtime/access/discovery) |
| REQ-AC-3 | Where a User has stated the purpose and the search criteria and agreed to the terms of use for discovery, the system shall return the number of matching records, counted only over the data available for that purpose as the ELSI metadata record it, log each search and flag suspicious searches. | Research, policy development, <Acronym id="QM" /> | <GovRef id="VI.1.5" /> <GovRef id="VII.2.1" /> <GovRef id="VII.2.3" /> <GovRef id="VII.2.4" /> | [6.2.2](/runtime/access/discovery), [8.8](/concepts/output-control) |
| REQ-AC-4 | The system shall accept one access request for all data in the Genome EDIC, on a form specific to each type of use that integrates into the EHDS access request form. | All | <GovRef id="VII.3.1" /> | [6.2.3](/runtime/access/request) |
| REQ-AC-5 | When an access request is submitted, the system shall route it to the [1+MG DAC](/glossary#1mg-dac) and, through the 1+MG NCP, to the national reviewers of each dataset, and record their opinions and vetoes. | Research, policy development, QM | <GovRef id="VII.3.1" /> <GovRef id="VII.3.2" /> <GovRef id="VII.4.4" /> <GovRef id="VII.4.6" /> <GovRef id="VII.4.7" /> <GovRef id="VII.5.1" /> | [6.2.4](/runtime/access/review-and-decision); deadlines: a quality scenario in chapter 10 |
| REQ-AC-7a | When an access request is decided, the system shall record the decision, notify the User and the User Organisation (with the reasons for a refusal), and "automatically store" every step of the request. | All | <GovRef id="VII.5.4" /> <GovRef id="VII.5.5" /> | [6.2.4](/runtime/access/review-and-decision) |
| REQ-AC-7b | When an access request is approved, the system shall produce one [data use agreement](/glossary#data-use-agreement) covering all data sources, which the Genome EDIC CC issues. | All | <GovRef id="VII.5.5" /> <GovRef id="VIII.2.1" /> | [6.3.1](/runtime/use/data-use-agreement) |
| REQ-AC-8 | When an access request is approved, the system shall pass the project information captured in the request, including a lay summary, to the national information chain, so that data subjects are informed and can consent or object where needed. | All (informing after the decision: research except recruitment into clinical studies, policy development, QM) | <GovRef id="VIII.1.2" /> <GovRef id="V.2.2" /> <GovRef id="VII.5.3" /> | [6.3.4](/runtime/use/transparency); timing: a quality scenario in chapter 10 |

For healthcare reuse, there is no formal access decision per request: access rests on the framework data use agreement of the User Organisation <GovRef id="VII.1.3" /> <GovRef id="VII.5.4" />. The request is still checked by two people <GovRef id="VII.4.3" />, the User Portal offers a staged request that asks for more detailed information step by step <GovRef id="VII.3.1" />, and the system must be able to check in real time that the User is a licensed healthcare professional, or staff under medical secrecy, authorised under that agreement <GovRef id="VII.1.3" /> <GovRef id="VII.1.4" /> ([chapter 11](/risks#healthcare-professional-check)). [6.3.3](/runtime/use/healthcare-reuse) will describe the fast track.

:::caution[Open points]
- Who informs data subjects after an access decision: the 1+MG NCP, or another national body. See [chapter 11](/risks#national-information-flow).
- Who signs the data use agreement for 1+MG compliant datasets. See [chapter 11](/risks#data-use-agreement-signatory).
- Whether healthcare reuse and recruitment into clinical trials need new consent, or a new chance to object. See [chapter 11](/risks#repeated-consent).
- How the status of a licensed healthcare professional is checked. See [chapter 11](/risks#healthcare-professional-check).
:::

## Data use

| ID | Requirement | Type of use | Source | Detail |
|---|---|---|---|---|
| REQ-US-1 | The system shall let Users analyse personal data only in a 1+MG SPE, or where applicable in the SPE of the European Commission, and download only non-personal results. | All | <GovRef id="II.2" /> <GovRef id="VIII.2.2" /> | [6.3.2](/runtime/use/processing-in-spe), [8.8](/concepts/output-control) |
| REQ-US-3a | The system shall make available in the SPE, to authorised Users, only the data that the data use agreement covers. | All | <GovRef id="VIII.3.3" /> | [6.3.2](/runtime/use/processing-in-spe) |
| REQ-US-3b | When a breach of purpose limitation or confidentiality by a User is suspected, the system shall let the SPE provider revoke that User's access at once, and inform the Genome EDIC CC and, where applicable, the other 1+MG SPE providers concerned; it should do so automatically. | All | <GovRef id="VIII.3.3" /> | [6.5](/runtime/security-incident) |
| REQ-US-5a | Where the choice recorded for the dataset allows it, and the purpose cannot be achieved in a federated way, the system shall support data streaming or temporary [pooling](/glossary#pooling) in a certified SPE; otherwise the data stay federated. | Research only | <GovRef id="VIII.3.4" /> <GovRef id="V.1.3" /> | [6.3.2](/runtime/use/processing-in-spe) |
| REQ-US-5b | The system shall show, as ELSI metadata in each dataset description, whether the data may be streamed or pooled. | Research only | <GovRef id="VIII.3.4" /> | Decided in [ADR-0007](/decisions/0007-catalogue-metadata-and-federation) (wave 3), described in [8.10](/concepts/metadata-and-interoperability) |
| REQ-US-11 | The system shall publish regular aggregate statistics on access, and a register of access requests and approvals. | All | <GovRef id="VII.5.5" /> | [6.3.4](/runtime/use/transparency) |
| REQ-US-13 | When a data subject exercises a right that changes the data, the system shall create a new version of the dataset and tell the Users concerned. | All | <GovRef id="V.2.2" /> <GovRef id="V.2.6" /> | [6.4](/runtime/data-subject-rights), [8.9](/concepts/dataset-versioning) |

:::caution[Open points]
- When 1+MG data may be processed in the SPE of the European Commission. See [chapter 11](/risks#commission-spe).
- Who decides on pooling for 1+MG compliant datasets. See [chapter 11](/risks#pooling-decision).
:::

## Requirements from the EHDS

These apply to the Genome EDIC only once it is an [authorised participant in HealthData@EU](/glossary#authorised-participant-in-healthdataeu) (EHDS Art. 75(4)) <Cite id="ehds" />. That is a target, not a status: [2.1](/constraints/legal) gives the legal frame, and [8.11](/concepts/ehds-integration) the design.

| ID | Requirement | Source | Detail |
|---|---|---|---|
| REQ-EH-1 | Where the Genome EDIC is an authorised participant, the system shall connect to HealthData@EU and meet its requirements and technical specifications. | EHDS Art. 75(6) <Cite id="ehds" />; the draft implementing act under Art. 75(12) <Cite id="hdeu-ia-draft" /> | Decided in [ADR-0008](/decisions/0008-connection-to-healthdata-eu) (wave 3), described in [8.11](/concepts/ehds-integration) |
| REQ-EH-2 | Where the Genome EDIC is an authorised participant, the system shall publish its dataset catalogue, so that the EU dataset catalogue can connect to it. | EHDS Art. 79 <Cite id="ehds" /> | [8.10](/concepts/metadata-and-interoperability) |
| REQ-EH-3 | Where the Genome EDIC is an authorised participant, the system shall receive the health data access applications forwarded automatically through HealthData@EU. | EHDS Art. 67(3) <Cite id="ehds" /> | [8.11](/concepts/ehds-integration) |

:::caution[Open points]
- The EHDS requirements for health data access applications are still under discussion. See [chapter 11](/risks#ehds-access-applications).
- The HealthData@EU implementing act is still a draft. See [chapter 11](/risks#healthdata-eu-act).
:::

## What the system need not do

The system gives access only for the four types of use, and offers no route for screening the data for secondary findings <GovRef id="II.4" />. [Chapter 1](/introduction#what-is-outside-the-governance) explains what else the governance leaves out, and what the system still does for it. Until the Genome EDIC is operational, the system gives access only to externally governed datasets ([ADR-0003](/decisions/0003-implementation-in-steps), proposed; [chapter 11](/risks#genome-edic-operational)); [chapter 1](/introduction#target-state-and-what-gdi-already-delivers) lists what the GDI project already delivers.

Retired IDs, never reused: REQ-IN-4 (merged into REQ-AC-2); REQ-IN-6 (data stay with 1+MG Data Hosts: [2.2](/constraints/governance-principles#federated), [5.2.5](/building-blocks/national/data-host)); REQ-AC-6 (healthcare reuse fast track: [6.3.3](/runtime/use/healthcare-reuse)); REQ-US-2 (the Genome EDIC as processor: [8.2](/concepts/roles)); REQ-US-4 (yearly reconfirmation and sleeping period: [6.3.2](/runtime/use/processing-in-spe), [8.1](/concepts/data-protection-by-design#the-defaults)); REQ-US-6 (questions to the treating healthcare professional: [6.3.3](/runtime/use/healthcare-reuse)); REQ-US-7 (archiving: [6.3.7](/runtime/use/archiving)); REQ-US-8 (merged into REQ-AC-8); REQ-US-9 (incidental findings: [6.3.8](/runtime/use/incidental-findings)); REQ-US-10 (intellectual property: [6.3.6](/runtime/use/results-and-publication)); REQ-US-12 (recruitment of data subjects: [6.3.5](/runtime/use/reaching-back)); REQ-EH-4 (SPEs that serve health data access bodies: [8.11](/concepts/ehds-integration), [5.2.3](/building-blocks/national/spe)). REQ-AC-7, REQ-US-3 and REQ-US-5 were split into a and b.
