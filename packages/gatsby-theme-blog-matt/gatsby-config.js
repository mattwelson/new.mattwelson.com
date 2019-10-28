module.exports = options => {
  return {
    plugins: [
      {
        resolve: 'gatsby-theme-ui-blog',
        options,
      },
      'gatsby-plugin-theme-ui',
      'gatsby-theme-style-guide',
    ].filter(Boolean),
  }
}
