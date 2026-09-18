---
title: Review checklists
slug: /handbook/review-checklists
sidebar_position: 5
hide_page_meta: true
---

# Review checklists

Use the general checklist for every review. Add the specialist checklist when the page's issue has a `needs-…` label.

Comment in the pull request. Suggest concrete wording where you can (GitHub's *suggestion* feature). Mark each comment as **must fix** or **nice to have**.

## General review (every page)

- [ ] **Correct:** every claim matches its source; the governance references point to the right sections.
- [ ] **Complete:** every question in the page's scope note is answered, or moved to another page with an issue.
- [ ] **Traceable:** `governance_refs` lists every governance section the page implements, and the page cites them where they apply.
- [ ] **Consistent:** scopes, actors and terms match the glossary and neighbouring pages. The page doesn't contradict an approved page or an ADR.
- [ ] **Readable:** a non-specialist understands the *In short* box. Sentences are short, acronyms are explained, and diagrams have a sentence saying what they show.
- [ ] **Honest about gaps:** open points are marked and have an issue. Nothing undecided is presented as decided.
- [ ] **Technology-neutral:** functions and standards, not products (decision D-007).
- [ ] **Front matter:** `owner`, `reviewers`, `audience`, `wave` and `governance_refs` are right.

## Data protection officer (`needs-dpo`)

- [ ] For each processing operation on the page, the controller, joint controllers and processors are named, and they match 8.2.
- [ ] The legal basis is stated, or linked, for each dataset or processing step.
- [ ] Data minimisation: only the data needed for the purpose is processed, and the page says how.
- [ ] Defaults are privacy-protective (data protection by default, GDPR Art. 25(2)).
- [ ] Data subjects' rights (information, objection, withdrawal of consent, rectification, erasure) can be exercised, and their effect on data in use is described.
- [ ] Logging supports accountability without collecting more personal data than needed.
- [ ] The page gives enough information for a DPIA, or says where to find it.

## Security advisor (`needs-security`)

- [ ] Trust boundaries between scopes are clear, and each crossing is authenticated and encrypted.
- [ ] Authentication and authorisation of natural persons and organisations are described, or linked to 8.4.
- [ ] Logging, monitoring and incident handling are covered, or linked to 8.5 and 6.5.
- [ ] Security requirements are measurable (link to chapter 10 scenarios).
- [ ] The page is consistent with the ISMS and certification requirements (8.3) and the HealthData@EU connection requirements.
- [ ] Nothing on the page would help an attacker (no secrets, internal hostnames or unpatched details).

## Legal expert (`needs-legal`)

- [ ] Every legal act cited is correct, and its status (adopted or draft) is stated.
- [ ] Responsibilities match the governance and the legal acts. No actor gets a task that the law gives to another.
- [ ] National decisions (access decisions by 1+MG Data Holders) are not presented as central ones.
- [ ] Contracts and agreements (terms of use, data use agreement, data processing agreements) are named where they apply.
- [ ] Draft or undecided legal points are marked as such.

## ELSI specialist (`needs-elsi`)

- [ ] The purposes of use are limited to those allowed by the governance, and excluded uses are not enabled.
- [ ] Transparency towards data subjects and the public is described (what is published, when, by whom).
- [ ] Reaching back to data subjects and incidental findings follow the governance.
- [ ] Fair access: the procedure is the same for all Users of the same type of use.
- [ ] The wording is respectful and neutral towards data subjects and patient groups.

## Implementer (for chapters 5 to 8)

- [ ] Two teams in different countries could build compatible components from this page.
- [ ] Interfaces name a standard or protocol and the data exchanged.
- [ ] Non-functional needs (performance, availability, scale) are stated or linked.
- [ ] The mapping to the GDI Starter Kit (if any) is correct.
