---
title: "1.2 Quality goals"
sidebar_position: 2
slug: /introduction/quality-goals
owner: "Bruno Pacheco (LNDS)"
reviewers: ["Jonas Hagberg (SU)", "Alexandru Mahmoud (UL)", "Kjell Petersen (UiB, specialist)"]
status: draft
wave: 2
audience: [policy, legal, elsi, security, dpo, implementer]
governance_refs: ["I", "II.2", "II.3", "V.1.1", "V.1.3", "V.2.4", "VI.1.1", "VII.2.3", "VII.3.1", "VII.5.1", "VII.5.3", "VII.5.5", "VIII.3.3", "VIII.3.4"]
last_reviewed:
---

<InShort>

- Four quality goals matter most for the architecture, in this order: data protection, security and data subjects' rights; one system for the User; freedom for each country to implement its part; and growth to many Users and much data.
- Each goal comes from the governance principles. Where goals pull in different directions, the protection of data subjects comes first.
- Chapter 10 will make each goal measurable with test scenarios. Until then, this page says how we will know a goal is met.

</InShort>

## The quality goals

The governance names eight principles <GovRef id="II.2" />, described in [2.2 Governance principles](/constraints/governance-principles). The four quality goals below group them, categorised according to the ISO/IEC 25010 quality model <Cite id="arc42" /> <Cite id="iso-25010" />; those terms are in the last line of each cell.

Each goal has an identifier, QG-1 to QG-4, which also gives its priority: QG-1 comes first. The priority decides which goal wins when two conflict. [Chapter 4](/solution-strategy) and [chapter 10](/quality) refer to the goals by these identifiers.

| ID | Quality goal | What it means | Motivation (governance principle) | Where it is addressed |
|---|---|---|---|---|
| QG-1 | **Data protection, security and data subjects' rights**<br/>*ISO/IEC 25010: security (confidentiality, integrity, accountability, authenticity)* | Users process personal data only for an approved purpose, in a secure processing environment (<Acronym id="SPE" />), and can't download them. Every other actor processes only the personal data its task needs, as the controller or processor named in [8.2](/concepts/roles). Every access to personal data, including each subject-level search, is logged and traceable to a person and a [User Organisation](/glossary#user-organisation). Every node of the federation (each organisation that runs a part of the system) is audited by an external body against the same minimum requirements, and/or works towards certification. Data subjects are informed about each project; their consent preferences and objections decide which records a User can find and receive; and they can exercise their rights through a national portal. | [GDPR-compliant](/constraints/governance-principles#gdpr-compliant), [secure](/constraints/governance-principles#secure), [federated](/constraints/governance-principles#federated) <GovRef id="II.2" />. Technical and organisational measures that reflect the high risk <GovRef id="V.1.3" />, under a common risk management framework and information security management system (<Acronym id="ISMS" />) <GovRef id="V.1.1" />. Tools for data subjects' rights <GovRef id="V.2.4" />; information after each access decision <GovRef id="VII.5.3" />. | [4](/solution-strategy), [8.1](/concepts/data-protection-by-design), [8.3](/concepts/security), [8.4](/concepts/identity-and-access) ([ADR-0004](/decisions/0004-identity-and-authorisation) and [ADR-0006](/decisions/0006-trust-boundaries), wave 3), [8.5](/concepts/logging-and-audit), [8.8](/concepts/output-control), [6.4](/runtime/data-subject-rights), [6.5](/runtime/security-incident) |
| QG-2 | **One system for the User**<br/>*ISO/IEC 25010: compatibility (interoperability); interaction capability* | A [User](/glossary#user) finds all data in one catalogue, applies once through one procedure, and analyses data from several countries as if they were one cohort. The system fits the European Health Data Space (<Acronym id="EHDS" />): its metadata, request form and SPEs can connect to HealthData@EU. | [Virtual cohort](/constraints/governance-principles#virtual-cohort), [EHDS-proof](/constraints/governance-principles#ehds-proof), [scalable](/constraints/governance-principles#scalable) <GovRef id="II.2" />. "Homogeneity towards the user" is the guiding principle <GovRef id="I" />. Common data models <GovRef id="VI.1.1" />, one access request <GovRef id="VII.3.1" />. | [4](/solution-strategy), [8.10](/concepts/metadata-and-interoperability) ([ADR-0007](/decisions/0007-catalogue-metadata-and-federation), wave 3), [8.11](/concepts/ehds-integration) ([ADR-0008](/decisions/0008-connection-to-healthdata-eu), wave 3), [5.1.1](/building-blocks/european/user-portal-and-catalogue) |
| QG-3 | **Freedom to implement, and to change**<br/>*ISO/IEC 25010: flexibility (adaptability, replaceability); maintainability (modifiability)* | Each [Genome EDIC Member Country](/glossary#genome-edic-member-country) can use its own tools and organisations, as long as they meet the common interfaces and minimum requirements. Data models, request forms and minimum requirements can change without rebuilding the components. | [Implementation freedom](/constraints/governance-principles#implementation-freedom), [continuous improvement](/constraints/governance-principles#continuous-improvement) <GovRef id="II.2" />. | [4](/solution-strategy), [national implementation profile](/appendix/national-profile-template) |
| QG-4 | **Growth**<br/>*ISO/IEC 25010: flexibility (scalability); performance efficiency (capacity)* | The system keeps working as countries, datasets, Users and requests are added. Analyses across countries run efficiently, with high-performance computing where needed. | [Scalable](/constraints/governance-principles#scalable) <GovRef id="II.2" />. SPEs that allow efficient analysis across countries <GovRef id="VIII.3.3" />. | [4](/solution-strategy), [5.2.3](/building-blocks/national/spe), [chapter 7](/deployment) |

The goals are architecture goals, not project goals. How many genomes are made available, or by when, is not a quality goal.

:::caution[Open point]
How 1+MG IT infrastructure providers are accredited, and how accreditation relates to audit and certification, is still to be defined. See [chapter 11](/risks#accreditation).
:::

## When goals conflict

- **Data protection before convenience.** Where one system for the User would mean pooling data or showing more detail in a search, data protection wins. Data stay federated as a rule <GovRef id="II.2" />, and pooling is a national exception for research only <GovRef id="VIII.3.4" />. The governance gives the protection of data subjects the highest priority: if in doubt, no data are disclosed <GovRef id="VII.5.1" />. See [2.2](/constraints/governance-principles#where-principles-pull-in-different-directions).
- **One system for the User before national variety.** Countries are free in how they implement, but not in the interfaces the User sees <GovRef id="I" />. For example, every country's catalogue entries follow the same metadata model, while each country chooses which software runs its catalogue.
- **Freedom before growth.** A faster central shortcut that takes away a national choice is not taken. Growth comes from doing centrally what every country would otherwise repeat, such as the User Organisation registry, behind common interfaces.

## How we will know a goal is met

[Chapter 10](/quality) will turn each goal into quality scenarios with a measurable response, numbered QS-1, QS-2 and so on, each naming the goal it tests. It is written in a later wave, and will set the targets. Until then, these are the indicators:

| Quality goal | How we will know | Inputs |
|---|---|---|
| QG-1 Data protection, security and data subjects' rights | Every release of results from an SPE passed output control and is logged with its reviewer. Every SPE session and every subject-level search is traceable to a person and a User Organisation <GovRef id="VII.2.3" />. Every node holds a current audit report against the minimum requirements of the [Genome EDIC CC](/glossary#genome-edic-central-coordination-genome-edic-cc), or works towards certification <GovRef id="V.1.3" />. A 1+MG Data Host releases only what the data use agreement covers. Data subjects are informed of each approved project within 1 working day, for the types of use that VII.5.3 covers. Tests show that a record whose data subject objected, or didn't consent, is neither counted in discovery nor released. A change that follows a data subject's request reaches a new dataset version and the Users concerned. | Acceptance criteria for central and local nodes <Cite id="b1mgplus-d2.10" />; the risk management framework that B1MG+ proposes for the Genome EDIC <Cite id="b1mgplus-d2.9" />, until the [Genome EDIC Assembly of Members](/glossary#genome-edic-assembly-of-members) adopts one <GovRef id="V.1.1" /> |
| QG-2 One system for the User | A User can find, request and analyse data from several countries without country-specific steps. Catalogue entries validate against the common metadata models. The register of access requests and approvals is published and complete <GovRef id="VII.5.5" />. | Data quality and distributed analysis requirements <Cite id="gdi-d6.3" /> |
| QG-3 Freedom to implement, and to change | A Member Country can replace a reference component with another tool that passes the same interface tests. A new version of a data model can be rolled out without rebuilding the components. | Indicators for software and metadata quality <Cite id="b1mgplus-m4.6" /> |
| QG-4 Growth | Quality of service metrics, reported for each node, stay within agreed limits as nodes and Users are added. | Quality of service metrics and technology readiness levels (<Acronym id="TRL">TRLs</Acronym>) of the nodes <Cite id="gdi-d5.5" /> |

Four other qualities matter, but are not top goals of the architecture:

- **Data quality.** The clinical and phenotypic data must be of high quality, above all for quality management in healthcare, where they inform treatment recommendations <GovRef id="II.3" />. The Genome EDIC Assembly of Members adopts quality labels with the data models <GovRef id="VI.1.1" />. See [8.10](/concepts/metadata-and-interoperability).
- **Software quality and maturity.** The <Acronym id="GDI" /> project measures the maturity of each node with technology readiness levels <Cite id="gdi-d5.5" />, and B1MG+ proposes indicators for software and metadata quality <Cite id="b1mgplus-m4.6" />.
- **Availability and business continuity.** Each node plans for backup, recovery and continuity under the risk framework <GovRef id="V.1.1" />; nodes in scope of the NIS2 Directive must do so under national law ([2.1](/constraints/legal)).
- **Non-functional requirements of the GDI products.** The GDI project has its own non-functional requirements for its products. Chapter 10 will take over those that the architecture needs.
