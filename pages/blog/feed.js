import React, {Component} from 'react';
import 'whatwg-fetch';
import Head from 'next/head';
import Header from '../../components/header';
import Subnav from '../../components/subnav';
import FeedApp from '../../utils/feedapp';

export default class extends Component {
  state = {
    feed: []
  }
  componentDidMount() {
    fetch('/static/json/posts.json').then(r => {
      return r.json();
    }).then(feed => {
      this.setState({feed});
    }).catch(err => console.warn(err));
  }

  render() {
    return (
      <main className="Feed">
        <Head>
          <title>My Feed of Blog Posts</title>
        </Head>
        <Header />
        <Subnav page="feed"/>
        <article className="wrapper">
          <h2>Feed:</h2>
          {this.state.feed.length > 0 ? (
            <FeedApp feed={this.state.feed} />
          ) : (
            <div className="loading"></div>
          )}
        </article>
        <style jsx>{`
          .wrapper {
            margin-top: 3rem;
            max-width: var(--width, 45rem);
            margin-left: auto;
            margin-right: auto;
          }

          .container {
            max-width: var(--width-s, 35rem);
            margin: 0 auto;
          }

          .lead {
            font-size: 2.4rem;
            max-width: var(--width, 45rem);
            margin: 0 auto;
          }

          .body > p {
            margin: 1em 0;
          }

          .link {
            color: var(--a, #F08080);
            text-decoration: none;
          }

          @media screen and (max-width: 40rem) {
            .wrapper {
              margin: 3rem .25em;
            }
          }  
        `}</style>
      </main>
    )
  }
};

