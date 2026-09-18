import React from 'react';
import Link from '@docusaurus/Link';
import sources from '@site/src/data/sources.json';

type Source = {id: string; short: string; title: string; url?: string; status?: string};
const byId = new Map<string, Source>((sources.sources as Source[]).map((s) => [s.id, s]));

/**
 * Cite an entry of the source register (src/data/sources.json).
 * Usage: <Cite id="gdi-d3.4" />
 */
export default function Cite({id}: {id: string}) {
  const s = byId.get(id);
  if (!s) return <span className="cite cite--unknown">[{id}?]</span>;
  return (
    <Link className="cite" to={`/appendix/sources#src-${s.id}`} title={s.title}>
      [{s.short}]
    </Link>
  );
}
