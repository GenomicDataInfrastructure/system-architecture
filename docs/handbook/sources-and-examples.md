---
title: Sources, examples and best practices
slug: /handbook/sources-and-examples
sidebar_position: 4
hide_page_meta: true
---

# Sources, examples and best practices

Where to look when you write a page, how to judge what you find, and how to record it.

## Where to look

### 1. The governance and the law (always)

| Source | Where | Notes |
|---|---|---|
| 1+MG Data Governance master document (2025-12-22) | Taskforce shared folder (not public) | Start from the sections in `governance_refs`. Cite by section number, summarise, and quote only short passages (decision D-012). |
| EHDS Regulation (EU) 2025/327 | [EUR-Lex](http://data.europa.eu/eli/reg/2025/327/oj) | Chapter IV (secondary use), Art. 73 (SPE), Art. 75 (HealthData@EU). |
| Draft HealthData@EU implementing act | Taskforce shared folder | Cite as a draft (decision D-008). Don't copy its text into the repository. |
| GDPR (EU) 2016/679 | [EUR-Lex](http://data.europa.eu/eli/reg/2016/679/oj) | Art. 5, 25, 26, 28, 32–36 are the most relevant. |
| NIS2 Directive (EU) 2022/2555 | [EUR-Lex](http://data.europa.eu/eli/dir/2022/2555/oj) | Incident notification, security measures. |

### 2. Project deliverables (per chapter, decision D-014)

| Source | Where |
|---|---|
| GDI deliverables | [zenodo.org/communities/gdi](https://zenodo.org/communities/gdi/records) |
| B1MG deliverables | [zenodo.org/communities/b1mg](https://zenodo.org/communities/b1mg/records) |
| B1MG+ deliverables | [zenodo.org/communities/b1mgplus](https://zenodo.org/communities/b1mgplus/records) |
| GDI Starter Kit (reference implementation) | [github.com/GenomicDataInfrastructure/starter-kit](https://github.com/GenomicDataInfrastructure/starter-kit) |
| 1+MG Framework (maturity model, guidelines) | [framework.onemilliongenomes.eu](https://framework.onemilliongenomes.eu) |

On Zenodo, search inside a community for the topic of your page (for example *"secure processing environment"* or *"data access committee"*). Prefer the **latest version** of a deliverable, and check its date against the governance version.

### 3. Standards

GA4GH (Beacon v2, Passports and Visas, DUO, htsget, Data Connect), HealthDCAT-AP and DCAT-AP, HL7 FHIR, ODRL, DPV, and ISO/IEC 27001 and 27701. Cite the version you rely on.

### 4. Architecture guidance

- arc42 documentation per chapter: `https://docs.arc42.org/section-N/`
- arc42 FAQ: [faq.arc42.org](https://faq.arc42.org)
- arc42 examples: [arc42.org/examples](https://arc42.org/examples)
- C4 model, for diagram levels: [c4model.com](https://c4model.com)

### 5. Comparable infrastructures (examples and best practices)

Look at how other European infrastructures solve the same problem, for example national health data access bodies and permit authorities (such as Findata in Finland or the Health Data Hub in France), the ELIXIR and EOSC services, the TEHDAS2 guidelines, and the Data Spaces Support Centre blueprint. Use them as **examples**, not as requirements: say what we reuse and what doesn't fit Genome EDIC, and why.

## How to judge a source

Before you cite a source, check these five things and note them in the page's issue:

| Check | Question |
|---|---|
| Authority | Who published it? Is it an official deliverable, a legal act, a standard, or an opinion? |
| Status | Adopted, final, draft, or superseded? |
| Date | Is it newer than the governance version we follow? If it's older, has the governance changed since? |
| Relevance | Does it describe the Genome EDIC set-up, or a different one (for example, before the move to national access decisions)? |
| Consistency | Does it contradict the governance? If so, the governance wins. Raise the conflict in the issue. |

## How to record sources

1. Add the source to `src/data/sources.json`, with `id`, `short`, `title`, `publisher`, `date`, `url` or `doi`, and `status: "candidate"`.
2. Cite it in the page with `<Cite id="…" />`.
3. The architecture lead changes `candidate` to `published`, `adopted` or `draft` once the taskforce has checked it.

**Examples and best practices** that you don't cite as an authority go in the text as a short note, with a link. For example: *"Example: Findata separates permit decisions from the secure processing environment provider."*

## Using an AI assistant

AI assistants can speed up the search and the first draft. They can't replace reading the sources. Give the assistant `AGENTS.md` and the page file, then ask, for example:

- *"List the responsibilities in governance sections VII.2.1–VII.2.6 that affect the architecture of data discovery. For each, quote the governance section number."*
- *"Search the GDI, B1MG and B1MG+ Zenodo communities for deliverables about subject-level data discovery. For each, give the title, date, DOI and one line on its relevance. Mark anything published before December 2025."*
- *"Find two examples of European health data infrastructures that provide aggregate-only discovery. Say what each does and what would not fit a federated set-up where access decisions are national."*
- *"Draft the steps table of this runtime scenario, using only these sources: …. Mark every step you are unsure about."*

Check every claim, citation and link the assistant produces. You remain the author.
