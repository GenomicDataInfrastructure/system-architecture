---
title: "2.2 Governance principles"
sidebar_position: 2
slug: /constraints/governance-principles
owner: "@brunopacheco1"
reviewers: []
status: draft
wave: 1
audience: [policy, legal, elsi, security, dpo, implementer]
governance_refs: ["I", "II.1", "II.2", "III", "V.1.1", "V.1.2", "V.1.3", "V.2.2", "V.2.4", "V.2.6", "VI.1.1", "VI.2.2", "VI.4.4", "VII.2.1", "VII.3.1", "VII.4.7", "VIII.2.2", "VIII.3.1", "VIII.3.2", "VIII.3.3", "VIII.3.4", "VIII.8.1", "VIII.8.2"]
last_reviewed:
---

<InShort>

- The governance sets eight principles in three groups: compliant (GDPR-compliant, secure, EHDS-proof), flexible and scalable (continuous improvement, implementation freedom, scalable), and homogeneous data that remains federated (virtual cohort, federated).
- Each principle limits the design. For example, Users never download personal data, analyses run in secure processing environments in the countries, and no Member Country has to use one specific product.
- Where principles pull in different directions, common interfaces and minimum requirements keep the system the same for Users, while each Member Country chooses how to implement them.

</InShort>

## The principles at a glance

The <Acronym id="1+MG" /> Data Governance names eight principles, in three groups <GovRef id="II.2" />. Most come from the 1+MG Declaration. The others make sure that the system can grow to large amounts of data and many [Users](/glossary#user). This page treats them as constraints on the [Genome EDIC](/glossary#genome-edic) system: every design must respect them.

The table says what each principle requires from the design, and which designs it rules out. The sections below give the design rules, each with the governance section it comes from.

| Principle | What it means for the design | What it rules out |
|---|---|---|
| [GDPR-compliant](#gdpr-compliant) | Data protection by design and by default in every component. A controller for every processing step. Tools that let [data subjects](/glossary#data-subject) exercise their rights. | Processing without a named controller. Access to more data, or for longer, than the data use agreement allows. |
| [Secure](#secure) | Common security requirements for every node, checked by audit or certification, so that the nodes can trust each other. | A node that joins the federation without an audit. Access by a person whose identity and link to a [User Organisation](/glossary#user-organisation) are not verified. |
| [EHDS-proof](#ehds-proof) | Metadata, access request forms and secure processing environments (<Acronym id="SPE">SPEs</Acronym>) that fit the European Health Data Space (<Acronym id="EHDS" />), so that the system can connect to HealthData@EU. | Formats and interfaces that only work inside 1+MG. |
| [Continuous improvement](#continuous-improvement) | Rules, data models and minimum requirements change over time. Components treat them as versioned inputs. | One version of the rules or models built into the components. |
| [Implementation freedom](#implementation-freedom) | Common interfaces and minimum requirements. Each [Genome EDIC Member Country](/glossary#genome-edic-member-country) chooses its tools, and which organisation takes which role. | Requiring one product, or one kind of organisation, for a national role. |
| [Scalable](#scalable) | Tasks done once, centrally, where that is more efficient. One access request for all data. Automated checks. | Procedures where the User must repeat the same work for each country or dataset. |
| [Virtual cohort](#virtual-cohort) | Common data models, one catalogue and one procedure, so that the data look like one cohort to the User. | Country-specific formats or procedures that the User has to deal with. |
| [Federated](#federated) | Personal data stay in the country, in 1+MG SPEs. Only non-personal results leave. | Users downloading personal data. A permanent central copy of all data. |

## Compliant

### GDPR-compliant

The infrastructure should comply with the General Data Protection Regulation (<Acronym id="GDPR" />) by design, follow recognised ethical standards, and make it easy for data subjects to exercise their rights <GovRef id="II.2" />. The GDPR itself requires data protection by design and by default (Art. 25) <Cite id="gdpr" />.

- **Data protection by design and by default in every component.** The [Genome EDIC Assembly of Members](/glossary#genome-edic-assembly-of-members) adopts the technical and organisational measures that all actors apply <GovRef id="VI.1.1" />. The [Genome EDIC CC](/glossary#genome-edic-central-coordination-genome-edic-cc) drives tools built this way <GovRef id="V.1.2" />. See [8.1](/concepts/data-protection-by-design).
- **A controller for every processing step.** Each phase of the data lifecycle has its own controller or controllers, each with its own legal basis <GovRef id="II.1" />. See [8.2](/concepts/roles).
- **As little data as possible, for as short a time as possible.** An SPE holds only the data that the data use agreement covers <GovRef id="VIII.3.3" />. Users confirm each year that they still need access, and can pause it for a [sleeping period](/glossary#sleeping-period) <GovRef id="VIII.3.1" />.
- **Tools for data subjects' rights.** Each Member Country provides the means to inform data subjects and to let them exercise their rights, ideally through a national portal <GovRef id="V.2.4" />. The Genome EDIC CC provides the interfaces between the central information database and the national portals <GovRef id="V.2.2" />. When a data subject exercises a right, the dataset gets a new version <GovRef id="V.2.6" />. See [5.2.4](/building-blocks/national/data-subject-services) and [8.9](/concepts/dataset-versioning).
- **Support for the data protection impact assessment (<Acronym id="DPIA" />).** [1+MG IT infrastructure providers](/glossary#1mg-it-infrastructure-provider) support the controllers in performing it <GovRef id="V.1.3" />.

### Secure

The IT infrastructure and processes in every Member Country must be vetted for security, so that together they form one coherent federation <GovRef id="II.2" />.

- **Common security rules.** The Assembly of Members adopts the security policies and an information security management system (<Acronym id="ISMS" />) <GovRef id="V.1.1" />. The Genome EDIC CC sets the minimum requirements for audit and certification, and the [Genome EDIC national entities](/glossary#genome-edic-national-entities) implement them <GovRef id="V.1.2" />.
- **Every node is audited.** Each 1+MG IT infrastructure provider is audited by an external body, or works towards a certification such as ISO 27001 <GovRef id="V.1.3" />. The nodes trust each other on that basis. How providers are accredited is still to be defined <GovRef id="III" />.
- **Measures that match the high risk:** secure storage and processing, reliable authentication of each person and of their status (for example as an employee of a User Organisation), access logging, and encryption <GovRef id="V.1.3" />. See [8.3](/concepts/security), [8.4](/concepts/identity-and-access) and [8.5](/concepts/logging-and-audit).
- **Revoke at once, across the federation.** When an SPE provider suspects a breach of purpose limitation or confidentiality, it revokes the User's access at once. It informs the Genome EDIC CC and the other affected SPE providers, ideally automatically <GovRef id="VIII.3.3" />.

### EHDS-proof

The system should fit seamlessly into the EHDS, and add what the EHDS alone can't do <GovRef id="II.2" /> <Cite id="ehds" />.

- **Metadata that fit the EU dataset catalogue.** The <Acronym id="ELSI" /> metadata models must allow integration into the EHDS data catalogue, and may go beyond it <GovRef id="VI.1.1" />. See [8.10](/concepts/metadata-and-interoperability).
- **An access request form that fits the EHDS form.** The form of the 1+MG User Portal must integrate into the central EHDS data access request form, and may ask for more <GovRef id="VII.3.1" />.
- **SPEs that meet the EHDS rules.** SPEs should be compatible with the EHDS requirements for authorised participants <GovRef id="VIII.3.3" />. They can then also serve health data access bodies (<Acronym id="HDAB">HDABs</Acronym>) <GovRef id="VIII.3.2" />.
- **Policies that follow the EHDS implementing acts.** The policies of the Assembly of Members must be compatible with the implementing acts under Art. 75 EHDS <GovRef id="V.1.1" />, among them the draft HealthData@EU implementing act <Cite id="hdeu-ia-draft" />. See [8.11](/concepts/ehds-integration) and [5.1.5](/building-blocks/european/ehds-connector).
- **A data use agreement, not a data permit.** The Genome EDIC can't issue EHDS data permits. It grants access through a data use agreement, together with a data processing agreement <GovRef id="VIII.3.2" />. See [6.3.1](/runtime/use/data-use-agreement).
- **Stricter than the EHDS where 1+MG needs it.** The 1+MG rules may go further than the EHDS. They prefer federation to pooling data in an SPE provided by the European Commission, and they ask for external audit or certification where the EHDS asks only for an audit <GovRef id="V.1.3" />.

## Flexible and scalable

### Continuous improvement

Member Countries keep defining the scope, conditions, minimum requirements and workflows together <GovRef id="II.2" />. The governance sets principles. Working groups and committees turn them into implementation rules and technical requirements: for example, 1+MG Working Group 3 defines the data and metadata models <GovRef id="II.1" />. The Assembly of Members decides on the principles and sets the minimum requirements <GovRef id="I" />.

- **Rules and models are versioned inputs.** Data models, metadata models, access request forms and minimum requirements will change. Components treat them as versioned configuration, not as code, and say which version they follow.
- **One source of truth.** The Genome EDIC CC is the single source of truth for all relevant information across the federated system <GovRef id="V.1.2" />.
- **This architecture follows the governance.** It is written against version 2025-12 of the governance <Cite id="dg" />. When the governance changes, the [traceability page](/appendix/traceability) shows which pages to review.

### Implementation freedom

Member Countries choose how they fit the infrastructure into their national infrastructure, as long as they meet the requirements and implement the common functions <GovRef id="II.2" />. The governance gives national implementation as much flexibility as possible, while the system stays homogeneous for the User <GovRef id="I" />.

- **Interfaces first.** Each component is described by its function, interfaces and standards. The <Acronym id="GDI" /> Starter Kit is named as the reference implementation <Cite id="gdi-starter-kit" />. A Member Country may use other tools that meet the same interfaces. See [4. Solution strategy](/solution-strategy).
- **Each country distributes the national roles.** One organisation can hold several roles <GovRef id="III" />, and countries should be as free as possible in how they share tasks <GovRef id="VIII.3.3" />. Each Member Country records its choices in its [national implementation profile](/appendix/national-profile-template). See [3.3](/context/scopes).
- **Some choices are national by design.** For example, whether data may be pooled for research <GovRef id="VIII.3.4" />, or who reviews access requests for [1+MG cohort datasets](/concepts/dataset-types) <GovRef id="VII.4.7" />. The system must support every option the governance allows, and show Users which one applies.
- **Common minimum requirements, checked by audit.** The freedom ends where the common requirements start. All SPEs meet the same minimum requirements <GovRef id="VIII.3.3" />, and national entities are audited or certified against them <GovRef id="V.1.2" />.

### Scalable

Implementations and procedures should scale to large data volumes and many Users <GovRef id="II.2" />.

- **Do centrally what every country would otherwise repeat.** The Genome EDIC CC takes on tasks that are more efficient at central level <GovRef id="I" />, such as the [User Portal and central data catalogue](/building-blocks/european/user-portal-and-catalogue) and [access request management](/building-blocks/european/access-request-management).
- **One access request for all data.** One form covers all data available in the Genome EDIC, and the portal catches obvious mistakes before submission <GovRef id="VII.3.1" />.
- **Machine-readable descriptions.** ELSI metadata are harmonised and machine-readable <GovRef id="VI.1.1" />, so that discovery and checks can be automated.
- **Compute and storage that scale.** SPEs should plan for high-performance computing <GovRef id="VIII.3.3" />. Archiving should avoid keeping several copies of datasets derived from the same data <GovRef id="VIII.8.2" />. During a sleeping period, data can move to cheaper cold storage <GovRef id="VIII.3.1" />.

## Homogeneous data that remains federated

### Virtual cohort

The data should behave, as much as possible, as one single cohort <GovRef id="II.2" />.

- **Common data models.** The Assembly of Members adopts data models, ontologies and metadata models, with quality labels <GovRef id="VI.1.1" />. [1+MG Data Providers](/glossary#1mg-data-provider) transform their data into these models <GovRef id="VI.2.2" />. The [1+MG NCP](/glossary#1mg-national-coordination-point-1mg-ncp) checks that they do, before the data are made available <GovRef id="VI.4.4" />. See [5.2.6](/building-blocks/national/data-transformation) and 8.10.
- **One catalogue, one portal, one procedure.** Users find all data in one central data catalogue <GovRef id="VII.2.1" /> and apply through the 1+MG User Portal <GovRef id="VII.3.1" />, whatever the country or the type of dataset.
- **Analysis across countries.** SPEs should allow efficient analysis of data from several 1+MG Data Providers and Member Countries, ideally federated across the national SPEs <GovRef id="VIII.3.3" />.

### Federated

Personal data are held in a federated IT infrastructure. Users can only download non-personal results of analysis or aggregation <GovRef id="II.2" />. The data remain in the countries <GovRef id="I" />.

- **Analysis runs in a 1+MG SPE.** No download is possible, so each Member Country provides SPEs, and they all meet the same minimum requirements <GovRef id="VIII.3.3" />. See [5.2.3](/building-blocks/national/spe) and [6.3.2](/runtime/use/processing-in-spe).
- **Only non-personal results leave.** Users must not export personal data <GovRef id="VIII.2.2" />. See [8.8 Output control](/concepts/output-control).
- **Pooling is an exception, chosen per country.** For research, a Member Country may keep its data federated only. It may also allow data streaming or temporary pooling, where the purpose can't be achieved otherwise. It records that choice as ELSI metadata in the dataset descriptions <GovRef id="VIII.3.4" />. An SPE that pools data from other Member Countries must be certified <GovRef id="V.1.3" />.
- **Own data and tools come in.** Users may bring their own data and software into the SPE, after a security review. This includes data from HDABs and [externally governed datasets](/glossary#externally-governed-datasets) <GovRef id="VIII.3.1" />.
- **Reproducibility without download.** As Users can't download personal data, the data must stay available through the Genome EDIC and its national entities, so that analyses can be run again <GovRef id="VIII.8.1" /> <GovRef id="VIII.8.2" />. See [6.3.7](/runtime/use/archiving).

## Where principles pull in different directions

Some principles limit each other. The architecture resolves them as follows.

- **Implementation freedom and virtual cohort.** Countries choose their own tools, yet Users should see one system. Common interfaces, data models and minimum requirements keep the system the same for Users. What sits behind them is national <GovRef id="I" />.
- **Federated, and analyses that need pooled data.** Some analyses can't be done in a federated way. The governance allows temporary pooling in a certified SPE, where the Member Country allows it <GovRef id="VIII.3.4" />. The system supports both, and shows Users which one applies to each dataset.
- **EHDS-proof, and stricter 1+MG rules.** Components meet the EHDS interfaces and the stricter 1+MG requirements at the same time <GovRef id="V.1.3" />.

:::caution[Open points]
- **Who decides on pooling for [1+MG compliant datasets](/concepts/dataset-types).** The recommendation lets each Member Country choose. Its justification says that for 1+MG compliant datasets the decision now rests with each [1+MG Data Holder](/glossary#1mg-data-holder), and that it could be taken at country level instead, to reduce complexity <GovRef id="VIII.3.4" />. Listed in [11. Risks and technical debt](/risks) ([issue #91](https://github.com/GenomicDataInfrastructure/system-architecture/issues/91)).
- **How 1+MG IT infrastructure providers are accredited** is still to be defined <GovRef id="III" />.
- **The data and metadata models** are not part of the governance: 1+MG Working Group 3 defines them <GovRef id="II.1" />.
- **The HealthData@EU implementing act is still a draft** <Cite id="hdeu-ia-draft" />, so the EHDS requirements for connection and for SPEs may still change.
:::
