const path = require(`path`)

module.exports = {
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
  },
  siteMetadata: {
    title: `Spinel Hydrualika-Pneumatyka`,
    siteUrl: `https://spinel.pl`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: path.join(__dirname, `assets`) },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Spinel Hydrualika-Pneumatyka`,
        short_name: `Spinel`,
        start_url: `/`,
        background_color: `#dadada`,
        theme_color: `#dadada`,
        display: `minimal-ui`,
        icon: `assets/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://panel.spinel.pl/graphql`,
        html: {
          useGatsbyImage: true,
        },
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Source Sans Pro`,
              subsets: [`latin-ext`],
              variants: [`400`, `700`],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-47556885-1`,
        head: true,
        anonymize: true,
        respectDNT: true,
        defer: true,
        enableWebVitalsTracking: true,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://spinel.pl`,
      },
    },
    `gatsby-plugin-catch-links`,
  ],
}
