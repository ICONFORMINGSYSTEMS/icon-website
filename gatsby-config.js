module.exports = {
  siteMetadata: {
    siteUrl: `https://www.iconformingsystems.com`,
    // SEO
    title: "Icon Forming Systems Inc",
    titleTemplate: "%s · Concrete Forming Ontario",
    description:
      "ICON Forming Systems specializes in the design and supply of steel forming systems for concrete construction.",
    url: "https://www.iconformingsystems.com", // No trailing slash allowed!
    image: "/images/logo-full.svg", // Path to your image you placed in the 'static' folder
    twitterUsername: "",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    // filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/images/projects`,
      },
    },
    // sitemap
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        exclude: [`/privacy-policy/`],
      },
    },
    // google analytics
  ],
}
