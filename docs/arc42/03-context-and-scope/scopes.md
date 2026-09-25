---
title: "3.3 European, national and User Organisation scopes"
sidebar_position: 3
slug: /context/scopes
owner: "@brunopacheco1"
reviewers: []
status: draft
wave: 1
audience: [policy, legal, elsi, security, dpo, implementer]
governance_refs: ["I", "II.1", "II.2", "III", "VI.4.4", "VII.1.3", "VII.3.1", "VII.4.7", "VII.5.4", "VII.5.5", "VIII.3.3"]
last_reviewed:
---

<InShort>

- The system has three scopes, set by who is responsible: **European** (the Genome EDIC), **national** (each Genome EDIC Member Country) and **User Organisation** (the organisation that uses the data, and its Users).
- Each Member Country organises its national roles (which organisation does what), so there is no separate local scope. Where things run (central, national or local level) is described in the deployment view.
- The type of each dataset decides who takes the access decision: a 1+MG Data Holder in the country for 1+MG compliant datasets, the Genome EDIC for 1+MG cohort datasets. We propose that each Member Country chooses the type.

</InShort>

## The three scopes

A **scope** groups everything one party is responsible for. The governance gives each actor rights and duties in each phase of the data lifecycle <GovRef id="I" />. The scopes follow those responsibilities, not the location of servers. Each term links to its definition in the [glossary](/glossary) the first time it appears.

<Diagram src="3.3-scopes.drawio.svg" alt="Diagram of the three scopes. User Organisation scope, one per User Organisation: User Organisation and User. European scope, the Genome EDIC: Genome EDIC Assembly of Members, Genome EDIC CC and 1+MG DAC. National scope, one per Genome EDIC Member Country: Genome EDIC Member Country, 1+MG NCP, 1+MG Data Holder, Local DAC, 1+MG Data Provider, 1+MG Data Host and Genome EDIC national entities. Outside every scope: data subjects. The 1+MG IT infrastructure provider is a role, not a scope." />

The diagram shows who belongs to which scope (select it to open it full size). What crosses the boundary of the system, and through which channels, is described in [3.1 Business context](/context/business) and [3.2 Technical context](/context/technical).

| Scope | Who is responsible | In short |
|---|---|---|
| **[European](/glossary#european-scope)** | The [Genome EDIC](/glossary#genome-edic) | Sets the common rules <GovRef id="I" /> and runs the services shared by all Member Countries. It is the one-stop shop for Users <GovRef id="III" />. |
| **[National](/glossary#national-scope)** | Each Genome EDIC Member Country | Brings data in, keeps them in the country <GovRef id="I" />, and reviews or decides on access to them, depending on the type of dataset ([see below](#the-type-of-dataset-decides-who-takes-the-access-decision)). Each country has its own national scope. |
| **[User Organisation](/glossary#user-organisation-scope)** | Each User Organisation | Registers, applies for access, and is responsible for how its Users use the data <GovRef id="VII.1.3" />. |

## Which actor belongs to which scope

The actors and their names come from the governance definitions <GovRef id="III" />. See the [glossary](/glossary) for the full definitions.

| Actor | Scope | Role in short |
|---|---|---|
| [Genome EDIC Assembly of Members](/glossary#genome-edic-assembly-of-members) | European | Decision-making body. It sets the principles and the minimum requirements <GovRef id="I" />. |
| [Genome EDIC Central Coordination (Genome EDIC CC)](/glossary#genome-edic-central-coordination-genome-edic-cc) | European | Runs the shared services and acts as the one-stop shop for Users. |
| [1+MG DAC](/glossary#1mg-dac) (Data Access Committee) | European | Provided by the Genome EDIC CC. It reviews access requests and moderates consensus discussions on them. |
| [Genome EDIC Member Country](/glossary#genome-edic-member-country) | National | Makes sure the national structures are in place <GovRef id="I" />, and mandates the 1+MG NCP. |
| [1+MG National Coordination Point (1+MG NCP)](/glossary#1mg-national-coordination-point-1mg-ncp) | National | Coordinates the national stakeholders and is the country's point of contact. It is mandated by the Member Country. |
| [1+MG Data Holder](/glossary#1mg-data-holder) | National | An organisation in the Member Country that decides on access to 1+MG compliant datasets. |
| [Local DAC](/glossary#local-dac) | National | Reviews access requests for the datasets it oversees. |
| [1+MG Data Provider](/glossary#1mg-data-provider) | National | Makes its data available in the [Genome EDIC Secondary Use Framework](/glossary#genome-edic-secondary-use-framework-edic-suf). It is responsible for including them; the Member Country makes sure they are suitable <GovRef id="VI.4.4" />. |
| [1+MG Data Host](/glossary#1mg-data-host) | National | Holds the data in [1+MG compliant local IT infrastructure](/glossary#1mg-compliant-local-it-infrastructure), on behalf of the 1+MG Data Holder or the Genome EDIC. |
| [Genome EDIC national entities](/glossary#genome-edic-national-entities) | National | Other organisations in the Member Country that contribute to the operations. |
| [User Organisation](/glossary#user-organisation) | User Organisation | The legal entity the User works for. It is the controller for the downstream use <GovRef id="VII.1.3" />. |
| [User](/glossary#user) | User Organisation | The person who seeks and gets access to data, acting on behalf of the User Organisation. |
| [1+MG IT infrastructure provider](/glossary#1mg-it-infrastructure-provider) | Any (a role) | A role, not a scope. See [below](#the-1mg-it-infrastructure-provider-a-role-not-a-scope). |

[Data subjects](/glossary#data-subject) are not part of any scope. They are the people the data are about. They deal with their own country: information, consent and objection are national tasks <GovRef id="I" />, supported by the national [data subject services](/building-blocks/national/data-subject-services).

## Why there is no local scope

Earlier versions of this documentation (up to v0.2) had a local scope for 1+MG Data Providers and 1+MG Data Hosts. We removed it for two reasons.

- **The Member Country organises the national roles.** The governance leaves the national implementation as free as possible, as long as the common requirements are met <GovRef id="II.2" />. It makes each country's government responsible for having the necessary structures in place <GovRef id="I" />.
- **One organisation can hold several roles.** A 1+MG Data Provider may also be the 1+MG Data Holder, and a 1+MG NCP may also provide the local IT infrastructure <GovRef id="III" />.

A line between "national" and "local" would therefore fall in a different place in each country. Instead, the national scope holds all national roles. Each Member Country records which organisation takes which role in its [national implementation profile](/appendix/national-profile-template).

## The type of dataset decides who takes the access decision

The governance defines three types of dataset <GovRef id="III" />. [8.12 Types of dataset](/concepts/dataset-types) explains them, and how each phase differs per type:

- **[1+MG compliant datasets](/concepts/dataset-types#the-three-types):** a 1+MG Data Holder in the Member Country discloses them to Users, as controller.
- **[1+MG cohort datasets](/concepts/dataset-types#the-three-types):** the Genome EDIC discloses them to Users, as controller.
- **[Externally governed datasets](/concepts/dataset-types#the-three-types):** Users can find them in the catalogue and use them in the 1+MG IT infrastructure, but access follows their own rules, not the 1+MG data governance.

The data lifecycle has three phases, and each phase has its own controller(s) <GovRef id="II.1" />. For the access decision, the governance describes two alternative scenarios: a decision at national level (1+MG compliant datasets) or by the Genome EDIC (1+MG cohort datasets). Externally governed datasets sit outside both.

**The type of a dataset decides who takes the access decision.** We propose that the Member Country chooses the type of each of its datasets: this is the architecture decision record [ADR-0002](/decisions/0002-disclosure-paths-per-dataset), still to be confirmed (see the open point below). The table shows who is responsible in each phase, and who is controller where the governance says so.

| Phase | 1+MG compliant datasets | 1+MG cohort datasets | Externally governed datasets |
|---|---|---|---|
| **1. Data inclusion** | 1+MG Data Provider (national) <GovRef id="VI.4.4" /> | 1+MG Data Provider (national) <GovRef id="VI.4.4" /> | Their own data provider, outside the 1+MG data governance. These datasets should meet inclusion criteria on quality and on ethical, legal and societal implications (<Acronym id="ELSI" />) to be listed in the catalogue <GovRef id="III" />. |
| **2. Access decision** | 1+MG Data Holder, as controller (**national**) <GovRef id="VII.5.4" /> | Genome EDIC, as controller (**European**): the Genome EDIC CC adopts and documents the decision <GovRef id="VII.5.5" />, after review by the 1+MG DAC and by 1+MG Data Providers and/or Local DACs (national) <GovRef id="VII.4.7" /> | **Outside the system:** the dataset's own data provider, or a health data access body under the European Health Data Space. The Genome EDIC CC only sends the User there <GovRef id="VII.3.1" />. |
| **3. Use** | The User Organisation, as controller for the use (**User Organisation scope**) <GovRef id="VII.1.3" />. Its Users work in a 1+MG secure processing environment (<Acronym id="SPE" />), in the national scope <GovRef id="II.1" />. | Same as for 1+MG compliant datasets | In the 1+MG IT infrastructure, but not under the 1+MG data governance <GovRef id="III" />. A 1+MG SPE lets Users import the data <GovRef id="VIII.3.3" />. |

Whatever type a dataset is given, the system supports its path. It also lists externally governed datasets without deciding on access to them.

A scope is not the same as a controller. For 1+MG cohort datasets, the Genome EDIC (European scope) decides on access, but the data stay with a 1+MG Data Host in the country (national scope). [8.2 Controllers, processors and responsibilities](/concepts/roles) gives the controllers and processors for each processing operation.

:::caution[Open point]
The governance does not say who chooses the type of a dataset, and so its path. ADR-0002 assumes that the Member Country does ([issue #85](https://github.com/GenomicDataInfrastructure/system-architecture/issues/85)). This is to be confirmed with the Genome EDIC governance bodies.
:::

## The 1+MG IT infrastructure provider: a role, not a scope

A 1+MG IT infrastructure provider runs an IT environment at [central, national or local level](/glossary#central-national-and-local-level). That IT infrastructure must be accredited for service provision in the Genome EDIC <GovRef id="III" />. It can work for any scope. For example, it can host the services of the Genome EDIC CC, or a national 1+MG SPE.

So each building block names two things:

- the **responsible actor**, which sets its scope;
- the **1+MG IT infrastructure provider** that operates it, when it is a different organisation.

This split matches the split between controller and processor in [8.2](/concepts/roles).

:::caution[Open point]
The details of this role, including accreditation, are still to be defined jointly with 1+MG Working Group 5 and <Acronym id="GDI" /> Pillar II <GovRef id="III" />. See [11. Risks and technical debt](/risks).
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
