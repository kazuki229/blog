module.exports = {
  title: 'kazuki229\'s blog',
  url: 'https://kazuki229.github.io',
  baseUrl: '/',
  favicon: '/img/logo.png',
  organizationName: 'kazuki229',
  projectName: 'blog',
  themeConfig: {
    navbar: {
      title: 'kazuki229',
      logo: {
        alt: 'kazuki229 logo',
        src: '/img/logo.png',
      },
      links: [
        {
          href: 'https://twitter.com/kazuki229_dev',
          label: 'Twitter',
          position: 'right',
        },
        {
          href: 'https://github.com/kazuki229',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} kazuki229. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          showReadingTime: true,
          // TODO
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} kazuki229. Built with Docusaurus.`,
          },
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
