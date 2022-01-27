require("dotenv").config();
module.exports = {
  siteMetadata: {
    title: `Antler`,
    description: `Movies, TV Shows & Video Streaming`,
    author: `@nparashar150`,
    siteUrl: `https://github.com/nparashar150/WebApp`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-firebase-v9.0",
      options: {
        credentials: {
          apiKey: process.env.REACT_APP_APIKEY,
          authDomain: process.env.REACT_APP_AUTHDOMAIN,
          projectId: process.env.REACT_APP_PROJECTID,
          storageBucket: process.env.REACT_APP_STORAGEBUCKET,
          messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
          appId: process.env.REACT_APP_APPID
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
