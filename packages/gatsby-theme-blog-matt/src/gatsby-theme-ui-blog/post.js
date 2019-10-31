/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Layout } from 'gatsby-theme-ui-layout'
import { Link } from 'gatsby'

import stringToSlug from '../utils/stringToSlug'

export default ({
  title,
  date,
  excerpt,
  children,
  keywords,
  tags,
  ...props
}) => {
  const { previous, next } = props.data

  return (
    <Styled.root>
      <Layout title={title} excerpt={excerpt} {...props}>
        <Styled.h1>{title}</Styled.h1>
        <div>{date}</div>
        {children}
        {!!tags.length && (
          <div>
            <h2>Tags</h2>
            <ul>
              {tags.map(tag => (
                <li>
                  <Link to={`tags/${stringToSlug(tag)}`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <Styled.h2>Read more</Styled.h2>
          <div>
            {previous && (
              <Link to={previous.slug}>
                <h3>{previous.title}</h3>
                <div>{previous.date}</div>
              </Link>
            )}
            {next && (
              <Link to={next.slug}>
                <h3>{next.title}</h3>
                <div>{next.date}</div>
              </Link>
            )}
          </div>
        </div>
      </Layout>
    </Styled.root>
  )
}
