# Genome EDIC System Architecture

The system architecture of the Genome EDIC, written with the [arc42](https://arc42.org) template and published as a [Docusaurus](https://docusaurus.io) site.

It describes the European, national and User Organisation parts of the Genome EDIC infrastructure and shows how they implement the **1+MG Data Governance** (Genome EDIC Secondary Use Framework) and **data protection by design and by default**.

> Working draft of the architecture taskforce. Not an adopted document.
>
> Published at <https://genomicdatainfrastructure.github.io/system-architecture/>

## Run the site locally

You need [Node.js](https://nodejs.org) 20 or later.

```bash
npm install
npm start          # live preview at http://localhost:3000/system-architecture/
npm run check      # validate page front matter (owner, reviewers, status, governance references)
npm run build      # build the static site into build/ (fails on broken links)
```

The site shows each page's last author and date from Git history, so it needs at least one commit to build.

## Repository layout

| Path | Contents |
|---|---|
| `docs/arc42/` | The twelve arc42 chapters. Chapter 5 is split into the European, national and User Organisation scopes; chapter 7 into the central, national and local levels. |
| `docs/readers/` | Reader guides: questions per audience, linked to the answering sections. |
| `docs/handbook/` | Taskforce handbook: writing order, page choreography, recipes, sources, review checklists. |
| `docs/appendix/` | Governance traceability, sources, document status, national profile template. |
| `src/data/governance.json` | Catalogue of the governance document's sections (IDs used in `governance_refs` and `<GovRef>`). |
| `src/data/sources.json` | Source register (cited with `<Cite>`). |
| `src/components/`, `src/theme/` | Page metadata box, `<InShort>`, `<GovRef>`, `<Cite>`, generated tables. |
| `scripts/collect-page-meta.mjs` | Collects front matter into `src/data/pages.json` and validates it. |
| `planning/` | Plan, documentation decisions, session log. Not published. |
| `AGENTS.md` | Briefing for contributors and AI coding agents. Read it first. |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This repository follows the [REUSE](https://reuse.software/) specification; `REUSE.toml` states the license of every file.

- Documentation, data and images: [CC-BY-4.0](LICENSES/CC-BY-4.0.txt)
- Source code and configuration: [Apache-2.0](LICENSES/Apache-2.0.txt)

Please follow our [Code of Conduct](CODE_OF_CONDUCT.md).
