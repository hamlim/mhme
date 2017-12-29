import React, { Component } from 'react'
import data from './log.json'
import Link from 'next/link'
import { Container } from './components/index'

class Log extends Component {
  state = {
    log: data,
  }
  render() {
    return (
      <Container>
        <ul>
          {this.state.log.resolutions.map(resolution => (
            <li key={resolution.priority}>
              <h3>{resolution.title}</h3>
              <p>{resolution.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    )
  }
}
export default Log
