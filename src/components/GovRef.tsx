import React from 'react';
import Link from '@docusaurus/Link';
import governance from '@site/src/data/governance.json';
import {govAnchor} from './vocab';

type Section = {id: string; title: string; page: number};
const byId = new Map<string, Section>(
  (governance.sections as Section[]).map((s) => [s.id, s]),
);

/**
 * Cite a section of the 1+MG Data Governance master document.
 * Usage: <GovRef id="VII.2.3" />  or  <GovRef id="VII.2.3" long />
 */
export default function GovRef({id, long = false}: {id: string; long?: boolean}) {
  const section = byId.get(id);
  if (!section) {
    return <span className="govref govref--unknown" title="Unknown governance section">DG {id} (?)</span>;
  }
  const tooltip = `1+MG Data Governance ${governance.version}, section ${id}: ${section.title} (p. ${section.page})`;
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
