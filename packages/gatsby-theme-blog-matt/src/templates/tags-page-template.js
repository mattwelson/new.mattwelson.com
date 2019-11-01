import React from 'react'
import { graphql } from 'gatsby'
import TagsPage from '../components/pages/tags-page'

export const query = graphql`
  query TagPage {
    allBlogPost {
      group(field: tags) {
        posts: nodes {
          id
          title
          slug
        }
        name: fieldValue
      }
    }
  }
`

const TagsPageTemplate = ({ data }) => (
  <TagsPage tags={data.allBlogPost.group} />
)

export default TagsPageTemplate
