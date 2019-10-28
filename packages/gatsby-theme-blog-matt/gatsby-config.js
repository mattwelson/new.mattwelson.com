const withDefaults = require('./utils/default-options')

module.exports = options => {
  const { useExternalMDX } = withDefaults(options)

  return {
    plugins: [
      {
        resolve: 'gatsby-theme-ui-blog',
        options,
      },
      !useExternalMDX && {
        resolve: 'gatsby-plugin-mdx',
        options: {
          defaultLayouts: {
            default: require.resolve('./src/components/layout.js'),
          },
        },
      },
      'gatsby-plugin-theme-ui',
      'gatsby-theme-style-guide',
    ].filter(Boolean),
  }
}
