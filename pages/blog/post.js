import React, { Component } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import Link from 'next/link'
import 'whatwg-fetch'
import Header from '../../components/header'
import PostRenderer from '../../utils/postrenderer'
import styled, { css, keyframes } from 'react-emotion'
import color from 'css-color-function'

const headAndSection = css`
  margin-left: 1rem;
  margin-right: 1rem;
  @media screen and (min-width: 45rem) {
    margin-left: 0;
    margin-right: 0;
  }
`
const head = css`
  composes: ${headAndSection};
`

const sectionClass = css`
  composes: ${headAndSection};
  margin-bottom: 3rem;
`

const Wrapper = styled.article`
  margin-top: 3rem;
  max-width: var(--width, 45rem);
  margin-left: auto;
  margin-right: auto;
`

const Tag = styled.a`
  background-color: var(--d);
  padding: 0.25em;
  border-radius: 4px;
  margin: 0 1em;
  color: var(--white);
  text-decoration: none;
  &:hover,
  &:focus {
    background-color: var(--d-muted);
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

const postTagsAndDate = css`
  color: ${color.convert('color(#0f0f0f lightness(+ 35%))')};
  margin: 1rem 0 0.5rem;
`
const postTags = css`
  composes: ${postTagsAndDate};
  display: inline-block;
`

const postDate = css`
  composes: ${postTagsAndDate};
`

export default class extends Component {
  static async getInitialProps({ pathname, query }) {
    this.pathname = pathname
    this.query = query
    return { pathname, query }
  }
  state = {
    feed: [],
    post: null,
  }

  componentDidMount() {
    const props = this.props
    fetch('/static/json/posts.json')
      .then(r => {
        return r.json()
      })
      .then(feed => {
        this.setState(() => ({ feed }))
        let post = feed.find(p => p.slug === props.query.slug)
        post && this.setState(() => ({ post }))
      })
      .catch(err => console.warn(err))
  }

  render = () => (
    <main>
      <Header page="Post" />
      {this.state &&
        this.state.post && (
          <div>
            <Head>
              <title>{this.state.post && this.state.post.title}</title>
            </Head>
            <Wrapper>
              <header className={head}>
                <h4 className={postDate}>
                  Published: {`${this.state.post.day} of ${this.state.post.month}, ${this.state.post.year}`}.
                </h4>
                <h2
                  css={`
                    font-size: 3rem;
                  `}
                >
                  {this.state.post.title}
                </h2>
              </header>
              <PostRenderer post={this.state.post} />
              <section className={sectionClass}>
                <h4 className={postTags}>Tags:</h4>
                <br />
                {this.state &&
                  this.state.post &&
                  this.state.post.tags &&
                  this.state.post.tags.map((tag, index) => (
                    <Link key={index} href="/blog/tags">
                      <Tag>{tag}</Tag>
                    </Link>
                  ))}
              </section>
            </Wrapper>
          </div>
        )}
      {!this.state && <Loading>🕐</Loading>}
    </main>
  )
}
