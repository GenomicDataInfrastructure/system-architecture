import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Published at https://genomicdatainfrastructure.github.io/system-architecture/
const organizationName = 'GenomicDataInfrastructure';
const projectName = 'system-architecture';

// Pull request previews (decision D-025): the preview workflow builds with PR_NUMBER set, so the
// site lives under /system-architecture/pr-<number>/, is kept out of search engines and shows a
// banner. Try it locally with `PR_NUMBER=123 npm run build && npm run serve`.
const prNumber = process.env.PR_NUMBER?.trim();
if (prNumber && !/^\d+$/.test(prNumber)) throw new Error(`PR_NUMBER must be a number, got "${prNumber}"`);
const baseUrl = prNumber ? `/${projectName}/pr-${prNumber}/` : `/${projectName}/`;

const config: Config = {
  title: 'Genome EDIC System Architecture',
  tagline: 'How the Genome EDIC infrastructure implements the 1+MG Data Governance',
  favicon: 'img/favicon.svg',

  url: 'https://genomicdatainfrastructure.github.io',
  baseUrl,
  organizationName,
  projectName,
  trailingSlash: false,
  noIndex: Boolean(prNumber),

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: {
    mermaid: true,
    hooks: {onBrokenMarkdownLinks: 'throw'},
  },
  themes: ['@docusaurus/theme-mermaid'],

  i18n: {defaultLocale: 'en', locales: ['en']},

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: `https://github.com/${organizationName}/${projectName}/edit/main/`,
          // Who changed each page last, and when (taken from git history).
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {respectPrefersColorScheme: true},
    ...(prNumber && {
      announcementBar: {
        id: `pr-preview-${prNumber}`,
        content: `Preview of <a href="https://github.com/${organizationName}/${projectName}/pull/${prNumber}">pull request #${prNumber}</a>, not the published architecture. It is removed when the pull request is closed.`,
        backgroundColor: '#fff4ce',
        textColor: '#3b2f00',
        isCloseable: false,
      },
    }),
    navbar: {
      title: 'Genome EDIC Architecture',
      logo: {alt: 'Genome EDIC', src: 'img/favicon.svg'},
      items: [
        {type: 'docSidebar', sidebarId: 'architecture', position: 'left', label: 'Architecture'},
        {type: 'docSidebar', sidebarId: 'readers', position: 'left', label: 'Reader guides'},
        {to: '/appendix/traceability', label: 'Governance traceability', position: 'left'},
        {type: 'docSidebar', sidebarId: 'handbook', position: 'right', label: 'Taskforce handbook'},
        {to: '/appendix/document-status', label: 'Document status', position: 'right'},
        {href: `https://github.com/${organizationName}/${projectName}`, label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Genome EDIC system architecture taskforce. Draft — not an adopted document. Structure based on arc42 by Gernot Starke and Peter Hruschka (CC BY-SA 4.0). Built with Docusaurus.`,
    },
    docs: {sidebar: {hideable: true}},
    tableOfContents: {minHeadingLevel: 2, maxHeadingLevel: 4},
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  } satisfies Preset.ThemeConfig,
};

export default config;
