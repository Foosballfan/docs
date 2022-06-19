const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Snaplet',
  tagline: 'Work with your database as easily as your code',
  url: 'https://docs.snaplet.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'snaplet', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  plugins: ['docusaurus-plugin-segment'],
  themeConfig: {
    segment: {
      apiKey: 'VY4RrFl2Qu7bCRmxzQ7IIj9dK7MFMzrH',
    },
    // hideableSidebar: false,
    navbar: {
      title: 'Snaplet',
      items: [
        {
          label: 'Discord',
          href: 'https://app.snaplet.dev/chat',
          position: 'right',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/snaplet/docs',
          position: 'right',
        },
        {
          href: 'https://app.snaplet.dev',
          label: 'Login',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://app.snaplet.dev/chat',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/_snaplet',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://www.snaplet.dev/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/snaplet',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Snaplet, Inc. All rights reserved.`,
    },
    prism: {
      theme: darkCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['bash'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/snaplet/docs',
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
