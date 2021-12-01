module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "JBTax",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
      icon:  `./src/images/bookkeeping.png`
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `w09bs52i1hjb`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `gvAKNiMepOfnTQllkwlR60u0by4v4DA0uMyQLCFPFuA`,
      },
    },
  ],
};
