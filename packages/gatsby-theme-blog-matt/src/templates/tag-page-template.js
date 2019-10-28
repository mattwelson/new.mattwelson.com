import React from 'react'
import { graphql } from 'gatsby'
import TagPage from 'gatsby-theme-ui-blog/src/posts'

export const query = graphql`
  query($tagNameRegex: String!) {
    allBlogPost(filter: { tags: { regex: $tagNameRegex } }) {
      nodes {
        id
        excerpt
        slug
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`

const TagPageTemplate = ({ data }) => <TagPage posts={data.allBlogPost.nodes} />

export default TagPageTemplate
