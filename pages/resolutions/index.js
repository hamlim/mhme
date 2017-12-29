import React from 'react'
import { Page, Container, Title, Nav } from './components'
import Link from 'next/link'
import Log from './log'

class Index extends React.Component {
  render() {
    return (
      <Page>
        <Container>
          <Title>📓 2018 Resolutions</Title>
        </Container>
        <Container>
          <Nav>
            <ol>
              <li>
                <Link href="/">
                  <a>Back 🏠</a>
                </Link>
              </li>
            </ol>
          </Nav>
        </Container>
        <Container>
          <p>Welcome to my 2018 resolutions</p>
        </Container>
        <Log />
      </Page>
    )
  }
}
export default Index
