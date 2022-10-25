// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ESX Documentation",
  tagline: "Creating a roleplay server has never been easier!",
  url: "https://docs.esx-framework.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://cdn.discordapp.com/attachments/944789399852417096/1020099828266586193/blanc-800x800.png",
  organizationName: "ESX",
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "legacy",
          routeBasePath: "legacy"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss")
        }
      })
    ]
  ],
  plugins: ["docusaurus-plugin-sass", "docusaurus-plugin-google-adsense", [
    "@docusaurus/plugin-content-docs",
    {
      id: "infinity",
      path: "infinity",
      routeBasePath: "infinity"
    },
  ],
  [
    '@docusaurus/plugin-google-gtag',
    {
      trackingID: 'G-W69R4D1SG1',
      anonymizeIP: true,
    },
  ],
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "tutorials",
      path: "tutorials",
      routeBasePath: "tutorials"
    },
  ],
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "addons",
      path: "addons",
      routeBasePath: "addons"
    },
  ],
],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark"
      },
      googleAdsense: {
        dataAdClient: 'ca-pub-7747595309902664',
      },
      navbar: {
        logo: {
          alt: "ESX",
          srcDark: "https://esx.s3.fr-par.scw.cloud/blanc-800x800.png",
          src: 'https://esx.s3.fr-par.scw.cloud/noir-fonce-800x800.png',
        },
        items: [
          {
            type: "doc",
            docId: "installation",
            position: "left",
            label: "Legacy"
          },
          {
            type: "doc",
            docId: "menu_defualt/create_menu",
            docsPluginId: "addons",
            position: "left",
            label: "Legacy Addons"
          },
          /*
          {
            type: "doc",
            docId: "installation",
            docsPluginId: "infinity",
            position: "left",
            label: "Infinity"
          },*/
          {
            type: "doc",
            docId: "database",
            docsPluginId: "tutorials",
            position: "left",
            label: "Tutorials"
          },
          {
            href: "https://github.com/esx-framework",
            className: "pseudo-icon github-icon",
            position: "right"
          },
          {
            href: "https://discord.esx-framework.org/",
            className: "pseudo-icon discord-icon",
            position: "right"
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: "https://oxygenserv.com",
            position: 'right',
            label: 'Hosting',
            className: "dev-portal-link"
          }
        ]
      },
      footer: {
        style: "dark",
        copyright: `Copyright &copy; ${new Date().getFullYear()} ESX - All rights reserved.`
      },
      prism: {
        darkTheme: require("prism-react-renderer/themes/vsDark"),
        theme: require("prism-react-renderer/themes/github"),
        additionalLanguages: ["lua"]
      },
      algolia: {
        appId: 'GNDCWAKF4K',
        apiKey: 'efdbb4c666d4c00582bc14a621519410',
        indexName: 'esx-framework',
        contextualSearch: false
      },
    })
};

module.exports = config;
