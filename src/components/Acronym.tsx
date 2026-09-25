import React from 'react';
import Link from '@docusaurus/Link';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import data from '@site/src/data/acronyms.json';
import {acronymAnchor} from './vocab';

type Entry = {id: string; meaning: string};
const ACRONYMS = data.acronyms as Entry[];
const byId = new Map<string, Entry>(ACRONYMS.map((a) => [a.id, a]));

/**
 * An acronym, with its meaning as a tooltip and a link to its row in the glossary (decisions D-021, D-022).
 * Use it for the first use of each acronym on a page. Glossary terms are linked with a normal Markdown link.
 * Usage: <Acronym id="SPE" />  or, to change the text shown, <Acronym id="SPE">SPEs</Acronym>
 */
export default function Acronym({id, children}: {id: string; children?: React.ReactNode}) {
  const a = byId.get(id);
  if (!a) {
    return (
      <span className="acronym acronym--unknown" title="Unknown acronym: add it to src/data/acronyms.json">
        {children ?? id} (?)
      </span>
    );
  }
  return (
    <Link className="acronym" to={`/glossary#${acronymAnchor(id)}`}>
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
