# GitHub set-up

One-off set-up of `GenomicDataInfrastructure/system-architecture`. Roles and responsibilities are tracked in two places only (decision D-011):

- **GitHub issues:** one issue per page. The **assignee** is the page owner. Reviewers are named in the issue and requested on the pull request.
- **The page itself:** `owner`, `reviewers`, `status` and `last_reviewed` in the front matter. The site shows them at the top of each page and on the *Document status* page.

There are no review teams, no CODEOWNERS file and no Project board for now. We can add them later if the taskforce grows.

| Step | Who | Status |
|---|---|---|
| 1. Install and log in to the GitHub CLI | Architecture lead | ☐ |
| 2. Create labels and one issue per page | Architecture lead (repo admin) | ☐ |
| 3. Protect `main` | Architecture lead (repo admin) | ☐ |
| 4. Tag `v0.1` | Architecture lead | ☐ |

## 1. Install and log in to the GitHub CLI

```bash
brew install gh          # if not installed
gh auth login            # GitHub.com → HTTPS → Login with a web browser
gh auth status           # check that you are logged in
```

## 2. Labels and issues

Run from the repository root, after `npm install`. Preview first with `DRY_RUN=1`: it prints the commands without running them.

```bash
DRY_RUN=1 node scripts/github/setup.mjs issues | less   # preview
node scripts/github/setup.mjs labels                    # about 24 labels
node scripts/github/setup.mjs issues                    # one issue per page (about 76)
```

This creates:

- **Labels:** `page`; `chapter-01` … `chapter-12`, `chapter-readers`, `chapter-appendix`; `scope-european`, `scope-national`, `scope-local`; `needs-dpo`, `needs-security`, `needs-legal`, `needs-elsi`; `reader-question`.
- **One issue per page**, titled `[page] <page title>`. Each issue lists the page file, the live link, the audience, the governance sections, the questions the page must answer, and a checklist of the steps from owner to approval.

The script is safe to run again. It skips issues that already exist, so run it again whenever new pages are added.

**Useful issue views** (bookmark them):

- Pages without an owner: `is:issue is:open label:page no:assignee`
- One chapter: `is:issue label:page label:chapter-06`
- One scope: `is:issue label:page label:scope-national`
- Pages waiting for a DPO review: `is:issue is:open label:needs-dpo`

## 3. Protect `main`

```bash
node scripts/github/setup.mjs protect
```

This protects `main`:

- changes only through pull requests, with at least one approval;
- the *Check* (`check`) and *Run Tests* (`reuse`) workflows must pass, and the branch must be up to date with `main`;
- stale approvals are dismissed when new commits are pushed;
- all review conversations must be resolved;
- no force pushes, and the branch can't be deleted.

Admins can still bypass the rules in an emergency (`enforce_admins: false`). If your organisation requires signed commits, also enable *Require signed commits* in *Settings → Branches → main*.

## 4. Tag the skeleton as `v0.1`

```bash
git tag -a v0.1 -m "Phase 0: arc42 skeleton, reader guides, traceability tooling"
git push origin v0.1
```

Then, on GitHub, go to *Releases → Draft a new release*, choose `v0.1` and use the `Unreleased` section of `CHANGELOG.md` as the release notes. Move those notes under a `## [0.1.0] - YYYY-MM-DD` heading in `CHANGELOG.md` in the next pull request.

Optional: enable the Zenodo–GitHub integration (zenodo.org → GitHub → switch on `system-architecture`) *before* publishing the release, so that `v0.1` gets a DOI.
