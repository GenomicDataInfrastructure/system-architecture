---
title: "8.1 Data protection by design and by default"
sidebar_position: 1
slug: /concepts/data-protection-by-design
owner: "Bruno Pacheco (LNDS)"
reviewers: ["Alexandru Mahmoud (UL)", "Jacek Lebioda (LNDS)", "Aleš Čep (UM)", "Regina Becker (LNDS, specialist)", "Rob Hooft (Health-RI, specialist)"]
status: draft
wave: 2
audience: [legal, elsi, security, dpo, implementer]
governance_refs: ["II.1", "II.2", "III", "V.1.1", "V.1.2", "V.1.3", "V.2.1", "V.2.2", "V.2.4", "V.2.5", "V.2.6", "V.2.7", "VI.1.1", "VI.1.5", "VI.4.1", "VI.4.6", "VII.1.3", "VII.2.2", "VII.2.3", "VII.2.4", "VII.3.1", "VII.4.2", "VII.5.3", "VII.5.4", "VII.5.5", "VIII.1.2", "VIII.2.1", "VIII.2.2", "VIII.3.1", "VIII.3.3", "VIII.3.4", "VIII.5.1", "VIII.5.3", "VIII.8.4", "VIII.11.2", "VIII.11.4"]
last_reviewed:
---

<InShort>

- Every part of the system is built to protect the data from the start, and to use as little personal data as possible unless more is needed and approved. This is a legal duty of each controller under the GDPR (Art. 25), and a principle of the governance.
- The main defaults: Users analyse personal data only in secure processing environments and can download only non-personal results; direct identifiers are replaced by key-coded identifiers, and genomic data are kept apart from clinical data; searches return counts, not records; Users get only the data their agreement covers, and only for as long as they need them.
- The system gives the controllers the inputs for their data protection impact assessments: descriptions of the processing, the roles, the safeguards and the logs.

</InShort>

## The problem

The system processes genomic and health data of many people, across countries, for many Users. Genomic data can identify a person, and say something about their relatives. The data themselves stay federated, but some services see every country: the central services that register Users and manage access requests, and subject-level discovery, which searches every country's records. A mistake there affects data subjects in every country.

Data protection can't be added at the end. The <Acronym id="GDPR" /> requires each [controller](/glossary#controller) to build it into the means of processing, and to make the most protective option the default (Art. 25) <Cite id="gdpr" />. The European Data Protection Board (<Acronym id="EDPB" />) explains that this applies throughout the lifecycle of the processing, and that the measures must be effective, not only present <Cite id="edpb-gl-04-2019" />. The governance asks that the infrastructure be intrinsically compliant with the GDPR, building on data protection by design and by default <GovRef id="II.2" />.

## The rule

1. **Every component must have privacy-protective defaults.** Without a specific approval, it processes no personal data, or the least that its function needs, and gives no access.
2. **Users analyse personal data only in a secure processing environment** (<Acronym id="SPE" />), and can download only non-personal results <GovRef id="II.2" /> <GovRef id="VIII.2.2" />. The governance provides for a few other exits, each controlled and logged: reports of incidental findings to the entity mandated nationally <GovRef id="VIII.11.2" />, temporary pooling in a certified SPE <GovRef id="VIII.3.4" />, and, where applicable, the SPE of the European Commission <GovRef id="VIII.2.2" /> ([3.1](/context/business#where-data-about-people-come-in-and-go-out)).
3. **Every component must apply the technical and organisational measures (<Acronym id="TOM">TOMs</Acronym>)** that the [Genome EDIC Assembly of Members](/glossary#genome-edic-assembly-of-members) adopts for all actors <GovRef id="VI.1.1" />, and that reflect the high risk <GovRef id="V.1.3" />.
4. **Every processing operation must have a named controller.** Data protection by design is that controller's duty. [1+MG IT infrastructure providers](/glossary#1mg-it-infrastructure-provider) build the measures into their platforms and support the controllers, including in their data protection impact assessments (<Acronym id="DPIA">DPIAs</Acronym>) <GovRef id="V.1.3" />. Who is controller for each operation is in [8.2](/concepts/roles).
5. **Every component should produce the evidence of its measures**: logs, configuration and documentation, for audits and DPIAs <GovRef id="V.1.3" />.

## How it works

### GDPR principles and the mechanisms that implement them

The table lists each principle of GDPR Art. 5 and the mechanisms the architecture uses for it. The last column links to the pages that design them; many are still being written.

| GDPR principle | Mechanisms | Pages |
|---|---|---|
| **Lawfulness, fairness and transparency** (Art. 5(1)(a)) | A controller and legal basis for each phase <GovRef id="II.1" />. Data subjects' consent preferences and objections recorded as <Acronym id="ELSI" /> metadata, and checked before disclosure <GovRef id="VI.1.5" />. Consent asked in a way that limits the imbalance of power in healthcare <GovRef id="VI.1.5" />. Projects that may affect vulnerable groups or lead to discrimination get an additional review, with representatives of those groups <GovRef id="VII.4.2" />. Information captured in the User Portal and passed to central and national information portals <GovRef id="VIII.1.2" />. After a positive decision, data subjects are informed of the project, with a lay summary, within 1 working day, and asked for consent or given the chance to object where needed <GovRef id="VII.5.3" />; the information is in the official languages of the country <GovRef id="V.2.5" />. A public register lists access requests and approvals <GovRef id="VII.5.5" />. Data subjects are told in advance about limits to their rights <GovRef id="V.2.2" />. | [8.2](/concepts/roles), [8.6](/concepts/legal-basis-and-consent), [5.2.4](/building-blocks/national/data-subject-services), [6.3.4](/runtime/use/transparency) |
| **Purpose limitation** (Art. 5(1)(b)) | Access only for the four types of use, with one form per type <GovRef id="VII.3.1" />. Discovery and release include only records whose data subjects' consent preferences and objections allow the stated type of use <GovRef id="VI.1.5" /> <GovRef id="VII.2.3" />. Users state the purpose before discovery, and agree to use discovery only to find out whether enough data are available for an access request <GovRef id="VII.2.4" />. The [data use agreement](/glossary#data-use-agreement) binds use to the approved purpose <GovRef id="VIII.2.2" />. The SPE provider revokes the User's access at once on a suspected breach of purpose limitation or confidentiality, and informs the [Genome EDIC CC](/glossary#genome-edic-central-coordination-genome-edic-cc) <GovRef id="VIII.3.3" />. | [6.2.3](/runtime/access/request), [6.3.1](/runtime/use/data-use-agreement), [6.5](/runtime/security-incident) |
| **Data minimisation** (Art. 5(1)(c)) | Names and other direct identifiers removed as far as possible and replaced by [key-coded identifiers](/glossary#key-coded-identifier); genomic data stored apart from clinical data; key-coded identifiers already used elsewhere, for example in a hospital, replaced by new ones <GovRef id="VI.4.1" />. [Subject-level data discovery](/glossary#subject-level-data-discovery) returns counts, with safeguards in the search engine <GovRef id="VII.2.3" />. The [1+MG Data Host](/glossary#1mg-data-host) releases only the data the agreement covers, and further minimises them where needed <GovRef id="VIII.3.3" />. No unnecessary copies <GovRef id="VI.4.6" />. Data stay federated <GovRef id="VIII.3.4" />. | [8.7](/concepts/identifiers-and-linkage), [8.8](/concepts/output-control), [5.2.7](/building-blocks/national/subject-level-discovery) |
| **Accuracy** (Art. 5(1)(d)) | Common data models with quality labels <GovRef id="VI.1.1" />. When data subjects exercise their rights, the dataset gets a new version, and the Genome EDIC CC tells the Users concerned <GovRef id="V.2.2" />. Users move to the new version, unless they justified a stable dataset and said through the User Portal from when their use no longer allows a change <GovRef id="V.2.7" />; versioning keeps track of which version each User uses <GovRef id="V.2.6" />. Users report errors they find <GovRef id="VIII.2.2" />. | [8.9](/concepts/dataset-versioning), [8.10](/concepts/metadata-and-interoperability) |
| **Storage limitation** (Art. 5(1)(e)) | Access reconfirmed each year; a [sleeping period](/glossary#sleeping-period) stops access while it isn't needed <GovRef id="VIII.3.1" />. Archives reference the data used rather than copy them, and archive-only data are deleted at the end of the archiving period <GovRef id="VIII.8.4" />. | [6.3.2](/runtime/use/processing-in-spe), [6.3.7](/runtime/use/archiving) |
| **Integrity and confidentiality** (Art. 5(1)(f)) | Secure storage and SPEs; reliable authentication of each person and of their status; access logging; encryption; reduced identifiability of tabular data <GovRef id="V.1.3" />. No export of personal data, no re-identification, no linkage without permission <GovRef id="VIII.2.2" />. Measures to reduce the risk after linkage <GovRef id="VIII.3.1" />. | [8.3](/concepts/security), [8.4](/concepts/identity-and-access), [8.5](/concepts/logging-and-audit); authentication and authorisation decided in [ADR-0004](/decisions/0004-identity-and-authorisation), and each crossing between operators in [ADR-0006](/decisions/0006-trust-boundaries) (both wave 3) |
| **Accountability** (Art. 5(2)) | A risk and quality management framework and an information security management system (<Acronym id="ISMS" />) <GovRef id="V.1.1" />. Every 1+MG IT infrastructure provider audited by an external body against the minimum requirements of the Genome EDIC CC, and/or working towards certification; certification for an SPE that pools data from other Member Countries <GovRef id="V.1.3" />. Every step of an access request stored automatically <GovRef id="VII.5.5" />. DPIAs by the controllers (see below). | [8.5](/concepts/logging-and-audit), [2.3](/constraints/organisational#audit-certification-and-accreditation) |

### How the measures are chosen and reviewed

GDPR Art. 25(1) asks controllers to choose measures in the light of the state of the art, the cost, and the nature, scope, context and purposes of the processing, and to keep them effective over time <Cite id="edpb-gl-04-2019" />. In the system:

- the risk and quality management framework that the Assembly of Members adopts sets the method <GovRef id="V.1.1" />; until it does, B1MG+ has proposed one <Cite id="b1mgplus-d2.9" />;
- the Genome EDIC CC turns it into minimum requirements and audit criteria <GovRef id="V.1.2" />;
- each DPIA, and its regular updates, checks the measures against the risk and the state of the art <GovRef id="VII.5.4" />;
- external audits, and certification where it applies, check that the measures work <GovRef id="V.1.3" />;
- [chapter 10](/quality) will give the indicators.

### Data subjects' rights by design

Data protection by design includes protecting the rights of data subjects (GDPR Art. 25(1)), and the governance makes it easy for data subjects to exercise them <GovRef id="II.2" /> <GovRef id="V.2.4" />. The essentials, detailed in [6.4](/runtime/data-subject-rights) and [8.9](/concepts/dataset-versioning):

- **One place to go:** a national information portal, built on central tools and interfaces, where data subjects are informed, set their preferences and exercise their rights <GovRef id="V.2.2" /> <GovRef id="V.2.4" />. The [1+MG NCP](/glossary#1mg-national-coordination-point-1mg-ncp) is the contact point for those who don't use the portal <GovRef id="V.2.5" />.
- **Requests reach the data:** the national link between identity and key-coded identifier lets a request reach the right records <GovRef id="V.2.4" />.
- **Changes reach the Users:** dataset versioning, and the stable-dataset rule above <GovRef id="V.2.6" /> <GovRef id="V.2.7" />.
- **Limits are told in advance,** before data subjects consent or object <GovRef id="V.2.2" />, and only within what the GDPR and national law allow <GovRef id="V.2.1" />.

See also [5.2.4](/building-blocks/national/data-subject-services).

### The defaults

These are the privacy-protective defaults of the system. Each component starts from them, and only an approved request, under a data use agreement, opens more. The last column gives the dimension of GDPR Art. 25(2) the default limits: the amount of data, the extent of processing, the storage period, or accessibility.

| Default | Art. 25(2) dimension | Where it comes from |
|---|---|---|
| No access to records. Discovery processes personal data, but shows the User only counts, after the User states the purpose, counted only over records whose data subjects allow that use (research, policy development, quality management in healthcare). | Accessibility, amount | <GovRef id="VII.2.4" /> <GovRef id="VII.2.3" />; the 1+MG requirements for IT infrastructure <Cite id="b1mg-dpbdd-it" /> |
| No download of personal data. Analysis only in a 1+MG SPE, or where applicable in the SPE of the European Commission. | Accessibility | <GovRef id="VIII.2.2" /> |
| Data stay federated. Pooling is a national exception, for research only, in a certified SPE. | Extent | <GovRef id="VIII.3.4" /> <GovRef id="V.1.3" /> |
| Names and other direct identifiers are removed as far as possible and replaced by key-coded identifiers. Genomic data can identify a person by themselves, so they are stored apart from the clinical data, ideally under a different key-coded identifier. All these data remain personal data (GDPR Art. 4(5)). | Amount | <GovRef id="VI.4.1" /> <GovRef id="III" /> |
| Only the data the data use agreement covers, released by the 1+MG Data Host. | Amount | <GovRef id="VIII.3.3" /> |
| Access for a limited time: reconfirmed each year, paused in a sleeping period. | Storage period, accessibility | <GovRef id="VIII.3.1" /> |
| Data are kept only as long as their purpose needs. Archive-only data are deleted at the end of the archiving period; retention per dataset version and removal from back-ups are designed in [8.9](/concepts/dataset-versioning). | Storage period | <GovRef id="VIII.8.4" />; <Cite id="b1mg-dpbdd-it" /> |
| No linkage with other data without permission. Imported data and software go through a security review by the 1+MG IT infrastructure provider. | Extent | <GovRef id="VIII.2.2" /> <GovRef id="VIII.3.1" /> |
| No direct contact with data subjects. Users never receive contact data; invitations go through the national information chain; questions to treating healthcare professionals go through a structured channel, without revealing who the professional is. | Accessibility | <GovRef id="VIII.5.1" /> <GovRef id="VIII.5.3" /> |
| No return of incidental findings unless the data subject agreed. Without the flag for return, nothing is reported; findings go only to the entity mandated nationally. | Extent | <GovRef id="VIII.11.2" /> <GovRef id="VIII.11.4" /> |
| Logs record who did what, when, and on which dataset, not the data themselves. They are kept only as long as audits need, and only those who audit can read them ([8.5](/concepts/logging-and-audit)). | Amount, storage period, accessibility | <GovRef id="V.1.3" /> <GovRef id="VII.2.3" /> |

The safeguards for counts and allele frequencies in discovery, such as thresholds, are set by the DPIA for subject-level discovery, and designed in [8.8](/concepts/output-control). This page doesn't fix them.

### Support for data protection impact assessments

A DPIA is always the duty of the controller responsible for the processing <GovRef id="VII.2.2" />. The governance requires these DPIAs and, as its own policy, a prior consultation of the supervisory authority under the GDPR (the data protection authority) for each. The GDPR itself requires the consultation only where the DPIA shows a high residual risk (Art. 36(1)).

| DPIA | Who performs it | When | Governance |
|---|---|---|---|
| Inclusion of data subjects | The [1+MG Data Provider](/glossary#1mg-data-provider) | Before any data subject is included | <GovRef id="VI.1.5" /> |
| Subject-level data discovery | The [1+MG Data Holder](/glossary#1mg-data-holder), or, for 1+MG cohort datasets, the [Genome EDIC](/glossary#genome-edic) through the Genome EDIC CC. The Genome EDIC may prepare it for the 1+MG Data Holder where it is joint controller. The DPIA must consider that results can aggregate data from several 1+MG Data Hosts. The joint-controller arrangement in the terms of use says how the [User Organisation](/glossary#user-organisation) relies on it <GovRef id="VII.1.3" />. | Before the service starts, with regular updates | <GovRef id="VII.2.2" /> |
| Disclosure of 1+MG compliant datasets | The 1+MG Data Holder, supported by the Genome EDIC CC | A principal DPIA with regular updates and prior consultation before the first access, plus a specific DPIA for a disclosure with high risk | <GovRef id="VII.5.4" /> <GovRef id="VII.5.5" /> |
| Disclosure of 1+MG cohort datasets | The Genome EDIC, through the Genome EDIC CC | With prior consultation, before the first access | <GovRef id="VII.5.5" /> |
| The information portal components and the consent app (the tool through which data subjects give or withdraw consent) that the Genome EDIC CC provides | The Genome EDIC CC. Who is controller of each national information portal is not assigned ([chapter 11](/risks#unassigned-roles)). | With regular updates | <GovRef id="VII.5.5" /> |

The list is not exhaustive. Every controller, including the User Organisation for its project in the SPE, assesses under GDPR Art. 35 whether it needs a DPIA. The inputs below serve those DPIAs too, above all the SPE audit reports <GovRef id="VIII.2.1" />.

The architecture gives each controller the inputs it needs:

- **A description of the processing:** the lifecycle scenarios in [chapter 6](/runtime), and the [requirements](/introduction/requirements).
- **The roles:** the controller, joint controllers and processors of each operation, in [8.2](/concepts/roles).
- **The data flows and where data are stored:** the building blocks in [chapter 5](/building-blocks), and the deployment in [chapter 7](/deployment).
- **The safeguards:** this page, and [8.3](/concepts/security) to [8.8](/concepts/output-control).
- **Evidence:** audit reports of the SPEs, which the Genome EDIC CC makes available to User Organisations <GovRef id="VIII.2.1" />, and the logs of [8.5](/concepts/logging-and-audit).
- **A common risk method:** the risk management framework that B1MG+ proposes for the Genome EDIC <Cite id="b1mgplus-d2.9" />, until the Assembly of Members adopts one <GovRef id="V.1.1" />.

1+MG IT infrastructure providers must support the controllers in their DPIAs <GovRef id="V.1.3" />.

## Where it applies

Everywhere. Each building block in [chapter 5](/building-blocks) lists the personal data it handles, and links back here. The concepts that carry most of the mechanisms are [8.3 Security](/concepts/security), [8.4 Identity and access](/concepts/identity-and-access), [8.5 Logging and audit](/concepts/logging-and-audit), [8.7 Identifiers and linkage](/concepts/identifiers-and-linkage) and [8.8 Output control](/concepts/output-control). [4. Solution strategy](/solution-strategy#data-protection-by-design-and-by-default) explains why it shapes the strategy.

## Legal and governance basis

- **GDPR:** principles (Art. 5), data protection by design and by default (Art. 25), security (Art. 32), DPIA and prior consultation (Art. 35 and 36), safeguards for research (Art. 89) <Cite id="gdpr" />. The EDPB guidelines on Art. 25 give its authoritative reading <Cite id="edpb-gl-04-2019" />.
- **Governance:** the principle *GDPR-compliant* <GovRef id="II.2" />; the Genome EDIC CC drives tools built for data protection by design and by default <GovRef id="V.1.2" />; the TOMs the Assembly of Members adopts <GovRef id="VI.1.1" />; the TOMs of the IT infrastructure providers <GovRef id="V.1.3" />; the 1+MG Data Host infrastructure fulfils data protection by design and by default <GovRef id="VI.4.6" />; the yearly reconfirmation and sleeping period follow the principle "that data should be exposed as little as possible" <GovRef id="VIII.3.1" />.
- **Earlier 1+MG work:** the 1+MG requirements for IT infrastructure were derived stage by stage from a data protection by design and by default approach <Cite id="b1mg-dpbdd-it" />. Because they pre-date the 2025-12 governance, we use them for the IT requirements, and take the roles from the governance.
- **<Acronym id="EHDS" />, for comparison:** SPEs used under the EHDS keep access logs for at least one year, and only non-personal data can be downloaded from them (EHDS Art. 73) <Cite id="ehds" />.

:::caution[Open points]
- Whether the Genome EDIC is joint controller with the 1+MG Data Holder, and so may prepare the DPIA for subject-level discovery on its behalf; [ADR-0009](/decisions/0009-joint-controllership-disclosure) proposes it. See [chapter 11](/risks#joint-controllership).
- Whether 1+MG IT infrastructure providers are processors or controllers for the TOMs in the use phase. See [chapter 11](/risks#it-provider-role).
- How 1+MG IT infrastructure providers are accredited. See [chapter 11](/risks#accreditation).
- Whether the filter list of subject-level discovery is public. See [chapter 11](/risks#discovery-filter-list).
- When 1+MG data may be processed in the SPE of the European Commission. See [chapter 11](/risks#commission-spe).
- Who informs data subjects after an access decision. See [chapter 11](/risks#national-information-flow).
- Whether healthcare reuse and recruitment into clinical trials need new consent. See [chapter 11](/risks#repeated-consent).
- The legal basis for Users to report incidental findings, and the national route. See [chapter 11](/risks#incidental-findings).
:::
