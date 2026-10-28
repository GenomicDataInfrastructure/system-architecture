---
title: "8.12 Types of dataset"
sidebar_position: 12
slug: /concepts/dataset-types
owner: "@brunopacheco1"
reviewers: []
status: draft
wave: 2
audience: [policy, legal, dpo, implementer]
governance_refs: ["II.1", "III", "VI.1.2", "VI.1.3", "VI.1.5", "VI.2.2", "VI.4.3", "VI.4.4", "VI.4.5", "VI.4.6", "VII.1.3", "VII.2.1", "VII.2.2", "VII.2.4", "VII.3.1", "VII.3.2", "VII.4.3", "VII.4.4", "VII.4.5", "VII.4.6", "VII.4.7", "VII.5.1", "VII.5.4", "VII.5.5", "VIII.2.1", "VIII.2.2", "VIII.3.1", "VIII.3.3", "VIII.3.4"]
last_reviewed:
---

<InShort>

- The governance defines three types of dataset: 1+MG compliant, 1+MG cohort and externally governed. The type decides who takes the access decision, and who is controller for it.
- For 1+MG compliant datasets, a 1+MG Data Holder in the country decides. For 1+MG cohort datasets, the Genome EDIC decides, after a review by the national reviewers the Member Country names, and by the 1+MG DAC. Externally governed datasets follow their own rules, outside the 1+MG Data Governance.
- Every dataset states its type in the catalogue, and the system supports all three types, so that Users follow one procedure whatever the type.

</InShort>

## The problem

[Users](/glossary#user) often need data from several countries at once. For the access decision, the governance describes two alternative scenarios: the legal responsibility is at national level, or it lies with the [Genome EDIC](/glossary#genome-edic) legal entity <GovRef id="II.1" />. It also allows datasets that don't follow the [1+MG Data Governance](/glossary#1mg-data-governance) at all <GovRef id="VII.2.1" />.

If the system doesn't know which case applies to a dataset, it can't send an access request to the right reviewers, name the right controller, or tell the User what to expect.

## The three types

The glossary gives the governance definitions word for word. In short:

| Type | What it means | Who decides on access | Controller for the access decision |
|---|---|---|---|
| [1+MG compliant datasets](/glossary#1mg-compliant-datasets) | Made available under the 1+MG Data Governance, with the legal responsibility for the access decision at national level | A [1+MG Data Holder](/glossary#1mg-data-holder) in the [Member Country](/glossary#genome-edic-member-country) <GovRef id="VII.5.4" /> | The 1+MG Data Holder <GovRef id="III" /> |
| [1+MG cohort datasets](/glossary#1mg-cohort-datasets) | Made available under the 1+MG Data Governance, with the legal responsibility for the access decision at the Genome EDIC | The Genome EDIC: the [Genome EDIC CC](/glossary#genome-edic-central-coordination-genome-edic-cc) adopts and documents the decision <GovRef id="VII.5.5" /> | The Genome EDIC <GovRef id="III" /> |
| [Externally governed datasets](/glossary#externally-governed-datasets) | Can be found in the catalogue if they meet inclusion criteria on quality and <Acronym id="ELSI" />, but are not made available under the 1+MG Data Governance <GovRef id="III" /> | Their own data provider, or a health data access body under the <Acronym id="EHDS" /> <GovRef id="VII.3.1" /> | Outside the 1+MG Data Governance |

A note on words: in its sections on discovery and access requests, the governance calls the providers of externally governed datasets "1+MG Data Providers" <GovRef id="VII.2.1" /> <GovRef id="VII.3.1" />. By the governance's definitions, they don't act as 1+MG Data Providers for these datasets <GovRef id="III" />. This documentation calls them providers of externally governed datasets.

For both 1+MG types, the legal basis for the disclosure is consent, or a legislative act at country, regional or Union level that explicitly mandates the sharing <GovRef id="III" />; for 1+MG compliant data the act must provide for the Genome EDIC Secondary Use Framework <GovRef id="VI.1.2" />. The information and consent at inclusion name the controller for the disclosure, so the type is fixed before inclusion <GovRef id="VI.1.5" />. [8.6](/concepts/legal-basis-and-consent) gives the details.

## The rule

1. **Every dataset must state its type** in the catalogue, and with whom the data access application is shared. For 1+MG cohort datasets, the [1+MG NCP](/glossary#1mg-national-coordination-point-1mg-ncp) provides this information <GovRef id="VI.4.4" />; for 1+MG compliant datasets, the 1+MG Data Holder does <GovRef id="VI.4.5" />.
2. **The Member Country chooses the type** of its datasets. The governance asks each Member Country to decide on a national strategy for the responsibility of downstream data disclosure, and to nominate, where applicable, its 1+MG Data Holders <GovRef id="VI.1.3" />. The architecture decision record [ADR-0002](/decisions/0002-disclosure-paths-per-dataset) proposes to read this as the choice between the two 1+MG types. The level of the choice (country, [1+MG Data Provider](/glossary#1mg-data-provider) or dataset) is still open (see the open points).
3. **The system must support both decision paths,** and one access request may cover datasets of both types.
4. **Users must follow one procedure, whatever the type.** The Genome EDIC CC remains their one-stop shop and tells them the outcome <GovRef id="VII.5.5" />.
5. **Externally governed datasets must not enter the 1+MG review.** The Genome EDIC CC lets the User contact the data provider of these datasets directly, or sends them to the EU dataset catalogue <GovRef id="VII.3.1" />. A 1+MG secure processing environment (<Acronym id="SPE" />) must let the User import the data, after a security review by the [1+MG IT infrastructure provider](/glossary#1mg-it-infrastructure-provider) <GovRef id="VIII.3.1" /> <GovRef id="VIII.3.3" />.

Until the Genome EDIC is operational, only externally governed datasets can be accessed through the system; the two 1+MG types follow ([ADR-0003](/decisions/0003-implementation-in-steps), proposed). See [chapter 11](/risks#genome-edic-operational).

## How it works in each phase

This table is the one place for the rules per type of dataset and per phase; other pages link here.

| Phase | 1+MG compliant datasets | 1+MG cohort datasets | Externally governed datasets |
|---|---|---|---|
| **Inclusion and catalogue** | The 1+MG Data Provider includes the data, as controller for the inclusion <GovRef id="VI.2.2" /> <GovRef id="VI.4.3" />. The 1+MG NCP checks them and sends the metadata to the Genome EDIC catalogue <GovRef id="VI.4.4" />. The 1+MG Data Holder receives the data and holds them legally for secondary use, as controller <GovRef id="VI.4.5" />; a [1+MG Data Host](/glossary#1mg-data-host) that is not the 1+MG Data Holder is its processor, and signs a data processing agreement <GovRef id="VI.4.6" /> | Same inclusion and checks. The Genome EDIC holds the data legally; a 1+MG Data Host in the country holds them on its behalf, as its processor <GovRef id="III" /> <GovRef id="VI.4.6" /> | Listed in the catalogue if they meet the inclusion criteria on quality and ELSI <GovRef id="III" />. Who sets and checks the criteria is open |
| **Discovery** (research, policy development, <Acronym id="QM" /> in healthcare) | Subject-level data discovery is already processing of personal data. The User states the purpose and the search criteria first <GovRef id="VII.2.4" />. The [User Organisation](/glossary#user-organisation) and the 1+MG Data Holder, as controller for the disclosure, are joint controllers <GovRef id="VII.1.3" />. The 1+MG Data Holder performs the data protection impact assessment (<Acronym id="DPIA" />); the Genome EDIC may prepare it where it is joint controller <GovRef id="VII.2.2" />. Whether it is, is open ([8.2](/concepts/roles#joint-controllership)) | Same, with the Genome EDIC as controller for the disclosure <GovRef id="VII.1.3" />. The Genome EDIC CC performs the DPIA <GovRef id="VII.2.2" /> | Found in the catalogue, labelled as external <GovRef id="VII.2.1" />. No subject-level discovery under the 1+MG Data Governance |
| **Access request** | Submitted through the Genome EDIC CC <GovRef id="VII.3.1" />, which routes it to the 1+MG DAC and, through the 1+MG NCP, to each 1+MG Data Holder concerned <GovRef id="VII.3.2" /> <GovRef id="VII.4.4" /> | Submitted through the Genome EDIC CC <GovRef id="VII.3.1" />, which routes it to the reviewers the Member Country names and to the 1+MG DAC <GovRef id="VII.4.7" /> | The User is sent to the data provider or to the EU dataset catalogue <GovRef id="VII.3.1" /> |
| **Review** (research, policy development, QM in healthcare) | By an internal or external Local DAC (data access committee) without conflicts of interest, as the 1+MG Data Holder organises it, considering the opinion of the [1+MG DAC](/glossary#1mg-dac) <GovRef id="VII.4.6" /> | By 1+MG Data Providers and/or [Local DACs](/glossary#local-dac), as the Member Country determines <GovRef id="VII.4.7" />, and by the 1+MG DAC. A national veto is possible where applicable <GovRef id="VII.5.1" /> | Outside the 1+MG Data Governance |
| **Decision** (research, policy development, QM in healthcare) | The 1+MG Data Holder, as controller <GovRef id="VII.5.4" />. Whether the Genome EDIC is joint controller with it is open <GovRef id="VII.2.2" /> <GovRef id="VII.5.5" /> ([8.2](/concepts/roles#joint-controllership); [ADR-0009](/decisions/0009-joint-controllership-disclosure) proposes it). The system collects the decisions, and informs stakeholders through the 1+MG NCP <GovRef id="VII.5.4" /> | The Genome EDIC, as controller: the Genome EDIC CC adopts and documents the decision, and informs stakeholders through the 1+MG NCP <GovRef id="VII.5.5" /> | Outside the 1+MG Data Governance |
| **Data protection impact assessment (<Acronym id="DPIA" />)** | The 1+MG Data Holder: a principal DPIA of the disclosure procedure with regular updates and prior consultation before the first access, and a specific DPIA for a disclosure with high risk <GovRef id="VII.5.4" />; supported by the Genome EDIC CC <GovRef id="VII.5.5" /> | The Genome EDIC, through the Genome EDIC CC, with prior consultation <GovRef id="VII.5.5" /> | Outside the 1+MG Data Governance |
| **Use** | In a 1+MG SPE, in the national scope <GovRef id="II.1" />, or, where applicable, in the SPE provided by the European Commission (open point) <GovRef id="VIII.2.2" />. For research, the data may also be pooled for a time in a certified SPE, where the Member Country allows it <GovRef id="VIII.3.4" />. The User Organisation is controller for the downstream use <GovRef id="VII.1.3" />. The Genome EDIC is its processor, and the SPE providers are the Genome EDIC's sub-processors <GovRef id="VIII.2.1" />; [8.2](/concepts/roles#the-chain-of-agreements) sets out the chain of agreements | Same | Imported into a 1+MG SPE, under the dataset's own rules, after a security review by the 1+MG IT infrastructure provider <GovRef id="VIII.3.1" /> <GovRef id="VIII.3.3" />. The User Organisation is then controller for their use. After linkage, the Genome EDIC's sub-processors take measures to reduce the risk of identification <GovRef id="VIII.3.1" /> <GovRef id="VIII.3.3" /> |
| **Healthcare reuse** | No formal access decision per request: access rests on the framework data use agreement of the User Organisation <GovRef id="VII.5.4" />. One member of the 1+MG DAC checks the plausibility of the request within 1 to 3 working days. A co-reviewer checks it too, so that two people check it; the Genome EDIC CC agrees with the 1+MG Data Holder who the co-reviewer is <GovRef id="VII.4.3" />. The 1+MG NCP informs the 1+MG Data Holder of the request and of the outcome at once <GovRef id="VII.4.5" /> | Same: no access decision per request <GovRef id="VII.4.3" /> <GovRef id="VII.5.4" />. At least two people check the request <GovRef id="VII.4.3" />. The 1+MG NCP channels the information to the national stakeholders after the 1+MG DAC's check <GovRef id="VII.4.5" /> | Not applicable |

## Where it applies

These pages ask *what differs per type of dataset?* and build on this page:

- **Context:** [3.3 European, national and User Organisation scopes](/context/scopes).
- **Building blocks:** [5.1.1 User Portal and central data catalogue](/building-blocks/european/user-portal-and-catalogue), [5.1.2 Access request management](/building-blocks/european/access-request-management), [5.2.2 Access review and decision support](/building-blocks/national/access-decision-support).
- **Runtime:** [6.1 Data inclusion](/runtime/data-inclusion), [6.2.1 Registration of the User Organisation](/runtime/access/registration), [6.2.3 Data access request](/runtime/access/request), [6.2.4 Review and decision](/runtime/access/review-and-decision), [6.3.1 Data use agreement](/runtime/use/data-use-agreement), [6.3.3 Healthcare reuse](/runtime/use/healthcare-reuse).
- **Concepts:** [8.2 Controllers, processors and responsibilities](/concepts/roles), [8.6 Legal basis, consent and objection](/concepts/legal-basis-and-consent), [8.10 Metadata and semantic interoperability](/concepts/metadata-and-interoperability).
- **Requirements:** [1.1 Requirements overview](/introduction/requirements).

## Legal and governance basis

- **Governance:** three lifecycle phases, each with its own controller(s), and two scenarios for the access decision <GovRef id="II.1" />; the definitions of the three types <GovRef id="III" />; the Member Country's national strategy for the responsibility of downstream disclosure <GovRef id="VI.1.3" />, taken before inclusion because it becomes part of the consent <GovRef id="VI.1.5" />; why externally governed datasets were added <GovRef id="VII.2.1" />. The sections cited in the tables above give each responsibility.
- **<Acronym id="GDPR" />:** the controller (Art. 4(7)) and the data protection impact assessment (Art. 35) <Cite id="gdpr" />. [8.2](/concepts/roles) gives the controllers and processors of every processing operation.
- **EHDS:** for data made available under the EHDS, the User finds them in the EU dataset catalogue (Art. 79) and applies to a health data access body, or through HealthData@EU for cross-border data (Art. 67) <GovRef id="VII.3.1" /> <Cite id="ehds" />.

:::caution[Open points]
- **At which level the type of a dataset is chosen.** The Member Country decides the national strategy for downstream disclosure <GovRef id="VI.1.3" />. Whether it chooses once for the country, per 1+MG Data Provider or per dataset, and whether it may nominate no 1+MG Data Holder at all, is open. See [chapter 11](/risks#dataset-type-choice).
- **Whether one dataset can be of more than one type,** for example part of it disclosed as 1+MG compliant data and part as 1+MG cohort data. The governance doesn't say. See [chapter 11](/risks#dataset-multiple-types).
- **When a national veto applies** to 1+MG cohort data ("where applicable") <GovRef id="VII.5.1" />: to be detailed in 6.2.4. See [chapter 11](/risks#national-veto).
- **Whether the Genome EDIC is joint controller with the 1+MG Data Holder** for 1+MG compliant datasets, for discovery and for the disclosure <GovRef id="VII.2.2" /> <GovRef id="VII.5.5" />. [8.2](/concepts/roles#joint-controllership) sets out the options, and [ADR-0009](/decisions/0009-joint-controllership-disclosure) proposes joint controllership. See [chapter 11](/risks#joint-controllership).
- **When 1+MG data may be processed in the SPE provided by the European Commission,** "where applicable" <GovRef id="VIII.2.2" />. See [chapter 11](/risks#commission-spe).
- **Who sets and checks the inclusion criteria** on quality and ELSI for externally governed datasets <GovRef id="III" />. See [chapter 11](/risks#external-inclusion-criteria).
:::
