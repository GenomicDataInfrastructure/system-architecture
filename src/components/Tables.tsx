import React from 'react';
import Link from '@docusaurus/Link';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import governance from '@site/src/data/governance.json';
import sources from '@site/src/data/sources.json';
import pages from '@site/src/data/pages.json';
import waves from '@site/src/data/waves.json';
import {AUDIENCES, STATUSES, govAnchor} from './vocab';

type Page = {
  file: string;
  slug: string;
  title: string;
  owner?: string;
  reviewers?: string[];
  status?: string;
  wave?: number;
  audience?: string[];
  governance_refs?: string[];
  last_reviewed?: string;
};
type Section = {
  id: string;
  title: string;
  level: number;
  printed_as?: string;
  actor?: string;
  scopes?: string[];
};

const PAGES = pages as Page[];
const SECTIONS = governance.sections as Section[];

function StatusBadge({status}: {status?: string}) {
  const s = STATUSES[status ?? 'placeholder'] ?? STATUSES.placeholder;
  return <span className={`badge ${s.className}`}>{s.label}</span>;
}

/** Pages that reference exactly this governance section. */
function pagesFor(id: string): Page[] {
  return PAGES.filter((p) => (p.governance_refs ?? []).includes(id));
}

/** A section counts as covered only when a page with real content (not a placeholder) references it. */
const hasContent = (p: Page) => (p.status ?? 'placeholder') !== 'placeholder';

const SCOPE_LABEL: Record<string, string> = {
  european: 'European',
  national: 'National',
  local: 'Local',
  user: 'User side',
};

/**
 * Every section of the 1+MG Data Governance, with the architecture pages that implement it.
 * The detailed responsibility sections (level 3, chapters V–VIII) are the requirements to cover.
 */
export function TraceabilityMatrix() {
  const requirementSections = SECTIONS.filter(
    (s) => s.level === 3 && /^(V|VI|VII|VIII)\./.test(s.id),
  );
  const brokenLinks = useBrokenLinks();
  SECTIONS.forEach((s) => brokenLinks.collectAnchor(govAnchor(s.id)));
  const covered = requirementSections.filter((s) => pagesFor(s.id).some(hasContent)).length;
  const planned = requirementSections.filter(
    (s) => pagesFor(s.id).length > 0 && !pagesFor(s.id).some(hasContent),
  ).length;
  const gaps = requirementSections.length - covered - planned;
  return (
    <>
      <p>
        <strong>Coverage of the {requirementSections.length} responsibility sections (chapters V–VIII):</strong>{' '}
        <span className="badge badge--success">Covered {covered}</span>{' '}
        <span className="badge badge--secondary">Planned {planned}</span>{' '}
        <span className="badge badge--danger">Gap {gaps}</span>
      </p>
      <p className="muted">
        Covered: referenced by a page with content (draft, in review or approved). Planned: referenced only by
        placeholder pages. Gap: no page references it yet.
      </p>
      <table className="trace-table">
        <thead>
          <tr>
            <th>DG section</th>
            <th>Title</th>
            <th>Scope</th>
            <th>Implemented in</th>
          </tr>
        </thead>
        <tbody>
          {SECTIONS.map((s) => {
            const impl = pagesFor(s.id);
            const isRequirement = s.level === 3 && /^(V|VI|VII|VIII)\./.test(s.id);
            return (
              <tr key={s.id} id={govAnchor(s.id)} className={`trace-level-${s.level}`}>
                <td className="nowrap">{s.id}</td>
                <td>
                  {s.title}
                  {s.printed_as && <span className="muted"> (numbered {s.printed_as} in the published document)</span>}
                </td>
                <td>{(s.scopes ?? []).map((x) => SCOPE_LABEL[x] ?? x).join(', ')}</td>
                <td>
                  {impl.map((p, i) => (
                    <span key={p.slug} className={hasContent(p) ? undefined : 'muted'}>
                      {i > 0 && ', '}
                      <Link to={p.slug}>{p.title}</Link>
                      {!hasContent(p) && ' (planned)'}
                    </span>
                  ))}
                  {isRequirement && impl.length === 0 && <span className="gap">Gap: not yet covered</span>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

/** One row per page: owner, reviewers, status, last review. Built from front matter. */
export function DocumentStatus() {
  const counts = PAGES.reduce<Record<string, number>>((acc, p) => {
    const k = p.status ?? 'placeholder';
    acc[k] = (acc[k] ?? 0) + 1;
    return acc;
  }, {});
  return (
    <>
      <p>
        {Object.entries(STATUSES).map(([k, v]) => (
          <span key={k} className="status-count">
            <span className={`badge ${v.className}`}>{v.label}</span> {counts[k] ?? 0}
          </span>
        ))}
      </p>
      <table>
        <thead>
          <tr>
            <th>Page</th>
            <th>Wave</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Reviewers</th>
            <th>Last review</th>
            <th>Audience</th>
          </tr>
        </thead>
        <tbody>
          {PAGES.map((p) => (
            <tr key={p.slug}>
              <td>
                <Link to={p.slug}>{p.title}</Link>
              </td>
              <td>{p.wave || '—'}</td>
              <td>
                <StatusBadge status={p.status} />
              </td>
              <td>{p.owner || 'unassigned'}</td>
              <td>{p.reviewers?.length ? p.reviewers.join(', ') : 'unassigned'}</td>
              <td className="nowrap">{p.last_reviewed || '—'}</td>
              <td>{(p.audience ?? []).map((a) => AUDIENCES[a] ?? a).join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

type Source = {
  id: string;
  short: string;
  title: string;
  publisher?: string;
  date?: string;
  url?: string;
  doi?: string;
  status?: string;
  note?: string;
};

/** The source register: every document the architecture cites. */
export function SourceRegister() {
  const brokenLinks = useBrokenLinks();
  (sources.sources as Source[]).forEach((s) => brokenLinks.collectAnchor(`src-${s.id}`));
  return (
    <table>
      <thead>
        <tr>
          <th>Key</th>
          <th>Document</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {(sources.sources as Source[]).map((s) => (
          <tr key={s.id} id={`src-${s.id}`}>
            <td className="nowrap">{s.short}</td>
            <td>
              {s.url ? <Link to={s.url}>{s.title}</Link> : s.title}
              {s.publisher && <span className="muted"> — {s.publisher}</span>}
              {s.doi && <span className="muted"> — DOI {s.doi}</span>}
              {s.note && <div className="muted">{s.note}</div>}
            </td>
            <td className="nowrap">{s.date ?? ''}</td>
            <td>{s.status ?? ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

type Wave = {id: number; name: string; goal: string; depends_on: number[]};

/** Pages grouped by writing wave, with progress per wave. Built from the `wave` front matter field. */
export function WritingOrder() {
  const brokenLinks = useBrokenLinks();
  return (
    <>
      {(waves.waves as Wave[]).map((w) => {
        brokenLinks.collectAnchor(`wave-${w.id}`);
        const inWave = PAGES.filter((p) => p.wave === w.id);
        const done = inWave.filter((p) => p.status === 'approved').length;
        const inReview = inWave.filter((p) => p.status === 'in-review').length;
        return (
          <section key={w.id} id={`wave-${w.id}`} className="wave">
            <h3>
              Wave {w.id} — {w.name}
            </h3>
            <p>
              {w.goal}{' '}
              {w.depends_on.length > 0 && (
                <span className="muted">Starts when wave {w.depends_on.join(' and ')} pages are at least in review.</span>
              )}
            </p>
            <p>
              <span className="badge badge--success">Approved {done}</span>{' '}
              <span className="badge badge--info">In review {inReview}</span>{' '}
              <span className="muted">of {inWave.length} pages</span>
            </p>
            <table>
              <thead>
                <tr>
                  <th>Page</th>
                  <th>Status</th>
                  <th>Owner</th>
                  <th>Reviewers</th>
                </tr>
              </thead>
              <tbody>
                {inWave.map((p) => (
                  <tr key={p.slug}>
                    <td>
                      <Link to={p.slug}>{p.title}</Link>
                    </td>
                    <td>
                      <StatusBadge status={p.status} />
                    </td>
                    <td>{p.owner && p.owner !== 'TBD' ? p.owner : 'unassigned'}</td>
                    <td>{p.reviewers?.length ? p.reviewers.join(', ') : 'unassigned'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        );
      })}
    </>
  );
}
