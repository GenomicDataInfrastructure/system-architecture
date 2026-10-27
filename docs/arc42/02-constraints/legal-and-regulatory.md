---
title: "2.1 Legal and regulatory constraints"
sidebar_position: 1
slug: /constraints/legal
owner: "@brunopacheco1"
reviewers: []
status: draft
wave: 2
audience: [policy, legal, security, dpo]
governance_refs: ["II.4", "III", "V.1.1", "V.1.2", "V.1.3", "V.2.1", "V.2.2", "V.2.6", "VI.1.2", "VI.1.3", "VI.1.4", "VI.4.1", "VII.2.1", "VIII.2.1", "VIII.3.2", "VIII.3.3"]
last_reviewed:
---

<InShort>

- Several laws apply:
  - the GDPR, to every processing of personal data;
  - the European Health Data Space (EHDS), to 1+MG Data Providers and 1+MG Data Holders that are health data holders, and its HealthData@EU rules to the Genome EDIC once it joins HealthData@EU;
  - the NIS2 Directive on cybersecurity, as transposed nationally, to some national nodes, depending on their sector, size and national designation;
  - the EDIC Decision, which sets the legal form of the Genome EDIC;
  - national law, which adds conditions in each country.
- The Genome EDIC is not a health data access body. It can't issue data permits: access rests on data use agreements and data processing agreements.
- Joining HealthData@EU is a target, not a status. It needs the conditions and checks of an implementing act that is still a draft, and a Commission decision.

</InShort>

## The legal acts and what they require

Each row is one constraint. The *consequence* column says what the constraint means for the design. The law itself is in the act linked under *source*; [2.2](/constraints/governance-principles) gives the constraints that come from the governance.

| Constraint | Source | Consequence for the architecture |
|---|---|---|
| Every processing of personal data needs a [controller](/glossary#controller), a legal basis, and processing in line with the data protection principles. | <Acronym id="GDPR" /> Art. 4(7), 5, 6, 24 <Cite id="gdpr" /> | Every processing operation in the system has a named controller and legal basis ([8.2](/concepts/roles), [8.6](/concepts/legal-basis-and-consent)). |
| Genetic and health data are special categories. Member States may keep or add conditions for them. | GDPR Art. 9(2), 9(4) | Conditions differ per country <Cite id="b1mg-d2.3" />. Each [Genome EDIC Member Country](/glossary#genome-edic-member-country) records them in its [national implementation profile](/appendix/national-profile-template). |
| Data protection by design and by default. | GDPR Art. 25 | Every component has privacy-protective defaults ([8.1](/concepts/data-protection-by-design)). |
| Data subjects are informed (Art. 13, 14) and can exercise their rights (Art. 15–22), including withdrawing consent (Art. 7(3)) and objecting (Art. 21). | GDPR Art. 7, 12–22 | Information portals and information after each access decision ([5.2.4](/building-blocks/national/data-subject-services), [6.3.4](/runtime/use/transparency)); dataset versioning, so that a change reaches data already in use ([8.9](/concepts/dataset-versioning), [6.4](/runtime/data-subject-rights)) <GovRef id="V.2.2" /> <GovRef id="V.2.6" />. |
| [Joint controllers](/glossary#joint-controllers) set out their responsibilities in an arrangement; [processors](/glossary#processor) work under a contract. | GDPR Art. 26, 28 | The agreements between actors are part of the design ([8.2](/concepts/roles)). |
| Security of processing. A controller notifies a personal data breach to the supervisory authority under the GDPR (the data protection authority) without undue delay and, where feasible, within 72 hours, unless the breach is unlikely to result in a risk; and informs data subjects where the risk is high. | GDPR Art. 32, 33(1), 34 | Security measures in every node ([8.3](/concepts/security)); a reporting line from every processor to its controller ([8.2](/concepts/roles#who-notifies-a-personal-data-breach), [6.5](/runtime/security-incident)). |
| A data protection impact assessment (<Acronym id="DPIA" />), with prior consultation of the data protection authority where the residual risk stays high. | GDPR Art. 35, 36 | The system provides inputs for the DPIAs the governance requires, and for any other DPIA a controller must carry out, such as the User Organisation's for its project ([8.1](/concepts/data-protection-by-design#support-for-data-protection-impact-assessments)). |
| Safeguards for processing for scientific research and statistics. Rights may be limited only where the GDPR, or Union or Member State law under Art. 89(2), allows it. | GDPR Art. 89 | Minimisation and [key-coded identifiers](/glossary#key-coded-identifier) by default ([8.7](/concepts/identifiers-and-linkage)). The policy of the [Genome EDIC Assembly of Members](/glossary#genome-edic-assembly-of-members) says how rights are handled within those limits, and data subjects are told in advance <GovRef id="V.2.1" /> <GovRef id="V.2.2" /> ([6.4](/runtime/data-subject-rights)). |
| The EHDS applies to health data holders, including 1+MG Data Providers and 1+MG Data Holders that are health data holders. Its rules on secondary use apply from 26 March 2029; the duty to make genomic data available applies from 26 March 2031. | European Health Data Space (<Acronym id="EHDS" />) Art. 2(2)(t), 51(1)(f), 105 <Cite id="ehds" /> | The same data may be requested under the EHDS and through the 1+MG system. Each Member Country says in its national implementation profile how the two meet. |
| Holding data for 1+MG alone doesn't make an organisation a [health data holder](/glossary#health-data-holder). | EHDS Art. 2(2)(t), 51; <GovRef id="VI.1.3" /> | Where a dataset should also be made available under the EHDS, the Member Country should choose its [1+MG Data Holder](/glossary#1mg-data-holder) so that it can also be a health data holder, and the same body can answer EHDS requests for the same data. |
| The [Genome EDIC](/glossary#genome-edic) may become an [authorised participant in HealthData@EU](/glossary#authorised-participant-in-healthdataeu). If it does, it must acquire the technical capability to connect, and meet the HealthData@EU requirements. | EHDS Art. 75(4), 75(6); <GovRef id="V.1.2" /> | The interfaces to HealthData@EU are designed in from the start, but connected only after the Commission's decision ([8.11](/concepts/ehds-integration), [5.1.5](/building-blocks/european/ehds-connector)). |
| The Commission connects an authorised participant by implementing decision. The conditions and compliance checks for joining, and for disconnection or exclusion, are set by an implementing act, still a **draft**. | EHDS Art. 75(12)(b), 75(12)(c), 75(13); the Commission's draft implementing regulation <Cite id="hdeu-ia-draft" /> | Compliance must be demonstrable: audits, logs and documentation are kept ready for the check. The design follows the draft where it is known, and is reviewed when the act is adopted. See [chapter 11](/risks#healthdata-eu-act). |
| The Genome EDIC Assembly of Members should consider whether its policies are compatible with the implementing acts under EHDS Art. 75. | <GovRef id="V.1.1" /> | Policies and minimum requirements are checked against each implementing act when it is adopted. |
| Secure processing environments used under the EHDS must meet the EHDS requirements, set out further in an implementing act that is not published yet. | EHDS Art. 73, 73(5) | 1+MG secure processing environments (<Acronym id="SPE">SPEs</Acronym>) should be compatible with them, so that they can also serve health data access bodies <GovRef id="VIII.3.3" />. 1+MG asks more: an audit by an external body and/or work towards certification <GovRef id="V.1.3" />. |
| The Genome EDIC is not a [health data access body](/glossary#health-data-access-body), and can't issue [data permits](/glossary#data-permit). | EHDS Art. 68; <GovRef id="VIII.3.2" /> | Access rests on a [data use agreement](/glossary#data-use-agreement), with a data processing agreement, not on a permit <GovRef id="VIII.2.1" />. |
| The catalogues of authorised participants are connected to the EU dataset catalogue, and must be public. | EHDS Art. 79; <GovRef id="VII.2.1" /> | The central data catalogue is public, and interoperable with the EU dataset catalogue ([8.10](/concepts/metadata-and-interoperability)). |
| As a rule, medium-sized and larger entities in the sectors of NIS2 Annexes I and II must manage cybersecurity risks and report significant incidents, under the national law that transposes the Directive: an early warning within 24 hours, a notification within 72 hours, and a final report within one month. Some entities are in scope regardless of size, for example public administration entities and entities a Member State identifies because their disruption could affect public health. Member States identify essential and important entities. | NIS2 Art. 2(1), 2(2), 2(5), 3, 21, 23(4), 41 <Cite id="nis2" /> | NIS2 applies per organisation, not to the system as a whole. The Genome EDIC itself is not likely to be in scope; national nodes may be <Cite id="b1mgplus-d2.8" />. Each node checks, under its national law, its sector and size, whether it is a public body, and whether its Member State has listed it. A node in scope must also manage the security of its suppliers (Art. 21(2)(d)), so the central services and the reference implementation may have to meet its supply-chain requirements ([8.3](/concepts/security)). See [chapter 11](/risks#nis2-applicability). |
| The Genome EDIC is a European Digital Infrastructure Consortium (<Acronym id="EDIC" />): a legal entity with legal personality from the Commission decision that sets it up, on the application of at least three Member States, with statutes that set its governance. | Decision (EU) 2022/2481, Art. 13(3) (legal personality), 14 (application and Commission decision), 15(1) (at least three Member States), 17 (statutes) <Cite id="dddp" />; <GovRef id="III" /> | The Genome EDIC can sign agreements and act as controller or processor only once it is set up ([see below](#the-genome-edic-today)). Until then, 1+MG compliant and 1+MG cohort datasets can't be offered ([ADR-0003](/decisions/0003-implementation-in-steps)). |
| The EDIC Decision is not a legal basis for processing personal data. | Conclusion of a B1MG+ expert workshop, held under the Chatham House Rule <Cite id="b1mgplus-m2.11" /> | Data are made available on the basis of consent, or of a legislative act at country, regional or Union level that explicitly mandates the sharing <GovRef id="III" />. For 1+MG compliant data, the act must provide for the Genome EDIC Secondary Use Framework, the rules of the 1+MG data governance <GovRef id="VI.1.2" /> ([8.6](/concepts/legal-basis-and-consent)). |
| National law sets more conditions: on the legal basis, on special categories, on deceased persons, on the national identity link, and on screening for secondary findings. | GDPR Art. 9(4); national law; <GovRef id="VI.1.4" /> <GovRef id="VI.4.1" /> <GovRef id="II.4" /> | Each Member Country records its conditions in its national implementation profile. Screening for secondary findings is possible only under national healthcare law, outside the system <GovRef id="II.4" />. |

Other EU acts, such as the Cyber Resilience Act, the Data Governance Act, the Data Act and eIDAS 2, may apply to parts of the system. B1MG+ has reviewed them <Cite id="b1mgplus-d2.8" />; chapter 8 cites them where they shape a concept.

## The Genome EDIC today

When this page was written, the Commission had not yet set up the Genome EDIC: the GDI project calls it "the prospective Genome EDIC" (GDI D4.4, October 2025) <Cite id="gdi-d4.4" />. Other pages call the Genome EDIC **operational** once it is set up and able to sign agreements and act as controller or processor, with its Genome EDIC CC and 1+MG DAC at work. [ADR-0003](/decisions/0003-implementation-in-steps) builds the system in steps for that reason.

## What the EHDS means for the Genome EDIC

The table gives the rules. Three points need a word more; [8.11](/concepts/ehds-integration) gives the design.

- **Incident notification.** The duties that apply today are those of the GDPR (Art. 33 and 34) and, where a node is in scope, of NIS2 (Art. 23). Any further duty for authorised participants depends on the implementing act. The governance adds its own chain for misuse by a User: an SPE provider that suspects a User has breached purpose limitation or confidentiality revokes that User's access at once, and informs the [Genome EDIC CC](/glossary#genome-edic-central-coordination-genome-edic-cc) and, where applicable, the other affected SPE providers <GovRef id="VIII.3.3" />. The governance sets no chain for other security incidents; [6.5](/runtime/security-incident) covers them.
- **Dates.** The EHDS applies from 26 March 2027. Its Chapter IV, on secondary use and HealthData@EU, applies from 26 March 2029, and the duty to make genomic data available from 26 March 2031. The implementing acts under Art. 73(5) and 75(12) are due by 26 March 2027, and apply from 26 March 2029 (Art. 75(12), 105).
- **National contact points.** The [1+MG NCP](/glossary#1mg-national-coordination-point-1mg-ncp) is not the EHDS national contact point for secondary use. The Member State designates that contact point, and it may be the coordinator health data access body (EHDS Art. 55(1), 75(1)). A country may give both roles to one body.

:::caution[Open points]
- The HealthData@EU implementing act is still a draft, and the implementing act on SPE requirements is not published yet. See [chapter 11](/risks#healthdata-eu-act).
- The EHDS requirements for health data access applications are not set yet. See [chapter 11](/risks#ehds-access-applications).
- Which national nodes fall under NIS2 has not been assessed. See [chapter 11](/risks#nis2-applicability).
:::
