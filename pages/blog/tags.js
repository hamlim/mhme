import React, {Component} from 'react';
import 'whatwg-fetch';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/header';
import Subnav from '../../components/subnav';
import TagApp from '../../utils/tagapp';


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
      <main>
        <Head>
          <title>My Blog Tags</title>
        </Head>
        <Header activePage="blog"/>
        <Subnav page="tags" />
        <article className="wrapper">
          <h2>Tags:</h2>
          {this.state.feed.length > 0 ? (
            <TagApp feed={this.state.feed} />
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
}