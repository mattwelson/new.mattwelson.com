/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import useSiteMetadata from '../hooks/useSiteMetadata'

const Header = () => {
  const { title } = useSiteMetadata()

  return (
    <header
      sx={{ bg: 'primary', color: 'background', fontFamily: 'heading', p: 3 }}
    >
      <Link to="/">{title}</Link>
    </header>
  )
}

export default Header
