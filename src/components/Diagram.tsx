import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

/**
 * A diagram from static/diagrams/, drawn in draw.io and saved as .drawio.svg: the one file is both
 * the editable source and the image. Each diagram has its own white frame and a legend (section,
 * last edit), so it reads the same in light and dark mode. Selecting it opens it full size.
 * Usage: <Diagram src="3.3-scopes.drawio.svg" alt="What the diagram shows, for screen readers" />
 */
export default function Diagram({src, alt}: {src: string; alt: string}) {
  const url = useBaseUrl(`/diagrams/${src}`);
  return (
    <a className="diagram" href={url} target="_blank" rel="noopener" title="Open the diagram full size">
      <img src={url} alt={alt} loading="lazy" />
    </a>
  );
}
