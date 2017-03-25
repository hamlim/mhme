import React, {Component} from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Header from '../components/header';

export default () => (
  <main>
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Travel Destinations</title>
    </Head>
    <Header activePage="travel" />
    <article className="wrapper">
      <section className="section">
        <p className="big">Welcome to a small experiment on my website. I really want a cool way to share some of my stories and experiences while traveling around the world.</p>
        <p className="big">
          I have decided to start this off with a simple map of the USA, that you can reach by going to <Link href="/travel/usa"><a className="link">here</a></Link>. 
          This is still early on in this experiment so don't expect too much.
        </p>
      </section>
    </article>
    <style jsx>{`
      .wrapper {
        display: flex;
        flex-direction: column;
      }
      .link {
        color: var(--b-muted);
        text-decoration: none;
      }
      .section {
        max-width: 35rem;
        margin: 1rem auto;
      }

      .big {
        font-size: 2rem;
        margin: .5rem 0;
      }
    `}</style>
  </main>
);