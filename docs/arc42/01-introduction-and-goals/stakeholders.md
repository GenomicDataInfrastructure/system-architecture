---
title: "1.3 Stakeholders"
sidebar_position: 3
slug: /introduction/stakeholders
owner: "@brunopacheco1"
reviewers: []
status: draft
wave: 1
audience: [policy, legal, elsi, security, dpo, implementer]
governance_refs: ["I", "II.1", "II.2", "III", "V.1.1", "V.1.2", "V.1.3", "V.1.4", "V.2.3", "V.2.4", "VI.1.1", "VI.1.2", "VI.1.3", "VI.2.2", "VI.3.2", "VI.4.4", "VII.1.1", "VII.1.3", "VII.2.1", "VII.3.1", "VII.4.4", "VII.4.6", "VII.4.7", "VII.5.1", "VII.5.3", "VII.5.4", "VIII.2.1", "VIII.3.1", "VIII.3.2", "VIII.3.3"]
last_reviewed:
---

<InShort>

- The main stakeholders are the actors of the 1+MG Data Governance, from the Genome EDIC Assembly of Members to Users and data subjects. Each expects something different from the architecture, because each has different duties. Others, such as the European Commission, auditors and the GDI project, are affected too.
- This documentation has six kinds of readers: policy makers, legal experts, ELSI specialists, security advisors, data protection officers and implementers. Each has a reader guide.
- The Genome EDIC Assembly of Members decides on the principles, policies and minimum requirements. Which body adopts this architecture as a whole is not decided yet.

</InShort>

## The stakeholders and what they expect

The actors and their names come from the governance definitions <GovRef id="III" />. This table covers what each one expects from the architecture; [the next section](#readers-of-this-documentation) covers what readers need from its documentation. The expectations follow from each actor's duties in the governance. They are still to be confirmed with the stakeholders themselves, in the reviews of each page. The last column links to the pages that answer them; many of those pages are still being written. [3.3](/context/scopes) says which scope each actor belongs to, and [3.1](/context/business) what each exchanges with the system.

| Stakeholder | Role in the governance | What they expect from the architecture (from their duties) | Where it is answered |
|---|---|---|---|
| **[Genome EDIC Assembly of Members](/glossary#genome-edic-assembly-of-members)** (European scope) | Decision-making body. It decides on the principles, and adopts the policies, the minimum requirements, the data models and the technical and organisational measures <GovRef id="I" /> <GovRef id="V.1.1" /> <GovRef id="VI.1.1" />. | Its policies and minimum requirements can be enforced and checked in every Member Country, technically and through audits. Changes to rules and models can be rolled out. | [2.2 Governance principles](/constraints/governance-principles), [8.3 Security and risk management](/concepts/security) |
| **[Genome EDIC CC](/glossary#genome-edic-central-coordination-genome-edic-cc)** (European scope) | Operational level. One-stop shop for [Users](/glossary#user), runs the central services. Provides the minimum requirements for the audit and certification framework that checks the policies of the Assembly of Members; the national entities implement them. Applies the same policies to its own work, with external audit or certification where applicable <GovRef id="I" /> <GovRef id="V.1.2" /> <GovRef id="VII.3.1" />. | Central services it can run efficiently: User Portal, catalogue, access request management, [User Organisation](/glossary#user-organisation) registry. A framework to audit and certify national entities. Tools built for data protection by design and by default. | [5.1 European scope](/building-blocks/european), [8.1 Data protection by design and by default](/concepts/data-protection-by-design) |
| **[1+MG DAC](/glossary#1mg-dac)** (European scope) | Reviews access requests, integrates the national opinions and vetoes, and seeks consensus <GovRef id="VII.5.1" />. | All the information on a request in one place, with the national opinions, the deadlines and a record of the outcome. | [5.1.2 Access request management](/building-blocks/european/access-request-management), [6.2.4 Review and decision](/runtime/access/review-and-decision) |
| **[Genome EDIC Member Country](/glossary#genome-edic-member-country)** (national scope) | Puts the national structures and resources in place, manages conflicts of interest, decides the national strategy for access decisions, and enables [data subjects](/glossary#data-subject)' rights <GovRef id="I" /> <GovRef id="V.1.4" /> <GovRef id="VI.1.3" /> <GovRef id="V.2.4" />. | Clear obligations: what it must put in place. Freedom to fit the system into its national infrastructure, and to choose its tools and organisations, within the common requirements <GovRef id="II.2" />. A template to describe its choices. | [2.3 Organisational constraints](/constraints/organisational), [2.2 Governance principles](/constraints/governance-principles), [3.3](/context/scopes), [national implementation profile](/appendix/national-profile-template) |
| **[1+MG NCP](/glossary#1mg-national-coordination-point-1mg-ncp)** (national scope) | Checks data before inclusion, channels access requests and opinions between the national bodies and the 1+MG DAC, and informs data subjects, unless the Member Country gives that task to another national body (open point) <GovRef id="VI.4.4" /> <GovRef id="VII.4.4" /> <GovRef id="VII.5.3" />. | A national node and catalogue. Workflows that route requests, opinions and reminders to the right national bodies. Tools to inform data subjects, where it has that task. | [5.2.1 1+MG NCP node and national catalogue](/building-blocks/national/ncp-node), [5.2.4 Data subject services](/building-blocks/national/data-subject-services) |
| **[1+MG Data Holder](/glossary#1mg-data-holder)** (national scope; [1+MG compliant datasets](/concepts/dataset-types)) | Decides on access, after its own review, and performs the data protection impact assessment (<Acronym id="DPIA" />). Delegates the vetting of User Organisations to the [Genome EDIC](/glossary#genome-edic) <GovRef id="VII.1.1" /> <GovRef id="VII.4.6" /> <GovRef id="VII.5.4" />. | Decision support, with the opinion of the 1+MG DAC and the deadlines (15, or 25 working days where ethical challenges need more scrutiny). Support for its DPIA. | [5.2.2 Access review and decision support](/building-blocks/national/access-decision-support), [8.12 Types of dataset](/concepts/dataset-types) |
| **[Local DAC](/glossary#local-dac)** (national scope) | Reviews access requests for the datasets it oversees, whether 1+MG compliant or 1+MG cohort. For [1+MG cohort datasets](/concepts/dataset-types), it may send a veto on the opinion of the 1+MG DAC, with a justification <GovRef id="VII.4.7" />. | Each request and the opinion of the 1+MG DAC in time, and, for 1+MG cohort datasets, a way to agree or send a veto within 10 working days. | [5.2.2](/building-blocks/national/access-decision-support), [6.2.4](/runtime/access/review-and-decision) |
| **[1+MG Data Provider](/glossary#1mg-data-provider)** (national scope) | Includes its data: transforms them into the agreed models, documents them, and informs data subjects before inclusion <GovRef id="VI.2.2" /> <GovRef id="VI.3.2" /> <GovRef id="V.2.3" />. | Data models, instructions and tools for transformation and documentation. Clear information to give to data subjects. | [5.2.6 Data transformation and documentation](/building-blocks/national/data-transformation), [6.1 Data inclusion](/runtime/data-inclusion) |
| **[1+MG Data Host](/glossary#1mg-data-host)** (national scope) and **[1+MG IT infrastructure provider](/glossary#1mg-it-infrastructure-provider)** (a role, in the European or the national scope) | The Data Host holds the data; IT infrastructure providers run the platforms and secure processing environments (<Acronym id="SPE">SPEs</Acronym>), centrally for the Genome EDIC or in a Member Country. Each IT infrastructure provider must be audited by an external body, or work towards certification of its risk management. Certification is required for an SPE that pools data from several Member Countries <GovRef id="V.1.3" /> <GovRef id="VIII.3.3" />. | Common minimum requirements for platforms and SPEs. The [data use agreement](/runtime/use/data-use-agreement) as the basis for giving access, and a way to revoke access at once when a breach is suspected <GovRef id="VIII.3.3" />. | [5.2.3 Secure processing environment](/building-blocks/national/spe), [5.2.5 1+MG compliant local IT infrastructure](/building-blocks/national/data-host), [8.3](/concepts/security) |
| **[User Organisation](/glossary#user-organisation)** (User Organisation scope) | Registers, signs the terms of use, the data use agreement and the data processing agreement with the Genome EDIC CC <GovRef id="VII.1.3" /> <GovRef id="VIII.2.1" />, and is controller for the downstream use of the data <GovRef id="VII.1.3" />. | One registration for all data in the Genome EDIC, and clear agreements that say what it is responsible for, as [controller](/concepts/roles). | [5.3.1 User Organisation registration and user management](/building-blocks/user-organisation/user-management), [6.2.1 Registration of the User Organisation](/runtime/access/registration) |
| **[User](/glossary#user)** (User Organisation scope) | Finds data, requests access, and analyses the data in an SPE <GovRef id="VII.2.1" /> <GovRef id="VII.3.1" /> <GovRef id="VIII.3.1" />. | One catalogue and one access procedure for all data in the Genome EDIC. SPEs with suitable tools and enough computing power <GovRef id="VIII.3.3" />, and the option to pause access ([sleeping period](/glossary#sleeping-period)) <GovRef id="VIII.3.1" /> <GovRef id="VIII.3.2" />. | [5.1.1 1+MG User Portal and central data catalogue](/building-blocks/european/user-portal-and-catalogue), [6.2.3 Data access request](/runtime/access/request), [5.2.3](/building-blocks/national/spe) |
| **[Data subjects](/glossary#data-subject)** (no scope: they have no duties in the system) | The people the data are about <GovRef id="III" />. | Information on how their data are used, in their language. The chance to consent or object where that applies. A way to exercise their rights, ideally through a portal in their Member Country <GovRef id="V.2.4" /> <GovRef id="VII.5.3" />. | [5.2.4](/building-blocks/national/data-subject-services), [6.4 Exercise of data subjects' rights](/runtime/data-subject-rights), [8.6 Legal basis, consent and objection](/concepts/legal-basis-and-consent) |

**How to reach these groups:** in the European scope, through the Genome EDIC CC, the one-stop shop for Users. In each country, through its 1+MG NCP, the main contact for the Genome EDIC and for national stakeholders <GovRef id="I" />. To reach the taskforce that writes this documentation, open an issue in its [GitHub repository](https://github.com/GenomicDataInfrastructure/system-architecture/issues).

**Other stakeholders** are not among the actors that the governance defines, but the architecture affects them or depends on them:
- the European Commission, which runs [HealthData@EU](/concepts/ehds-integration) under the European Health Data Space (<Acronym id="EHDS" />) <Cite id="ehds" />;
- the data protection authorities;
- health data access bodies (<Acronym id="HDAB">HDABs</Acronym>), whose data can be brought into 1+MG SPEs, and which can use 1+MG SPEs themselves <GovRef id="VIII.3.2" /> <GovRef id="VIII.3.3" />;
- patient and citizen organisations, which can speak for data subjects when their expectations are confirmed;
- auditors and certification bodies, which check the platforms and SPEs against the common requirements <GovRef id="V.1.2" /> <GovRef id="V.1.3" />;
- the teams that build the interfaces to the system: for HealthData@EU, for health data access bodies, and for national systems;
- the Genomic Data Infrastructure (<Acronym id="GDI" />) project, which builds the reference implementation <Cite id="gdi-starter-kit" />. Until GDI ends, the system gives access only to [externally governed datasets](/concepts/dataset-types), such as Genome of Europe data <Cite id="gdi-d3.4" />; the other types follow once the Genome EDIC is operational ([ADR-0002](/decisions/0002-disclosure-paths-per-dataset), proposed);
- the <Acronym id="1+MG" /> working groups and the Genome EDIC committees, which define the data and metadata models and the accreditation of IT infrastructure providers <GovRef id="II.1" /> <GovRef id="III" />;
- the architecture taskforce, which writes and maintains this documentation.

Some of them, such as the data protection authorities and the HDABs, also exchange information with the system: [3.1 Business context](/context/business) shows what.

## Readers of this documentation

Each kind of reader has a guide that lists their usual questions, and links to the page that answers each one.

| Reader | What they need from this documentation | Guide |
|---|---|---|
| Policy makers | What the system delivers, what their country must provide, and whether it respects the commitments of the 1+MG Declaration, which the Member Countries signed. | [Policy makers](/readers/policy-makers) |
| Legal experts | That the system respects the <Acronym id="GDPR" />, the EHDS and the governance, and that responsibilities are clearly allocated. | [Legal experts](/readers/legal-experts) |
| <Acronym id="ELSI" /> specialists | That the system respects the ethical, legal and societal commitments of the governance: transparency, purpose limitation, fair access and respect for data subjects. | [ELSI specialists](/readers/elsi-specialists) |
| Security advisors | The security design: risk management, identity and access, logging, SPEs and incident handling. | [Security advisors](/readers/security-advisors) |
| Data protection officers | That the system applies data protection by design and by default, and supports DPIAs and data subjects' rights. | [Data protection officers](/readers/data-protection-officers) |
| Implementers | What each component must provide, for anyone who builds or operates one: a Genome EDIC service, a national node, an SPE, a 1+MG Data Host, or a User Organisation's connection. | [Implementers](/readers/implementers) |

## Who decides on the architecture

- **The Genome EDIC Assembly of Members** decides on the principles and sets the minimum requirements <GovRef id="I" />. It adopts the policies <GovRef id="V.1.1" />, and the data models and technical and organisational measures <GovRef id="VI.1.1" />. The Genome EDIC CC prepares its decisions, with advice from committees and advisory boards <GovRef id="V.1.2" />.
- **Committees and working groups** turn the principles into implementation rules and technical requirements <GovRef id="II.1" />. For example, the Genome EDIC CC coordinates the definition of data models and ontologies through the Genome EDIC committees <GovRef id="VI.1.2" />.
- **Each Member Country** decides how it implements the system nationally, within the common requirements <GovRef id="II.2" />. It records its choices in its national implementation profile.
- **This documentation** is a working draft of the Genome EDIC system architecture taskforce, not an adopted document. The taskforce records its architecture decisions as architecture decision records ([chapter 9](/decisions), [ADR-0001](/decisions/0001-record-architecture-decisions)).

:::caution[Open points]
- The governance names who adopts policies, minimum requirements and data models, but no body that adopts the system architecture as a whole. How the taskforce takes and confirms its decisions is not decided yet either. See [chapter 11](/risks#architecture-adoption).
- The accreditation of 1+MG IT infrastructure providers is still to be defined, and so is how it relates to audits and certification. See [chapter 11](/risks#accreditation).
- Who informs data subjects after an access decision: the 1+MG NCP, or another national body <GovRef id="VII.5.3" />. See [chapter 11](/risks#national-information-flow).
- The 1+MG paths need an operational Genome EDIC. Until then, only externally governed datasets can be accessed through the system (ADR-0002, proposed). See [chapter 11](/risks#genome-edic-operational).
:::
