/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from 'theme-ui'
import { Global } from '@emotion/core'

import Header from './header'

const Layout = ({ children, ...rest }) => {
  return (
    <Fragment>
      <Global styles={{ body: { margin: 0 } }} />
      <Header />
      <main sx={{ mx: 'auto', maxWidth: 650, width: '90vw' }}>{children}</main>
    </Fragment>
  )
}

export default Layout
