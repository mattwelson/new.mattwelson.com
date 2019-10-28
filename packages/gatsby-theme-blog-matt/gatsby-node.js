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
      path: `tags/${string_to_slug(tag.name)}`,
      component: require.resolve('./src/templates/tag-page-template.js'),
      context: {
        tagNameRegex: `/${tag.name}/i`,
      },
    })
  })
}

function string_to_slug(str) {
  str = str.replace(/^\s+|\s+$/g, '') // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
  var to = 'aaaaeeeeiiiioooouuuunc------'
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes

  return str
}
