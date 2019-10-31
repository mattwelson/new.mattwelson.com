import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          author
          description
          social {
            name
            url
          }
        }
      }
    }
  `)

  return site.siteMetadata
}

export default useSiteMetadata
