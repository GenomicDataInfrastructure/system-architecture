## What changes

<!-- One or two sentences. Link the issue if there is one: "Closes #12". -->

## Pages touched

<!-- e.g. docs/arc42/06-runtime-view/access/data-discovery.md -->

## Checklist

- [ ] Front matter is complete: `owner`, `reviewers`, `status`, `audience`, `governance_refs`.
- [ ] `status` is updated (`draft` → `in-review` when asking for approval; the reviewer sets `approved` and `last_reviewed`).
- [ ] Every governance requirement this page implements is listed in `governance_refs` and cited with `<GovRef id="…" />`.
- [ ] New external sources are added to `src/data/sources.json` and cited with `<Cite id="…" />`.
- [ ] The *In short* box has at most three plain-language bullets.
- [ ] Plain language: short sentences, active voice, governance terms used as defined.
- [ ] The first mention of each glossary term links to its glossary entry; the first use of each acronym is linked with `<Acronym>`.
- [ ] `npm run check` and `npm run build` pass locally (CI runs both).

## Sign-off needed

<!-- Tick if this change needs a specialist review, and request that person as reviewer. -->

- [ ] Data protection (DPO)
- [ ] Security
- [ ] Legal
- [ ] ELSI
