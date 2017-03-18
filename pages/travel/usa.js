import React, {Component} from 'react';
import Link from 'next/link';

import Header from '../../components/header';

import USA from '../../components/travel/usa';

export default () => (
  <article className="wrapper">
    <Header activePage="travel" />
    <section className="section">
      <h2>United States of America</h2>
      <p>The United States is my home country and one that I have spent a large amount of time traveling to many different states.</p>
    </section>
    <USA />
    <style jsx>{`
      .wrapper {
        display: flex;
        flex-direction: column;
      }
      .section {
        max-width: 35rem;
        margin: 1rem auto;
      }
    `}</style>
  </article>
);