import { graphql } from 'gatsby'
import TagsPage from '../components/pages/tags-page'

export default TagsPage

export const query = graphql`
  query TagPage {
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
`
