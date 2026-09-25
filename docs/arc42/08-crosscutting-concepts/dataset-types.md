---
title: "8.12 Types of dataset"
sidebar_position: 12
slug: /concepts/dataset-types
owner: "@brunopacheco1"
reviewers: []
status: draft
wave: 2
audience: [policy, legal, dpo, implementer]
governance_refs: ["II.1", "III", "VI.4.4", "VII.1.3", "VII.2.1", "VII.3.1", "VII.4.3", "VII.4.6", "VII.4.7", "VII.5.1", "VII.5.4", "VII.5.5", "VIII.3.3"]
last_reviewed:
---

<InShort>

- The governance knows three types of dataset: 1+MG compliant, 1+MG cohort and externally governed. The type decides who takes the access decision, and who is controller for it.
- For 1+MG compliant datasets, a 1+MG Data Holder in the country decides. For 1+MG cohort datasets, the Genome EDIC decides, after a national review. Externally governed datasets follow their own rules, outside the 1+MG data governance.
- Every dataset states its type in the catalogue, and the system supports all three types, so that Users follow one procedure whatever the type.

</InShort>

## The problem

[Users](/glossary#user) often need data from several countries at once. For the access decision, the governance describes two alternative scenarios: the legal responsibility is at national level, or it lies with the [Genome EDIC](/glossary#genome-edic) legal entity <GovRef id="II.1" />. It also allows datasets that don't follow the 1+MG data governance at all <GovRef id="VII.2.1" />.

If the system doesn't know which case applies to a dataset, it can't send an access request to the right reviewers, name the right controller, or tell the User what to expect.

## The three types

The glossary gives the governance definitions word for word. In short:

| Type | What it means | Who decides on access | Controller for the access decision |
|---|---|---|---|
| [1+MG compliant datasets](/glossary#1mg-compliant-datasets) | Made available under the 1+MG data governance, with the legal responsibility for the access decision at national level | A [1+MG Data Holder](/glossary#1mg-data-holder) in the [Member Country](/glossary#genome-edic-member-country) <GovRef id="VII.5.4" /> | The 1+MG Data Holder <GovRef id="III" /> |
| [1+MG cohort datasets](/glossary#1mg-cohort-datasets) | Made available under the 1+MG data governance, with the legal responsibility for the access decision at the Genome EDIC | The Genome EDIC: the [Genome EDIC CC](/glossary#genome-edic-central-coordination-genome-edic-cc) adopts and documents the decision <GovRef id="VII.5.5" /> | The Genome EDIC <GovRef id="III" /> |
| [Externally governed datasets](/glossary#externally-governed-datasets) | Can be found in the catalogue if they meet inclusion criteria on quality and <Acronym id="ELSI" />, but are not made available under the 1+MG data governance <GovRef id="III" /> | Their own data provider, or a health data access body under the <Acronym id="EHDS" /> <GovRef id="VII.3.1" /> | Outside the 1+MG data governance |

## The rule

1. **Every dataset must state its type** in the catalogue. For 1+MG cohort datasets, the catalogue entry must also say with whom the data access application is shared <GovRef id="VI.4.4" />.
2. **The Member Country chooses the type** of each of its datasets. This is proposed in the architecture decision record [ADR-0002](/decisions/0002-disclosure-paths-per-dataset), and is still to be confirmed (see the open points).
3. **The system must support both decision paths for every dataset,** and one access request may cover datasets of both types.
4. **Users must follow one procedure, whatever the type.** The Genome EDIC CC remains their one-stop shop and tells them the outcome <GovRef id="VII.5.5" />.
5. **Externally governed datasets must not enter the 1+MG review.** The Genome EDIC CC sends the User to their data provider, or to the EU dataset catalogue <GovRef id="VII.3.1" />. A 1+MG secure processing environment (<Acronym id="SPE" />) must let the User import the data <GovRef id="VIII.3.3" />.

## How it works in each phase

| Phase | 1+MG compliant datasets | 1+MG cohort datasets | Externally governed datasets |
|---|---|---|---|
| **Inclusion and catalogue** | The [1+MG Data Provider](/glossary#1mg-data-provider) includes the data. The [1+MG NCP](/glossary#1mg-national-coordination-point-1mg-ncp) checks them and sends the metadata to the Genome EDIC catalogue <GovRef id="VI.4.4" /> | Same, and the catalogue entry says with whom the access application is shared <GovRef id="VI.4.4" /> | Listed in the catalogue if they meet the inclusion criteria on quality and ELSI <GovRef id="III" /> |
| **Access request** | Submitted through the Genome EDIC CC <GovRef id="VII.3.1" /> | Same | The User is sent to the data provider or to the EU dataset catalogue <GovRef id="VII.3.1" /> |
| **Review** | As the 1+MG Data Holder decides, without conflicts of interest, considering the opinion of the [1+MG DAC](/glossary#1mg-dac) <GovRef id="VII.4.6" /> | By 1+MG Data Providers and/or [Local DACs](/glossary#local-dac), as the Member Country determines <GovRef id="VII.4.7" />, and by the 1+MG DAC. A national veto is possible where applicable <GovRef id="VII.5.1" /> | Outside the 1+MG data governance |
| **Decision** | The 1+MG Data Holder <GovRef id="VII.5.4" /> | The Genome EDIC CC adopts and documents it, and informs stakeholders through the 1+MG NCP <GovRef id="VII.5.5" /> | Outside the 1+MG data governance |
| **Data protection impact assessment (<Acronym id="DPIA" />)** | The 1+MG Data Holder, supported by the Genome EDIC CC <GovRef id="VII.5.5" /> | The Genome EDIC CC, with prior consultation of the data protection authority <GovRef id="VII.5.5" /> | Outside the 1+MG data governance |
| **Use** | In a 1+MG SPE. The [User Organisation](/glossary#user-organisation) is controller for the downstream use <GovRef id="VII.1.3" /> | Same | Imported into a 1+MG SPE, under the dataset's own rules <GovRef id="VIII.3.3" /> |
| **Healthcare reuse fast track** | The 1+MG Data Holder arranges who co-reviews with the 1+MG DAC: a four-eyes check <GovRef id="VII.4.3" /> | At least two people check the request <GovRef id="VII.4.3" /> | Not applicable |

## Where it applies

These pages ask *what differs per type of dataset?* and build on this page:

- **Context:** [3.3 European, national and User Organisation scopes](/context/scopes).
- **Building blocks:** [5.1.1 User Portal and central data catalogue](/building-blocks/european/user-portal-and-catalogue), [5.1.2 Access request management](/building-blocks/european/access-request-management), [5.2.2 Access review and decision support](/building-blocks/national/access-decision-support).
- **Runtime:** [6.1 Data inclusion](/runtime/data-inclusion), [6.2.1 Registration of the User Organisation](/runtime/access/registration), [6.2.3 Data access request](/runtime/access/request), [6.2.4 Review and decision](/runtime/access/review-and-decision), [6.3.1 Data use agreement](/runtime/use/data-use-agreement), [6.3.3 Healthcare reuse](/runtime/use/healthcare-reuse).
- **Concepts:** [8.2 Controllers, processors and responsibilities](/concepts/roles), [8.6 Legal basis, consent and objection](/concepts/legal-basis-and-consent), [8.10 Metadata and semantic interoperability](/concepts/metadata-and-interoperability).
- **Requirements:** [1.1 Requirements overview](/introduction/requirements).

## Legal and governance basis

- **Governance:** three lifecycle phases, each with its own controller(s), and two scenarios for the access decision <GovRef id="II.1" />; the definitions of the three types <GovRef id="III" />; why externally governed datasets were added <GovRef id="VII.2.1" />. The sections cited in the tables above give each responsibility.
- **<Acronym id="GDPR" />:** the controller (Art. 4(7)) and the data protection impact assessment (Art. 35) <Cite id="gdpr" />.
- **EHDS:** for data made available through the EHDS, the User applies through the EU dataset catalogue, to a health data access body <GovRef id="VII.3.1" /> <Cite id="ehds" />.

:::caution[Open points]
- **Who chooses the type of a dataset,** and at which level: per dataset, per 1+MG Data Provider, or for the whole country. ADR-0002 assumes the Member Country ([issue #85](https://github.com/GenomicDataInfrastructure/system-architecture/issues/85)).
- **Whether one dataset can be of more than one type,** for example part of it disclosed as 1+MG compliant data and part as 1+MG cohort data. The governance doesn't say. Related to issue #85.
- **When a national veto applies** to 1+MG cohort data ("where applicable") <GovRef id="VII.5.1" />: to be detailed in 6.2.4.
:::
