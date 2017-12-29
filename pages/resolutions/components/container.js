import styled from 'react-emotion'

import fonts from '../styles/fonts'
import colors from '../styles/colors'

export default styled('section')`
  max-width: 45rem;
  margin: 0 auto;
  font-size: ${fonts.body.size};

  a {
    color: ${fonts.link.color};
    text-decoration: ${fonts.link.textDecoration};
    cursor: ${fonts.link.cursor};
    &:hover,
    &:focus {
      border-bottom: solid 2px ${colors.secondary};
    }
  }
  & + section {
    margin-top: 2rem;
  }
  p + p {
    margin-top: 1.5rem;
  }
`
