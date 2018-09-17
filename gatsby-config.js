module.exports = {
  siteMetadata: {
    title: 'Peter James Tankersly - Psykoterapeut,  Vesterbro, København',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-leaflet',
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        icon: false,
        viewBox: true,
        svgo: false,
        onlyUnique: false
        // see https://github.com/smooth-code/svgr for a list of all options
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      }
    }
  ],
}
