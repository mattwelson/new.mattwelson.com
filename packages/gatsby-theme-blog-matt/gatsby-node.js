const stringToSlug = require('./src/utils/stringToSlug')

// Build tag pages and a root tag page (root page TODO)
exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const result = await graphql(`
    query {
      allBlogPost {
        group(field: tags) {
          nodes {
            id
            title
            slug
          }
          name: fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('error loading tags', result.errors)
  }

  const tags = result.data.allBlogPost.group

  tags.forEach(tag => {
    actions.createPage({
      path: `tags/${stringToSlug(tag.name)}`,
      component: require.resolve('./src/templates/tag-page-template.js'),
      context: {
        tagName: tag.name,
      },
    })
  })

  // Create the Tag page
  actions.createPage({
    path: '/tags',
    component: require.resolve('./src/templates/tags-page-template.js'),
    context: {},
  })
}
