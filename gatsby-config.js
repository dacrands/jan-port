module.exports = {
  siteMetadata: {
    title: `David Crandall Software Engineer`,
    description: `David Crandall is a software engineer in the greater New York City area`,
    author: `David Crandall`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {      
        trackingId: "UA-127816565-1",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/media/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "David-Crandall",
        icon: "src/media/imgs/icon.png",
      }
    },
    `gatsby-plugin-sass`,
  ],
}
