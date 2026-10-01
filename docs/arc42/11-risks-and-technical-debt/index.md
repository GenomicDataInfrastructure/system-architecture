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
  - "II.1"
  - "III"
  - "V.1.3"
  - "VI.1.3"
  - "VI.1.5"
  - "VII.3.1"
  - "VII.3.3"
  - "VII.4.3"
  - "VII.4.7"
  - "VII.5.1"
  - "VII.5.2"
  - "VII.5.3"
  - "VIII.11.1"
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

- **What is open:** the IT infrastructure of a [1+MG IT infrastructure provider](/glossary#1mg-it-infrastructure-provider) must be accredited for service provision in the [Genome EDIC](/glossary#genome-edic). The details are still to be defined, jointly with 1+MG Working Group 5 and <Acronym id="GDI" /> Pillar II <GovRef id="III" />. The governance already asks for external audit and, in some cases, certification <GovRef id="V.1.3" />. How accreditation relates to them is not settled.
- **Why it matters:** trust between the nodes of the federation rests on it, and it decides which services a provider may run.
- **Tracked in:** [issue #93](https://github.com/GenomicDataInfrastructure/system-architecture/issues/93).

#### Checking that a User is a licensed healthcare professional {#healthcare-professional-check}

- **What is open:** for healthcare reuse, the [Genome EDIC CC](/glossary#genome-edic-central-coordination-genome-edic-cc) checks that the [User](/glossary#user)'s status as a healthcare professional hasn't changed <GovRef id="VII.4.3" />. Ideally, each [Genome EDIC Member Country](/glossary#genome-edic-member-country) provides a database of licensed healthcare professionals for this check. Whether and how this can be done is still under discussion, and other approaches are to be explored <GovRef id="VII.4.3" />.
- **Why it matters:** acting under professional secrecy is the main safeguard for access in healthcare <GovRef id="VII.4.3" />. The identity and access services must be able to check it.
- **Tracked in:** [issue #99](https://github.com/GenomicDataInfrastructure/system-architecture/issues/99).

#### Legal basis for returning incidental findings {#incidental-findings}

- **What is open:** the legal basis for a User to return incidental findings to a [data subject](/glossary#data-subject) is "not entirely ensured yet". It is to be discussed with the data protection authorities <GovRef id="VIII.11.1" />.
- **Why it matters:** it decides whether, and how, the system supports returning findings to data subjects.
- **Tracked in:** [issue #103](https://github.com/GenomicDataInfrastructure/system-architecture/issues/103).

#### Repeated consent or objection for healthcare reuse and clinical trials {#repeated-consent}

- **What is open:** it is "still to be clarified" whether data subjects must be asked again for consent, or given another chance to object, for healthcare reuse and for recruitment into clinical trials <GovRef id="VII.5.3" />.
- **Why it matters:** it decides whether these uses need an extra step with the data subject before data are disclosed.
- **Tracked in:** [issue #102](https://github.com/GenomicDataInfrastructure/system-architecture/issues/102).

#### Review time for healthcare reuse {#healthcare-review-time}

- **What is open:** the [1+MG DAC](/glossary#1mg-dac) should finish its first assessment of a healthcare reuse request within 1 working day, or up to 3 working days in justified cases. The governance says that this timeframe must be reviewed once there is experience with the process <GovRef id="VII.4.3" />.
- **Why it matters:** access request management must support the deadline, and be able to change it.
- **Tracked in:** [issue #100](https://github.com/GenomicDataInfrastructure/system-architecture/issues/100).

#### Who informs data subjects after an access decision {#national-information-flow}

- **What is open:** after a positive access decision, the [1+MG NCP](/glossary#1mg-national-coordination-point-1mg-ncp) informs the data subjects about the project, and collects consent or objections where needed <GovRef id="VII.5.3" />. The governance says that this information flow may not have to go through the 1+MG NCP, and could be organised otherwise at national level: "to be discussed" <GovRef id="VII.5.3" />.
- **Why it matters:** it decides which national component informs data subjects and collects their answers, and how it connects to the Genome EDIC.
- **Tracked in:** [issue #101](https://github.com/GenomicDataInfrastructure/system-architecture/issues/101).

### Open in the architecture {#open-in-the-architecture}

The governance doesn't answer these questions, but the architecture needs an answer.

#### When a national veto applies to 1+MG cohort datasets {#national-veto}

- **What is open:** the 1+MG DAC takes into account a national veto on [1+MG cohort datasets](/concepts/dataset-types), "where applicable" <GovRef id="VII.5.1" />. The governance says who may veto: [1+MG Data Providers](/glossary#1mg-data-provider) and/or [Local DACs](/glossary#local-dac), as the Member Country determines, within 10 working days and with a justification <GovRef id="VII.4.7" />. The 1+MG DAC then seeks consensus, if needed with a national mediation body. Without consensus, the data concerned are not released <GovRef id="VII.5.1" /> <GovRef id="VII.5.2" />. It doesn't say in which cases a veto applies, what counts as an insufficient justification, or how silence is treated. This is to be detailed in [6.2.4 Review and decision](/runtime/access/review-and-decision).
- **Why it matters:** access request management must collect and record vetoes, and the 1+MG DAC must be able to mediate them <GovRef id="VII.5.1" />.
- **Tracked in:** [issue #104](https://github.com/GenomicDataInfrastructure/system-architecture/issues/104).

#### Whether one dataset can be of more than one type {#dataset-multiple-types}

- **What is open:** for example, whether part of a dataset can be disclosed as 1+MG compliant data and part as 1+MG cohort data. The governance doesn't say.
- **Why it matters:** the catalogue and access request management must know the type of every dataset in a request.
- **Tracked in:** [issue #105](https://github.com/GenomicDataInfrastructure/system-architecture/issues/105); related to [issue #85](https://github.com/GenomicDataInfrastructure/system-architecture/issues/85).

#### Who chooses the type of a dataset {#dataset-type-choice}

- **What is open:** for the access decision, the governance describes two scenarios: a decision at national level, for [1+MG compliant datasets](/concepts/dataset-types), or by the Genome EDIC, for 1+MG cohort datasets <GovRef id="II.1" />. Who chooses between them is settled in part: each Genome EDIC Member Country decides on "a national strategy for the responsibility of downstream data disclosure" and nominates, where applicable, the 1+MG Data Holders in the country <GovRef id="VI.1.3" />. It does so before any data are included, because the choice becomes part of the consent for inclusion <GovRef id="VI.1.5" />. The governance doesn't say at which level the choice is made: for the whole country, per [1+MG Data Provider](/glossary#1mg-data-provider), or per dataset. Nor does it say whether "where applicable" lets a country nominate no 1+MG Data Holder and make all its data available as 1+MG cohort data. [ADR-0002](/decisions/0002-disclosure-paths-per-dataset) proposes that the Member Country chooses, on the basis of VI.1.3, and leaves the level open.
- **Why it matters:** the type decides who takes the access decision, and who is controller for it.
- **Tracked in:** [issue #85](https://github.com/GenomicDataInfrastructure/system-architecture/issues/85).

### Dependencies {#dependencies}

Work outside this architecture that it depends on.

#### EHDS requirements for health data access applications {#ehds-access-applications}

- **What is open:** under the European Health Data Space (<Acronym id="EHDS" />), the requirements for health data access applications are still under discussion. The European Commission will set them in implementing decisions <GovRef id="VII.3.3" />. The access request form of the [1+MG User Portal](/building-blocks/european/user-portal-and-catalogue) must integrate into the EHDS form <GovRef id="VII.3.1" />.
- **Why it matters:** the 1+MG access request form may have to change when these requirements are set.
- **Tracked in:** [issue #106](https://github.com/GenomicDataInfrastructure/system-architecture/issues/106).

#### The draft HealthData@EU implementing act {#healthdata-eu-act}

- **What is open:** the architecture cites the Commission's draft implementing regulation on the technical requirements for [HealthData@EU](/concepts/ehds-integration) <Cite id="hdeu-ia-draft" />. Its requirements for connecting to HealthData@EU, for secure processing environments and for security may still change before it is adopted.
- **Why it matters:** the Genome EDIC connects to HealthData@EU, and its secure processing environments should meet the EHDS rules.
- **Tracked in:** [issue #95](https://github.com/GenomicDataInfrastructure/system-architecture/issues/95).

#### The Genome EDIC must be operational {#genome-edic-operational}

- **What is open:** the paths for [1+MG compliant and 1+MG cohort datasets](/concepts/dataset-types) need the Genome EDIC: the [Genome EDIC CC](/glossary#genome-edic-central-coordination-genome-edic-cc) is the one-stop shop for Users, and the [1+MG DAC](/glossary#1mg-dac) reviews access requests <GovRef id="III" />. The Genome EDIC can't be assumed to be in place before GDI ends <Cite id="gdi-d3.4" />.
- **Why it matters:** until then, the system offers only externally governed datasets. [ADR-0002](/decisions/0002-disclosure-paths-per-dataset#implementation-in-steps) proposes to add the other two types in later steps.
- **Tracked in:** [issue #116](https://github.com/GenomicDataInfrastructure/system-architecture/issues/116).

## Risks {#risks}

_None recorded yet._ A risk is something that could go wrong and harm the system or its users: for example, a Member Country not ready in time. Each risk gets an entry here, in the format of the [page recipe](/handbook/recipes#risks-and-technical-debt).

## Technical debt {#technical-debt}

_None recorded yet._ Technical debt is a shortcut taken on purpose, which must be paid back later: for example, a temporary manual step where the target design is automated. Each piece of debt gets an entry here, in the format of the [page recipe](/handbook/recipes#risks-and-technical-debt).

:::note[To be completed in wave 6]
The owner of this page reviews the risks and technical debt in writing wave 6, and adds national readiness and the risks of the dependencies above. Sources to start from: <Cite id="gdi-d3.4" />.
:::
