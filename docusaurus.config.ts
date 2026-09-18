import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Published at https://genomicdatainfrastructure.github.io/system-architecture/
const organizationName = 'GenomicDataInfrastructure';
const projectName = 'system-architecture';

const config: Config = {
  title: 'Genome EDIC System Architecture',
  tagline: 'How the Genome EDIC infrastructure implements the 1+MG Data Governance',
  favicon: 'img/favicon.svg',

  url: 'https://genomicdatainfrastructure.github.io',
  baseUrl: `/${projectName}/`,
  organizationName,
  projectName,
  trailingSlash: false,

  onBrokenLinks: 'throw',
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
    navbar: {
      title: 'Genome EDIC Architecture',
      logo: {alt: 'Genome EDIC', src: 'img/favicon.svg'},
      items: [
        {type: 'docSidebar', sidebarId: 'architecture', position: 'left', label: 'Architecture'},
        {type: 'docSidebar', sidebarId: 'readers', position: 'left', label: 'Reader guides'},
        {to: '/appendix/traceability', label: 'Governance traceability', position: 'left'},
        {to: '/appendix/document-status', label: 'Document status', position: 'right'},
        {href: `https://github.com/${organizationName}/${projectName}`, label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Genome EDIC system architecture taskforce. Draft — not an adopted document. Built with Docusaurus.`,
    },
    docs: {sidebar: {hideable: true}},
    tableOfContents: {minHeadingLevel: 2, maxHeadingLevel: 4},
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  } satisfies Preset.ThemeConfig,
};

export default config;
