---
title: "12. Glossary"
sidebar_label: "12. Glossary"
slug: /glossary
sidebar_position: 12
owner: "@brunopacheco1"
reviewers: ["@rwwh", "@kjellp", "@TroelsRasmussen"]
status: in-review
wave: 1
audience: [policy, legal, elsi, security, dpo, implementer]
governance_refs: ["I", "II.3", "II.4", "III", "V.1.3", "V.2.4", "VI.1.1", "VI.4.6", "VII.1.3", "VII.2.3", "VII.3.1", "VII.4.6", "VII.4.7", "VII.5.4", "VII.5.5", "VIII.2.2", "VIII.3.3", "VIII.3.4", "VIII.11.1", "VIII.11.2"]
last_reviewed:
---

<InShort>

- Terms from the governance are quoted word for word.
- Where the architecture adds a term, it is marked "architecture term". Summaries of the governance are marked "summary", and terms from the GDPR and the EHDS "legal term".
- Acronyms are listed at the end.

</InShort>

## Terms from the governance

The definitions below are quoted word for word from the 1+MG Data Governance master document (version 2025-12), published as the annex of <Acronym id="GDI" /> D2.4 <Cite id="dg" />, <GovRef id="III" long />. Words in square brackets are in the original, except "[catalogue]", which we added where a word is missing. If the governance changes a definition, update it here. The terms are in alphabetical order, ignoring the prefixes "1+MG" and "Genome EDIC". On other pages, the first mention of each term links to its entry here.

### Genome EDIC Assembly of Members

The decision-making body of the Genome EDIC.

_The governance also calls this body the "Genome EDIC General Assembly", for example in <GovRef id="VI.1.1" /> and in the definition of 1+MG compliant local IT infrastructure. This documentation uses "Genome EDIC Assembly of Members"._

### Genome EDIC Central Coordination (Genome EDIC CC)

Support staff in the Genome EDIC; the Genome EDIC CC is responsible for operationalising the overarching elements of the Genome EDIC. It serves as a one-stop-shop for Users and a support for EU-level questions on the infrastructure also towards 1+MG Data Providers. The Genome EDIC CC is listed separately to the Genome EDIC Assembly of Members to separate more clearly responsibilities within the Genome EDIC.

### 1+MG cohort datasets

Datasets that can be disclosed to Users by the Genome EDIC as controller in accordance with the 1+MG data governance.

_In the architecture: the Genome EDIC decides on access; the Genome EDIC CC adopts and documents the decision <GovRef id="VII.5.5" />. See [8.12 Types of dataset](/concepts/dataset-types)._

### 1+MG compliant datasets

Datasets that can be disclosed to Users by 1+MG Data Holders as controllers in accordance with the 1+MG data governance.

_In the architecture: a 1+MG Data Holder in the Member Country decides on access <GovRef id="VII.5.4" />. See [8.12 Types of dataset](/concepts/dataset-types)._

### 1+MG compliant local IT infrastructure

IT infrastructure used to process (including store) data for the operations under the Genome EDIC Secondary Use Framework that is compliant with the requirements for functionalities, security and performance set out by the Genome EDIC General Assembly.

### 1+MG DAC

Data Access Committee, which may include several domain-specific sub-committees, provided by the Genome EDIC CC that receives and reviews access requests and moderates consensus discussions on access requests where necessary.

### 1+MG Data Holder

An organisation in a Genome EDIC Member Country that is responsible for the access decision to disclose 1+MG compliant data to Users.

### 1+MG Data Host

An entity that physically holds 1+MG compliant data or 1+MG cohort datasets in 1+MG compliant local IT infrastructure on behalf of the 1+MG Data Holder or the Genome EDIC who hold the data legally.

_In the architecture: the 1+MG Data Host stores the data; the 1+MG Data Holder or the Genome EDIC is legally responsible for them. The Data Host acts as processor for them under a data processing agreement, unless it is itself the 1+MG Data Holder <GovRef id="VI.4.6" />._

### 1+MG Data Provider

An organisation that, individually or jointly with other 1+MG Data Providers, can form at least one category of 1+MG minimum datasets from data it processes as controller for its own purposes, and makes these data available within the Genome EDIC Secondary Use Framework in accordance with the 1+MG Data Governance. The actual datasets may be broader and contain more data types than the respective 1+MG minimum dataset.

A 1+MG Data Provider may be, but is not necessarily, the same entity as the 1+MG Data Holder. A 1+MG Data Provider may also be a health data holder in the <Acronym id="EHDS" />. 1+MG Data Providers must be based in a country that is a full member of the Genome EDIC.

They must be able to demonstrate a legal basis to make the data available in 1+MG. Such a legal basis can be established through consent under Art. 6.1 and 9.2 <Acronym id="GDPR" /> or through a legislative act on the country/region or Union level that explicitly mandates them for such a data sharing.

### Data subject

A natural person whose data are made available in the Genome EDIC. By principle, we assume that these persons are identifiable, even though that may not be true in all cases or a person may already be deceased.

### Externally governed datasets

Datasets that should meet certain inclusion criteria on quality and <Acronym id="ELSI" />, based on which they are made findable in the [catalogue] and will be made available to Users in the 1+MG IT infrastructure but not according to the 1+MG data governance.

_In the architecture: access follows the dataset's own rules, set by its data provider or by a health data access body under the EHDS; the Genome EDIC doesn't decide on access <GovRef id="VII.3.1" />. See [8.12 Types of dataset](/concepts/dataset-types)._

### Genome EDIC

The central legal entity incorporating the 1+MG infrastructure. It is established through a Commission Implementing Decision as a European Digital Infrastructure Consortium implementing the multi-country project based on the 1+MG Declaration.

_A European Digital Infrastructure Consortium (<Acronym id="EDIC" />) is set up under Decision (EU) 2022/2481 (the Digital Decade policy programme), Articles 13 to 21 <Cite id="dddp" />._

### 1+MG IT infrastructure provider

An entity that makes an IT environment on the central, national and local level, as applicable, that may host data and metadata of 1+MG and enables local or federated workflows through suitable tools. The 1+MG IT infrastructure must be accredited for service provision in the Genome EDIC. [The details are to be defined jointly with 1+MG <Acronym id="WG">WG5</Acronym>/Pillar II.]

_In plain words: an organisation that runs IT for the Genome EDIC system, such as platforms and secure processing environments, centrally, in a country or at a single site._

:::caution[Open point]
The details of the 1+MG IT infrastructure, including how it is accredited, are still to be defined, jointly with 1+MG Working Group 5 and GDI Pillar II. See [chapter 11](/risks#accreditation).
:::

### Local DAC

Group of natural or legal persons that reviews the access requests and the opinion by the 1+MG DAC relevant for the datasets for which it is in charge to come to a recommendation on the access request for the data it oversees.

_In plain words: a committee that reviews access requests for the data it is in charge of, and recommends a decision. Despite its name, a Local DAC sits in the national scope, and may be internal or external to the 1+MG Data Holder <GovRef id="VII.4.6" />. The reading guide of the governance calls it "the national DAC who supports the 1+MG Data Holders in their access decision" <GovRef id="I" />. For 1+MG cohort datasets, it may also be the body the Member Country names for the national review <GovRef id="VII.4.7" />._

### Genome EDIC Member Country

A country that has become a full member of the Genome EDIC. Genome EDIC Member Countries must have established a 1+MG NCP and the relevant 1+MG IT infrastructure locally or have access to relevant 1+MG IT infrastructure.

### 1+MG National Coordination Point (1+MG NCP)

The national node within 1+MG Member Countries that is responsible for, among other things, coordinating national stakeholders and serving as the point of contact for the country, both for the Genome EDIC and for the national stakeholders, including the public. 1+MG NCPs must have been mandated by the Genome EDIC Member Country. They must have sufficient knowledge on the legal situation in the country to advise 1+MG Data Providers. They may also be a provider of the local 1+MG IT infrastructure.

_"1+MG Member Countries" here means Genome EDIC Member Countries. The 1+MG NCP is not the same as the national contact point for secondary use under the EHDS (EHDS Art. 75(1)); a Member State may give both roles to one organisation._

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

_The definitions write "User organisation"; the sections of the governance, and the other pages of this documentation, write "User Organisation". In the architecture: the User Organisation is controller for the downstream use of the data, and joint controller for subject-level data discovery <GovRef id="VII.1.3" />._

## Types of use

The governance names four types of use, in its scope of secondary use <GovRef id="II.3" />, but doesn't define them among its definitions. The entries below summarise them in our own words. The system serves these four types of use only. _Summary._

### Research

Scientific research that aims to understand diseases better, or to develop new products, to improve prevention, diagnosis and treatment. It is read broadly, as in the GDPR, and includes recruiting participants for clinical studies <GovRef id="II.3" />. _Summary._

### Policy development

Use of the data to give governments and public authorities information for policies that improve the health system, such as access to care, its delivery, cost and reimbursement. It is expected to be limited to statistics <GovRef id="II.3" />. _Summary._

### Quality management in healthcare

Use of the data by a healthcare provider, or a service provider on its behalf, to compare its own diagnoses or treatments with others, and find how to improve them, for groups of patients rather than one patient <GovRef id="II.3" />. _Summary._

### Healthcare reuse

Use of the data to support the care of a current patient, by comparing them with similar patients: through statistics, record-level data where needed, and questions to the treating healthcare professional <GovRef id="II.3" />. _Summary._

## Architecture terms

The governance doesn't define these terms. The architecture adds them to say who is responsible for what, and where things run, and to name ideas the pages use often. [3.3 European, national and User Organisation scopes](/context/scopes) explains the scopes in more depth, with a diagram of which actor belongs to which scope. Two actors are not tied to one scope. A 1+MG IT infrastructure provider can work for the European or the national scope, at central, national or local level. Data subjects are the people the data are about. They are outside every scope: they have rights, not duties, in the system, and its rules exist to protect them.

### European scope

What the Genome EDIC is responsible for: its bodies (the Genome EDIC Assembly of Members, the Genome EDIC Central Coordination and the 1+MG DAC), the common rules, and the services the Genome EDIC Central Coordination runs for all Member Countries. _Architecture term._

### National scope

What a Genome EDIC Member Country is responsible for: its 1+MG NCP, 1+MG Data Holders, 1+MG Data Providers, 1+MG Data Hosts, Local DACs and other Genome EDIC national entities, and the building blocks they run. The Member Country decides which organisations take these roles. _Architecture term._

### User Organisation scope

What a User Organisation is responsible for, for itself and for the Users acting on its behalf: its registration, the onboarding and offboarding of its Users, its access requests and the use of the data. _Architecture term._

### Central, national and local level

Where an IT environment runs, as in the definition of the 1+MG IT infrastructure provider. The deployment view (chapter 7) uses these levels. A level is not a scope: a 1+MG Data Host, for example, belongs to the national scope and runs at local level. _Architecture term._

### Data use agreement

The agreement that sets the conditions under which a User Organisation and its Users may use the data of an approved access request. The Genome EDIC CC issues it <GovRef id="VII.5.5" />. See [6.3.1](/runtime/use/data-use-agreement). _Architecture term._

### HealthData@EU

The European infrastructure under the EHDS that connects the national contact points for secondary use and the authorised participants, so that data can be accessed across borders (EHDS Art. 75) <Cite id="ehds" />. See [8.11](/concepts/ehds-integration). _Architecture term._

### Incidental findings

Results about a data subject's health that a User finds by chance, while working on another question. Only clinically actionable findings on a list that the Genome EDIC CC sets can be returned, and only where the data subject agreed <GovRef id="VIII.11.1" /> <GovRef id="VIII.11.2" />. They differ from **secondary findings**: a deliberate screening of the data to find people who could benefit from a treatment, which is outside the governance <GovRef id="II.4" />. See [6.3.8](/runtime/use/incidental-findings). _Summary._

### Key-coded identifier

The identifier that replaces a data subject's name and other direct identifiers in the data. The link back to the person is held nationally, and each Member Country enables it <GovRef id="V.2.4" />. Data with key-coded identifiers are pseudonymised data under the GDPR (Art. 4(5)), and so still personal data. This documentation uses the governance's term, "key-coded identifier", and not "pseudonym". See [8.7](/concepts/identifiers-and-linkage). _Summary._

### 1+MG minimum dataset

A defined minimum set of data, per category of data, that 1+MG Data Providers must be able to form, as the definition of the 1+MG Data Provider requires <GovRef id="III" />. The data models are set by 1+MG Working Group 3 and adopted by the Genome EDIC Assembly of Members <GovRef id="VI.1.1" />. See [8.10](/concepts/metadata-and-interoperability). _Architecture term._

### Pooling

Bringing data from several countries together, for a time, in one secure processing environment. For research, each Member Country decides whether its data may be pooled; an SPE that pools data from other Member Countries must be certified <GovRef id="VIII.3.4" /> <GovRef id="V.1.3" />. _Architecture term._

### Secure processing environment (SPE)

A protected IT environment where Users analyse the data without being able to download personal data. A **1+MG SPE** is run by a 1+MG IT infrastructure provider and meets the minimum requirements of the Genome EDIC <GovRef id="VIII.3.3" />. The **SPE provided by the European Commission** is run by the Commission under the EHDS; 1+MG data may be processed there only "where applicable" <GovRef id="VIII.2.2" />. See [5.2.3](/building-blocks/national/spe). _Architecture term._

### Subject-level data discovery

A search over the individual records held in the system, which returns to the User only the number of records that match the criteria <GovRef id="VII.2.3" />. It processes personal data, under the joint controllership of the User Organisation and the controller for the disclosure <GovRef id="VII.1.3" />. See [5.2.7](/building-blocks/national/subject-level-discovery). _Summary._

## Legal terms from the GDPR and the EHDS

The pages use these terms as the law defines them. Each entry gives the meaning in a few words, and the article to read. _Legal term._

### Controller

Who decides why and how personal data are processed (<Acronym id="GDPR" /> Art. 4(7)) <Cite id="gdpr" />. _Legal term._

### Processor

Who processes personal data on behalf of a controller (GDPR Art. 4(8)), under a contract or other legal act (GDPR Art. 28) <Cite id="gdpr" />. _Legal term._

### Joint controllers

Two or more controllers who decide together why and how data are processed, and set out their responsibilities in an arrangement (GDPR Art. 26) <Cite id="gdpr" />. _Legal term._

### Health data access body

A body that a Member State designates to decide on access to electronic health data for secondary use, and to issue data permits (EHDS Art. 55 and 57) <Cite id="ehds" />. The Genome EDIC is not one. _Legal term._

### Health data holder

An organisation that has electronic health data and, under the EHDS, must make them available for secondary use (EHDS Art. 2(2), point (t)) <Cite id="ehds" />. A 1+MG Data Provider may also be one. _Legal term._

### Health data user

A person or organisation that has been given lawful access to electronic health data for secondary use under the EHDS (EHDS Art. 2(2), point (u)) <Cite id="ehds" />. _Legal term._

### Data permit

The decision of a health data access body that allows a health data user to process certain data for secondary use (EHDS Art. 2(2), point (v); Art. 68) <Cite id="ehds" />. A 1+MG SPE is an EHDS SPE only where it meets EHDS Art. 73 and is used under a data permit. _Legal term._

### Authorised participant in HealthData@EU

A research infrastructure, or similar infrastructure based on Union law, that may connect to HealthData@EU once the Commission has checked its compliance (EHDS Art. 75(4), (5) and (13)) <Cite id="ehds" />. _Legal term._

## Acronyms

On other pages, the first use of each acronym links to this table, with its meaning as a tooltip.

<AcronymTable />
