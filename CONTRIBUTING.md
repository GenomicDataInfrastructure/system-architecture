# Contributing

This architecture is written by a taskforce. Every change goes through a pull request, so that we always know **who wrote what, who reviewed it, and when**.

**New to the taskforce? Start with the [Taskforce handbook](https://genomicdatainfrastructure.github.io/system-architecture/handbook)** (`docs/handbook/`): the writing order, a step-by-step choreography for each page, recipes per kind of page, the diagram rules, where to find sources, and the review checklists. This file is the short version.

## How ownership and review are tracked

| What | Where it is recorded |
|---|---|
| Who is responsible for a page | The **assignee** of the page's GitHub issue, and `owner` in the page's front matter |
| Who must review it | `reviewers` in the front matter; the owner requests them on the pull request |
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
wave: 4                           # writing wave 1–6 (see docs/handbook/writing-order.md)
audience: [elsi, dpo, implementer] # policy | legal | elsi | security | dpo | implementer
governance_refs: ["VII.2.1", "VII.2.3"]  # section IDs from src/data/governance.json
last_reviewed: 2026-10-15         # set when approved
---
```

`npm run check` validates these fields. CI runs it on every pull request.

## Workflow for a page

The full step-by-step version, with who does what and when each step is done, is the [page choreography](https://genomicdatainfrastructure.github.io/system-architecture/handbook/choreography).

1. **Pick up the page.** Assign yourself the page's GitHub issue (titled `[page] <page title>`), or open one with the *Page task* template. Set `owner` and `status: draft` in the front matter, and name the reviewers in the issue.
2. **Write** on a branch. Keep the structure of every page:
   - the `<InShort>` box: at most three plain-language bullets;
   - the content, citing governance sections with `<GovRef id="VII.2.3" />` and other sources with `<Cite id="gdi-d3.4" />`.
3. **Ask for review.** Set `status: in-review`, open a pull request that says `Closes #<issue number>`, and fill in the checklist. Request the reviewers listed in `reviewers` on the pull request. Add a `needs-dpo`, `needs-security`, `needs-legal` or `needs-elsi` label to the issue when a specialist must review.
4. **Review.** Reviewers comment in the pull request. When satisfied, the reviewer sets `status: approved` and `last_reviewed` to today, and approves the pull request.
5. **Merge.** `main` accepts a pull request once it has at least one approval and CI passes. Merging closes the issue.

## Writing rules

- Write for a reader who is not an IT specialist: short sentences, active voice, one idea per paragraph.
- Use the governance terms exactly as defined (e.g. *1+MG Data Holder*, *Genome EDIC CC*, *key-coded identifier*).
- Link the first mention of each glossary term on a page to its entry: `[1+MG Data Holder](/glossary#1mg-data-holder)`. Readers often land on a page directly, and these terms say who is responsible. Where a concept page explains a term in more depth, link to it instead (the types of dataset link to 8.12). Leave headings and the *In short* box without links (decision D-022).
  - The anchor is the glossary heading in lower case, with spaces turned into hyphens and other characters dropped: *1+MG Data Holder* → `1mg-data-holder`. `npm run build` fails on a link to an anchor that doesn't exist.
- Link the first use of each acronym on a page with `<Acronym id="SPE" />`: readers see its meaning as a tooltip, and it links to the glossary's acronym table. Add new acronyms to `src/data/acronyms.json` (decision D-021). `<Acronym>` is for acronyms only; an acronym inside a glossary term (*1+MG NCP*) is covered by the term's link.
- Say which scope (European, national, User Organisation) a component or step belongs to. In chapter 7, say at which level (central, national, local) it runs.
- Prefer a diagram plus a short text over long prose. Diagrams follow the [diagram rules](https://genomicdatainfrastructure.github.io/system-architecture/handbook/diagrams) (decision D-019): draw.io, a white background, and a legend with the section and the date of the last edit. Run `npm run diagrams` after editing one.
- Interfaces first: describe a component by its function, interfaces and standards, then name its reference implementation (GDI Starter Kit or GDI central service). A country may use other tools that meet the same interfaces (decisions D-007, D-020).

## Page issues

Every page has one GitHub issue, titled `[page] <page title>`. Its labels give the chapter, scope, wave and any specialist review (`needs-dpo`, `needs-security`, `needs-legal`, `needs-elsi`). Useful searches:

| To find | Search in *Issues* |
|---|---|
| Pages without an owner | `is:issue is:open label:page no:assignee` |
| The pages of a wave | `is:issue is:open label:page label:wave-1` |
| The pages of a chapter | `is:issue label:page label:chapter-06` |
| The pages of a scope | `is:issue label:page label:scope-national` |
| Pages waiting for a DPO review | `is:issue is:open label:needs-dpo` |

When pages are added, the architecture lead creates their issues with `scripts/github/setup.mjs`. The script skips issues that already exist, and its header lists all its commands.

```bash
DRY_RUN=1 node scripts/github/setup.mjs issues   # preview: prints the gh commands
node scripts/github/setup.mjs issues             # creates the missing issues
```

## Releases

The architecture lead releases a version when a set of pages is approved, or when the baseline changes (for example, a new version of the governance).

1. In a pull request, move the `[Unreleased]` notes in `CHANGELOG.md` under a heading `## [0.N.0] - YYYY-MM-DD` (the day you will tag), and add its compare link at the bottom of the file.
2. Once it is merged, tag `main` with a signed tag and push it: `git tag -s v0.N -m "v0.N: <summary>"`, then `git push origin v0.N`.
3. On GitHub, publish a release for the tag, with that changelog section as the release notes.
4. Optional: to get a DOI, switch on the Zenodo–GitHub integration for this repository *before* publishing the release.
