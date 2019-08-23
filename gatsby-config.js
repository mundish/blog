module.exports = {
  siteMetadata: {
    title: '>mundi.sh',
    description: 'musings',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-mdx',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
  ],
};
