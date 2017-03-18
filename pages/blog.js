import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/header';
import Subnav from '../components/subnav';

export default () => (
  <main className="blog">
    <Head>
      <title>My Blog</title>
    </Head>
    <Header activePage="blog" />
    <Subnav page="Blog" />
    <article className="wrapper">
      <section>
        <h2>
          Welcome to my blog. I write about a lot of different things, I suggest checking out my <Link href="/blog/tags"><a className="link">tags</a></Link>.
        </h2>
      </section>
    </article>
    <style jsx>{`
      .wrapper {
        margin: 3rem auto 6rem;
        max-width: var(--width);
      }
      .link {
        color: var(--a, #F08080);
        text-decoration: none;
      }
    `}</style>
  </main>
);