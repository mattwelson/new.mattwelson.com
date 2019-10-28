/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from 'theme-ui'
import { Global } from '@emotion/core'
import { Link } from 'gatsby'

const Layout = ({ children }) => (
  <Fragment>
    <Global styles={{ body: { margin: 0 } }} />
    <header
      sx={{ bg: 'primary', color: 'background', fontFamily: 'heading', p: 3 }}
    >
      <Link to="/">Matt Welson</Link>
    </header>
    <main sx={{ mx: 'auto', maxWidth: 650, width: '90vw' }}>{children}</main>
  </Fragment>
)

export default Layout
