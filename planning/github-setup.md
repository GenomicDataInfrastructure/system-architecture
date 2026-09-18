# GitHub set-up

One-off set-up of `GenomicDataInfrastructure/system-architecture` so that the taskforce can track who writes and reviews each page. Tick the steps as you go.

| Step | Who | Status |
|---|---|---|
| 1. Request the review teams | Architecture lead → org owners | ☐ |
| 2. Install and log in to the GitHub CLI | Architecture lead | ☐ |
| 3. Create labels, Project board and one issue per page | Architecture lead (repo admin) | ☐ |
| 4. Protect `main` | Architecture lead (repo admin) | ☐ |
| 5. Switch on code-owner review (after step 1) | Architecture lead (repo admin) | ☐ |
| 6. Tag `v0.1` | Architecture lead | ☐ |

## 1. Request the review teams (org owners)

Only GenomicDataInfrastructure org owners can create teams. Send them this request.

> **Subject:** Teams for the GDI system-architecture repository
>
> Hello,
>
> For the Genome EDIC system architecture (https://github.com/GenomicDataInfrastructure/system-architecture) we assign reviewers through GitHub teams in `.github/CODEOWNERS`. Could you please:
>
> 1. Create the parent team **`sysarch-taskforce`** and give it **Write** access to the `system-architecture` repository.
> 2. Create these child teams under `sysarch-taskforce`. They inherit its Write access, which CODEOWNERS needs.
>
> | Team | Reviews | Members (GitHub handles) |
> |---|---|---|
> | `sysarch-leads` | Overall structure, chapters 1, 3, 4, 9, 11, tooling | @brunopacheco1, … |
> | `sysarch-legal` | Legal constraints, governance catalogue | … |
> | `sysarch-elsi` | Runtime scenarios (ethics, transparency, reaching back) | … |
> | `sysarch-dpo` | Data protection concepts | … |
> | `sysarch-security` | Security, deployment, quality requirements | … |
> | `sysarch-european` | European scope building blocks | … |
> | `sysarch-national` | National scope building blocks | … |
> | `sysarch-local` | Local scope building blocks | … |
>
> 3. Make @brunopacheco1 a **maintainer** of these teams, so that members can be added without bothering you.
>
> Thank you!

Until the teams exist, GitHub shows the CODEOWNERS lines as errors and requests no reviewers. Pull requests still work.

## 2. Install and log in to the GitHub CLI

```bash
brew install gh                   # if not installed
gh auth login                     # GitHub.com → HTTPS → Login with a web browser
gh auth refresh -s project        # the Project board needs the extra "project" permission
gh auth status                    # check: logged in, scopes include "project"
```

## 3. Labels, Project board and issues

Run from the repository root, after `npm install`. Preview first with `DRY_RUN=1`: it prints the commands without running them.

```bash
DRY_RUN=1 node scripts/github/setup.mjs issues | less   # preview
node scripts/github/setup.mjs labels                    # about 24 labels
node scripts/github/setup.mjs issues                    # the Project board plus one issue per page (about 76)
```

This creates:

- **Labels:** `page`; `chapter-01` … `chapter-12`, `chapter-readers`, `chapter-appendix`; `scope-european`, `scope-national`, `scope-local`; `needs-dpo`, `needs-security`, `needs-legal`, `needs-elsi`; `reader-question`.
- **An organisation Project called "System architecture"**, linked to the repository, with the fields *Page status* (Placeholder / Draft / In review / Approved), *Chapter*, *Scope*, *Reviewers*, *Due date* and *Page file*.
- **One issue per page**, titled `[page] <page title>`. Each issue lists the page file, the live link, the audience, the governance sections, and the questions the page must answer. Each is added to the board with its chapter, scope and status filled in.

The script is safe to run again. It skips issues that already exist, so run it again whenever new pages are added.

**If `gh project create` fails with a permission error**, the org doesn't let members create Projects. Ask an org owner to create an empty Project called "System architecture" and give you admin access to it, then run the command again.

**After the script:** open the Project on GitHub and add views:

- *Board*, grouped by **Page status**: the day-to-day view.
- *Table*, grouped by **Chapter**, with the columns Assignees, Reviewers, Page status and Due date: for taskforce meetings.
- *Table*, filtered to `Scope: National`: the national scope team's view.

## 4. Protect `main`

```bash
node scripts/github/setup.mjs protect
```

This protects `main`:

- changes only through pull requests, with at least one approval;
- the *Check* (`check`) and *Run Tests* (`reuse`) workflows must pass, and the branch must be up to date with `main`;
- stale approvals are dismissed when new commits are pushed;
- all review conversations must be resolved;
- no force pushes, and the branch can't be deleted.

**Code-owner review stays off until the `sysarch-leads` team exists**, so pull requests aren't blocked while the teams are missing. Admins can still bypass the rules in an emergency (`enforce_admins: false`).

If your organisation requires signed commits, also enable *Require signed commits* in *Settings → Branches → main*.

## 5. Switch on code-owner review (after step 1)

When the org owners confirm the teams exist, run the same command again:

```bash
node scripts/github/setup.mjs protect     # now reports "code-owner review ON"
```

Then open any file listed in `.github/CODEOWNERS` on GitHub and check that no errors are shown.

## 6. Tag the skeleton as `v0.1`

```bash
git tag -a v0.1 -m "Phase 0: arc42 skeleton, reader guides, traceability tooling"
git push origin v0.1
```

Then, on GitHub, go to *Releases → Draft a new release*, choose `v0.1` and use the `Unreleased` section of `CHANGELOG.md` as the release notes. Move those notes under a `## [0.1.0] - YYYY-MM-DD` heading in `CHANGELOG.md` in the next pull request.

Optional: enable the Zenodo–GitHub integration (zenodo.org → GitHub → switch on `system-architecture`) *before* publishing the release, so that `v0.1` gets a DOI.
