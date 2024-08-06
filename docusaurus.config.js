// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import "dotenv/config";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "XFSC",
  tagline: "",
  favicon: "img/xfsc_logo.svg",

  // Set the production url of site here
  url: "http://localhost:3000/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "smartSense", // Usually your GitHub org/user name.
  projectName: "XFSC", // Usually your repo name.

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          routeBasePath: "/",
        },

        theme: {
          customCss: require.resolve("./src/styles/main.scss"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "",
        logo: {
          alt: "XFSC Logo",
          src: "img/xfsc_logo.svg",
        },
        items: [
          {
            label: "About XFSC",
            to: "/about",
          },
          {
            type: "docSidebar",
            sidebarId: "developerSidebar",
            label: "Developer Guide",
            position: "left",
          },
          {
            type: "docSidebar",
            sidebarId: "servicesSidebar",
            position: "left",
            label: "XFSC Toolbox",
          },
          {
            label: "Community",
            to: "/community",
          },
          {
            label: "Project Links",
            to: "/links",
          },
          // {
          //   label: "FAQ",
          //   to: "/faq",
          // },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "XFSC GitLab",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          src: "img/footer_logo.png",
        },
        links: [
          {
            title: "XFSC Foundation",
            items: [
              {
                label: "About XFSC",
                href: "/about",
              },
              {
                label: "Developer Guide",
                href: "/developer-guide",
              },
              {
                label: "XFSC Toolbox",
                href: "/xfsc-toolbox",
              },
              {
                label: "Community",
                href: "/community",
              },
              {
                label: "Project Links",
                href: "/links",
              },
            ],
          },
          {
            title: "Developer Guide",
            items: [
              {
                label: "Project Roles",
                href: "/developer-guide/project-roles",
              },
              {
                label: "OnBoarding Contributers",
                href: "/developer-guide/on-boarding",
              },
              {
                label: "Code Contribution",
                href: "/developer-guide/code-contribution",
              },
              {
                label: "Code Review",
                href: "/developer-guide/code-review",
              },
            ],
          },
          {
            title: "XFSC Toolbox",
            items: [
              {
                label: "ICAM & Trust over IP",
                href: "/services/icam-and-trust/",
              },
              {
                label: "Decentralized Catalogue",
                href: "/services/decentralized-catalogue/",
              },
              {
                label: "Orchestration & Monitoring",
                href: "/services/orchestration-monitoring/",
              },
              {
                label: "Portal",
                href: "/services/portal/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Main Project",
                href: "https://www.gxfs.eu/",
              },
            ],
          },
        ],

        // copyright: `Copyright © ${new Date().getFullYear()} Eclipse Tractus-X. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  plugins: [
    "docusaurus-plugin-sass",
    require.resolve("docusaurus-lunr-search"),
  ],
};

export default config;
