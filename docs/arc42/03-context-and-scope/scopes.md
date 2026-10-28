---
title: "3.3 European, national and User Organisation scopes"
sidebar_position: 3
slug: /context/scopes
owner: "@brunopacheco1"
reviewers: ["@rwwh", "@kjellp", "@TroelsRasmussen"]
status: in-review
wave: 1
audience: [policy, legal, elsi, security, dpo, implementer]
governance_refs: ["I", "II.1", "II.2", "III", "V.1.4", "V.2.2", "VI.1.3", "VI.1.5", "VI.2.2", "VI.4.4", "VI.4.5", "VI.4.6", "VII.1.3", "VII.2.1", "VII.2.2", "VII.3.1", "VII.4.3", "VII.4.6", "VII.4.7", "VII.5.1", "VII.5.4", "VII.5.5", "VIII.1.2", "VIII.2.1", "VIII.2.2", "VIII.3.3", "VIII.3.4", "VIII.4.5", "VIII.5.3"]
last_reviewed:
---

<InShort>

- The system has three scopes, set by who is responsible: **European** (the Genome EDIC), **national** (each Genome EDIC Member Country) and **User Organisation** (the organisation that uses the data, and its Users).
- Each Member Country organises its national roles (which organisation does what), so there is no separate local scope. Where things run (central, national or local level) is described in chapter 7.
- The type of each dataset decides who takes the access decision: a 1+MG Data Holder in the country decides on 1+MG compliant datasets, the Genome EDIC decides on 1+MG cohort datasets. The architecture taskforce proposes that each Member Country chooses between these two types for its datasets.

</InShort>

## The three scopes

A **scope** groups everything one party is responsible for. The governance gives each actor rights and duties in each phase of the data lifecycle <GovRef id="I" />. The scopes follow those responsibilities, not the location of servers. Each term links to its definition in the [glossary](/glossary) the first time it appears.

<Diagram src="3.3-scopes.drawio.svg" alt="Diagram of the three scopes. User Organisation scope, one per User Organisation: User Organisation and User. European scope, the Genome EDIC: Genome EDIC Assembly of Members, Genome EDIC CC and 1+MG DAC. National scope, one per Genome EDIC Member Country: Genome EDIC Member Country, 1+MG NCP, 1+MG Data Holder, Local DAC, 1+MG Data Provider, 1+MG Data Host and Genome EDIC national entities. Outside every scope, in grey: data subjects (who have rights, not duties), providers of externally governed datasets, and treating healthcare professionals. The 1+MG IT infrastructure provider is a role, not a scope." />

The diagram shows who belongs to which scope (select it to open it full size). What crosses the boundary of the system, and through which channels, is described in [3.1 Business context](/context/business) and [3.2 Technical context](/context/technical).

| Scope | Who is responsible | In short |
|---|---|---|
| **[European](/glossary#european-scope)** | The [Genome EDIC](/glossary#genome-edic) | Sets the common rules <GovRef id="I" /> and runs the services shared by all Member Countries. It is the one-stop shop for Users <GovRef id="III" />. |
| **[National](/glossary#national-scope)** | Each [Genome EDIC Member Country](/glossary#genome-edic-member-country) | Brings data in, keeps them in the country <GovRef id="I" />, and reviews or decides on access to them, depending on the type of dataset ([see below](#the-type-of-dataset-decides-who-takes-the-access-decision)). Each country has its own national scope. |
| **[User Organisation](/glossary#user-organisation-scope)** | Each User Organisation | Registers, applies for access, and is responsible for how its Users use the data <GovRef id="VII.1.3" />. |

## Which actor belongs to which scope

The actors and their names come from the governance definitions <GovRef id="III" />. See the [glossary](/glossary) for the full definitions.

| Actor | Scope | Role in short |
|---|---|---|
| [Genome EDIC Assembly of Members](/glossary#genome-edic-assembly-of-members) | European | Decision-making body. It sets the principles and the minimum requirements <GovRef id="I" />. |
| [Genome EDIC Central Coordination (Genome EDIC CC)](/glossary#genome-edic-central-coordination-genome-edic-cc) | European | Runs the shared services and acts as the one-stop shop for Users. |
| [1+MG DAC](/glossary#1mg-dac) (Data Access Committee) | European | Provided by the Genome EDIC CC. It reviews access requests and moderates consensus discussions on them. |
| Genome EDIC Member Country | National | Makes sure the national structures are in place <GovRef id="I" />, and mandates the [1+MG NCP](/glossary#1mg-national-coordination-point-1mg-ncp). |
| 1+MG National Coordination Point (1+MG NCP) | National | Coordinates the national stakeholders and is the country's point of contact. It is mandated by the Member Country. |
| [1+MG Data Holder](/glossary#1mg-data-holder) | National | An organisation in the Member Country that decides on access to [1+MG compliant datasets](/concepts/dataset-types). |
| [Local DAC](/glossary#local-dac) | National | Reviews access requests for the datasets it oversees. Despite its name, it sits in the national scope, and may be internal or external to the 1+MG Data Holder <GovRef id="VII.4.6" />. |
| [1+MG Data Provider](/glossary#1mg-data-provider) | National | Makes its data available under the [Genome EDIC Secondary Use Framework](/glossary#genome-edic-secondary-use-framework-edic-suf). It is responsible for including them; the Member Country makes sure they are suitable <GovRef id="VI.4.4" />. |
| [1+MG Data Host](/glossary#1mg-data-host) | National | Holds the data in [1+MG compliant local IT infrastructure](/glossary#1mg-compliant-local-it-infrastructure), on behalf of the 1+MG Data Holder or the Genome EDIC. |
| [Genome EDIC national entities](/glossary#genome-edic-national-entities) | National | Other organisations in the Member Country that contribute to the operations. |
| [User Organisation](/glossary#user-organisation) | User Organisation | The legal entity the User works for. It is the controller for the downstream use <GovRef id="VII.1.3" />. |
| [User](/glossary#user) | User Organisation | The person who seeks and gets access to data, acting on behalf of the User Organisation. |
| Provider of [externally governed datasets](/concepts/dataset-types) | None | Not acting as a 1+MG Data Provider for these datasets <GovRef id="III" />: they are listed in the catalogue, labelled as external, but access follows the provider's own rules <GovRef id="VII.2.1" />. It may be in a Member Country or outside. |
| Treating healthcare professionals | None | The doctors of the patients concerned. For healthcare reuse, they may answer Users' questions, within their patient's consent. They don't act as Genome EDIC national entities <GovRef id="VIII.5.3" />, and are reached through the 1+MG NCP <GovRef id="VIII.4.5" />. |
| [1+MG IT infrastructure provider](/glossary#1mg-it-infrastructure-provider) | European or national (a role) | A role, not a scope. See [below](#the-1mg-it-infrastructure-provider-a-role-not-a-scope). |

[Data subjects](/glossary#data-subject) are the people the data are about. They are outside every scope: they have rights, not duties, in the system, and its rules exist to protect them <GovRef id="VII.5.1" />. As a rule, they deal with their own country: information, consent and objection are national tasks <GovRef id="I" />, supported by the national [data subject services](/building-blocks/national/data-subject-services). The exceptions are a Genome EDIC information portal where a country can't serve its data subjects <GovRef id="V.2.2" />, and the Genome EDIC CC communicating results to them <GovRef id="VIII.1.2" />. Treating healthcare professionals are not part of any scope either.

## Why there is no local scope

A local scope would not mean the same in every country, for two reasons. Earlier versions of this documentation had one, for 1+MG Data Providers and 1+MG Data Hosts; it was removed.

- **The Member Country organises the national roles.** The governance leaves the national implementation as free as possible, as long as the common requirements are met <GovRef id="II.2" />. It makes each country's government responsible for having the necessary structures in place <GovRef id="I" />.
- **One organisation can hold several roles.** A 1+MG Data Provider may also be the 1+MG Data Holder, and a 1+MG NCP may also provide the local IT infrastructure <GovRef id="III" />. Where one organisation holds several roles, the Member Country mitigates conflicts of interest: for example, a 1+MG NCP that checks compliance must not assess its own IT infrastructure <GovRef id="V.1.4" />.

A line between "national" and "local" would therefore fall in a different place in each country. Instead, the national scope holds all national roles. Each Member Country records which organisation takes which role in its [national implementation profile](/appendix/national-profile-template).

## The type of dataset decides who takes the access decision

The governance defines three types of dataset <GovRef id="III" />. [8.12 Types of dataset](/concepts/dataset-types) explains them, and how each phase differs per type:

- **[1+MG compliant datasets](/concepts/dataset-types#the-three-types):** a 1+MG Data Holder in the Member Country discloses them to Users, as controller.
- **[1+MG cohort datasets](/concepts/dataset-types#the-three-types):** the Genome EDIC discloses them to Users, as controller.
- **[Externally governed datasets](/concepts/dataset-types#the-three-types):** Users can find them in the catalogue and use them in the 1+MG IT infrastructure, but access follows their own rules, not the 1+MG data governance.

The data lifecycle has three phases, and each phase has its own controller(s) <GovRef id="II.1" />. For the access decision, the governance describes two alternative scenarios: a decision at national level (1+MG compliant datasets) or by the Genome EDIC (1+MG cohort datasets). Externally governed datasets sit outside both.

**The type of a dataset decides who takes the access decision.** The governance asks each Member Country to decide "a national strategy for the responsibility of downstream data disclosure", and to nominate, where applicable, its 1+MG Data Holders <GovRef id="VI.1.3" />.

The architecture reads this as the Member Country choosing whether its datasets are 1+MG compliant or 1+MG cohort datasets. This is the architecture decision record [ADR-0002](/decisions/0002-disclosure-paths-per-dataset), still to be confirmed. The level of the choice is still open too (see the open points below).

The table shows who is responsible in each phase, and who is controller where the governance says so.

| Phase | 1+MG compliant datasets | 1+MG cohort datasets | Externally governed datasets |
|---|---|---|---|
| **1. Data inclusion** | 1+MG Data Provider, as controller for the inclusion (**national**) <GovRef id="VI.2.2" /> <GovRef id="VI.1.5" />, checked by the 1+MG NCP <GovRef id="VI.4.4" />. The 1+MG Data Holder is then legally responsible for the data, as controller <GovRef id="VI.4.5" />; a 1+MG Data Host stores them, and is its processor where it is not the Data Holder itself <GovRef id="VI.4.6" />. | 1+MG Data Provider, as controller for the inclusion (**national**) <GovRef id="VI.2.2" /> <GovRef id="VI.1.5" />, checked by the 1+MG NCP <GovRef id="VI.4.4" />. The Genome EDIC is then legally responsible for the data; a 1+MG Data Host in the country stores them, as its processor <GovRef id="III" /> <GovRef id="VI.4.6" />. | Their own data provider, outside the 1+MG data governance. These datasets should meet inclusion criteria on quality and on ethical, legal and societal implications (<Acronym id="ELSI" />) to be listed in the catalogue <GovRef id="III" />. |
| **2. Access decision** | 1+MG Data Holder, as controller (**national**) <GovRef id="VII.5.4" />. Whether the Genome EDIC is joint controller with it is open (see the open points below) <GovRef id="VII.2.2" /> <GovRef id="VII.5.5" />. For healthcare reuse, no formal access decision is taken per request: access rests on the general data use agreement the User Organisation signed for healthcare reuse <GovRef id="VII.5.4" />. The 1+MG DAC still checks each request, with four eyes <GovRef id="VII.4.3" />. | Genome EDIC, as controller (**European**): the Genome EDIC CC adopts and documents the decision <GovRef id="VII.5.5" />, after review by the 1+MG DAC and by 1+MG Data Providers and/or Local DACs (national) <GovRef id="VII.4.7" />. For healthcare reuse, the same: no decision per request <GovRef id="VII.4.3" /> <GovRef id="VII.5.4" />. The 1+MG DAC still checks each request, with four eyes <GovRef id="VII.4.3" />. | **Outside the system:** the dataset's own data provider, or a health data access body under the European Health Data Space. The Genome EDIC CC only sends the User there <GovRef id="VII.3.1" />. |
| **3. Use** | The User Organisation, as controller for the use (**User Organisation scope**) <GovRef id="VII.1.3" />. Its Users work in a 1+MG secure processing environment (<Acronym id="SPE" />), in the national scope <GovRef id="II.1" />, or, where applicable, in the SPE provided by the European Commission (open point) <GovRef id="VIII.2.2" />. For research, data may also be pooled for a time in a certified SPE, where the Member Country allows it <GovRef id="VIII.3.4" />. The Genome EDIC acts as processor towards the User Organisation, and the SPE providers are its sub-processors <GovRef id="VIII.2.1" />. The governance also makes a 1+MG Data Host that is not the 1+MG Data Holder a processor of the Data Holder <GovRef id="VI.4.6" />; [8.2](/concepts/roles) sets out the chain of agreements. | Same as for 1+MG compliant datasets | In the 1+MG IT infrastructure, but not under the 1+MG data governance <GovRef id="III" />. A 1+MG SPE lets Users import the data <GovRef id="VIII.3.3" />. |

Each controller needs its own legal basis <GovRef id="II.1" />: see [8.6](/concepts/legal-basis-and-consent).

Whatever type a dataset is given, the system supports its path. It also lists externally governed datasets without deciding on access to them. Until the Genome EDIC is operational, externally governed datasets are the only ones Users can get access to through the system; the other two types follow once it is ([ADR-0003](/decisions/0003-implementation-in-steps), proposed) <Cite id="gdi-d3.4" />.

A scope is not the same as a controller. For 1+MG cohort datasets, the Genome EDIC (European scope) decides on access, but the data stay with a 1+MG Data Host in the country (national scope). The same actor can also have different roles in different phases: the Genome EDIC is controller for the access decision on 1+MG cohort datasets, and processor towards the User Organisation in the use phase. [8.2 Controllers, processors and responsibilities](/concepts/roles) gives the controllers and processors for each processing operation.

:::caution[Open points]
- **At which level the type of a dataset is chosen.** The Member Country decides who is responsible for disclosing its data <GovRef id="VI.1.3" />. Whether it chooses once for the country, per 1+MG Data Provider or per dataset, and whether it may nominate no 1+MG Data Holder at all, is open. ADR-0002 leaves the level to the Member Country; to be confirmed with the Genome EDIC governance bodies. See [chapter 11](/risks#dataset-type-choice).
- **Whether the Genome EDIC is joint controller with the 1+MG Data Holder** for 1+MG compliant datasets <GovRef id="VII.2.2" /> <GovRef id="VII.5.5" />. See [chapter 11](/risks#joint-controllership).
- **When 1+MG data may be processed in the SPE of the European Commission,** "where applicable" <GovRef id="VIII.2.2" />. See [chapter 11](/risks#commission-spe).
- **Access to 1+MG compliant and 1+MG cohort datasets needs an operational Genome EDIC.** Until then, only externally governed datasets can be accessed through the system; the step plan of [ADR-0003](/decisions/0003-implementation-in-steps) is proposed. See [chapter 11](/risks#genome-edic-operational).
:::

## The 1+MG IT infrastructure provider: a role, not a scope

A 1+MG IT infrastructure provider runs an IT environment at [central, national or local level](/glossary#central-national-and-local-level). That IT infrastructure must be accredited for service provision in the Genome EDIC <GovRef id="III" />. It can work for the European or the national scope. For example, it can host the services of the Genome EDIC CC, or a national 1+MG SPE.

So each building block (a part of the system, described in [chapter 5](/building-blocks)) names two things:

- the **responsible actor**, which sets its scope;
- the **1+MG IT infrastructure provider** that operates it, when it is a different organisation.

This split is not the same as the split between controller and processor. The controller for a processing operation can sit in another scope: for the use of data in a national SPE, the controller is the User Organisation. [8.2](/concepts/roles) gives the controller and processors for each operation. Which role 1+MG IT infrastructure providers have in the use phase is itself open: see [chapter 11](/risks#it-provider-role).

Each line between scopes, and each line between operators within a scope, is a [trust boundary](/glossary#trust-boundary). [Chapter 5](/building-blocks) draws them. What each crossing requires is decided in [ADR-0006](/decisions/0006-trust-boundaries) (wave 3), and described in [8.3](/concepts/security).

:::caution[Open points]
- The details of this role, including accreditation, are still to be defined jointly with 1+MG Working Group 5 (Interoperability and Secure IT environment) and GDI Pillar II (the infrastructure work of the GDI project) <GovRef id="III" />. See [chapter 11](/risks#accreditation).
- Whether 1+MG IT infrastructure providers are sub-processors in the use phase <GovRef id="VIII.2.1" />, or controllers for the technical and organisational measures <GovRef id="VIII.3.3" />. See [chapter 11](/risks#it-provider-role).
:::

## Scopes and deployment levels

The scopes say **who is responsible**. The deployment levels say **where things run**. The three levels (central, national and local) come from the governance's definition of the 1+MG IT infrastructure provider <GovRef id="III" />.

| Scope | Usually runs at |
|---|---|
| European | Central level |
| National | National level (for example, the 1+MG NCP node and the 1+MG SPEs) and local level (the 1+MG compliant local IT infrastructure of 1+MG Data Hosts) |
| User Organisation | Its own IT, outside the three levels. Users connect to the central level (User Portal) and to the national level (SPEs). |

A level is not a scope: a 1+MG Data Host belongs to the national scope and runs at local level.

## How to read chapters 5 to 7

- **[Chapter 5, building blocks](/building-blocks)** has one section per scope: [5.1 European](/building-blocks/european), [5.2 national](/building-blocks/national) and [5.3 User Organisation](/building-blocks/user-organisation).
- **[Chapter 6, runtime](/runtime)** follows the lifecycle. Each step names its actor and that actor's scope.
- **[Chapter 7, deployment](/deployment)** has one section per level: [7.1 central](/deployment/central), [7.2 national](/deployment/national) and [7.3 local](/deployment/local).
