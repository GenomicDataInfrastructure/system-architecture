---
title: "2.3 Organisational constraints"
sidebar_position: 3
slug: /constraints/organisational
owner: "Bruno Pacheco (LNDS)"
reviewers: ["Kjell Petersen (UiB)", "Iulia Maria Sabau (ICDG)"]
status: draft
wave: 2
audience: [policy, legal, implementer]
governance_refs: ["I", "II.1", "III", "V.1.1", "V.1.2", "V.1.3", "V.1.4", "V.2.1", "V.2.4", "VI.1.1", "VI.1.3", "VI.4.1", "VI.4.6", "VII.1.4", "VII.4.7", "VII.5.2", "VII.5.6", "VIII.3.4", "VIII.8.3"]
last_reviewed:
---

<InShort>

- Each Genome EDIC Member Country must put in place a 1+MG NCP, access to accredited IT infrastructure, people with the right expertise, and tools to inform data subjects. It must also avoid conflicts of interest where one organisation holds several roles.
- The Genome EDIC Assembly of Members decides for all countries: policies, data models, security measures and minimum requirements. Each Member Country decides how it organises itself nationally: who holds which role, who reviews, and whether data may be pooled.
- Every IT infrastructure provider is audited by an external body or works towards certification. An audit checks a provider against the Genome EDIC's minimum requirements; a certification (such as ISO 27001) is issued by an independent certification body; accreditation, which allows a provider to serve the Genome EDIC, is still to be defined. SPEs that pool data from several countries must be certified.

</InShort>

## What each Member Country must put in place

The governance makes each country's government responsible for having the national structures, people and tools in place <GovRef id="I" />. The table lists what a [Genome EDIC Member Country](/glossary#genome-edic-member-country) must provide, and what that means for the design. Each country records how it meets these constraints in its [national implementation profile](/glossary#national-implementation-profile) ([template](/appendix/national-profile-template)).

| Constraint | Source | Consequence for the architecture |
|---|---|---|
| A [1+MG NCP](/glossary#1mg-national-coordination-point-1mg-ncp), mandated by the Member Country, as the national point of contact. | <GovRef id="III" /> | Every country has one national point of contact for the European scope, the 1+MG NCP, with its node and national catalogue ([5.2.1](/building-blocks/national/ncp-node)). |
| [1+MG IT infrastructure](/glossary#1mg-it-infrastructure-provider), in the country or with access to it. The provider's IT infrastructure must be accredited. | <GovRef id="III" /> | A country can host its own nodes and secure processing environments (<Acronym id="SPE">SPEs</Acronym>), or use another provider's. The deployment patterns in [7.2](/deployment/national) allow both. |
| Enough resources, expertise and infrastructure to carry out the national tasks. Expertise in genomic and health data and in secure IT must be available in the country. | <GovRef id="V.1.4" /> <GovRef id="I" /> | The national components can't assume central staff. Each must be operable by the country's own team. |
| Conflicts of interest are mitigated. A 1+MG NCP that confirms compliance must not assess its own work. A [1+MG Data Holder](/glossary#1mg-data-holder) may have a conflict if it is also an IT infrastructure provider. It may also have one if it is a [1+MG Data Provider](/glossary#1mg-data-provider) that does research with the same data. | <GovRef id="V.1.4" /> | One organisation may hold several roles <GovRef id="III" />, so the national roles stay separate in the design: each role has its own building block and its own access rights, even where one organisation runs them. |
| Tools to inform [data subjects](/glossary#data-subject) and to let them exercise their rights, ideally a national information portal. | <GovRef id="V.2.4" /> <GovRef id="I" /> | [Data subject services](/building-blocks/national/data-subject-services) are national, with interfaces to the central information database. |
| National IT that reliably links the identity of a data subject to their [key-coded identifiers](/glossary#key-coded-identifier). Genomic and clinical data are stored separately, ideally with different key-coded identifiers. | <GovRef id="VI.4.1" /> <GovRef id="VII.5.2" /> | The link is a national service. Where it sits is a national choice; the interfaces are decided in [ADR-0005](/decisions/0005-identity-link-and-key-coded-identifiers) (wave 3), described in [8.7](/concepts/identifiers-and-linkage). |
| A way to vet healthcare organisations and licensed healthcare professionals, for healthcare reuse. | <GovRef id="VII.1.4" /> | The identity and access services must be able to query a national source. How is still open ([chapter 11](/risks#healthcare-professional-check)). |
| A mediation body for disagreements between the [1+MG DAC](/glossary#1mg-dac) and a [Local DAC](/glossary#local-dac), and a yearly review of the quality of access reviews. | <GovRef id="VII.5.2" /> | Access request management records the opinions, deadlines and outcomes that mediation and the yearly review need ([5.1.2](/building-blocks/european/access-request-management)). |
| Acceptance that data used for research stay archived for a period after the analysis (for example 10 years), even if the country later withdraws them. | <GovRef id="VIII.8.3" /> | Archives outlive a country's withdrawal ([6.3.7](/runtime/use/archiving)). |
| The country keeps national conditions for making data available as simple as possible, and ideally provides a legal basis for it under the Genome EDIC Secondary Use Framework, the rules of the [1+MG Data Governance](/glossary#1mg-data-governance). | <GovRef id="VI.4.1" /> | The legal basis can differ per country. Its consequences are in [2.1](/constraints/legal) and [8.6](/concepts/legal-basis-and-consent). |

## Who decides what

The [Genome EDIC Assembly of Members](/glossary#genome-edic-assembly-of-members) is the governing level, and decides on the principles and the minimum requirements <GovRef id="I" />. Committees and working groups turn the principles into technical requirements <GovRef id="II.1" />. Each Member Country decides how it implements the system nationally <GovRef id="I" />.

| Decided by the Assembly of Members, for all countries | Decided by each Member Country, for itself |
|---|---|
| The risk and quality management framework and the security and <Acronym id="ELSI" /> policies; it also ensures that an information security management system (<Acronym id="ISMS" />) is implemented <GovRef id="V.1.1" /> | The national strategy for who takes the legal responsibility for giving access to the data (downstream disclosure), and which organisations are its 1+MG Data Holders, before any data are included <GovRef id="VI.1.3" /> ([ADR-0002](/decisions/0002-disclosure-paths-per-dataset)) |
| The scope of purposes, the technical and organisational measures (<Acronym id="TOM">TOMs</Acronym>), the data models and the ELSI metadata models <GovRef id="VI.1.1" /> | Which organisation takes which national role, including who runs the IT infrastructure <GovRef id="III" /> <GovRef id="VI.4.6" /> |
| The policy on how data subjects' rights are handled, within the limits the GDPR and national law allow <GovRef id="V.2.1" /> | Who reviews access requests for 1+MG cohort datasets: 1+MG Data Providers and/or Local DACs <GovRef id="VII.4.7" /> |
| The redress procedure for refused requests <GovRef id="VII.5.6" /> | Whether its data may be pooled for research <GovRef id="VIII.3.4" /> |
| | How data subjects are informed, and where the identity link sits <GovRef id="V.2.4" /> <GovRef id="VI.4.1" /> |

The [Genome EDIC CC](/glossary#genome-edic-central-coordination-genome-edic-cc) prepares the decisions of the Assembly of Members, and turns its policies into minimum requirements for audit and certification <GovRef id="V.1.2" />. Which body adopts this system architecture is not settled.

:::caution[Open point]
The governance names no body that adopts the system architecture as a whole. See [chapter 11](/risks#architecture-adoption).
:::

## Audit, certification and accreditation

These obligations apply to the [Genome EDIC national entities](/glossary#genome-edic-national-entities) and to every 1+MG IT infrastructure provider:

| Obligation | Applies to | Source |
|---|---|---|
| Implement the minimum requirements for audit and certification that the Genome EDIC CC sets. The Genome EDIC CC also checks adherence by other means than audits. | National entities: 1+MG NCPs, IT infrastructure providers, 1+MG Data Holders and others | <GovRef id="V.1.2" /> |
| At minimum, an audit by an external body against those requirements, and/or work towards certification, such as ISO 27001, or alignment with a NIST framework or similar. Local standard operating procedures. | Every 1+MG IT infrastructure provider | <GovRef id="V.1.3" /> |
| Certification. | An SPE that pools data from other Member Countries | <GovRef id="V.1.3" /> |
| Accreditation for service provision in the [Genome EDIC](/glossary#genome-edic). The details are still to be defined. | The IT infrastructure of every 1+MG IT infrastructure provider | <GovRef id="III" /> |

For the design, this means that every node must produce the evidence an auditor needs: logs, configuration, procedures and test results ([8.3](/concepts/security), [8.5](/concepts/logging-and-audit)). B1MG+ has proposed a risk management framework that each entity of the federation adapts <Cite id="b1mgplus-d2.9" />, and acceptance criteria for central and local nodes <Cite id="b1mgplus-d2.10" />.

:::caution[Open point]
How 1+MG IT infrastructure providers are accredited, how accreditation relates to audit and certification, and whether working towards certification without an external audit is enough. See [chapter 11](/risks#accreditation).
:::

## Readiness and the transition from GDI

A country can assess its readiness for genomic medicine with the B1MG maturity level model <Cite id="b1mg-d5.1" />. It measures maturity, not the obligations above. The <Acronym id="GDI" /> project helps countries build their nodes, and ends in March 2027 <Cite id="gdi-d4.4" />. Who runs the central services if the Genome EDIC is not operational by then is not decided.

:::caution[Risk]
GDI may end before the Genome EDIC is operational. See [chapter 11](/risks#gdi-end-gap).
:::
