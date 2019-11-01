/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Fragment } from 'react'
import { Link } from 'gatsby'
import { Layout } from 'gatsby-theme-ui-layout'

export default ({ tags, ...props }) => {
  return (
    <Styled.root>
      <Layout {...props}>
        {tags.map(tag => (
          <Fragment key={tag.name}>
            <h2>{tag.name}</h2>
            <ul>
              {tag.posts.map(post => (
                <li key={post.id}>
                  <Link to={post.slug}>{post.title}</Link>
                  <div>{post.date}</div>
                  <div>{post.excerpt}</div>
                </li>
              ))}
            </ul>
          </Fragment>
        ))}
      </Layout>
    </Styled.root>
  )
}
