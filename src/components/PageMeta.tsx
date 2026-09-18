import React from 'react';
import Link from '@docusaurus/Link';
import GovRef from './GovRef';
import {AUDIENCES, STATUSES} from './vocab';

export type PageFrontMatter = {
  owner?: string;
  reviewers?: string[];
  status?: string;
  wave?: number;
  audience?: string[];
  governance_refs?: string[];
  last_reviewed?: string;
  hide_page_meta?: boolean;
};

/**
 * Header box rendered automatically on every page from its front matter:
 * status, owner, reviewers, last review, audiences and implemented governance sections.
 */
export default function PageMeta({fm}: {fm: PageFrontMatter}) {
  if (fm.hide_page_meta) return null;
  const status = STATUSES[fm.status ?? 'placeholder'] ?? STATUSES.placeholder;
  const audiences = fm.audience ?? [];
  const refs = fm.governance_refs ?? [];
  const reviewed = fm.last_reviewed ? String(fm.last_reviewed).slice(0, 10) : 'not yet reviewed';
  return (
    <div className="page-meta">
      <div className="page-meta__row">
        <span className={`badge ${status.className}`}>{status.label}</span>
        {fm.wave ? (
          <Link to={`/handbook/writing-order#wave-${fm.wave}`} title="Writing wave: the order in which pages are written">
            Wave {fm.wave}
          </Link>
        ) : null}
        <span>
          <strong>Owner:</strong> {fm.owner || 'unassigned'}
        </span>
        <span>
          <strong>Reviewers:</strong> {fm.reviewers?.length ? fm.reviewers.join(', ') : 'unassigned'}
        </span>
        <span>
          <strong>Last review:</strong> {reviewed}
        </span>
      </div>
      {audiences.length > 0 && (
        <div className="page-meta__row">
          <strong>Who should read this:</strong>
          {audiences.map((a) => (
            <span key={a} className={`audience-badge audience-badge--${a}`}>
              {AUDIENCES[a] ?? a}
            </span>
          ))}
        </div>
      )}
      {refs.length > 0 && (
        <div className="page-meta__row">
          <strong>
            {fm.status === 'placeholder' || !fm.status
              ? 'Governance requirements to implement here:'
              : 'Governance requirements implemented here:'}
          </strong>
          {refs.map((id) => (
            <GovRef key={id} id={id} />
          ))}
        </div>
      )}
    </div>
  );
}
