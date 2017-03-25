import React from 'react';

import Link from 'next/link';
import Head from 'next/head';

import Header from '../components/header';

export default (props) => (
  <main className="Home">
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Matt Hamlin</title>
    </Head>
    <article className="wrapper">
      <Header />
      <section className="content">
        <h2 className="lead">
          Hello 👋🏼.
          <br />
          I am Matt Hamlin, a web developer.
        </h2>
        <p className="second">
          I make small <Link href="/projects"><a className="link">side projects</a></Link> of all kinds in my free time, and work
          with some pretty smart people at Wayfair currently.
        </p>
      </section>
    </article>
    <footer className="footer">
      <p className="footer__text">
        Find me on: <a href="https://twitter.com/immatthamlin" className="footer__link">Twitter</a> or on <a href="https://snapchat.com/add/immatthamlin" className="footer__link">Snapchat</a>
      </p>
    </footer>
    <style jsx>{`.lead {
    font-size: 2.4rem;
  }

  .content > p {
    font-size: 1.5rem;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  .link {
    color: var(--a);
    text-decoration: none;
  }

  .wrapper,
  .footer {
    margin-top: 3rem;
    max-width: var(--width);
    margin: auto;
  }

  .footer {
    margin: 5rem auto;
    height: 10rem;
    display: flex;
    align-items: center;
  }
  .footer__text {
    font-size: 1.8rem;
  }
  .footer__link {
    text-decoration: none;
    color: black;
  }
  .footer__link:hover, 
  .footer__link:focus {
    text-decoration: underline;
    color: var(--c);
  }

  @media screen and (min-width: 45rem) {
    .header {
      grid-template-columns: 1fr 1fr;
    }
    .second {
      grid-column: 2 / -1;
      grid-row: 2 / 3;
    }
    .content {
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
    }
  }`}</style>
  </main>
);