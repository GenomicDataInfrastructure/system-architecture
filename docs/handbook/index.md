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
| Know how pages are drafted with AI assistance, and which roles review them | [Drafting and review roles](/handbook/drafting-roles) |

## Roles

| Role | Who | Does what |
|---|---|---|
| **Owner** | One taskforce member per page | Writes the page, finds the sources, organises the review, and answers reviewers' comments. Is the assignee of the page's GitHub issue and the `owner` in its front matter. |
| **Reviewer** | One to three taskforce members per page, assigned by the architecture lead | Checks that the page is correct, complete and readable, then approves the pull request. Listed in `reviewers` by name and affiliation. |
| **Specialist reviewer** | A DPO, security advisor, legal expert or ELSI specialist, when needed | Checks the page against their own requirements, using the matching [review checklist](/handbook/review-checklists). Listed in `reviewers` with `specialist`, and requested with a `needs-…` label. |
| **Architecture lead** | Coordinates the taskforce | Plans the waves, assigns the owner and reviewers of each page, settles disagreements, keeps pages consistent, decides when an ADR is needed, chairs the monthly meeting, keeps the minutes, and tags releases. |

A person can own some pages and review others. Nobody reviews their own page.

## Where things are recorded

- **The page's GitHub issue** holds the plan and the discussion: owner (assignee), reviewers, the sources found, open questions.
- **The page's front matter** holds its current state: `owner`, `reviewers` (names and affiliations), `status`, `wave`, `governance_refs`, `last_reviewed`.
- **The pull request** holds the review: comments, changes and approvals.

The [Document status](/appendix/document-status) and [Writing order](/handbook/writing-order) pages are generated from the front matter, so they are always up to date.

## Meetings and decisions {#meetings}

- **The GDI Architecture Taskforce meeting** takes place once a month, in the monthly slot of GDI Pillar II, from 14:00 to 15:00 CET. The first one is on 4 November 2026. It reviews the status of the taskforce; it is for discussing and unblocking, not for approving pages.
- **The agenda** is shared with its links two working days before: status per wave, pull requests ready for a decision, proposed ADRs, open questions, actions.
- **Minutes** of every taskforce meeting go into one rolling minutes document, kept by the architecture lead and shared with the taskforce after each meeting.
- **Pages are approved in pull requests,** by their reviewers ([page choreography](/handbook/choreography)).
- **Architecture decisions** are recommended by the taskforce as ADRs. The GDI Management Board reviews them at its cross-pillar meetings ([page recipes](/handbook/recipes#architecture-decision-record); decision D-030).
