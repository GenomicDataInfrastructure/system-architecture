import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import governance from '@site/src/data/governance.json';
import {govAnchor} from './vocab';

type Section = {id: string; title: string; printed_as?: string; pdf_page?: number};
const byId = new Map<string, Section>(
  (governance.sections as Section[]).map((s) => [s.id, s]),
);

/**
 * Cite a section of the 1+MG Data Governance master document (published as the annex of GDI D2.4).
 * Always by section number, never by page. The link opens the published PDF at the page where the
 * section starts (decision D-035); the traceability page lists which pages implement each section.
 * Usage: <GovRef id="VII.2.3" />  or  <GovRef id="VII.2.3" long />
 */
export default function GovRef({id, long = false}: {id: string; long?: boolean}) {
  const section = byId.get(id);
  if (!section) {
    return <span className="govref govref--unknown" title="Unknown governance section">DG {id} (?)</span>;
  }
  const printed = section.printed_as ? ` (numbered ${section.printed_as} in the published document)` : '';
  const tooltip = `1+MG Data Governance (version ${governance.version}), section ${id}${printed}: ${section.title}`;
  return (
    <Link className="govref" href={useBaseUrl(govHref(id))} target="_blank" rel="noopener" title={tooltip}>
      DG {id}
      {long ? ` — ${section.title}` : ''}
    </Link>
  );
}

export function govSection(id: string): Section | undefined {
  return byId.get(id);
}

/** Path to the section in the site's copy of the published PDF, or to its traceability row if its page is not known. Pass it through useBaseUrl. */
export function govHref(id: string): string {
  const page = byId.get(id)?.pdf_page;
  return page ? `${governance.pdf_url}#page=${page}` : `/appendix/traceability#${govAnchor(id)}`;
}
