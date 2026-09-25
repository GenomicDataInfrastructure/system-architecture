---
title: Taskforce handbook
slug: /handbook
sidebar_position: 0
hide_page_meta: true
---

# Taskforce handbook

This handbook is for the members of the system architecture taskforce: the people who write and review the pages of this site. Readers of the architecture don't need it.

| I want to… | Read |
|---|---|
| Know which pages to write first | [Writing order](/handbook/writing-order) |
| Know what to do, step by step, from picking up a page to getting it approved | [Page choreography](/handbook/choreography) |
| Know what a good page of a given type contains | [Page recipes](/handbook/recipes) |
| Draw or edit a diagram | [Diagrams](/handbook/diagrams) |
| Find sources, examples and best practices | [Sources, examples and best practices](/handbook/sources-and-examples) |
| Review a page | [Review checklists](/handbook/review-checklists) |

## Roles

| Role | Who | Does what |
|---|---|---|
| **Owner** | One taskforce member per page | Writes the page, finds the sources, organises the review, and answers reviewers' comments. Is the assignee of the page's GitHub issue and the `owner` in its front matter. |
| **Reviewer** | One or two taskforce members per page | Checks that the page is correct, complete and readable, then approves the pull request. Listed in `reviewers`. |
| **Specialist reviewer** | A DPO, security advisor, legal expert or ELSI specialist, when needed | Checks the page against their own requirements, using the matching [review checklist](/handbook/review-checklists). Requested with a `needs-…` label. |
| **Architecture lead** | Coordinates the taskforce | Plans the waves, settles disagreements, keeps pages consistent, decides when an ADR is needed, and tags releases. |

A person can own some pages and review others. Nobody reviews their own page.

## Where things are recorded

- **The page's GitHub issue** holds the plan and the discussion: owner (assignee), reviewers, the sources found, open questions.
- **The page's front matter** holds its current state: `owner`, `reviewers`, `status`, `wave`, `governance_refs`, `last_reviewed`.
- **The pull request** holds the review: comments, changes and approvals.

The [Document status](/appendix/document-status) and [Writing order](/handbook/writing-order) pages are generated from the front matter, so they are always up to date.
