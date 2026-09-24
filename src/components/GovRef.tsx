import React from 'react';
import Link from '@docusaurus/Link';
import governance from '@site/src/data/governance.json';
import {govAnchor} from './vocab';

type Section = {id: string; title: string; printed_as?: string};
const byId = new Map<string, Section>(
  (governance.sections as Section[]).map((s) => [s.id, s]),
);

/**
 * Cite a section of the 1+MG Data Governance master document (published as the annex of GDI D2.4).
 * Always by section number, never by page.
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
    <Link className="govref" to={`/appendix/traceability#${govAnchor(id)}`} title={tooltip}>
      DG {id}
      {long ? ` — ${section.title}` : ''}
    </Link>
  );
}

export function govSection(id: string): Section | undefined {
  return byId.get(id);
}
