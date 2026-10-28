---
title: "1. Introduction and goals"
sidebar_label: "1. Introduction and goals"
sidebar_position: 1
slug: /introduction
owner: "@brunopacheco1"
reviewers: []
status: draft
wave: 2
audience: [policy, legal, elsi, security, dpo, implementer]
governance_refs: ["I", "II.1", "II.2", "II.3", "II.4", "III", "V.2.4", "VII.3.1", "VII.5.4", "VII.5.5", "VIII.1.2", "VIII.5.1", "VIII.5.3"]
last_reviewed:
---

<InShort>

- The Genome EDIC system lets approved Users across Europe find and analyse genomic and health data from many countries as if they were one dataset. The data stay in the countries, and Users can download only results that are no longer about individual people.
- It serves four types of use only: research, policy development, quality management in healthcare, and healthcare reuse.
- Some things are not covered by its rules: data that are not about individual people, searching the data for people who could benefit from a treatment, Users and organisations from outside the EU and EEA, and data from countries that are not members.

</InShort>

## What the system is for

The [Genome EDIC](/glossary#genome-edic) is a European Digital Infrastructure Consortium (<Acronym id="EDIC" />): a legal entity, set up by a Commission implementing decision, that runs the infrastructure of the 1+ Million Genomes initiative (<Acronym id="1+MG" />) <GovRef id="III" />. [2.1](/constraints/legal#the-genome-edic-today) says where its setting up stands. The system this documentation describes lets [Users](/glossary#user) find genomic and related health data from many countries, request access to them through one procedure, and analyse them in secure processing environments (<Acronym id="SPE">SPEs</Acronym>).

Its business goals come from the [1+MG Data Governance](/glossary#1mg-data-governance) <Cite id="dg" />:

- **The data stay in the countries.** Each country's government makes sure that the national structures are in place, and the data remain in the country as a rule <GovRef id="I" />. Users analyse personal data only in SPEs, and can download only non-personal results <GovRef id="II.2" />.
- **One system for the User.** Countries have as much freedom as possible in how they implement the system, but "homogeneity towards the user" is the guiding principle <GovRef id="I" />. The [Genome EDIC CC](/glossary#genome-edic-central-coordination-genome-edic-cc), the central office of the Genome EDIC, is the one-stop shop for Users, and does centrally what is more efficient there <GovRef id="I" />.
- **A [controller](/glossary#controller) for every step.** The data lifecycle has three phases: inclusion, access and use. Each phase has its own controller or controllers, each with its own legal basis <GovRef id="II.1" />. [8.2](/concepts/roles) names them for each processing operation; [8.6](/concepts/legal-basis-and-consent) gives the legal bases.
- **Data subjects informed, their choices respected.** The people the data are about, the [data subjects](/glossary#data-subject), are told how their data are used and can exercise their rights, ideally through a portal in their own country <GovRef id="V.2.4" />. Their consent and objections decide what Users can find and receive, and the public can see which projects were approved and what they found <GovRef id="II.2" /> <GovRef id="VIII.1.2" />.

The eight governance principles that shape the design are set out in [2.2 Governance principles](/constraints/governance-principles). The quality goals that follow from them are in [1.2](/introduction/quality-goals).

## Three types of dataset

The governance knows three [types of dataset](/concepts/dataset-types), and the type decides who takes the access decision <GovRef id="III" />:

- for **1+MG compliant datasets**, a [1+MG Data Holder](/glossary#1mg-data-holder) in the country decides <GovRef id="VII.5.4" />;
- for **1+MG cohort datasets**, the Genome EDIC decides <GovRef id="VII.5.5" />;
- **externally governed datasets** can be found in the catalogue, but access follows the dataset's own rules, not the 1+MG Data Governance <GovRef id="VII.3.1" />.

## Four types of use

The system gives access to data only for these four types of secondary use <GovRef id="II.3" />. The governance marks the rules that apply to only some of them, and [1.1](/introduction/requirements) lists the requirements that differ.

| Type of use | What it is for |
|---|---|
| [Research](/glossary#research) | Better understanding of diseases, or new products, to improve prevention, diagnosis and treatment. Includes recruiting participants into clinical studies. |
| [Policy development](/glossary#policy-development) | Information that helps public authorities improve the health system. The governance expects it to be limited to statistics; more complex processing, such as training a model, falls under research. |
| [Quality management in healthcare](/glossary#quality-management-in-healthcare) (<Acronym id="QM" />) | A healthcare provider compares its outcomes with those of others, to improve its care for groups of patients, not for an individual patient <GovRef id="II.3" />. |
| [Healthcare reuse](/glossary#healthcare-reuse) | A healthcare professional compares a current patient with similar patients, to find evidence on how to treat them. Can include individual records and, where the patient consented and the treating healthcare professional agrees, questions to that professional, without learning who the professional or the patient is. Users never contact patients <GovRef id="VIII.5.1" /> <GovRef id="VIII.5.3" />. |

## What is outside the governance

The governance says what it doesn't cover <GovRef id="II.4" />. "Not covered by the 1+MG Data Governance" doesn't always mean "not in the system":

- **Data that are not about individual people,** such as reference genomes (standard sequences used for comparison) and pre-computed statistics like allele frequencies (how often each variant of a gene occurs in a population). A separate data governance is expected from the Genome of Europe project, a European project that collects genomes of people across Europe as reference data. The system still offers such data for discovery from the first step of implementation ([ADR-0003](/decisions/0003-implementation-in-steps), proposed). See [chapter 11](/risks#genome-of-europe-governance).
- **Screening for secondary findings:** a deliberate search of the data for people who could benefit from a treatment. The 1+MG ELSI Working Group didn't recommend making data available for it, and some members of the 1+MG Special Group explicitly rejected it <GovRef id="II.4" />. It can only happen under national healthcare law, on national datasets, outside the system: the system offers no type of use or request form for it. It differs from [incidental findings](/glossary#incidental-findings), which are in scope.
- **Users and organisations from countries outside the EU and EEA ("third countries").** The 1+MG initiative is open to them in principle, subject to suitable safeguards and a thorough risk assessment, but this governance doesn't consider them yet <GovRef id="II.4" />. Until it does, the architecture proposes that organisations from third countries are not registered for the 1+MG data. Externally governed datasets follow their own rules.
- **Data from countries that are not members of the Genome EDIC.** Models for such data "could be considered", if the Member Countries decide so. Until then, the architecture reads them as externally governed datasets ([ADR-0002](/decisions/0002-disclosure-paths-per-dataset)). See [chapter 11](/risks#non-member-country-data).

:::caution[Open point]
What the system does for Users and User Organisations from third countries is not decided; the default above is a proposal. See [chapter 11](/risks#third-country-users).
:::

## Target state, and what GDI already delivers

This architecture describes the target state of the Genome EDIC, for all four types of use and all three types of dataset. The Genomic Data Infrastructure (<Acronym id="GDI" />) project builds the first version: the minimum viable product (<Acronym id="MVP" />).

What the GDI MVP already delivers, for externally governed datasets only:

- **a User Portal and a central dataset catalogue,** in production, with access management that sends Users to each dataset's own access procedure <Cite id="gdi-ms12" />;
- **sign-in through an identity federation,** with the User's own institutional account <Cite id="gdi-d3.6" />;
- **in every country that reaches production** (runs with real data), an allele-frequency Beacon, a search service that answers how often a variant occurs in aggregated, non-personal Genome of Europe data, and metadata search in the national catalogue (GDI D3.4, section 4.8) <Cite id="gdi-d3.4" />;
- **in some countries,** a link from search results to the access procedure for Genome of Europe data, with storage and SPEs where the data can be analysed (GDI D3.4, section 4.8) <Cite id="gdi-d3.4" />.

Other pages refer to this list rather than repeat it.

:::caution[Open point]
Access to 1+MG compliant and 1+MG cohort datasets needs an operational Genome EDIC. Until then, only externally governed datasets can be accessed through the system ([ADR-0003](/decisions/0003-implementation-in-steps), proposed). See [chapter 11](/risks#genome-edic-operational).
:::

:::caution[Risk]
GDI ends in March 2027 <Cite id="gdi-d4.4" />, possibly before the Genome EDIC is operational. See [chapter 11](/risks#gdi-end-gap).
:::

## Pages in this chapter

- [1.1 Requirements overview](/introduction/requirements): what the system must do in each phase of the lifecycle, and what differs per type of use and type of dataset.
- [1.2 Quality goals](/introduction/quality-goals): the four quality goals that matter most, and how they trace back to the governance principles.
- [1.3 Stakeholders](/introduction/stakeholders): who has a stake in the architecture, and what each expects from it and from its documentation.
