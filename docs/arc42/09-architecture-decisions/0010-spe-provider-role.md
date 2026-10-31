---
title: "ADR-0010 SPE providers are sub-processors for the User's data and controllers for their own platform processing"
slug: /decisions/0010-spe-provider-role
sidebar_position: 10
owner: "Bruno Pacheco (LNDS)"
reviewers: ["Troels Rasmussen (LNDS)", "Rose Pasigna (LNDS)", "Regina Becker (LNDS, specialist)"]
status: draft
wave: 2
audience: [legal, dpo, security, implementer]
governance_refs: ["V.1.3", "VII.1.3", "VIII.2.1", "VIII.2.2", "VIII.3.1", "VIII.3.2", "VIII.3.3"]
last_reviewed:
---

<InShort>

- This architecture decision record (ADR) proposes how to read two statements of the governance about the providers of secure processing environments (SPEs): that they are sub-processors of the Genome EDIC, and that they are controllers for the technical and organisational measures.
- Both hold, for different processing. For the data a User analyses, the SPE provider is a sub-processor of the Genome EDIC. For what it processes for its own purposes, such as User accounts, access control and security logs, it is controller.
- The SPE provider can therefore revoke access at once when it suspects a breach, as the governance asks. The proposal is still to be confirmed.

</InShort>

| Field | Value |
|---|---|
| Status | Proposed |
| Date | 2026-10-27 (first proposed 2026-10-27) |
| Deciders | B. Pacheco (architecture lead); to be confirmed by the taskforce |

## Context

In the use phase, the [User Organisation](/glossary#user-organisation) is controller for the use of the data <GovRef id="VII.1.3" />. The [Genome EDIC](/glossary#genome-edic) acts as its processor for the federated secure processing environments (<Acronym id="SPE">SPEs</Acronym>), and concludes (sub-)processing agreements with every provider of the federated IT infrastructure <GovRef id="VIII.2.1" />.

The governance also says that a [1+MG IT infrastructure provider](/glossary#1mg-it-infrastructure-provider) must revoke a User's access at once when it suspects a breach of purpose limitation or confidentiality <GovRef id="VIII.3.3" />. Its justification gives the reason: the providers can act immediately because they "are the controller for the technical and organisational measures to protect the data, which includes the provision of access to Users" <GovRef id="VIII.3.3" />.

Under the <Acronym id="GDPR" />, a processor acts only on its controller's documented instructions (Art. 28(3)(a)) <Cite id="gdpr" />, so an SPE provider can't be both sub-processor and controller for the same processing. Processors must still implement security measures themselves (Art. 32). An SPE provider also processes personal data that are not the User's research data: the User's identity and account, authentication events, access logs and monitoring data.

B1MG+, an EU-funded project that supports the 1+MG initiative, held an expert workshop on these roles. In the scenario that follows the Genome EDIC Secondary Use Framework, 10 of 12 voters found that the Genome EDIC is processor in the SPE with the platform provider as its sub-processor, and 11 of 12 that the platform provider is controller for the platform-related processing of the User's own personal data. In a generic repository scenario, opinions were divided: 6 of 11 and 5 of 11 <Cite id="b1mgplus-ms17" />. The workshop is expert input, not a decision. [8.2](/concepts/roles#the-role-of-spe-providers) describes the question in context.

## Options considered

The criteria:

1. **Follows the governance:** keeps the Genome EDIC as processor for the User Organisation, with the SPE providers as sub-processors <GovRef id="VIII.2.1" />, and lets the provider revoke access at once <GovRef id="VIII.3.3" />.
2. **Lawful under the GDPR:** one role per processing operation (Art. 4(7), 4(8), 28).
3. **Security works in practice:** the provider can act on a suspected breach without waiting for instructions, and keeps the logs it needs.
4. **Simple for the User Organisation:** one processing agreement, with the Genome EDIC, for all SPEs <GovRef id="VIII.2.1" />.
5. **Works for every SPE provider,** national or central, whatever its legal form.

| Option | 1. Governance | 2. GDPR | 3. Security in practice | 4. Simple for the User Organisation | 5. Every provider |
|---|---|---|---|---|---|
| **S1. Sub-processor for everything** | Partly: fits VIII.2.1; revoking at once becomes an instruction in the sub-processing agreement, not the provider's own duty | Yes, but the provider's own processing (accounts, logs) has no controller of its own | Partly: depends on the instructions; the logs are kept on the Genome EDIC's behalf | Yes | Yes |
| **S2. Controller for everything in its SPE** | No: contradicts VIII.2.1 | Unclear: two controllers for the User's data, without an arrangement | Yes | No: the User Organisation would deal with each provider | Yes |
| **S3. Split by processing operation:** sub-processor for the User's data; controller for its own platform processing | Yes: both statements hold, for different processing | Yes: one role per operation | Yes: revoking access and keeping security logs are its own duties as controller of its platform processing, and also an instruction in the sub-processing agreement | Yes | Yes |
| **S4. Joint controller with the Genome EDIC for the SPE** | No: the governance makes the Genome EDIC a processor here <GovRef id="VIII.2.1" /> | Unclear: a processor can't be joint controller for the same processing | Yes | Partly | Partly: an arrangement with every provider |

## Decision

Option S3 (proposed). Every SPE provider has two roles, for two kinds of processing:

| Processing | Role of the SPE provider | For whom | Basis |
|---|---|---|---|
| The data a User analyses: 1+MG data, imported data, results, linkage and risk reduction after linkage | **Sub-processor** | The Genome EDIC, processor for the User Organisation | Sub-processing agreement <GovRef id="VIII.2.1" />; <GovRef id="VIII.3.1" /> |
| Running its platform: User accounts and identity, authentication and authorisation, access logs, security monitoring, revoking access | **Controller** | Itself | Its own legal basis, for example a legal obligation (GDPR Art. 32, and NIS2 where it applies) or a legitimate interest <Cite id="gdpr" /> <Cite id="nis2" /> |

In detail:

- **Revoking access** on a suspected breach is both the SPE provider's own duty as controller of its platform processing and an instruction in its sub-processing agreement. It informs the [Genome EDIC CC](/glossary#genome-edic-central-coordination-genome-edic-cc) and the other affected SPE providers, ideally automatically <GovRef id="VIII.3.3" />. The Genome EDIC CC then revokes access legally <GovRef id="VIII.3.2" />.
- **The security measures that protect the User's data** are set by the Genome EDIC's minimum requirements and the sub-processing agreement, and implemented by the provider (GDPR Art. 28(3)(c), 32). The provider is audited by an external body or certified against them <GovRef id="V.1.3" />.
- **The governance's phrase** "controller for the technical and organisational measures" <GovRef id="VIII.3.3" /> is read as the provider's role for its own platform processing, which includes deciding who gets access to its platform.
- **The User** gets the SPE provider's own privacy information for the platform processing, alongside the data use agreement.

## Consequences

- **Easier:** the governance's two statements stop conflicting; SPE providers can act on security incidents at once; the User Organisation still signs one processing agreement.
- **Harder:** each SPE provider needs privacy information for Users, a record of processing for its platform processing (GDPR Art. 30), and its own breach notification for breaches in that processing; the sub-processing agreement must say clearly which processing is on the Genome EDIC's behalf and which is the provider's own.
- **Breaches:** a breach of the User's data goes up the chain: SPE provider to Genome EDIC to User Organisation, which notifies the data protection authority. A breach of the platform data, such as a leak of User accounts, is notified by the SPE provider itself. See [8.2](/concepts/roles#who-notifies-a-personal-data-breach) and [6.5](/runtime/security-incident).
- **European scope:** the Genome EDIC's sub-processing agreement template covers both roles, and the data processing agreement with the User Organisation names the SPE providers as sub-processors <GovRef id="VIII.2.1" />.
- **National scope:** every national SPE provider follows the same split. Where an SPE provider also falls under NIS2, its reporting duties come on top ([2.1](/constraints/legal)).
- **User Organisation scope:** its Users receive the provider's privacy information when they first sign in to an SPE.
- **Pages to update when accepted:** [8.2](/concepts/roles), [3.3](/context/scopes), [8.3](/concepts/security), [8.5](/concepts/logging-and-audit) and [5.2.3](/building-blocks/national/spe).

:::caution[Open point]
This reading is proposed, not confirmed. Until it is, the role of the SPE providers stays open. See [chapter 11](/risks#it-provider-role).
:::
