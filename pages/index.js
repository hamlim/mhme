import React from 'react'

import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'

import Github from '../styles/icons/github'
import Twitter from '../styles/icons/twitter'

export default props => (
  <main className="Home">
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Matt Hamlin</title>
    </Head>
    <Header />
    <article className="mw6-ns center f3">
      <section>
        <h2 className="mv4">
          Hello 👋🏼.
          <br />
          I am Matt Hamlin, a web developer.
        </h2>
        <p className="mv4">
          I make small{' '}
          <Link href="/projects">
            <a className="link">side projects</a>
          </Link>{' '}
          of all kinds in my free time, and work with some pretty smart people at Wayfair currently.
        </p>
      </section>
      <ul className="list mv4">
        <li>
          <a className="link" href="https://twitter.com/immatthamlin">
            <Twitter className="mr2 v-mid blue" />
            Twitter
          </a>
        </li>
        <li>
          <a className="link" href="https://github.com/hamlim">
            <Github className="mr2 v-mid black" />
            Github
          </a>
        </li>
      </ul>
    </article>
  </main>
)
