import React, { Component } from 'react'
import 'whatwg-fetch'
import styled from 'emotion/react'
import { keyframes } from 'emotion'
import Head from 'next/head'
import Header from '../../components/header'
import Subnav from '../../components/subnav'
import FeedApp from '../../utils/feedapp'

const Wrapper = styled.article`
  margin-top: 3rem;
  max-width: var(--width, 45rem);
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 40rem) {
    margin: 3rem .25em;
  }
`

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`
const Loading = styled.div`
  min-height: 60vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${spin} 3s linear infinite;
`
export default class extends Component {
  state = {
    feed: [],
  }
  componentDidMount() {
    fetch('/static/json/posts.json')
      .then(r => {
        return r.json()
      })
      .then(feed => {
        this.setState({ feed })
      })
      .catch(console.warn)
  }

  render = () =>
    <main>
      <Head>
        <title>My Feed of Blog Posts</title>
      </Head>
      <Header />
      <Subnav page="feed" />
      <Wrapper>
        <h2>Feed:</h2>
        {this.state.feed.length > 0 ? <FeedApp feed={this.state.feed} /> : <Loading children="🕐" />}
      </Wrapper>
    </main>
}
