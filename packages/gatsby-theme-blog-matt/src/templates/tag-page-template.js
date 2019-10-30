import React from 'react'
import { graphql } from 'gatsby'
import TagPage from 'gatsby-theme-ui-blog/src/posts'

export const query = graphql`
  query($tagName: String!) {
    allBlogPost(filter: { tags: { eq: $tagName } }) {
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
