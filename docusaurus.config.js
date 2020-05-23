module.exports = {
  title: 'kazuki229\'s blog',
  url: 'https://kazuki229.github.io',
  baseUrl: '/blog/',
  favicon: '/img/logo.png',
  organizationName: 'kazuki229',
  projectName: 'blog',
  plugins: ['@docusaurus/plugin-google-analytics'],
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
    googleAnalytics: {
      trackingID: 'UA-167442440-1',
      anonymizeIP: true,
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
