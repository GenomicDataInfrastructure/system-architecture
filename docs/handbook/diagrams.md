---
title: Diagrams
slug: /handbook/diagrams
sidebar_position: 4
hide_page_meta: true
---

# Diagrams

Readers look at the picture first. These rules make every diagram readable in light and dark mode, and make changes to it traceable (decision D-019).

## Rules

1. **Draw it in draw.io and save it as `.drawio.svg`.** One file is both the editable source and the image. Put it in `static/diagrams/`, and start its name with its section: `3.3-scopes.drawio.svg`, `5.2-national-scope.drawio.svg`.
2. **Choose the notation that fits the diagram,** and name it in the legend:
   - structure (context, scopes, building blocks, deployment): the [C4 model](https://c4model.com);
   - runtime scenarios: UML sequence diagrams;
   - another notation where it explains the subject better.
3. **White background.** Every diagram has a white background, so it looks the same in light and dark mode.
4. **Legend.** Every diagram has a legend with:
   - the notation, and what its symbols mean;
   - the section it belongs to, for example *Section 3.3 European, national and User Organisation scopes*;
   - the date of the last edit: *Last edited: YYYY-MM-DD*. **Update it every time you change the diagram.**
5. **Same colours for the same scopes** (see below).
6. **Show it with `<Diagram>`,** and say in the alt text what the diagram shows, for readers who can't see it:

   ```md
   <Diagram src="3.3-scopes.drawio.svg" alt="Diagram of the three scopes. …" />
   ```

7. **One diagram, one message.** Keep it readable at page width: about 960 pixels wide, text of 12 pixels or more. Readers can select a diagram to open it full size.

There is no template: each diagram has its own structure. To start a new diagram, copy an existing one to keep the background and the legend, and change the rest.

Mermaid is not used in the architecture pages any more: it gave no control over the layout, and its diagrams were hard to read in dark mode and on small screens. The handbook keeps a few simple Mermaid flowcharts.

## Scope colours

| Scope | Fill | Border |
|---|---|---|
| European | `#EAF2FB` | `#1168BD` |
| National | `#EAF6EC` | `#2E7D32` |
| User Organisation | `#FFF3E0` | `#B26A00` |

People and things outside every scope are grey (`#6B6B6B`). In C4 diagrams, organisations, bodies and software systems are blue (`#1168BD`) with white text.

## Create or edit a diagram

1. **Open the `.drawio.svg` file in draw.io:** the desktop app, the draw.io extension for VS Code, or [app.diagrams.net](https://app.diagrams.net).
2. **Edit it,** and update the section and the *Last edited* date in the legend.
3. **Save it,** then run `npm run diagrams` (it needs the draw.io desktop app). By default, draw.io saves colours that change in dark mode, which clash with the white background. The command exports every diagram again with light colours only, and keeps the editable copy inside the file.
4. **Check it:** run `npm run check`, then look at the page with `npm start` in light and dark mode, and at phone width.

## What `npm run check` verifies

For every `<Diagram>` on a page:

- the file exists in `static/diagrams/`;
- it contains an editable draw.io copy;
- it uses light colours only;
- its legend has a *Last edited* date;
- its legend names the section of the page (a warning if not).

Reviewers check the rest (see the [review checklists](/handbook/review-checklists)): the notation is right and named, the date matches the change, and the alt text says what the diagram shows.
