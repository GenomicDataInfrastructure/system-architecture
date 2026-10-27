---
title: "8.2 Controllers, processors and responsibilities"
sidebar_position: 2
slug: /concepts/roles
owner: "@brunopacheco1"
reviewers: []
status: draft
wave: 2
audience: [legal, dpo, implementer]
governance_refs: ["II.1", "III", "V.2.2", "V.2.4", "V.2.5", "VI.1.2", "VI.1.4", "VI.1.5", "VI.2.3", "VI.3.3", "VI.4.4", "VI.4.5", "VI.4.6", "VII.1.1", "VII.1.2", "VII.1.3", "VII.2.2", "VII.2.3", "VII.3.1", "VII.4.3", "VII.4.7", "VII.5.3", "VII.5.4", "VII.5.5", "VIII.1.2", "VIII.2.1", "VIII.2.2", "VIII.3.1", "VIII.3.2", "VIII.3.3", "VIII.4.3", "VIII.5.1", "VIII.5.2", "VIII.8.3"]
last_reviewed:
---

<InShort>

- Each phase of the data lifecycle has its own controller. The 1+MG Data Provider is controller for including the data; the 1+MG Data Holder (1+MG compliant datasets) or the Genome EDIC (1+MG cohort datasets) for holding and disclosing them; the User Organisation for using them.
- The Genome EDIC is processor for the User Organisation in the secure processing environments, and the SPE providers are its sub-processors. A 1+MG Data Host that is not the 1+MG Data Holder is the Data Holder's processor. Each of these roles is set out in an agreement.
- Two questions are still open: whether the Genome EDIC is joint controller with the 1+MG Data Holder, and which role the SPE providers have for their own platform. Two architecture decision records propose answers; both are still to be confirmed.

</InShort>

## The problem

Many organisations in many countries process the same data, each for a different step. The <Acronym id="GDPR" /> needs one answer for every processing operation: who decides why and how it happens (the [controller](/glossary#controller)), and who only carries it out on the controller's behalf (the [processor](/glossary#processor)) (Art. 4(7), 4(8)) <Cite id="gdpr" />. Without that answer, nobody can be held accountable, the right agreements can't be signed, and [data subjects](/glossary#data-subject) don't know whom to ask.

This page is the one place that allocates the roles. Other pages link here. The [Genome EDIC](/glossary#genome-edic) is the legal entity that holds its roles; it acts through its central office, the [Genome EDIC CC](/glossary#genome-edic-central-coordination-genome-edic-cc).

## The rule

1. **Every processing operation must have a named controller,** with its own legal basis. The governance gives each phase of the lifecycle its own controller or controllers <GovRef id="II.1" />.
2. **GDPR roles follow the 1+MG role an organisation plays, not the organisation itself.** One organisation may hold several roles <GovRef id="III" />: a [1+MG Data Provider](/glossary#1mg-data-provider) may also be the [1+MG Data Holder](/glossary#1mg-data-holder) and the [1+MG Data Host](/glossary#1mg-data-host). It then has the GDPR role of each, for each operation.
3. **The same actor can have different roles in different phases.** The Genome EDIC is controller for the access decision on 1+MG cohort datasets, and processor for the [User Organisation](/glossary#user-organisation) in the use phase.
4. **Every processor works under a contract or other legal act with its controller** (GDPR Art. 28(3)), and engages sub-processors only with the controller's prior specific or general written authorisation (Art. 28(2)); for the federated SPEs, the governance asks the Genome EDIC to name its sub-processors <GovRef id="VIII.2.1" />. Joint controllers set out their responsibilities in an arrangement, and make its essence available to data subjects (GDPR Art. 26).
5. **Each building block must say for which controller it processes,** and log enough to show it, without logging more personal data than needed ([8.1](/concepts/data-protection-by-design#the-defaults)).

## How it works

### Controllers and processors for each processing operation

The table follows the lifecycle. Where the governance doesn't assign a role, the cell says so. [8.6](/concepts/legal-basis-and-consent) explains the legal bases.

| Processing operation | Phase | Controller(s) | Processor(s) | Building block | Legal basis (GDPR Art. 6 and 9) |
|---|---|---|---|---|---|
| Preparing, transforming and documenting the data for inclusion | Inclusion | The 1+MG Data Provider, the controller for establishing the availability of the data <GovRef id="VI.1.5" /> | The national entities that support it, as the Member Country decides <GovRef id="VI.2.3" /> <GovRef id="VI.3.3" />; their GDPR role is not assigned | [5.2.6](/building-blocks/national/data-transformation) | Consent (Art. 6(1)(a) and 9(2)(a)), or a legislative act at country, regional or Union level that explicitly mandates the sharing <GovRef id="III" />; for 1+MG compliant data, the act must provide for the Genome EDIC Secondary Use Framework <GovRef id="VI.1.2" /> |
| Checking the data before they are made available | Inclusion | Not assigned. The 1+MG Data Provider is controller for establishing the availability of the data <GovRef id="VI.1.5" />; the B1MG+ workshop proposes that the [1+MG NCP](/glossary#1mg-national-coordination-point-1mg-ncp), which does the check <GovRef id="VI.4.4" />, acts as its processor <Cite id="b1mgplus-ms17" /> | Not assigned | [5.2.1](/building-blocks/national/ncp-node) | As for inclusion |
| Holding the data for secondary use | From inclusion on | The 1+MG Data Holder for [1+MG compliant datasets](/concepts/dataset-types) <GovRef id="VI.4.5" />; the Genome EDIC for 1+MG cohort datasets <GovRef id="III" /> | The 1+MG Data Host, where it is not the Data Holder <GovRef id="VI.4.6" /> | [5.2.5](/building-blocks/national/data-host) | As for inclusion |
| Registering User Organisations and their Users, and vetting them | Access | Not assigned as a GDPR role. The Genome EDIC CC keeps the registry and vets <GovRef id="VII.1.2" />; the 1+MG Data Holders delegate this to the Genome EDIC <GovRef id="VII.1.1" />; for 1+MG cohort datasets the Genome EDIC does it as controller for the disclosure | Not assigned | [5.1.3](/building-blocks/european/user-organisation-registry) | To be set in [8.6](/concepts/legal-basis-and-consent) |
| [Subject-level data discovery](/glossary#subject-level-data-discovery) (research, policy development, <Acronym id="QM" />) | Access | **Joint controllers:** the User Organisation and the controller(s) for the disclosure <GovRef id="VII.1.3" /> | The 1+MG IT infrastructure provider acting as 1+MG Data Host runs the search engine <GovRef id="VII.2.3" /> | [5.2.7](/building-blocks/national/subject-level-discovery) | As for disclosure |
| Reviewing an access request and deciding on it | Access | The 1+MG Data Holder (1+MG compliant) <GovRef id="VII.5.4" />; the Genome EDIC, through the Genome EDIC CC (1+MG cohort), after review by the reviewers the Member Country names <GovRef id="VII.4.7" /> <GovRef id="VII.5.5" />. Whether the Genome EDIC is joint controller for 1+MG compliant datasets is open | The Genome EDIC CC runs access request management for both. Its role for 1+MG compliant datasets depends on the open point | [5.1.2](/building-blocks/european/access-request-management), [5.2.2](/building-blocks/national/access-decision-support) | As for disclosure |
| Disclosing the data to the User | Access | The controller for the disclosure: the 1+MG Data Holder or the Genome EDIC <GovRef id="III" /> | The 1+MG Data Host, which makes the data available on its behalf <GovRef id="VIII.3.3" /> | [5.2.5](/building-blocks/national/data-host) | Consent or a legislative act, as for inclusion <GovRef id="III" /> |
| Healthcare reuse: disclosure without an access decision per request | Access | As for disclosure. Access rests on the framework data use agreement of the User Organisation <GovRef id="VII.5.4" /> <GovRef id="VII.4.3" /> | As for disclosure | [6.3.3](/runtime/use/healthcare-reuse) | As for disclosure |
| Informing data subjects after a decision, and collecting consent or objections | Access | The controller for the disclosure, whose transparency duty under GDPR Art. 13 and 14 it is <GovRef id="VII.5.3" /> <GovRef id="VIII.1.2" /> | Not assigned. The 1+MG NCP informs the data subjects, unless the country organises the flow otherwise ([chapter 11](/risks#national-information-flow)) | [5.2.4](/building-blocks/national/data-subject-services) | To be set in [8.6](/concepts/legal-basis-and-consent) |
| Central information database and portal components | All | Not assigned; the Genome EDIC CC performs their DPIA <GovRef id="VII.5.5" /> | — | [5.1.4](/building-blocks/european/transparency-and-reporting), [5.2.4](/building-blocks/national/data-subject-services) <GovRef id="V.2.2" /> | To be set in [8.6](/concepts/legal-basis-and-consent) |
| Analysis in a 1+MG secure processing environment (<Acronym id="SPE" />) | Use | The User Organisation, controller for the downstream use <GovRef id="VII.1.3" /> | The Genome EDIC, under a data processing agreement; the SPE providers as its sub-processors <GovRef id="VIII.2.1" /> | [5.2.3](/building-blocks/national/spe) | The User Organisation's own |
| Linking 1+MG data with other data in the SPE, and reducing the risk after linkage | Use | The User Organisation <GovRef id="VIII.3.1" /> | The Genome EDIC's sub-processors, which take measures to reduce the risk <GovRef id="VIII.3.1" /> | [5.2.3](/building-blocks/national/spe) | The User Organisation's own |
| Running the SPE platform: accounts, access control, logs about the User | Use | Not assigned; [ADR-0010](/decisions/0010-spe-provider-role) proposes the SPE provider (see [below](#the-role-of-spe-providers)) | — | [5.2.3](/building-blocks/national/spe), [8.5](/concepts/logging-and-audit) | To be set in [8.6](/concepts/legal-basis-and-consent) |
| Disclosure of additional data by the treating healthcare professional (healthcare reuse) | Use | The treating healthcare professional, for its disclosure; the User Organisation, for the data received | Not assigned for the communication channel | [6.3.3](/runtime/use/healthcare-reuse) | Consent of the data subject, given in advance and recorded in the 1+MG metadata: the governance calls this disclosure new processing that needs a new legal basis <GovRef id="VIII.4.3" /> |
| Reaching back to data subjects to recruit them into research | Use | Not assigned | Not assigned | [5.2.4](/building-blocks/national/data-subject-services) | To be set in [8.6](/concepts/legal-basis-and-consent) <GovRef id="VIII.5.1" /> <GovRef id="VIII.5.2" /> |
| Archiving for reproducibility (research, healthcare reuse) | Use | The User Organisation <GovRef id="VIII.8.3" /> | The Genome EDIC national entities, as (sub-)processors <GovRef id="VIII.8.3" /> | [6.3.7](/runtime/use/archiving) | The User Organisation's own |

Each controller and processor can start its record of processing activities (GDPR Art. 30) from the rows in which it appears.

Two cases sit outside the table:

- **[Externally governed datasets](/concepts/dataset-types).** Their controller for the disclosure is not set by the 1+MG data governance: it is the dataset's own controller, under its own rules <GovRef id="VII.3.1" />. Once a User imports such data into a 1+MG SPE, the User Organisation is controller for their use, as for 1+MG data <GovRef id="VIII.3.3" />.
- **Step 1 of [ADR-0003](/decisions/0003-implementation-in-steps)**, before the Genome EDIC is operational. Who is controller and processor for the central services and the SPEs then is not decided ([chapter 11](/risks#genome-edic-operational)).

:::caution[Open point]
The GDPR roles of the 1+MG NCP for the check before inclusion and in the information chain, of the registry of User Organisations, of the central information components, of reaching back to data subjects, and of the identity link service are not assigned. See [chapter 11](/risks#unassigned-roles).
:::

### The three phases, each with its own controller

| Phase | 1+MG compliant datasets | 1+MG cohort datasets |
|---|---|---|
| Inclusion | The 1+MG Data Provider | The 1+MG Data Provider |
| Holding, from inclusion on | The 1+MG Data Holder | The Genome EDIC |
| Access (discovery, decision, disclosure) | The 1+MG Data Holder; joint controllership with the Genome EDIC is open; for subject-level data discovery, jointly with the User Organisation <GovRef id="VII.1.3" /> | The Genome EDIC; for subject-level data discovery, jointly with the User Organisation <GovRef id="VII.1.3" /> |
| Use | The User Organisation | The User Organisation |

The type of the dataset changes only the controller for holding and access. [8.12](/concepts/dataset-types) shows what else differs per type, and [3.3](/context/scopes#the-type-of-dataset-decides-who-takes-the-access-decision) shows how the controllers relate to the scopes. The pattern resembles the European Health Data Space (<Acronym id="EHDS" />), which gives the health data holder the role of controller for making data available, and makes the health data access body processor for the health data user in its secure processing environment (EHDS Art. 74) <Cite id="ehds" />.

### The chain of agreements

The roles above are set out in agreements. The diagram shows who signs what with whom for 1+MG compliant datasets (select it to open it full size).

<Diagram src="8.2-agreements.drawio.svg" alt="Agreement map. In the national scope: 1+MG Data Provider, 1+MG Data Holder, 1+MG Data Host and 1+MG NCP. In the European scope: the Genome EDIC, which signs through the Genome EDIC CC. In the User Organisation scope: the User Organisation. Outside both scope frames, in grey: the SPE provider, a role of a 1+MG IT infrastructure provider that can serve either scope. Seven agreements: 1, inclusion agreement between the 1+MG Data Provider, the Genome EDIC and the 1+MG Data Holder where it is not the Data Provider, with country-specific clauses from the 1+MG NCP where applicable (dashed); 2, participation agreement between the 1+MG Data Holder and the Genome EDIC; 3, data processing agreement from the 1+MG Data Holder to the 1+MG Data Host; 4, terms of use between the User Organisation and the Genome EDIC on behalf of the 1+MG Data Holders, with the joint-controller arrangement for discovery between the User Organisation and the controllers for the disclosure; 5, data use agreement for each approved request; 6, data processing agreement from the User Organisation to the Genome EDIC; 7, sub-processing agreement from the Genome EDIC to the SPE provider. For 1+MG cohort datasets, agreement 2 does not apply and the 1+MG Data Host processes for the Genome EDIC." />

| # | Agreement | Between | Role it sets up | Governance |
|---|---|---|---|---|
| 1 | Inclusion agreement | 1+MG Data Provider, Genome EDIC and, for 1+MG compliant datasets, the 1+MG Data Holder where it is not the 1+MG Data Provider. The Genome EDIC CC provides the agreement, and the 1+MG NCP, where applicable, its country-specific clauses | Rights and obligations for making data available | <GovRef id="VI.1.2" /> <GovRef id="VI.1.4" /> <GovRef id="VI.1.5" /> |
| 2 | Participation agreement | 1+MG Data Holder and Genome EDIC | The 1+MG Data Holder adopts the harmonised rules; [ADR-0009](/decisions/0009-joint-controllership-disclosure) proposes adding the Art. 26 arrangement for the services the Genome EDIC runs for the 1+MG Data Holders (open point) | <GovRef id="VI.4.5" /> |
| 3 | Data processing agreement | 1+MG Data Holder (or Genome EDIC, for 1+MG cohort datasets) and 1+MG Data Host | The 1+MG Data Host is processor | <GovRef id="VI.4.6" /> |
| 4 | Terms of use; for healthcare reuse, the framework data use agreement | User Organisation and Genome EDIC: for 1+MG compliant datasets under the mandate of the 1+MG Data Holders, for 1+MG cohort datasets in its own name as controller for the disclosure | Joint-controller arrangement for subject-level discovery between the User Organisation and the controller(s) for the disclosure | <GovRef id="VII.1.1" /> <GovRef id="VII.1.3" /> |
| 5 | Data use agreement, per approved request | Genome EDIC CC and User Organisation; who signs for the 1+MG Data Holders is open | Conditions of use, and the controller for the disclosure | <GovRef id="VII.5.5" /> <GovRef id="VIII.2.1" /> |
| 6 | Data processing agreement | User Organisation and Genome EDIC | The Genome EDIC is processor, and names its sub-processors and the technical and organisational measures (<Acronym id="TOM">TOMs</Acronym>) | <GovRef id="VIII.2.1" /> |
| 7 | (Sub-)processing agreements | Genome EDIC and every provider of the federated SPEs | The SPE providers are sub-processors | <GovRef id="VIII.2.1" /> |

The governance chose agreement 6 so that the User Organisation doesn't carry the responsibility for the federated SPEs: the Genome EDIC audits its sub-processors, or checks their audit reports, and makes the SPE audit reports available to Users <GovRef id="VIII.2.1" />. The governance's text says the Genome EDIC signs agreement 6 "with the User". This documentation reads it as the User Organisation: the governance defines the User as the individual, and the User Organisation as the legal entity under which the User operates <GovRef id="III" />, and the User Organisation is the controller for the use <GovRef id="VII.1.3" />.

:::caution[Open point]
Who signs the data use agreement for 1+MG compliant datasets: whether the Genome EDIC is mandated to sign on behalf of the 1+MG Data Holders <GovRef id="VII.5.5" />. See [chapter 11](/risks#data-use-agreement-signatory).
:::

### Who notifies a personal data breach

Under the GDPR, the controller notifies the supervisory authority under the GDPR (the data protection authority) without undue delay and, where feasible, within 72 hours, unless the breach is unlikely to result in a risk; and informs the data subjects where the risk is high. A processor informs its controller without undue delay (Art. 33 and 34) <Cite id="gdpr" />.

The governance adds its own chain for misuse by a User. Users report data breaches to the Genome EDIC CC <GovRef id="VIII.2.2" />. An SPE provider that suspects a User has breached purpose limitation or confidentiality revokes that User's access at once, and informs the Genome EDIC CC and, where applicable, the other affected SPE providers <GovRef id="VIII.3.3" />. The Genome EDIC CC then formally withdraws the User's right of access under the data use agreement <GovRef id="VIII.3.2" />. The governance suggests that it does so on behalf of all the 1+MG Data Holders, which depends on the open mandate question ([chapter 11](/risks#data-use-agreement-signatory)). The governance sets no chain for other security incidents; [6.5](/runtime/security-incident) covers them.

| Where the breach happens | Who notifies the data protection authority | The chain from the processor |
|---|---|---|
| Inclusion: transformation, documentation, checks | The 1+MG Data Provider | Its service providers inform it. The 1+MG NCP's duty depends on its role, which is open ([chapter 11](/risks#unassigned-roles)) |
| Holding at a 1+MG Data Host | The 1+MG Data Holder, or the Genome EDIC for 1+MG cohort datasets | The 1+MG Data Host informs its controller |
| Subject-level discovery | The joint controllers, as their arrangement says | The 1+MG Data Host informs the controller for the disclosure |
| Access request management | The controller for the access decision | The Genome EDIC CC informs the 1+MG Data Holder, where it acts for it |
| Use in an SPE | The User Organisation | The SPE provider informs the Genome EDIC CC; the Genome EDIC, as processor, informs the User Organisation |
| Registration of User Organisations and Users; identity link service; information portal and consent app | Not assigned ([chapter 11](/risks#unassigned-roles)) | To be set with the controller |
| Platform data of the SPE provider (accounts, security logs) | The SPE provider, if it is controller for them ([ADR-0010](/decisions/0010-spe-provider-role), proposed) | — |

A breach in an SPE can also affect the controller for the disclosure, whose data the SPE holds. The governance's chain through the Genome EDIC CC lets it inform both. NIS2 reporting, where it applies, comes on top ([2.1](/constraints/legal)).

### Where data subjects exercise their rights

The controller of each phase answers for the rights of data subjects in that phase. Data subjects don't have to know which one it is:

- they use one entry point: the national information portal, or the 1+MG NCP as contact point <GovRef id="V.2.4" /> <GovRef id="V.2.5" />;
- the request goes to the controller concerned, through the national link between identity and key-coded identifier;
- the Genome EDIC CC tells the Users whose data in use change <GovRef id="V.2.2" />;
- where there are joint controllers, their arrangement says who answers, and each of them can be asked (GDPR Art. 26(3)).

[6.4](/runtime/data-subject-rights) gives the steps.

### Whether the Genome EDIC is joint controller with the 1+MG Data Holder {#joint-controllership}

For 1+MG compliant datasets, the governance names the 1+MG Data Holder as controller for the disclosure <GovRef id="III" />, and mentions only conditionally that the Genome EDIC may be joint controller with it <GovRef id="VII.2.2" /> <GovRef id="VII.5.5" />. [ADR-0009](/decisions/0009-joint-controllership-disclosure) sets out the options and proposes that the two are joint controllers for the disclosure, including subject-level discovery, with the 1+MG Data Holder alone taking the access decision. Whatever the answer, the system must record for each dataset who the controller or controllers for the disclosure are, and show it to Users and data subjects.

:::caution[Open point]
Whether the Genome EDIC is joint controller with the 1+MG Data Holder for 1+MG compliant datasets. See [chapter 11](/risks#joint-controllership).
:::

### The role of SPE providers

The governance makes the SPE providers sub-processors of the Genome EDIC <GovRef id="VIII.2.1" />, and also calls the 1+MG IT infrastructure providers "the controller for the technical and organisational measures to protect the data" <GovRef id="VIII.3.3" />. [ADR-0010](/decisions/0010-spe-provider-role) sets out the options and proposes that both hold, for different processing: sub-processor for the data the User analyses, and controller for the SPE provider's own platform processing, such as User accounts and security logs.

:::caution[Open point]
Whether 1+MG IT infrastructure providers are only sub-processors in the use phase, or also controllers for their own platform processing. See [chapter 11](/risks#it-provider-role).
:::

## Where it applies

- **Building blocks:** every building block in [chapter 5](/building-blocks) names its controller, and the processor that runs it.
- **Runtime:** each step in [chapter 6](/runtime) names the controller of the processing it carries out.
- **Concepts:** [8.1](/concepts/data-protection-by-design) (who performs which DPIA), [8.5](/concepts/logging-and-audit) (whose logs), [8.6](/concepts/legal-basis-and-consent) (the legal basis of each controller), [8.12](/concepts/dataset-types) (the controller per type of dataset).
- **Context:** [3.3](/context/scopes) (scopes are not controllers).

## Legal and governance basis

- **GDPR:** controller and processor (Art. 4(7), 4(8)); responsibility of the controller (Art. 24); joint controllers (Art. 26); processors and sub-processors (Art. 28); records of processing (Art. 30); breach notification (Art. 33 and 34) <Cite id="gdpr" />. The guidelines of the European Data Protection Board (<Acronym id="EDPB" />) on the concepts of controller and processor, on which the governance itself relies <GovRef id="VII.2.2" /> <Cite id="edpb-gl-07-2020" />.
- **Governance:** each phase with its own controller <GovRef id="II.1" />; the definitions of the actors and types of dataset <GovRef id="III" />; the agreements in the table above; the User Organisation as controller for the use <GovRef id="VII.1.3" />; the Genome EDIC as processor, with sub-processors <GovRef id="VIII.2.1" />.
- **EHDS:** controllership in the EHDS (Art. 74); joint controllers and the Commission as processor in HealthData@EU and in the Commission's SPE (Art. 75(9), 75(10)). The responsibilities of controllers and processors in HealthData@EU will be set by the implementing act under Art. 75(12), still a draft <Cite id="ehds" /> <Cite id="hdeu-ia-draft" />.
- **Expert input:** B1MG+, an EU-funded project that supports the 1+MG initiative, held an expert workshop on roles under the GDPR <Cite id="b1mgplus-ms17" />. It informs the proposals in ADR-0009 and ADR-0010; it is not a decision of the Genome EDIC.

:::caution[Open point]
Until the Genome EDIC is operational, who is controller and processor for the central services and the SPEs is not decided. See [chapter 11](/risks#genome-edic-operational).
:::
