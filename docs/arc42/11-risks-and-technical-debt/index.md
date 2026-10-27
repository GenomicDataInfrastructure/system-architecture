---
title: "11. Risks and technical debt"
sidebar_label: "11. Risks and technical debt"
sidebar_position: 11
slug: /risks
owner: TBD
reviewers: []
status: placeholder
wave: 6
audience: [policy, legal, elsi, security, dpo, implementer]
governance_refs:
  - "I"
  - "II.1"
  - "II.4"
  - "III"
  - "V.1.2"
  - "V.1.3"
  - "VI.1.1"
  - "VI.1.3"
  - "VI.1.5"
  - "VII.2.1"
  - "VII.2.2"
  - "VII.2.3"
  - "VII.3.1"
  - "VII.3.3"
  - "VII.4.3"
  - "VII.4.7"
  - "VII.5.1"
  - "VII.5.2"
  - "VII.5.3"
  - "VII.5.5"
  - "VIII.2.1"
  - "VIII.2.2"
  - "VIII.3.2"
  - "VIII.3.3"
  - "VIII.3.4"
  - "VIII.9.1"
  - "VIII.11.1"
  - "VIII.11.2"
  - "VIII.11.3"
  - "VIII.11.4"
last_reviewed:
toc_max_heading_level: 4
---

<InShort>

- This page lists what is not decided yet: points the governance itself leaves open, questions it doesn't answer, and outside work the architecture depends on. It also records the risks and the technical debt of the architecture.
- Other pages mark each open point, risk or piece of technical debt in a box, and link to its entry here. Each entry says what is open, why it matters, and where it is tracked.
- Risks and technical debt are added as they are found. This page is completed in writing wave 6.

</InShort>

## Open points and open questions {#open-points}

Every page that depends on an undecided point marks it in an *Open point* box, and links to its entry below. When a point is settled, its entry is removed and the pages that link to it are updated.

### Open in the governance {#open-in-the-governance}

The governance is a "living document" <Cite id="dg" />. In these sections, it says itself that a point is still to be defined, discussed or clarified.

#### Accreditation of 1+MG IT infrastructure providers {#accreditation}

- **What is open:** the IT infrastructure of a [1+MG IT infrastructure provider](/glossary#1mg-it-infrastructure-provider) must be accredited for service provision in the [Genome EDIC](/glossary#genome-edic). The details are still to be defined, jointly with 1+MG Working Group 5 and <Acronym id="GDI" /> Pillar II <GovRef id="III" />. The governance already asks that each provider is audited by an external body against the minimum requirements of the Genome EDIC CC, and/or works towards certification (ISO 27001, NIST or similar), and that an SPE that pools data from other Member Countries is certified <GovRef id="V.1.3" />. How accreditation relates to them is not settled. Nor does the governance say whether working towards certification, without an external audit, is enough.
- **Why it matters:** trust between the nodes of the federation rests on it, and it decides which services a provider may run.
- **Tracked in:** [issue #93](https://github.com/GenomicDataInfrastructure/system-architecture/issues/93).

#### Checking that a User is a licensed healthcare professional {#healthcare-professional-check}

- **What is open:** for healthcare reuse, the [Genome EDIC CC](/glossary#genome-edic-central-coordination-genome-edic-cc) checks that the [User](/glossary#user)'s status as a healthcare professional hasn't changed <GovRef id="VII.4.3" />. Ideally, each [Genome EDIC Member Country](/glossary#genome-edic-member-country) provides a database of licensed healthcare professionals for this check. Whether and how this can be done is still under discussion, and other approaches are to be explored <GovRef id="VII.4.3" />.
- **Why it matters:** acting under professional secrecy is the main safeguard for access in healthcare <GovRef id="VII.4.3" />. The identity and access services must be able to check it.
- **Tracked in:** [issue #99](https://github.com/GenomicDataInfrastructure/system-architecture/issues/99).

#### Data from countries that are not members of the Genome EDIC {#non-member-country-data}

- **What is open:** the governance only considers 1+MG compliant and 1+MG cohort data from Genome EDIC Member Countries. Models for including data from other countries "could be considered", subject to a decision of the Member Countries <GovRef id="II.4" />. Until then, [ADR-0002](/decisions/0002-disclosure-paths-per-dataset) reads such data as externally governed: 1+MG Data Providers must be based in a full member country <GovRef id="III" />.
- **Why it matters:** it decides whether data from such countries can ever follow the 1+MG paths, and so what the catalogue and access request management must support for them.
- **Tracked in:** [issue #134](https://github.com/GenomicDataInfrastructure/system-architecture/issues/134).

#### Legal basis and route for returning incidental findings {#incidental-findings}

- **What is open:** the legal basis for a User to return incidental findings to a [data subject](/glossary#data-subject) is "not entirely ensured yet". It is to be discussed with the data protection authorities <GovRef id="VIII.11.1" />. The system reaches only the entity mandated nationally to inform data subjects <GovRef id="VIII.11.2" />; the governance doesn't predetermine how findings then flow to the data subject, and leaves the national communication chain to each country <GovRef id="VIII.11.3" /> <GovRef id="VIII.11.4" />.
- **Why it matters:** it decides whether, and how, the system supports returning findings, and which national body receives them.
- **Tracked in:** [issue #103](https://github.com/GenomicDataInfrastructure/system-architecture/issues/103).

#### Repeated consent or objection for healthcare reuse and clinical trials {#repeated-consent}

- **What is open:** it is "still to be clarified" whether data subjects must be asked again for consent, or given another chance to object, for healthcare reuse and for recruitment into clinical trials <GovRef id="VII.5.3" />.
- **Why it matters:** it decides whether these uses need an extra step with the data subject before data are disclosed.
- **Tracked in:** [issue #102](https://github.com/GenomicDataInfrastructure/system-architecture/issues/102).

#### Returning enriched or improved personal data {#enriched-data-return}

- **What is open:** Users may return enriched or improved data to the 1+MG Data Providers, if the lawfulness of the transfer can be established. For personal data, the governance calls this "only a hypothetical assumption" so far <GovRef id="VIII.9.1" />.
- **Why it matters:** it decides whether the system needs a route that brings personal data back from a User's SPE to a 1+MG Data Provider, and under which controller.
- **Tracked in:** [issue #135](https://github.com/GenomicDataInfrastructure/system-architecture/issues/135).

#### Review time for healthcare reuse {#healthcare-review-time}

- **What is open:** the [1+MG DAC](/glossary#1mg-dac) should finish its first assessment of a healthcare reuse request within 1 working day, or up to 3 working days in justified cases. The governance says that this timeframe must be reviewed once there is experience with the process <GovRef id="VII.4.3" />.
- **Why it matters:** access request management must support the deadline, and be able to change it.
- **Tracked in:** [issue #100](https://github.com/GenomicDataInfrastructure/system-architecture/issues/100).

#### Who decides on pooling for 1+MG compliant datasets {#pooling-decision}

- **What is open:** for research, the governance lets each Member Country choose whether its data may be streamed or temporarily pooled with data from other countries, where the purpose can't be achieved in a federated way <GovRef id="VIII.3.4" />. For [1+MG compliant datasets](/concepts/dataset-types), it says that the decision now rests with each [1+MG Data Holder](/glossary#1mg-data-holder), and that it could be taken at country level instead, to reduce complexity <GovRef id="VIII.3.4" />. Two related questions have no answer in the governance: whether pooling is possible for uses other than research, and who judges that a purpose can't be achieved in a federated way.
- **Why it matters:** the catalogue must show, for each dataset, whether pooling is allowed, and the secure processing environments must respect that choice.
- **Tracked in:** [issue #91](https://github.com/GenomicDataInfrastructure/system-architecture/issues/91).

#### Who informs data subjects after an access decision {#national-information-flow}

- **What is open:** after a positive access decision, the [1+MG NCP](/glossary#1mg-national-coordination-point-1mg-ncp) informs the data subjects about the project, and collects consent or objections where needed <GovRef id="VII.5.3" />. The governance says that this information flow may not have to go through the 1+MG NCP, and could be organised otherwise at national level: "to be discussed" <GovRef id="VII.5.3" />.
- **Why it matters:** it decides which national component informs data subjects and collects their answers, and how it connects to the Genome EDIC.
- **Tracked in:** [issue #101](https://github.com/GenomicDataInfrastructure/system-architecture/issues/101).

#### Who signs the data use agreement for 1+MG compliant datasets {#data-use-agreement-signatory}

- **What is open:** the Genome EDIC CC issues the [data use agreement](/runtime/use/data-use-agreement) for each approved request, after approval by the 1+MG Data Holders for 1+MG compliant data. The governance says that it should be discussed and decided whether the Genome EDIC will be mandated to sign on behalf of the 1+MG Data Holders <GovRef id="VII.5.5" />.
- **Why it matters:** access request management and the agreement templates <GovRef id="VIII.2.1" /> depend on who signs, and so do the User Organisation's counterparties.
- **Tracked in:** [issue #136](https://github.com/GenomicDataInfrastructure/system-architecture/issues/136).

### Open in the architecture {#open-in-the-architecture}

The governance doesn't answer these questions, but the architecture needs an answer.

#### Role of 1+MG IT infrastructure providers in the use phase {#it-provider-role}

- **What is open:** in the use phase, the governance makes the Genome EDIC a processor for the User Organisation, with the SPE providers as its sub-processors <GovRef id="VIII.2.1" />. Elsewhere it calls the 1+MG IT infrastructure provider the controller for the technical and organisational measures <GovRef id="VIII.3.3" />. The wave 1 pages use "sub-processor"; [8.2](/concepts/roles) must settle the role.
- **Why it matters:** it decides which agreements the SPE providers sign, and who answers for the security of the SPE.
- **Tracked in:** [issue #137](https://github.com/GenomicDataInfrastructure/system-architecture/issues/137).

#### When 1+MG data may be processed in the SPE of the European Commission {#commission-spe}

- **What is open:** Users must process 1+MG data in a 1+MG SPE or, "where applicable", in the SPE provided by the European Commission under the EHDS <GovRef id="VIII.2.2" />. The governance doesn't say when that applies. It prefers federation to pooling data in the Commission's SPE <GovRef id="V.1.3" />.
- **Why it matters:** if it applies, 1+MG data leave the system for an SPE that the Genome EDIC doesn't run, and the [data use agreement](/runtime/use/data-use-agreement), controllers and audits must cover that. Under the EHDS, whoever puts data into the Commission's SPE is joint controller with the other participants that do so, and the Commission is processor (EHDS Art. 75(9)) <Cite id="ehds" />.
- **Tracked in:** [issue #109](https://github.com/GenomicDataInfrastructure/system-architecture/issues/109).

#### When a national veto applies to 1+MG cohort datasets {#national-veto}

- **What is open:** the 1+MG DAC takes into account a national veto on [1+MG cohort datasets](/concepts/dataset-types), "where applicable" <GovRef id="VII.5.1" />. The governance says who may veto: [1+MG Data Providers](/glossary#1mg-data-provider) and/or [Local DACs](/glossary#local-dac), as the Member Country determines, within 10 working days and with a justification <GovRef id="VII.4.7" />. The 1+MG DAC then seeks consensus, if needed with a national mediation body. Without consensus, the data concerned are not released <GovRef id="VII.5.1" /> <GovRef id="VII.5.2" />. It doesn't say in which cases a veto applies, what counts as an insufficient justification, or how silence is treated. This is to be detailed in [6.2.4 Review and decision](/runtime/access/review-and-decision).
- **Why it matters:** access request management must collect and record vetoes, and the 1+MG DAC must be able to mediate them <GovRef id="VII.5.1" />.
- **Tracked in:** [issue #104](https://github.com/GenomicDataInfrastructure/system-architecture/issues/104).

#### Whether one dataset can be of more than one type {#dataset-multiple-types}

- **What is open:** for example, whether part of a dataset can be disclosed as 1+MG compliant data and part as 1+MG cohort data. The governance doesn't say.
- **Why it matters:** the catalogue and access request management must know the type of every dataset in a request.
- **Tracked in:** [issue #105](https://github.com/GenomicDataInfrastructure/system-architecture/issues/105); related to [issue #85](https://github.com/GenomicDataInfrastructure/system-architecture/issues/85).

#### Whether the filter list of subject-level discovery is public {#discovery-filter-list}

- **What is open:** a subject-level discovery endpoint publishes the list of filters it accepts: ontology terms such as phenotypes and diagnoses. In Beacon v2, this is the `/filtering_terms` endpoint. The list is built from the data the node holds, so a rare term in it tells the [User](/glossary#user) that at least one record has that term. The governance asks for a <Acronym id="DPIA" /> of subject-level discovery that considers the results returned to the User <GovRef id="VII.2.2" />, and for a search engine with built-in safeguards <GovRef id="VII.2.3" />. It doesn't say whether the filter list is metadata, like the catalogue, or a discovery result under these safeguards.
- **Why it matters:** Beacon network clients read the list to learn what a node can be asked. A node that withholds it can't be queried without help. A node that publishes it shows the presence of a term below any count threshold its DPIA sets. The Beacon v2 reference implementation applies the same limit to the list as to the records: a node that returns counts only publishes an empty list, and fails the Beacon v2 verifier.
- **Tracked in:** [issue #128](https://github.com/GenomicDataInfrastructure/system-architecture/issues/128).

#### Whether the Genome EDIC is joint controller with the 1+MG Data Holder {#joint-controllership}

- **What is open:** the governance names the [1+MG Data Holder](/glossary#1mg-data-holder) as controller for the disclosure of 1+MG compliant datasets <GovRef id="III" />. It also mentions, twice and conditionally, that the Genome EDIC may be joint controller with it: for subject-level data discovery <GovRef id="VII.2.2" />, and for the data protection impact assessment on disclosure <GovRef id="VII.5.5" />. It doesn't say when that is the case.
- **Why it matters:** joint controllers need an arrangement that sets out their responsibilities (<Acronym id="GDPR" /> Art. 26) <Cite id="gdpr" />, and data subjects must be told who is responsible. [8.2](/concepts/roles) must answer it; [ADR-0002](/decisions/0002-disclosure-paths-per-dataset) doesn't depend on it.
- **Tracked in:** [issue #138](https://github.com/GenomicDataInfrastructure/system-architecture/issues/138).

#### Who adopts the system architecture {#architecture-adoption}

- **What is open:** the governance says that the Genome EDIC Assembly of Members decides on the principles and sets the minimum requirements <GovRef id="I" />, and that committees and working groups turn the principles into technical requirements <GovRef id="II.1" />. It doesn't say which body adopts the system architecture, or how changes to it are decided. This site is a working draft of the architecture taskforce, and its architecture decision records name their deciders as "to be confirmed by the taskforce".
- **Why it matters:** Member Countries and implementers need to know when the architecture binds them, and who can change it.
- **Tracked in:** [issue #113](https://github.com/GenomicDataInfrastructure/system-architecture/issues/113).

#### Who chooses the type of a dataset {#dataset-type-choice}

- **What is open:** for the access decision, the governance describes two scenarios: a decision at national level, for 1+MG compliant datasets, or by the Genome EDIC, for 1+MG cohort datasets <GovRef id="II.1" />. Who chooses between them is settled in part: each Genome EDIC Member Country decides on "a national strategy for the responsibility of downstream data disclosure" and nominates, where applicable, the 1+MG Data Holders in the country <GovRef id="VI.1.3" />. It does so before any data are included, because the choice becomes part of the consent for inclusion <GovRef id="VI.1.3" /> <GovRef id="VI.1.5" />. The governance doesn't say at which level the choice is made: for the whole country, per [1+MG Data Provider](/glossary#1mg-data-provider), or per dataset. Nor does it say whether "where applicable" lets a country nominate no 1+MG Data Holder and make all its data available as 1+MG cohort data. [ADR-0002](/decisions/0002-disclosure-paths-per-dataset) proposes that the Member Country chooses, on the basis of VI.1.3, and leaves the level open.
- **Why it matters:** the type decides who takes the access decision, and who is controller for it.
- **Tracked in:** [issue #85](https://github.com/GenomicDataInfrastructure/system-architecture/issues/85).

#### Who sets and checks the inclusion criteria for externally governed datasets {#external-inclusion-criteria}

- **What is open:** [externally governed datasets](/concepts/dataset-types) "should meet certain inclusion criteria on quality and ELSI" to be listed in the catalogue <GovRef id="III" />. The governance doesn't define the criteria, or say who sets and checks them. Nor is it clear whether Genome of Europe data, which GDI frames as primary use <Cite id="gdi-d3.4" />, fit them.
- **Why it matters:** in the first step of [ADR-0003](/decisions/0003-implementation-in-steps), externally governed datasets are the only ones Users can get access to.
- **Tracked in:** [issue #139](https://github.com/GenomicDataInfrastructure/system-architecture/issues/139).

### Dependencies {#dependencies}

Work outside this architecture that it depends on.

#### Data and metadata models from 1+MG Working Group 3 {#data-models}

- **What is open:** the governance requires minimum data and metadata models, but doesn't contain them. 1+MG Working Group 3 defines them <GovRef id="II.1" />, and the [Genome EDIC Assembly of Members](/glossary#genome-edic-assembly-of-members) adopts them, with the <Acronym id="ELSI" /> metadata models <GovRef id="VI.1.1" />. Which models exist, in which version, and where they are published is not yet known.
- **Why it matters:** data inclusion, the central data catalogue and analysis across countries all depend on common models.
- **Tracked in:** [issue #94](https://github.com/GenomicDataInfrastructure/system-architecture/issues/94).

#### Data governance for data not related to individuals {#genome-of-europe-governance}

- **What is open:** the governance doesn't cover access to data not related to individuals, such as reference genomes or pre-computed statistics (for example allele frequencies). A separate data governance is expected from the Genome of Europe project <GovRef id="II.4" />.
- **Why it matters:** the first step of [ADR-0003](/decisions/0003-implementation-in-steps) offers such data for discovery; the rules for access to them are not known yet.
- **Tracked in:** [issue #140](https://github.com/GenomicDataInfrastructure/system-architecture/issues/140).

#### EHDS requirements for health data access applications {#ehds-access-applications}

- **What is open:** under the European Health Data Space (<Acronym id="EHDS" />), the requirements for health data access applications are still under discussion. The European Commission will set them in implementing decisions <GovRef id="VII.3.3" />. The access request form of the [1+MG User Portal](/building-blocks/european/user-portal-and-catalogue) must integrate into the EHDS form <GovRef id="VII.3.1" />.
- **Why it matters:** the 1+MG access request form may have to change when these requirements are set. Under the EHDS, applications for data from authorised participants in HealthData@EU are forwarded to them automatically (EHDS Art. 67(3)); this applies to the Genome EDIC only once it is an authorised participant (EHDS Art. 75(4)) <Cite id="ehds" />.
- **Tracked in:** [issue #106](https://github.com/GenomicDataInfrastructure/system-architecture/issues/106).

#### The draft HealthData@EU implementing act {#healthdata-eu-act}

- **What is open:** the architecture cites the Commission's draft implementing regulation on the technical requirements for [HealthData@EU](/concepts/ehds-integration), under EHDS Art. 75(12) <Cite id="hdeu-ia-draft" />. Its requirements for connecting to HealthData@EU and for security may still change before it is adopted. The requirements for secure processing environments come from a separate implementing act, under EHDS Art. 73(5), which is not published yet <Cite id="ehds" />.
- **Why it matters:** the Genome EDIC connects to HealthData@EU, and its secure processing environments should meet the EHDS rules.
- **Tracked in:** [issue #95](https://github.com/GenomicDataInfrastructure/system-architecture/issues/95).

#### The Genome EDIC must be operational {#genome-edic-operational}

- **What is open:** the paths for [1+MG compliant and 1+MG cohort datasets](/concepts/dataset-types) need the Genome EDIC: the [Genome EDIC CC](/glossary#genome-edic-central-coordination-genome-edic-cc) is the one-stop shop for Users, and the [1+MG DAC](/glossary#1mg-dac) reviews access requests <GovRef id="III" />. The Genome EDIC can't be assumed to be in place before GDI ends, because of the administrative process to create an EDIC (GDI D3.4, section 1) <Cite id="gdi-d3.4" />. Until it is operational, it is not decided who runs the central User Portal and catalogue; who is controller and processor for the central services and the SPEs; and which security baseline, incident reporting line and authority to revoke access apply, since the governance gives these to the Genome EDIC CC <GovRef id="V.1.2" /> <GovRef id="VIII.2.1" /> <GovRef id="VIII.2.2" /> <GovRef id="VIII.3.2" />.
- **Why it matters:** until then, the system offers only externally governed datasets. [ADR-0003](/decisions/0003-implementation-in-steps) proposes to add the other two types in later steps. The processing in step 1 still needs a controller and processor for each step (<Acronym id="GDPR" /> Art. 5(2), 24 and 28) <Cite id="gdpr" />.
- **Tracked in:** [issue #116](https://github.com/GenomicDataInfrastructure/system-architecture/issues/116).

#### The Starter Kit FAIR Data Point uses its own metadata schemas {#starter-kit-fdp-schemas}

- **What is open:** the national catalogue of the <Acronym id="GDI" /> Starter Kit <Cite id="gdi-starter-kit" /> runs the stock FAIR Data Point. It loads the FAIR Data Point's own metadata schemas (version 1.0.0), not the GDI metadata shapes (`gdi-metadata`, version 1.1). The two disagree. The stock schema accepts the media type of a distribution only as text, and rejects the registered media type as a web address, which DCAT-AP 3.0 requires. A node on the defaults can't publish conformant distributions until it loads the GDI shapes itself.
- **Why it matters:** the national catalogues feed the central data catalogue, which must be interoperable with the EU dataset catalogue of the EHDS <GovRef id="VII.2.1" />. If each node fixes this by itself, the nodes run different schema versions.
- **Tracked in:** [issue #129](https://github.com/GenomicDataInfrastructure/system-architecture/issues/129).

## Risks {#risks}

A risk is something that could go wrong and harm the system or its users: for example, a Member Country not ready in time. Each risk gets an entry here, in the format of the [page recipe](/handbook/recipes#risks-and-technical-debt), highest priority first.

#### GDI ends before the Genome EDIC is operational {#gdi-end-gap}

- **What could happen:** GDI ends in March 2027 <Cite id="gdi-d4.4" />, and the Genome EDIC is not yet operational <Cite id="gdi-d3.4" />. The central User Portal and catalogue, and the step 1 services of [ADR-0003](/decisions/0003-implementation-in-steps), then have no operator, and no controller or security authority for them.
- **Probability:** medium.
- **Impact:** high: Users lose access to the externally governed datasets offered in step 1, and the work of GDI may not carry over to the Genome EDIC.
- **Mitigation:** agree before GDI ends who runs the central services in the gap, and on which agreements; record the roles of step 1 (see [The Genome EDIC must be operational](#genome-edic-operational)).
- **Owner:** to be named by the architecture taskforce.
- **Tracked in:** [issue #141](https://github.com/GenomicDataInfrastructure/system-architecture/issues/141).

## Technical debt {#technical-debt}

_None recorded yet._ Technical debt is a shortcut taken on purpose, which must be paid back later: for example, a temporary manual step where the target design is automated. Each piece of debt gets an entry here, in the format of the [page recipe](/handbook/recipes#risks-and-technical-debt).

:::note[To be completed in wave 6]
The owner of this page reviews the risks and technical debt in writing wave 6, and adds national readiness and the risks of the dependencies above. Sources to start from: <Cite id="gdi-d3.4" />.
:::
