---
title: "ADR-0009 The Genome EDIC and the 1+MG Data Holder are joint controllers for the disclosure of 1+MG compliant datasets"
slug: /decisions/0009-joint-controllership-disclosure
sidebar_position: 9
owner: "Bruno Pacheco (LNDS)"
reviewers: ["Troels Rasmussen (LNDS)", "Rose Pasigna (LNDS)", "Regina Becker (LNDS, specialist)"]
status: draft
wave: 2
audience: [legal, dpo, policy, implementer]
governance_refs: ["II.1", "III", "VI.4.5", "VII.1.1", "VII.1.3", "VII.2.2", "VII.3.1", "VII.5.4", "VII.5.5", "VIII.2.1"]
last_reviewed:
---

<InShort>

- This architecture decision record (ADR) proposes that, for 1+MG compliant datasets, the Genome EDIC and the 1+MG Data Holder are joint controllers for the disclosure of the data to Users, including subject-level data discovery. The 1+MG Data Holder alone still takes the access decision.
- They set out who does what in an arrangement under the GDPR (Art. 26), added to the agreement each 1+MG Data Holder already signs with the Genome EDIC. Data subjects can see its essence, and can turn to either of them.
- The governance mentions this joint controllership only as a possibility. The proposal is still to be confirmed, and the open point stays in chapter 11 until it is.

</InShort>

| Field | Value |
|---|---|
| Status | Proposed |
| Date | 2026-10-27 (first proposed 2026-10-27) |
| Deciders | B. Pacheco (architecture lead); to be confirmed by the taskforce |

## Context

For [1+MG compliant datasets](/concepts/dataset-types), the governance names the [1+MG Data Holder](/glossary#1mg-data-holder) as controller for the disclosure <GovRef id="III" />, and gives it the access decision and the data protection impact assessment (<Acronym id="DPIA" />) <GovRef id="VII.5.4" />. It also mentions, twice and only conditionally, that the [Genome EDIC](/glossary#genome-edic) may be joint controller with it: "where the Genome EDIC is found to be a joint controller", it may prepare the DPIA for subject-level data discovery <GovRef id="VII.2.2" />, and could then take over the main work of the DPIA on disclosure <GovRef id="VII.5.5" />. It doesn't say when that is the case.

Meanwhile, the Genome EDIC shapes how the disclosure happens:

- it sets the harmonised rules that every 1+MG Data Holder agrees to follow when it joins <GovRef id="VI.4.5" />;
- it registers and vets the [User Organisations](/glossary#user-organisation), and signs the terms of use, on behalf of the 1+MG Data Holders <GovRef id="VII.1.1" />;
- it runs the one access request for all data <GovRef id="VII.3.1" />, issues the [data use agreement](/glossary#data-use-agreement) <GovRef id="VII.5.5" />, and sets the minimum requirements for the secure processing environments (<Acronym id="SPE">SPEs</Acronym>) <GovRef id="VIII.2.1" />;
- it introduced subject-level data discovery, and defines the common risk management approach for it <GovRef id="VII.2.2" />.

Under the <Acronym id="GDPR" />, two parties are joint controllers when they decide together on the purposes and means of a processing (Art. 26) <Cite id="gdpr" />. The European Data Protection Board (<Acronym id="EDPB" />) includes converging decisions that complement each other, are each necessary for the processing, and have a tangible impact on its purposes and means <Cite id="edpb-gl-07-2020" />. B1MG+, an EU-funded project that supports the 1+MG initiative, held an expert workshop on these roles. In the scenario that follows the Genome EDIC Secondary Use Framework, 10 of 12 voters found that the Genome EDIC and a 1+MG Data Holder are joint controllers for the disclosure, by analogy with the judgment of the Court of Justice of the EU in *IAB Europe* (C-604/22) on a framework that sets the rules others follow. In a generic repository scenario, 9 of 15 voters found the Genome EDIC sole controller for the disclosure <Cite id="b1mgplus-ms17" />. The workshop is expert input, not a decision.

The question affects the agreements, the information to data subjects, who performs which DPIA, and who answers to the data protection authority. [8.2](/concepts/roles#joint-controllership) describes it in context. For 1+MG cohort datasets the question doesn't arise: the Genome EDIC is controller ([ADR-0002](/decisions/0002-disclosure-paths-per-dataset)).

## Options considered

The criteria:

1. **Follows the governance:** the 1+MG Data Holder keeps the access decision and remains controller for the disclosure <GovRef id="III" /> <GovRef id="VII.5.4" />; the governance's conditional remarks fit <GovRef id="VII.2.2" /> <GovRef id="VII.5.5" />.
2. **Matches who decides on purposes and means** (GDPR Art. 4(7), 26; the EDPB reading).
3. **Clear accountability:** every processing step has a controller who can show compliance (GDPR Art. 5(2), 24), and data subjects know whom to ask.
4. **Workable at scale:** one arrangement template for every 1+MG Data Holder in every Member Country, not a negotiation per Data Holder.
5. **Keeps the national responsibility** that the vote for a decentralised approach kept ([ADR-0002](/decisions/0002-disclosure-paths-per-dataset), criterion 1).

| Option | 1. Governance | 2. Who decides | 3. Accountability | 4. At scale | 5. National responsibility |
|---|---|---|---|---|---|
| **A. The 1+MG Data Holder is sole controller;** the Genome EDIC is its processor for registration, access request management and the data use agreement | Yes, on the primary wording; leaves the conditional remarks unused | Weak: under the EDPB test, whoever decides on the purposes or the essential means is a controller, not a processor <Cite id="edpb-gl-07-2020" />; here the Genome EDIC sets the rules the Data Holders follow, as the B1MG+ workshop pointed out <Cite id="b1mgplus-ms17" /> | Partly: one controller on paper, while the means are set elsewhere; a data processing agreement with each Data Holder | Partly: one processing agreement per Data Holder, and every rule change becomes a change of instructions | Yes |
| **B. Joint controllers for the disclosure,** including subject-level discovery; the 1+MG Data Holder alone takes the access decision | Yes: the Data Holder stays controller and decides; the governance's DPIA delegation fits | Yes: the Genome EDIC decides on the means, the Data Holder on each disclosure | Yes, through an Art. 26 arrangement whose essence data subjects can see | Yes: one arrangement template, part of the agreement each Data Holder signs anyway <GovRef id="VI.4.5" /> | Yes: the decision stays with the Data Holder |
| **C. Joint controllers only for subject-level discovery;** the Data Holder is sole controller for the rest of the disclosure | Partly: fits VII.2.2, not VII.5.5 | Partly: the same Genome EDIC rules shape the access procedure, not only discovery | Partly: two allocations for one dataset, harder to explain | Partly: two arrangements | Yes |

## Decision

Option B (proposed). For 1+MG compliant datasets:

- **The Genome EDIC and the 1+MG Data Holder are joint controllers for the disclosure** of the data to Users: subject-level data discovery, the access request procedure, and making the data available in an SPE.
- **The 1+MG Data Holder alone takes the access decision.** Joint controllership doesn't move the decision; it reflects that the Genome EDIC decides on the means.
- **For subject-level data discovery,** the [User Organisation](/glossary#user-organisation) is a joint controller too <GovRef id="VII.1.3" />. Its arrangement is part of the terms of use.
- **One arrangement under GDPR Art. 26,** added to the participation agreement between each 1+MG Data Holder and the Genome EDIC <GovRef id="VI.4.5" />. It allocates at least:

| Responsibility | 1+MG Data Holder | Genome EDIC |
|---|---|---|
| Access decision, and the legal basis for the disclosure | Yes | — |
| DPIA for discovery and disclosure | Owns it, with prior consultation of the data protection authority <GovRef id="VII.5.4" /> | Prepares it, and does the main work <GovRef id="VII.2.2" /> <GovRef id="VII.5.5" /> |
| Harmonised rules, access request procedure, registration of User Organisations, data use agreement | Applies them | Sets and runs them <GovRef id="VI.4.5" /> <GovRef id="VII.1.1" /> <GovRef id="VII.5.5" /> |
| Agreement with its 1+MG Data Host | Signs it <GovRef id="VI.4.6" /> | — |
| Information to data subjects, and contact point for their requests | In the country, through the national channels | Publishes the essence of the arrangement centrally |
| Breach notification to the data protection authority | For breaches in its own processing and at its 1+MG Data Host | For breaches in the central services |

Data subjects may exercise their rights against either joint controller (GDPR Art. 26(3)). The arrangement says how the two pass requests to each other.

## Consequences

- **Easier:** the roles match what each party does; the governance's DPIA delegation becomes a normal part of the arrangement; one template serves every 1+MG Data Holder; Users and data subjects see one consistent allocation.
- **Harder:** the arrangement must be agreed before step 2 of [ADR-0003](/decisions/0003-implementation-in-steps), when the first 1+MG compliant datasets are offered; the Genome EDIC takes on controller duties, and liability, for every 1+MG compliant dataset; data subjects must be told about two controllers.
- **For data subjects:** the information at inclusion names both controllers for the disclosure. Because the type of a dataset is part of the consent ([ADR-0002](/decisions/0002-disclosure-paths-per-dataset)), the joint controllership must be settled before the first 1+MG compliant datasets are included.
- **European scope:** [5.1.2 Access request management](/building-blocks/european/access-request-management) and the User Organisation registry act as joint controller, not as processor. The Genome EDIC CC keeps records of processing for them (GDPR Art. 30).
- **National scope:** each 1+MG Data Holder signs the arrangement with its participation agreement. The [national implementation profile](/glossary#national-implementation-profile) says how data subjects reach the 1+MG Data Holder.
- **User Organisation scope:** no change in how to apply. The terms of use name the joint controllers for discovery.
- **Pages to update when accepted:** [8.2](/concepts/roles), [8.12](/concepts/dataset-types), [3.3](/context/scopes), [1.3](/introduction/stakeholders) and [ADR-0002](/decisions/0002-disclosure-paths-per-dataset), which today call the question open.

:::caution[Open point]
The governance mentions joint controllership only conditionally, so this proposal must be confirmed with the Genome EDIC governance bodies, and its legal analysis completed. Until then, the point stays open. See [chapter 11](/risks#joint-controllership).
:::
