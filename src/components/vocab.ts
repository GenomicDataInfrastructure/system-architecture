// Controlled values used in page front matter. Keep in sync with scripts/collect-page-meta.mjs.

export const AUDIENCES: Record<string, string> = {
  policy: 'Policy makers',
  legal: 'Legal experts',
  elsi: 'ELSI specialists',
  security: 'Security advisors',
  dpo: 'Data protection officers',
  implementer: 'Implementers',
};

export const STATUSES: Record<string, {label: string; className: string}> = {
  placeholder: {label: 'Placeholder', className: 'badge--secondary'},
  draft: {label: 'Draft', className: 'badge--warning'},
  'in-review': {label: 'In review', className: 'badge--info'},
  approved: {label: 'Approved', className: 'badge--success'},
};

/** Anchor used on the traceability page for a governance section id such as "VII.2.3". */
export const govAnchor = (id: string) => `dg-${id.replace(/\./g, '-')}`;

/** Anchor of an acronym's row in the glossary, e.g. "acronym-1mg" for "1+MG". */
export const acronymAnchor = (id: string) => `acronym-${id.toLowerCase().replace(/[^a-z0-9]+/g, '')}`;
