import React, {Component} from 'react';
import Head from "next/head";
import Router from 'next/router'
import Link from 'next/link';
import 'whatwg-fetch';
import Header from '../../components/header';
import PostRenderer from '../../utils/postrenderer';

export default class extends Component {
  static async getInitialProps ({ pathname, query }) {
    this.pathname = pathname;
    this.query = query;
    return {pathname, query};
  }
  state = {
    feed: [],
    post: null
  }

  componentDidMount() {
    const props = this.props;
    fetch('/static/json/posts.json').then(r => {
      return r.json();
    }).then(feed => {
      this.setState({feed});
      feed.forEach(post => {
        if (post.hasOwnProperty('route')) {
          if (props.query.slug === post.slug) {
            Router.push(post.path);
            return;
          }
        }
      })
      let post = feed.find(p => p.slug === props.query.slug);
      post && this.setState({post});
    }).catch(err => console.warn(err));
  }

  render() {
    return (
      <main className="Post">
        <Header page="Post" />
        {(this.state && this.state.post) && (
          <div>
            <Head>
              <title>{this.state.post && this.state.post.title}</title>
            </Head>
            <div className="wrapper">
              <header className="header">
                <h4 className="postDate">Published: {`${this.state.post.day} of ${this.state.post.month}, ${this.state.post.year}`}.</h4>
                <h2 className="postTitle">{this.state.post.title}</h2>
              </header>
              <PostRenderer post={this.state.post} />
              <section className="section">
                <h4 className="postTags">Tags:</h4><br/>
                {(this.state && this.state.post && this.state.post.tags) && this.state.post.tags.map((tag, index) => (
                  <Link key={index} href="/blog/tags"><a className="tag">{tag}</a></Link>
                ))}
              </section>
            </div>
          </div>
        )}
        { !this.state && (
          <div className="loading">🕐</div>
        )}
        <style jsx>{`
          .wrapper {
            margin-top: 3rem;
            max-width: var(--width, 45rem);
            margin-left: auto;
            margin-right: auto;
          }

          .header,
          .section {
            margin-left: 1rem;
            margin-right: 1rem;
          }
          .section {
            margin-bottom: 3rem;
          }
          @media screen and (min-width: 45rem) {
            .header,
            .section {
              margin-left: 0;
              margin-right: 0;
            }
          }
          .link {
            color: var(--a, #F08080);
            text-decoration: none;
          }
          .postTitle {
            font-size: 3rem;
          }
          .postDate,
          .postTags {
            color: color(#0f0f0f lightness(+ 35%));
            margin: 1rem 0 .5rem;
          }

          .postTags {
            display: inline-block;
          }

          .tag {
            background-color: var(--d);
            padding: .25em;
            border-radius: 4px;
            margin: 0 1em;
            color: var(--white);
            text-decoration: none;
          }
          .tag:hover,
          .tag:focus {
            background-color: var(--d-muted);
          }
          .loading {
            min-height: 60vh;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
            animation: spin 3s linear infinite;
          }
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </main>
    )
  }
};
