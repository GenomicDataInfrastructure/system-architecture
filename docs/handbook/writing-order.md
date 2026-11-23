---
title: Writing order
slug: /handbook/writing-order
sidebar_position: 1
hide_page_meta: true
---

# Writing order

Pages are written in six **waves**. Each wave builds on the words and decisions of the waves before it, so that we don't write the same thing twice or contradict ourselves.

```mermaid
flowchart LR
  W1["1 · Frame<br/>responsible parties, actors,<br/>principles, glossary"] --> W2["2 · Direction and legal frame<br/>goals, strategy, law,<br/>controllers, DPbDD"]
  W2 --> W3["3 · Structure<br/>technical context,<br/>level-1 building blocks"]
  W3 --> W4["4 · Behaviour and components<br/>lifecycle scenarios,<br/>level-2 building blocks"]
  W4 --> W5["5 · Crosscutting details<br/>security, identity, logging,<br/>consent, output control…"]
  W4 --> W6["6 · Deployment, quality<br/>and consolidation"]
  W5 --> W6
```

## Rules

1. **A wave can start when the pages of the waves it depends on are at least *in review*.** It doesn't need to wait for their approval. If a later page shows that an earlier one is wrong, open an issue for the earlier page. Don't work around it silently.
2. **Inside a wave, pages are independent** and can be written in parallel. Wave 4 is the largest (about 30 pages). The Genome EDIC, Member Country and User Organisation teams work on it at the same time.
3. **ADRs are written whenever a decision is taken,** in any wave. Chapter 9 is never "finished".
4. **The architecture lead can move a page to another wave.** Change `wave` in its front matter and explain why in the page's issue.

## Targets

Agreed at the taskforce kick-off (decision D-031):

| Wave | Target |
|---|---|
| 1 · Frame | December 2026 |
| 2 · Direction and legal frame | December 2026 |
| 3 to 6 | To be set; the monthly taskforce meeting reviews them |

A target is the month by which the wave's pages should be approved. The targets are also shown under each wave below.

## Why this order

- **Wave 1 fixes the vocabulary and the boundaries.** Every other page talks about responsible parties and actors. If 3.1 is unclear, every page after it will be unclear too.
- **Wave 2 fixes the direction.** The legal constraints, the solution strategy and the controller/processor map (8.2) decide what is allowed. Data protection by design and default (8.1) comes this early because it shapes every component and scenario.
- **Wave 3 draws the outline** that wave 4 fills in. It starts with five open questions that hide inside crosscutting concepts but change the structure: identity federation and authorisation, the interfaces to the identity link, trust boundaries, the catalogue metadata standard, and the connection to HealthData@EU (chapter 11; decisions D-027, D-034). Taken later, they would force chapters 5 and 6 to be redrawn.
- **Wave 4 describes behaviour and components together.** A scenario in chapter 6 and the components it uses in chapter 5 inform each other, so their owners should talk.
- **Wave 5 details the concepts** that waves 3 and 4 have already referenced, building on the wave 3 decisions. This avoids writing abstract concepts nobody uses.
- **Wave 6 consolidates:** deployment, measurable quality scenarios, risks, and a final check that every question in the reader guides has an answer.

## Progress per wave

Generated from the `wave` and `status` fields of each page.

<WritingOrder />
