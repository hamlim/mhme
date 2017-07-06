import React, { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/header'
import styled from 'emotion/react'

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
`
const Section = styled.section`
  max-width: 35rem;
  margin: 1rem auto;
`

const Big = styled.p`
  nt-size: 2rem;
  margin: .5rem 0;
`

const StyledLink = styled.a`
  color: var(--b-muted);
  text-decoration: none;
`

export default () =>
  <main>
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Travel Destinations</title>
    </Head>
    <Header activePage="travel" />
    <Wrapper>
      <Section>
        <Big>
          Welcome to a small experiment on my website. I really want a cool way to share some of my stories and
          experiences while traveling around the world.
        </Big>
        <Big>
          I have decided to start this off with a simple map of the USA, that you can reach by going to{' '}
          <Link href="/travel/usa">
            <StyledLink>here</StyledLink>
          </Link>. This is still early on in this experiment so don't expect too much.
        </Big>
      </Section>
    </Wrapper>
  </main>
