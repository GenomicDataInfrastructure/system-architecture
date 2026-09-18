# Contributing

This architecture is written by a taskforce. Every change goes through a pull request, so that we always know **who wrote what, who reviewed it, and when**.

## How ownership and review are tracked

| What | Where it is recorded |
|---|---|
| Who is responsible for a page | `owner` in the page's front matter |
| Who must review it | `reviewers` in the front matter, and `.github/CODEOWNERS` (GitHub requests them automatically) |
| Where the page stands | `status` in the front matter: `placeholder` → `draft` → `in-review` → `approved` |
| When it was last reviewed | `last_reviewed` in the front matter (set by the reviewer on approval) |
| Who changed what, and when | Git history; each page shows its last author and date at the bottom |
| Who approved a change, and when | Pull request approvals on GitHub (timestamped) |
| Which version readers see | Tagged releases (`v0.1`, `v0.2`, … `v1.0`) |

The *Document status* page of the site (`docs/appendix/document-status.md`) lists all pages with their owner, reviewers and status. It is generated from the front matter.

## Page front matter

```yaml
---
title: "6.2.2 Data discovery"
slug: /runtime/access/discovery
sidebar_position: 2
owner: "@github-handle"
reviewers: ["@github-handle", "@github-handle"]
status: draft                     # placeholder | draft | in-review | approved
audience: [elsi, dpo, implementer] # policy | legal | elsi | security | dpo | implementer
governance_refs: ["VII.2.1", "VII.2.3"]  # section IDs from src/data/governance.json
last_reviewed: 2026-10-15         # set when approved
---
```

`npm run check` validates these fields. CI runs it on every pull request.

## Workflow for a page

1. **Pick up the page.** Assign yourself the GitHub issue for the page (or open one with the *Page task* template). Set `owner` and `status: draft`.
2. **Write** on a branch. Keep the structure of every page:
   - the `<InShort>` box: at most three plain-language bullets;
   - the content, citing governance sections with `<GovRef id="VII.2.3" />` and other sources with `<Cite id="gdi-d3.4" />`.
3. **Ask for review.** Set `status: in-review`, open a pull request and fill in the checklist. Request specialist reviewers (DPO, security, legal, ELSI) where the checklist says so.
4. **Review.** Reviewers comment in the pull request. When satisfied, the reviewer sets `status: approved` and `last_reviewed` to today, and approves the pull request.
5. **Merge.** Branch protection requires a code-owner approval and passing CI.

## Writing rules

- Write for a reader who is not an IT specialist: short sentences, active voice, one idea per paragraph.
- Explain every acronym on first use, or link to the glossary (`docs/arc42/12-glossary/index.md`).
- Use the governance terms exactly as defined (e.g. *1+MG Data Holder*, *Genome EDIC CC*, *key-coded identifier*).
- Say which scope (European, national, local) a component or step belongs to.
- Prefer a diagram (Mermaid) plus a short text over long prose.
- Name functions and standards, not products. Products appear only as examples or in the reference implementation mapping (decision D-007).

## Releases

When a set of pages is approved, the architecture lead tags a release (`git tag v0.2`), writes release notes on GitHub, and (optionally) archives it on Zenodo to get a DOI.

## One-time GitHub set-up (repository admin)

See [planning/github-setup.md](planning/github-setup.md): review teams, labels, Project board, one issue per page, branch protection and the first release.
