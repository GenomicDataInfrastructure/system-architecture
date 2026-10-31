---
title: "2. Constraints"
sidebar_label: "2. Constraints"
sidebar_position: 2
slug: /constraints
owner: "Bruno Pacheco (LNDS)"
reviewers: ["Regina Becker (LNDS)", "Kjell Petersen (UiB)"]
status: draft
wave: 2
audience: [policy, legal, elsi, security, dpo, implementer]
governance_refs: []
last_reviewed:
---

<InShort>

- Constraints are what limits the freedom of the design: laws, the rules of the 1+MG Data Governance, how the countries and the Genome EDIC are organised, and technical requirements. Each page lists them in a table, with what each one means for the architecture.
- The chapter has four pages: legal (2.1), governance principles (2.2), organisational (2.3) and technical (2.4).
- How this documentation itself is written (terms, diagrams, decision records) is described in the handbook of the taskforce that writes it.

</InShort>

## Pages in this chapter

- [2.1 Legal and regulatory constraints](/constraints/legal): which laws apply, such as the <Acronym id="GDPR" />, the <Acronym id="EHDS" /> and NIS2, and what each requires from the architecture.
- [2.2 Governance principles](/constraints/governance-principles): what the eight principles of the [1+MG Data Governance](/glossary#1mg-data-governance), the rules the 1+ Million Genomes countries agreed for sharing genomic data, require from the design, and what they rule out.
- [2.3 Organisational constraints](/constraints/organisational): what each [Genome EDIC Member Country](/glossary#genome-edic-member-country) must put in place, including the audit and certification of IT infrastructure providers, and what the [Genome EDIC](/glossary#genome-edic) decides for all countries.
- [2.4 Technical constraints](/constraints/technical): which technical constraints, such as mandatory standards, limit the design.

What is inside and outside the system, and who is responsible for what, is in [chapter 3](/context).

## How the pages map to arc42

arc42, the documentation template this architecture follows, suggests, where it helps, three types of constraint: organisational and political, technical, and conventions (FAQ C-2-2) <Cite id="arc42" />. This chapter has one page each for the constraints from the law and from the governance principles, and one each for organisational and technical constraints. Each page holds mainly one type; where a page also holds constraints of another type, the table says so.

| arc42 type | Where it is |
|---|---|
| Organisational and political | 2.1, 2.2 and 2.3 |
| Technical | 2.4, and some governance principles in 2.2, such as *Federated* (analysis only in secure processing environments) and *EHDS-proof* (formats and interfaces that fit the EHDS) |
| Conventions | The [taskforce handbook](/handbook), for how the documentation is written; conventions for building the system, such as mandatory standards, are technical constraints (2.4) |

The writing conventions, in short:

- **Terms:** governance terms are used word for word and linked to the [glossary](/glossary) on first mention; the glossary marks architecture terms, legal terms and summaries ([self-check](/handbook/choreography#8-self-check)).
- **Diagrams:** a standard notation for structure (C4), one for runtime steps (UML sequence diagrams), or another where it explains better, named in each diagram's legend ([Diagrams](/handbook/diagrams)).
- **Architecture decisions:** recorded as architecture decision records (<Acronym id="ADR">ADRs</Acronym>) in [chapter 9](/decisions), as [ADR-0001](/decisions/0001-record-architecture-decisions) proposes, with the [ADR template](/decisions/template).
