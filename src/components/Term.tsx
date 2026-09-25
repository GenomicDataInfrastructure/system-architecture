import React from 'react';
import Link from '@docusaurus/Link';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import data from '@site/src/data/acronyms.json';
import {acronymAnchor} from './vocab';

type Acronym = {id: string; meaning: string};
const ACRONYMS = data.acronyms as Acronym[];
const byId = new Map<string, Acronym>(ACRONYMS.map((a) => [a.id, a]));

/**
 * An acronym, with its meaning as a tooltip and a link to its row in the glossary (decision D-021).
 * Use it for the first use of each acronym on a page.
 * Usage: <Term id="SPE" />  or, to change the text shown, <Term id="SPE">SPEs</Term>
 */
export default function Term({id, children}: {id: string; children?: React.ReactNode}) {
  const a = byId.get(id);
  if (!a) {
    return (
      <span className="term term--unknown" title="Unknown acronym: add it to src/data/acronyms.json">
        {children ?? id} (?)
      </span>
    );
  }
  return (
    <Link className="term" to={`/glossary#${acronymAnchor(id)}`}>
      <abbr title={a.meaning}>{children ?? id}</abbr>
    </Link>
  );
}

/** The glossary's acronym table, generated from src/data/acronyms.json. */
export function AcronymTable() {
  const brokenLinks = useBrokenLinks();
  ACRONYMS.forEach((a) => brokenLinks.collectAnchor(acronymAnchor(a.id)));
  return (
    <table>
      <thead>
        <tr>
          <th>Acronym</th>
          <th>Meaning</th>
        </tr>
      </thead>
      <tbody>
        {ACRONYMS.map((a) => (
          <tr key={a.id} id={acronymAnchor(a.id)}>
            <td className="nowrap">
              <abbr title={a.meaning}>{a.id}</abbr>
            </td>
            <td>{a.meaning}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
