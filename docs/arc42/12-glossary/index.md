---
title: "12. Glossary"
sidebar_label: "12. Glossary"
slug: /glossary
sidebar_position: 12
owner: TBD
reviewers: []
status: draft
wave: 1
audience: [policy, legal, elsi, security, dpo, implementer]
governance_refs: ["III"]
last_reviewed:
---

<InShort>

- The terms below are used exactly as the 1+MG Data Governance defines them.
- Where the architecture adds a term, it is marked "architecture term".
- Acronyms are listed at the end.

</InShort>

## Terms from the governance

The definitions below are quoted word for word from the 1+MG Data Governance master document (version 2025-12), published as the annex of GDI D2.4 <Cite id="dg" />, <GovRef id="III" long />. Words in square brackets are in the original, except "[catalogue]", which we added where a word is missing. If the governance changes a definition, update it here.

### Genome EDIC Assembly of Members

The decision-making body of the Genome EDIC.

### Genome EDIC Central Coordination (Genome EDIC CC)

Support staff in the Genome EDIC; the Genome EDIC CC is responsible for operationalising the overarching elements of the Genome EDIC. It serves as a one-stop-shop for Users and a support for EU-level questions on the infrastructure also towards 1+MG Data Providers. The Genome EDIC CC is listed separately to the Genome EDIC Assembly of Members to separate more clearly responsibilities within the Genome EDIC.

### 1+MG cohort datasets

Datasets that can be disclosed to Users by the Genome EDIC as controller in accordance with the 1+MG data governance.

### 1+MG compliant datasets

Datasets that can be disclosed to Users by 1+MG Data Holders as controllers in accordance with the 1+MG data governance.

### 1+MG compliant local IT infrastructure

IT infrastructure used to process (including store) data for the operations under the Genome EDIC Secondary Use Framework that is compliant with the requirements for functionalities, security and performance set out by the Genome EDIC General Assembly.

### 1+MG DAC

Data Access Committee, which may include several domain-specific sub-committees, provided by the Genome EDIC CC that receives and reviews access requests and moderates consensus discussions on access requests where necessary.

### 1+MG Data Holder

An organisation in a Genome EDIC Member Country that is responsible for the access decision to disclose 1+MG compliant data to Users.

### 1+MG Data Host

An entity that physically holds 1+MG compliant data or 1+MG cohort datasets in 1+MG compliant local IT infrastructure on behalf of the 1+MG Data Holder or the Genome EDIC who hold the data legally.

### 1+MG Data Provider

An organisation that, individually or jointly with other 1+MG Data Providers, can form at least one category of 1+MG minimum datasets from data it processes as controller for its own purposes, and makes these data available within the Genome EDIC Secondary Use Framework in accordance with the 1+MG Data Governance. The actual datasets may be broader and contain more data types than the respective 1+MG minimum dataset.

A 1+MG Data Provider may be, but is not necessarily, the same entity as the 1+MG Data Holder. A 1+MG Data Provider may also be a health data holder in the EHDS. 1+MG Data Providers must be based in a country that is a full member of the Genome EDIC.

They must be able to demonstrate a legal basis to make the data available in 1+MG. Such a legal basis can be established through consent under Art. 6.1 and 9.2 GDPR or through a legislative act on the country/region or Union level that explicitly mandates them for such a data sharing.

### Data subject

A natural person whose data are made available in the Genome EDIC. By principle, we assume that these persons are identifiable, even though that may not be true in all cases or a person may already be deceased.

### Externally governed datasets

Datasets that should meet certain inclusion criteria on quality and ELSI, based on which they are made findable in the [catalogue] and will be made available to Users in the 1+MG IT infrastructure but not according to the 1+MG data governance.

### Genome EDIC

The central legal entity incorporating the 1+MG infrastructure. It is established through a Commission Implementing Decision as a European Digital Infrastructure Consortium implementing the multi-country project based on the 1+MG Declaration.

### 1+MG IT infrastructure provider

An entity that makes an IT environment on the central, national and local level, as applicable, that may host data and metadata of 1+MG and enables local or federated workflows through suitable tools. The 1+MG IT infrastructure must be accredited for service provision in the Genome EDIC. [The details are to be defined jointly with 1+MG WG5/Pillar II.]

### Local DAC

Group of natural or legal persons that reviews the access requests and the opinion by the 1+MG DAC relevant for the datasets for which it is in charge to come to a recommendation on the access request for the data it oversees.

### Genome EDIC Member Country

A country that has become a full member of the Genome EDIC. Genome EDIC Member Countries must have established a 1+MG NCP and the relevant 1+MG IT infrastructure locally or have access to relevant 1+MG IT infrastructure.

### 1+MG National Coordination Point (1+MG NCP)

The national node within 1+MG Member Countries that is responsible for, among other things, coordinating national stakeholders and serving as the point of contact for the country, both for the Genome EDIC and for the national stakeholders, including the public. 1+MG NCPs must have been mandated by the Genome EDIC Member Country. They must have sufficient knowledge on the legal situation in the country to advise 1+MG Data Providers. They may also be a provider of the local 1+MG IT infrastructure.

### Genome EDIC national entities

Entities established in a Genome EDIC Member Country that is contributing to the operations under the Genome EDIC Secondary Use Framework

### Genome EDIC Secondary Use Framework (EDIC-SUF)

Rules and requirements for data inclusion, data access management and decision and data use specifying the responsibilities of the various actors over the data life cycle as defined in the data governance and adopted by the Genome EDIC Assembly of Members

### Sleeping Period

Times where data are removed temporarily from an active secure processing environment where the user does not need to have access. This can save costs and increase data protection.

### User

The individual that is seeking and achieving access to data in 1+MG.

### User organisation

The legal entity under which the User is operating.

## Architecture terms

### European scope

What the Genome EDIC is responsible for: the services operated by the Genome EDIC Central Coordination for all Member Countries, including the support for the 1+MG DAC. _Architecture term._

### National scope

What a Genome EDIC Member Country is responsible for: the building blocks of the 1+MG NCP, the 1+MG Data Holders, the 1+MG Data Providers, the 1+MG Data Hosts and the Local DACs in that country. The Member Country decides which organisations take these roles. _Architecture term._

### User Organisation scope

What a User Organisation is responsible for, for itself and for the Users acting on its behalf: its registration, the onboarding and offboarding of its Users, its access requests and the use of the data. _Architecture term._

### Central, national and local level

Where an IT environment runs, as in the definition of the 1+MG IT infrastructure provider. The deployment view (chapter 7) uses these levels. A level is not a scope: a 1+MG Data Host, for example, belongs to the national scope and runs at local level. _Architecture term._

## Acronyms

| Acronym | Meaning |
|---|---|
| AAI | Authentication and authorisation infrastructure |
| ADR | Architecture decision record |
| DAC | Data access committee |
| DG | The 1+MG Data Governance master document, published as the annex of GDI D2.4 |
| DPIA | Data protection impact assessment (GDPR Art. 35) |
| DPO | Data protection officer |
| EDIC | European Digital Infrastructure Consortium |
| EHDS | European Health Data Space (Regulation (EU) 2025/327) |
| ELSI | Ethical, legal and societal implications |
| GDI | Genomic Data Infrastructure project |
| GDPR | General Data Protection Regulation (Regulation (EU) 2016/679) |
| HDAB | Health data access body (EHDS) |
| ISMS | Information security management system |
| NCP | National Coordination Point (1+MG NCP) |
| QM | Quality management in healthcare |
| SPE | Secure processing environment |
