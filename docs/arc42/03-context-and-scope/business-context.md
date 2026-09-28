---
title: "3.1 Business context"
sidebar_position: 1
slug: /context/business
owner: "@brunopacheco1"
reviewers: []
status: draft
wave: 1
audience: [policy, legal, elsi, security, dpo, implementer]
governance_refs: ["I", "II.2", "III", "V.1.3", "V.2.2", "V.2.4", "VI.1.1", "VI.2.2", "VI.3.2", "VII.1.2", "VII.1.3", "VII.2.1", "VII.3.1", "VII.3.3", "VII.4.3", "VII.5.2", "VII.5.3", "VII.5.5", "VIII.1.1", "VIII.1.3", "VIII.2.2", "VIII.3.1", "VIII.3.2", "VIII.3.3", "VIII.4.1", "VIII.4.2", "VIII.4.4", "VIII.5.1", "VIII.5.2", "VIII.7.1", "VIII.9.1", "VIII.11.1"]
last_reviewed:
---

<InShort>

- Seen from outside, the Genome EDIC system is one black box: the IT that the Genome EDIC and the Genome EDIC Member Countries run. Everyone else who exchanges information with it is a partner: Users and their organisations, data subjects, the systems of the 1+MG Data Providers, and European infrastructure such as HealthData@EU.
- Data about people come in mainly from the 1+MG Data Providers. Users work on them only inside secure processing environments, and take out only non-personal results. The few other ways in and out are listed on this page.
- Belonging to a scope is not the same as being inside the system. The User Organisation, the systems of the 1+MG Data Providers and treating healthcare professionals have duties in the framework, but they stay outside the system.

</InShort>

## The system as a black box

This page looks at the [Genome EDIC](/glossary#genome-edic) system from outside. The system is what the [European scope](/glossary#european-scope) and the [national scope](/glossary#national-scope) run: their services, and the bodies that work with them.

- **European services,** run for the Genome EDIC: the [1+MG User Portal and central data catalogue](/building-blocks/european/user-portal-and-catalogue), [access request management](/building-blocks/european/access-request-management), the [User Organisation registry](/building-blocks/european/user-organisation-registry), [transparency and reporting](/building-blocks/european/transparency-and-reporting), and the [connection to HealthData@EU](/building-blocks/european/ehds-connector) ([5.1](/building-blocks/european)).
- **National services,** run in each [Genome EDIC Member Country](/glossary#genome-edic-member-country): the [1+MG NCP node and national catalogue](/building-blocks/national/ncp-node), [access review and decision support](/building-blocks/national/access-decision-support), [secure processing environments](/building-blocks/national/spe) (<Acronym id="SPE">SPEs</Acronym>), [data subject services](/building-blocks/national/data-subject-services), [1+MG compliant local IT infrastructure](/building-blocks/national/data-host) and [data transformation](/building-blocks/national/data-transformation) ([5.2](/building-blocks/national)).

The bodies that run these services or take decisions with them, such as the [Genome EDIC CC](/glossary#genome-edic-central-coordination-genome-edic-cc), the [1+MG DAC](/glossary#1mg-dac) and the [1+MG NCPs](/glossary#1mg-national-coordination-point-1mg-ncp), are inside the boundary. Their exchanges are steps inside the system, which [chapter 6](/runtime) describes. Not everyone in the two scopes runs the system, though: see [Scopes and the system boundary](#scopes-and-the-system-boundary). Everyone and everything else that exchanges information with the system is a partner, and appears in the diagram and the table below. [3.2 Technical context](/context/technical) gives the channels and standards of each exchange.

<Diagram src="3.1-business-context.drawio.svg" alt="C4 system context diagram. In the middle, the Genome EDIC system, split into its European part (User Portal and central data catalogue, access request management, User Organisation registry, transparency and reporting, connection to HealthData@EU) and its national part (1+MG NCP nodes and national catalogues, access review, SPEs, data subject services, local IT infrastructure, data transformation). On the left, in the User Organisation scope: the User finds data and requests access, and analyses data in an SPE; the User Organisation registers and signs agreements; its identity provider confirms the identity and affiliation of Users. At the bottom, in the national scope but outside the system: the systems of the 1+MG Data Providers send data and metadata; treating healthcare professionals receive questions from Users, for healthcare reuse; a registry may confirm healthcare professional status, for healthcare reuse (dashed: an open point). Outside every scope: data subjects receive information and send consent, objections and rights requests (two-way); the public receives project information; data protection authorities are consulted and receive breach notifications; HealthData@EU receives dataset descriptions, and may send access applications (dashed: an open point); providers of externally governed datasets have them listed in the catalogue; the SPE of the European Commission may receive 1+MG data where applicable (dashed: an open point); health data access bodies send data for import into an SPE." />

The diagram splits the system into its European and national parts, so that you can see which part handles each exchange. It shows each partner once, with its main exchanges (select it to open it full size). A dashed arrow depends on an open point. The table gives all exchanges.

## Partners and what they exchange

The column *Talks to* names the part of the system that handles the exchange. *European and national* means both parts, each for some of the exchanges. *Healthcare reuse* is the use of the data to support the care of a patient, one of the four uses of the system.

| Partner | Talks to | Sends to the system | Receives from the system |
|---|---|---|---|
| **[User](/glossary#user)** (User Organisation scope) | European and national | Data access requests, with the information that data subjects must receive <GovRef id="VII.3.3" /> <GovRef id="VIII.1.1" />. Own data and software to import into an SPE, after a security review by the [1+MG IT infrastructure provider](/glossary#1mg-it-infrastructure-provider) <GovRef id="VIII.3.1" />. Requests for a [sleeping period](/glossary#sleeping-period), and the yearly confirmation of access <GovRef id="VIII.3.1" />. Reports of errors in the data and of data breaches <GovRef id="VIII.2.2" />, and clinically relevant incidental findings, where a flag in the data says that their return is allowed <GovRef id="VIII.11.1" />. Enriched or improved data <GovRef id="VIII.9.1" />, and lay summaries of results and publications <GovRef id="VIII.1.1" /> <GovRef id="VIII.7.1" />. | Information and dataset descriptions in the central data catalogue <GovRef id="VII.2.1" />. The access decision <GovRef id="VII.5.5" />. Access to the approved data in an SPE <GovRef id="VIII.3.3" />. Non-personal results of analysis <GovRef id="II.2" />. Notice of changes to a dataset when data subjects exercise their rights <GovRef id="V.2.2" />. |
| **[User Organisation](/glossary#user-organisation)** (User Organisation scope) | European | Its registration: legal set-up, contacts, scope of activities and legal basis <GovRef id="VII.1.3" />. Signed terms of use and agreements <GovRef id="VII.1.3" />. Confirmation that an access request is valid, and invitations to other User Organisations to join as joint controllers <GovRef id="VII.3.1" />. | The result of its vetting, and the agreements to sign <GovRef id="VII.1.2" />. The [data use agreement](/runtime/use/data-use-agreement) <GovRef id="VIII.2.2" />. Penalties or revocation of access after an infringement <GovRef id="VIII.3.2" />. |
| **Identity provider** of the User Organisation, directly or through a federation such as LS Login (User Organisation scope) | European and national | The identity of each User, and their status, for example as employee or affiliate of the User Organisation <GovRef id="V.1.3" />. | Requests to authenticate a User. |
| **Systems of the [1+MG Data Providers](/glossary#1mg-data-provider)** (national scope, outside the system) | National | Data in the data models adopted by the [Genome EDIC Assembly of Members](/glossary#genome-edic-assembly-of-members), and their metadata <GovRef id="VI.2.2" /> <GovRef id="VI.3.2" />. Additional data on request, where they agree <GovRef id="VIII.5.1" /> <GovRef id="VIII.5.2" />. | Requests from Users for additional data, where the Data Provider agrees <GovRef id="VIII.5.1" />. |
| **Treating healthcare professionals** (national scope, outside the system; healthcare reuse only) | National | Additional information on a patient, within the patient's consent, or a rejection <GovRef id="VIII.4.4" />. | Questions from Users, without Users learning the identity of the professional or the patient <GovRef id="VIII.4.1" /> <GovRef id="VIII.4.2" />. |
| **Registry of healthcare professionals** (national scope, outside the system; healthcare reuse only) | Not decided (open point) | Confirmation that a User is still a licensed healthcare professional <GovRef id="VII.4.3" />. | Status checks. |
| **[Data subjects](/glossary#data-subject)** (outside every scope) | National (which national body informs them is an open point) | Consent or objection for a planned project <GovRef id="VII.5.2" />. Requests to exercise their rights, and how they want to be informed <GovRef id="V.2.4" />. | Information about projects that use their data, in their language <GovRef id="VII.5.3" /> <GovRef id="VIII.1.3" />. Invitations to take part in research, where they agreed <GovRef id="VIII.5.1" />. Incidental findings, where the return is allowed <GovRef id="VIII.11.1" />. |
| **The public** (outside every scope) | European and national | – | Information about projects and their results <GovRef id="VIII.1.3" />, and lay summaries <GovRef id="VIII.1.1" />. |
| **Data protection authorities** (outside every scope) | European and national | Their opinion in a prior consultation (<Acronym id="GDPR" /> Art. 36) <GovRef id="VII.5.5" />. | Prior consultation on the data protection impact assessment for [1+MG cohort datasets](/concepts/dataset-types) <GovRef id="VII.5.5" />. Personal data breach notifications (GDPR Art. 33) <Cite id="gdpr" />. |
| **[HealthData@EU](/concepts/ehds-integration) central platform** (outside every scope) | European | Access applications made with the central <Acronym id="EHDS" /> form. The 1+MG access request form must fit into that form, and may ask for more <GovRef id="VII.3.1" />. How applications flow between the two depends on EHDS requirements still to be set (open point). | Dataset descriptions for the EU dataset catalogue <GovRef id="VI.1.1" />. |
| **SPE provided by the European Commission** (outside every scope) | National | – | 1+MG data (data made available under the 1+MG data governance), for processing there "where applicable" <GovRef id="VIII.2.2" />. When this applies is an open point. |
| **Health data access bodies** (<Acronym id="HDAB">HDABs</Acronym>, outside every scope) | National | Data that an HDAB has granted to a User, for import into the User's 1+MG SPE <GovRef id="VIII.3.1" /> <GovRef id="VIII.3.3" />. | The use of 1+MG SPEs, which can also serve as SPEs for HDABs <GovRef id="VIII.3.2" />. |
| **Providers of [externally governed datasets](/glossary#externally-governed-datasets)** (outside every scope) | European and national | Dataset descriptions, listed in the catalogue and labelled as external <GovRef id="VII.2.1" />. Data that Users import into an SPE <GovRef id="VIII.3.3" />. | Requests for access from Users, who can contact them through the 1+MG User Portal. The access decision is theirs, outside the 1+MG data governance <GovRef id="VII.3.1" />. Until the <Acronym id="GDI" /> project ends, these are the only datasets Users can get access to through the system, for example Genome of Europe data <Cite id="gdi-d3.4" /> ([ADR-0002](/decisions/0002-disclosure-paths-per-dataset), proposed). |

## Where data about people come in and go out

- **In:** from the systems of the 1+MG Data Providers <GovRef id="VI.2.2" />. Also, into a User's SPE only: data from HDABs, from providers of externally governed datasets, and the User's own data, after a security review <GovRef id="VIII.3.1" /> <GovRef id="VIII.3.3" />. From Users: enriched or improved data <GovRef id="VIII.9.1" />, and reports of incidental findings <GovRef id="VIII.11.1" />. For healthcare reuse, additional information from treating healthcare professionals, within their patient's consent <GovRef id="VIII.4.4" />.
- **Out, to Users:** only non-personal results of analysis <GovRef id="II.2" />.
- **Out, elsewhere:**
  - to data subjects, information about the use of their own data, and incidental findings where their return is allowed <GovRef id="VII.5.3" /> <GovRef id="VIII.11.1" />;
  - to treating healthcare professionals, Users' questions about a patient, routed so that the User never learns who the patient or the professional is <GovRef id="VIII.4.1" />;
  - to the SPE of the European Commission, where applicable <GovRef id="VIII.2.2" /> (open point).

How the data are protected on the way in and inside the system (key-coded identifiers, SPEs, output control) is described in [8.7](/concepts/identifiers-and-linkage), [5.2.3](/building-blocks/national/spe) and [8.8](/concepts/output-control).

## Scopes and the system boundary

A scope says **who is responsible**. The system boundary says **what runs inside the Genome EDIC system**. They are not the same line ([3.3](/context/scopes)).

- **The User Organisation scope is outside the system.** The User Organisation is [controller](/concepts/roles) for the downstream use of the data, that is, for what its Users do with the data in the SPE <GovRef id="VII.1.3" />, but its people and its IT stay outside. Its Users work on the data inside an SPE of the national scope, and take out only non-personal results <GovRef id="II.2" />. The User Organisation's IT touches the system in three places: its identity provider, the devices its Users connect from (Users may not download personal data to them <GovRef id="II.2" />), and the data and software it imports into an SPE after a security review <GovRef id="VIII.3.1" />.
- **Some of the national scope is outside the system too.** The 1+MG Data Providers are responsible for including their data <GovRef id="VI.2.2" />, but their own systems, where the data come from, are outside. Treating healthcare professionals and the registry of healthcare professionals also belong to the Member Country, but not to the system.
- **Data subjects are outside every scope.** Contact with them is a national task <GovRef id="I" />.

:::caution[Open points]
- **When 1+MG data may be processed in the SPE of the European Commission,** "where applicable" <GovRef id="VIII.2.2" />. The governance prefers federation to pooling in that SPE <GovRef id="V.1.3" />. See [chapter 11](/risks#commission-spe).
- **How a User's status as a healthcare professional is checked,** and so whether a national registry is a partner <GovRef id="VII.4.3" />. See [chapter 11](/risks#healthcare-professional-check).
- **Who informs data subjects** after an access decision: the 1+MG NCP, or another national body <GovRef id="VII.5.3" />. See [chapter 11](/risks#national-information-flow).
- **Whether incidental findings can be returned** to data subjects <GovRef id="VIII.11.1" />. See [chapter 11](/risks#incidental-findings).
- **The exchanges with HealthData@EU** depend on the draft HealthData@EU implementing act, and on the EHDS requirements for access applications. See [chapter 11](/risks#healthdata-eu-act) and [chapter 11](/risks#ehds-access-applications).
:::
