import base from 'gatsby-theme-ui-blog/src/gatsby-plugin-theme-ui'
import tags from './tags'

export default {
  ...base,
  styles: tags,
  colors: {
    ...base.colors,
  },
}
