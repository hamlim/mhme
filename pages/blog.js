import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/header'
import Subnav from '../components/subnav'
import styled from 'react-emotion'

const Wrapper = styled.article`
  margin: 3rem auto 6rem;
  max-width: var(--width);
`

const StyledLink = styled.a`
  color: var(--a, #f08080);
  text-decoration: none;
`

export default () => (
  <main className="blog">
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Blog</title>
    </Head>
    <Header activePage="blog" />
    <Subnav page="Blog" />
    <Wrapper>
      <section>
        <h2>
          Welcome to my blog. I write about a lot of different things, I suggest checking out my{' '}
          <Link href="/blog/tags">
            <StyledLink>tags</StyledLink>
          </Link>.
        </h2>
      </section>
    </Wrapper>
  </main>
)
