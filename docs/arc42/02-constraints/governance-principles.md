---
title: "2.2 Governance principles"
sidebar_position: 2
slug: /constraints/governance-principles
owner: "@brunopacheco1"
reviewers: ["@rwwh", "@kjellp", "@TroelsRasmussen"]
status: in-review
wave: 1
audience: [policy, legal, elsi, security, dpo, implementer]
governance_refs: ["I", "II.1", "II.2", "II.3", "II.4", "III", "V.1.1", "V.1.2", "V.1.3", "V.1.4", "V.2.1", "V.2.2", "V.2.4", "V.2.6", "V.2.7", "VI.1.1", "VI.2.2", "VI.4.3", "VI.4.4", "VII.2.1", "VII.3.1", "VII.4.2", "VII.4.7", "VII.5.1", "VII.5.5", "VII.5.6", "VIII.2.1", "VIII.2.2", "VIII.3.1", "VIII.3.2", "VIII.3.3", "VIII.3.4", "VIII.8.1", "VIII.8.2"]
last_reviewed:
---

<InShort>

- The governance sets eight principles in three groups: compliant (GDPR-compliant, secure, EHDS-proof, that is, fitting the European Health Data Space), flexible and scalable (continuous improvement, implementation freedom, scalable), and homogeneous data that remains federated (virtual cohort, where the data look like one dataset to Users, and federated).
- Each principle limits the design. For example, Users never download personal data, analyses run in secure processing environments, which as a rule are in the country where the data are, and no Member Country has to use one specific product.
- Where principles pull in different directions, common interfaces and minimum requirements keep the system the same for Users, while each Member Country chooses how to implement them.

</InShort>

## The principles at a glance

The <Acronym id="1+MG" /> Data Governance names eight principles, in three groups <GovRef id="II.2" />. The governance derives them from the 1+MG Declaration, which the countries of the 1+ Million Genomes initiative signed, and adds principles that let the system grow to large amounts of data and many [Users](/glossary#user). This page treats them as constraints on the [Genome EDIC](/glossary#genome-edic) system: every design must respect them.

The table says what each principle requires from the design, which designs it rules out, and where it comes from in the governance. The sections below give the design rules, each with the governance section it comes from.

| Principle | What it means for the design | What it rules out | Source |
|---|---|---|---|
| [GDPR-compliant](#gdpr-compliant) | Data protection by design and by default in every component. A controller for every processing step. Access only for the four types of use. Tools that let [data subjects](/glossary#data-subject) exercise their rights. | Processing without a named controller. Access for a purpose outside the four types of use. Access to more data, or for longer, than the [data use agreement](/runtime/use/data-use-agreement) allows. | <GovRef id="II.2" />, <GovRef id="II.3" />, <GovRef id="V.2.1" /> |
| [Secure](#secure) | Common security requirements for every node of the federation, checked by external audit or certification, so that the nodes can trust each other. | A node that is neither audited by an external body against the common requirements, nor working towards a certification. Access by a person whose identity and link to a [User Organisation](/glossary#user-organisation) are not verified. | <GovRef id="II.2" />, <GovRef id="V.1.3" /> |
| [EHDS-proof](#ehds-proof) | Metadata, access request forms and secure processing environments (<Acronym id="SPE">SPEs</Acronym>) that fit the European Health Data Space (<Acronym id="EHDS" />), so that the system can connect to [HealthData@EU](/concepts/ehds-integration). | Formats and interfaces that only work inside 1+MG. | <GovRef id="II.2" />, <GovRef id="V.1.1" /> |
| [Continuous improvement](#continuous-improvement) | Rules, data models and minimum requirements change over time, and the system must follow them. | One version of the rules or models built into the components. | <GovRef id="II.2" />, <GovRef id="II.1" /> |
| [Implementation freedom](#implementation-freedom) | Common interfaces and minimum requirements. Each [Genome EDIC Member Country](/glossary#genome-edic-member-country) chooses its tools, and which organisation takes which role. | Requiring one product, or one kind of organisation, for a national role. | <GovRef id="II.2" />, <GovRef id="I" /> |
| [Scalable](#scalable) | Tasks done once, centrally, where that is more efficient. One access request for all data. Automated checks. | Procedures where the User must repeat the same work for each country or dataset. | <GovRef id="II.2" />, <GovRef id="VII.3.1" /> |
| [Virtual cohort](#virtual-cohort) | Common data models, one catalogue and one procedure, so that the data look like one cohort to the User. | Country-specific formats or procedures that the User has to deal with. | <GovRef id="II.2" />, <GovRef id="VI.1.1" /> |
| [Federated](#federated) | Personal data stay with [1+MG Data Hosts](/glossary#1mg-data-host) and are analysed in 1+MG SPEs, as a rule in their country. Only non-personal results leave the SPE. | Users downloading personal data. A permanent central copy of all data. | <GovRef id="II.2" />, <GovRef id="VIII.2.2" />, <GovRef id="VIII.3.4" /> |

## Compliant

### GDPR-compliant

The infrastructure should comply with the General Data Protection Regulation (<Acronym id="GDPR" />) by design, follow recognised ethical standards, and make it easy for data subjects to exercise their rights <GovRef id="II.2" />. The GDPR itself requires data protection by design and by default (Art. 25) <Cite id="gdpr" />.

- **Data protection by design and by default in every component.** The [Genome EDIC Assembly of Members](/glossary#genome-edic-assembly-of-members) adopts the technical and organisational measures that all actors apply <GovRef id="VI.1.1" />. The [Genome EDIC CC](/glossary#genome-edic-central-coordination-genome-edic-cc) drives tools built this way <GovRef id="V.1.2" />. See [8.1](/concepts/data-protection-by-design).
- **A controller for every processing step.** Each phase of the data lifecycle has its own controller or controllers, each with its own legal basis <GovRef id="II.1" />. See [8.2](/concepts/roles).
- **Access only for the four types of use.** The system gives access only for [research](/glossary#research), [policy development](/glossary#policy-development), [quality management in healthcare](/glossary#quality-management-in-healthcare) and [healthcare reuse](/glossary#healthcare-reuse), each with its own request form and review <GovRef id="II.3" /> <GovRef id="VII.3.1" />. Screening the data for secondary findings, to find people who could benefit from a treatment, is outside the governance <GovRef id="II.4" />.
- **Ethical review.** The [1+MG DAC](/glossary#1mg-dac) checks each request for ethical issues that affect data subjects. It can call on an additional review committee for vulnerabilities, with representatives of the affected groups <GovRef id="VII.4.2" />. If in doubt, no data are disclosed <GovRef id="VII.5.1" />.
- **As little data as possible, for as short a time as possible.** The 1+MG Data Host releases only the data that the data use agreement covers <GovRef id="VIII.3.3" />. Users confirm each year that they still need access, and can pause it for a [sleeping period](/glossary#sleeping-period) <GovRef id="VIII.3.1" />.
- **Tools for data subjects' rights.** Each Member Country provides the means to inform data subjects and to let them exercise their rights, ideally through a national portal <GovRef id="V.2.4" />. The Genome EDIC CC provides the interfaces between the central information database (what data subjects can learn about the use of their data) and the national portals <GovRef id="V.2.2" />. See [5.2.4](/building-blocks/national/data-subject-services).
- **Rights change the data, and Users follow the change.** When a data subject exercises a right, the dataset gets a new version. By default, Users must accept that the data change. Only where a stable dataset is justified, and announced early through the User Portal, does a User keep the version disclosed to them <GovRef id="V.2.7" />. Data subjects are told about such limits before they consent or object <GovRef id="V.2.2" />. Versioning keeps track of which version each User uses <GovRef id="V.2.6" />. The Assembly of Members adopts the policy on how rights are handled, including the limits the GDPR allows, for example where data can't be removed from a completed analysis <GovRef id="V.2.1" /> <Cite id="gdpr" />. See [8.9](/concepts/dataset-versioning).
- **Support for the data protection impact assessment (<Acronym id="DPIA" />).** [1+MG IT infrastructure providers](/glossary#1mg-it-infrastructure-provider) support the controllers in performing it <GovRef id="V.1.3" />.

### Secure

The IT infrastructure and processes in every Member Country must be vetted for security, so that together they form one coherent federation <GovRef id="II.2" />. Each 1+MG IT infrastructure provider is a node of this federation. Some providers also fall under the NIS2 Directive: see [2.1](/constraints/legal).

- **Common security rules.** The Assembly of Members adopts the security policies and ensures that an information security management system (<Acronym id="ISMS" />) is implemented <GovRef id="V.1.1" />. The Genome EDIC CC turns them into minimum requirements for audit and certification, and the [Genome EDIC national entities](/glossary#genome-edic-national-entities) implement them <GovRef id="V.1.2" />.
- **Every node is audited or certified.** Each 1+MG IT infrastructure provider is, at minimum, audited by an external body against the minimum requirements of the Genome EDIC CC, and/or works towards a certification such as ISO 27001 (the international standard for information security management) or NIST. Certification is mandatory for an SPE that pools data from other Member Countries <GovRef id="V.1.3" />. Trust between the nodes rests on these checks. How providers are accredited is still to be defined <GovRef id="III" />.
- **Measures that match the high risk:** secure storage and processing, reliable authentication and authorisation of each person and of their status (for example as an employee of a User Organisation), access logging, encryption, and reduction of the identifiability of tabular data <GovRef id="V.1.3" />. See [8.3](/concepts/security), [8.4](/concepts/identity-and-access), [8.5](/concepts/logging-and-audit) and [8.7](/concepts/identifiers-and-linkage).
- **Revoke at once, and warn the others.** When an SPE provider (a 1+MG IT infrastructure provider that runs an SPE) suspects a breach of purpose limitation or confidentiality, it revokes the User's access at once. It informs the Genome EDIC CC and the other affected SPE providers, ideally automatically <GovRef id="VIII.3.3" />. The Genome EDIC CC then revokes the access legally, and may bar the User or the User Organisation from future access <GovRef id="VIII.3.2" />. See [6.5](/runtime/security-incident).

### EHDS-proof

The system should fit seamlessly into the EHDS, and add what the EHDS alone can't do <GovRef id="II.2" /> <Cite id="ehds" />.

- **Metadata that fit the EU dataset catalogue.** The <Acronym id="ELSI" /> metadata models, which describe for each dataset the consent and the uses allowed, must allow integration into the EHDS data catalogue, and may go beyond it <GovRef id="VI.1.1" />. See [8.10](/concepts/metadata-and-interoperability).
- **An access request form that fits the EHDS form.** The form of the [1+MG User Portal](/building-blocks/european/user-portal-and-catalogue) must integrate into the central EHDS data access request form, and may ask for more <GovRef id="VII.3.1" />.
- **SPEs that meet the EHDS rules.** SPEs should be compatible with the EHDS requirements for SPEs and for authorised participants in HealthData@EU (EHDS Art. 73 and Art. 75(6); see [2.1](/constraints/legal)) <GovRef id="VIII.3.3" />. They can then also serve health data access bodies (<Acronym id="HDAB">HDABs</Acronym>) <GovRef id="VIII.3.2" />.
- **Policies that consider the EHDS implementing acts.** The Assembly of Members should consider the compatibility of its policies with the implementing acts under the EHDS <GovRef id="V.1.1" />, among them the draft HealthData@EU implementing act (EHDS Art. 75(12)) <Cite id="hdeu-ia-draft" /> and the act on SPE requirements (EHDS Art. 73(5)). The Genome EDIC CC must consider the requirements for taking part in the EHDS <GovRef id="V.1.2" />. See [8.11](/concepts/ehds-integration) and [5.1.5](/building-blocks/european/ehds-connector).
- **A data use agreement, not a data permit.** The Genome EDIC is not a health data access body, and can't issue EHDS data permits (EHDS Art. 68) <Cite id="ehds" />. Under the 1+MG data governance, the access decision is taken per type of dataset ([8.12](/concepts/dataset-types)). Access then rests on a data use agreement, issued by the Genome EDIC CC <GovRef id="VII.5.5" />, and a data processing agreement <GovRef id="VIII.2.1" />. Who signs the data use agreement for 1+MG compliant datasets is still open (see below). See [6.3.1](/runtime/use/data-use-agreement).
- **Stricter than the EHDS where 1+MG needs it.** According to the governance, the 1+MG rules may go further than the EHDS. The 1+MG rules prefer federation to pooling data in the SPE provided by the European Commission under the EHDS. The EHDS asks for an audit of the SPE (EHDS Art. 73(3)); 1+MG asks for an audit by an external body, or a certification <GovRef id="V.1.3" />.

## Flexible and scalable

### Continuous improvement

Member Countries keep defining the scope, conditions, minimum requirements and workflows together <GovRef id="II.2" />. The governance sets principles. Working groups and committees turn them into implementation rules and technical requirements: for example, 1+MG Working Group 3 (Standards) defines the data and metadata models <GovRef id="II.1" />. The Assembly of Members decides on the principles, adopts the rules and sets the minimum requirements for harmonisation <GovRef id="I" />. The Genome EDIC CC turns the security and risk policies into minimum requirements for audit and certification <GovRef id="V.1.2" />.

- **How the architecture follows changing rules** is a design choice, not a governance rule: see [4. Solution strategy](/solution-strategy#versioned-rules-and-models).
- **One source of truth for information about the system.** The Genome EDIC CC is the single source of truth for all relevant information across the federated system, such as its documentation <GovRef id="V.1.2" />. The data themselves stay federated.
- **This architecture follows the governance.** It is written against version 2025-12 of the governance <Cite id="dg" />. When the governance changes, the [traceability page](/appendix/traceability) shows which pages to review.

### Implementation freedom

Member Countries choose how they fit the infrastructure into their national infrastructure, as long as they meet the requirements and implement the common functions <GovRef id="II.2" />. The governance gives national implementation as much flexibility as possible, while the system stays homogeneous for the User <GovRef id="I" />.

- **How components are specified so that countries can choose their tools** is a design choice, not a governance rule: see [4. Solution strategy](/solution-strategy#interfaces-first-with-a-reference-implementation).
- **Each country distributes the national roles.** One organisation can hold several roles <GovRef id="III" />, and countries should be as free as possible in how they share tasks <GovRef id="VIII.3.3" />. Where one organisation holds several roles, the Member Country mitigates conflicts of interest: for example, a [1+MG NCP](/glossary#1mg-national-coordination-point-1mg-ncp) that checks compliance must not assess its own IT infrastructure <GovRef id="V.1.4" />. Each Member Country records its choices in its [national implementation profile](/appendix/national-profile-template). See [3.3](/context/scopes).
- **Some choices are national by design.** For example, whether data may be pooled for research <GovRef id="VIII.3.4" />, or who reviews access requests for [1+MG cohort datasets](/concepts/dataset-types) <GovRef id="VII.4.7" />. Who decides on pooling for [1+MG compliant datasets](/concepts/dataset-types) is still open (see below). The system must support every option the governance allows, and show Users which one applies.
- **Common minimum requirements, checked by audit or certification.** The freedom ends where the common requirements start. All SPEs meet the same minimum requirements <GovRef id="VIII.3.3" />, and national entities are audited or certified against them <GovRef id="V.1.2" />.

### Scalable

Implementations and procedures should scale to large data volumes and many Users <GovRef id="II.2" />.

- **Do centrally what every country would otherwise repeat.** The Genome EDIC CC takes on tasks that are more efficient at central level <GovRef id="I" />, such as running the central data catalogue and [managing access requests](/building-blocks/european/access-request-management).
- **One access request for all data.** One request covers all data available in the Genome EDIC, with a form per type of use, and the portal catches obvious mistakes before submission <GovRef id="VII.3.1" />.
- **Machine-readable descriptions.** ELSI metadata are harmonised and machine-readable <GovRef id="VI.1.1" />, so that discovery and checks can be automated.
- **Compute and storage that scale.** SPEs should plan for high-performance computing <GovRef id="VIII.3.3" />. For research and healthcare reuse, archiving should avoid keeping several copies of datasets derived from the same data <GovRef id="VIII.8.2" />. During a sleeping period, data can move to cold storage, which is cheaper but slower to access <GovRef id="VIII.3.1" />.

## Homogeneous data that remains federated

### Virtual cohort

The data should behave, as much as possible, as one single cohort <GovRef id="II.2" />.

- **Common data models.** 1+MG Working Group 3 defines the data models, ontologies (shared vocabularies) and metadata models <GovRef id="II.1" />. The Assembly of Members adopts them, with quality labels <GovRef id="VI.1.1" />. [1+MG Data Providers](/glossary#1mg-data-provider) transform their data into these models <GovRef id="VI.2.2" />. The 1+MG NCP checks that they do, before the data are made available <GovRef id="VI.4.4" />. See [5.2.6](/building-blocks/national/data-transformation) and [8.10](/concepts/metadata-and-interoperability).
- **One catalogue, one portal, one procedure.** Users find all data in one central data catalogue <GovRef id="VII.2.1" /> and start from the 1+MG User Portal, whatever the country or the type of dataset. For 1+MG data they apply there; for [externally governed datasets](/concepts/dataset-types) the portal sends them to the dataset's own procedure <GovRef id="VII.3.1" />.
- **Analysis across countries.** SPEs should allow efficient analysis of data from several 1+MG Data Providers and Member Countries, ideally federated across the national SPEs <GovRef id="VIII.3.3" />.
- **Fair access.** Every User of the same type of use goes through the same procedure. Refusals are justified, and there is a redress procedure <GovRef id="VI.4.3" /> <GovRef id="VII.5.6" />.

### Federated

Personal data are held in a federated IT infrastructure. Users can only download non-personal results of analysis or aggregation <GovRef id="II.2" />. As a rule, the data remain in the countries <GovRef id="I" />.

- **Analysis runs in a 1+MG SPE** or, where applicable, in the SPE provided by the European Commission under the EHDS <GovRef id="VIII.2.2" />. When that applies is open (see below). No download is possible, so each Member Country provides SPEs, and they all meet the same minimum requirements <GovRef id="VIII.3.3" />. See [5.2.3](/building-blocks/national/spe) and [6.3.2](/runtime/use/processing-in-spe).
- **Only non-personal results leave the SPE.** Users must not export personal data <GovRef id="VIII.2.2" />. See [8.8 Output control](/concepts/output-control).
- **Pooling is an exception, chosen nationally.** Pooling means bringing data from several countries together in one SPE, for a time. For research, the governance lets each Member Country keep its data federated only. It may instead allow "data streaming" (which the governance doesn't define further) or temporary pooling with data from other countries, where the purpose of the research can't be achieved otherwise, or would be too complicated to implement in a federated way. The choice is recorded as ELSI metadata in the dataset descriptions, and passed to the 1+MG Data Providers, because it can matter to data subjects when they decide whether to have their data included <GovRef id="VIII.3.4" />. An SPE that pools data from other Member Countries must be certified <GovRef id="V.1.3" />. The governance describes this choice for research only. Who takes it for 1+MG compliant datasets is still open (see below).
- **Own data and tools come in.** Users may bring their own data and software into the SPE, after a security review. This includes data from HDABs and externally governed datasets <GovRef id="VIII.3.1" />. Linking such data with 1+MG data can make data subjects easier to identify. Users may not link records without permission <GovRef id="VIII.2.2" />, and the SPE provider takes steps to limit the risk after linkage <GovRef id="VIII.3.3" />. See [8.7](/concepts/identifiers-and-linkage).
- **Reproducibility without download.** For research and healthcare reuse, as Users can't download personal data, the data must stay available through the Genome EDIC and its national entities, so that analyses can be run again <GovRef id="VIII.8.1" /> <GovRef id="VIII.8.2" />. See [6.3.7](/runtime/use/archiving).

## Where principles pull in different directions

Some principles limit each other. The architecture handles them as follows.

- **Implementation freedom and virtual cohort.** Countries choose their own tools, yet Users should see one system. Common interfaces, data models and minimum requirements keep the system the same for Users. What sits behind them is national <GovRef id="I" />.
- **Federated, and analyses that need pooled data.** Some analyses can't be done in a federated way. For research, the governance allows temporary pooling in a certified SPE, where the national choice allows it <GovRef id="VIII.3.4" />. The system supports both, and shows Users which one applies to each dataset. Who decides for 1+MG compliant datasets is still open.
- **GDPR-compliant, and reproducibility.** A data subject's right to rectification or erasure can conflict with stable, archived datasets. The governance handles this with limits the GDPR allows <GovRef id="V.2.1" />, information to data subjects in advance <GovRef id="V.2.2" />, and versioning <GovRef id="V.2.6" /> <GovRef id="V.2.7" />. See [8.9](/concepts/dataset-versioning).
- **EHDS-proof, and stricter 1+MG rules.** Components meet the EHDS interfaces and the stricter 1+MG requirements at the same time <GovRef id="V.1.3" />. Some EHDS requirements are still a draft (see below).

:::caution[Open points]
- **Who decides on pooling for 1+MG compliant datasets.** The recommendation lets each Member Country choose. Its justification says that for 1+MG compliant datasets the decision now rests with each [1+MG Data Holder](/glossary#1mg-data-holder), and that it could be taken at country level instead, to reduce complexity <GovRef id="VIII.3.4" />. See [chapter 11](/risks#pooling-decision).
- **When 1+MG data may be processed in the SPE of the European Commission,** "where applicable" <GovRef id="VIII.2.2" />. See [chapter 11](/risks#commission-spe).
- **Who signs the data use agreement for 1+MG compliant datasets:** whether the Genome EDIC is mandated to sign on behalf of the 1+MG Data Holders <GovRef id="VII.5.5" />. See [chapter 11](/risks#data-use-agreement-signatory).
- **How 1+MG IT infrastructure providers are accredited** is still to be defined <GovRef id="III" />. See [chapter 11](/risks#accreditation).
- **The data and metadata models** are not part of the governance: 1+MG Working Group 3 defines them, and the Assembly of Members adopts them <GovRef id="II.1" /> <GovRef id="VI.1.1" />. See [chapter 11](/risks#data-models).
- **The HealthData@EU implementing act is still a draft** <Cite id="hdeu-ia-draft" />, so the EHDS requirements for connecting to HealthData@EU may still change; the implementing act on SPE requirements (EHDS Art. 73(5)) is not published yet either. See [chapter 11](/risks#healthdata-eu-act).
:::
