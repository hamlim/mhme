import React, {Component} from 'react';
import Router from 'next/router'
import 'whatwg-fetch';

import * as hljs from 'highlight.js';
var md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code data-lang="${lang}">${hljs.highlight(lang, str, true).value}</code></pre>`;
      } catch (__) {}
    }
    return `<pre class="hljs"><code data-lang="${lang}">${md.utils.escapeHtml(str)}</code></pre>`;
  }
}).use(require('markdown-it-footnote'))
.use(require('markdown-it-deflist'))
.use(require('markdown-it-inline-comments'));

class PostRenderer extends Component {
  state = {
    loading: true,
    markdown: '',
    error: false
  }
  componentDidMount() {
    let postUrl = `/static/raw/${this.props.post.year}/${this.props.post.month}/${this.props.post.content}.md`;
    fetch(postUrl).then(data => {
      return data.text();
    }).then(md => {
      if (md.includes('<!DOCTYPE html>')) {
        Router.push('/blog');
      }
      this.setState({
        loading: false,
        markdown: md
      });
    }).catch(err => console.warn(err));
  }
  render() {
    return (
      <div>
        {this.state.error && (<h1 className="error">{this.state.error}</h1>)}
        <article className="article" dangerouslySetInnerHTML={{ __html: md.render(this.state.markdown) }}></article>
        <style jsx global>{`
          .article {
            font-size: 1.05rem;
            line-height: 1.6;
            margin-bottom: 3rem;
            margin-left: 1rem;
            margin-right: 1rem;
            display: flex;
            flex-direction: column;
          }
          @media screen and (min-width: 45rem) {
            .article {
              margin-left: 0;
              margin-right: 0;
            }
          }
          .article > p + p {
            margin-top: 1rem;
          }
          .article p:first-child {
            margin-top: 1.5rem;
          }
          .article hr {
            margin: 1rem auto;
            max-width: 45vw;
            @media screen and (max-width: 40rem) {
              width: 95vw;
            }
          }
          .article a {
            color: var(--b);
            text-decoration: none;
            border-bottom: solid 2px var(--d-muted);
          }
          .article a:hover,
          .article a:focus {
            border-bottom-color: var(--d);
          }
          .article a:active {
            background-color: var(--d-muted);
          }
          .article figure {
            text-align: center;
          }
          .article aside {
            background-color: var(--light-gray);
            display: inline-block;
            padding: .5em 1em;
            align-self: flex-end;
          }
          .article img {
            max-width: 90%;
            margin: 2rem auto;
          }
          .article blockquote {
            margin: 1rem;
            padding: 1rem;
            background-color: var(--gray-muted);
          }
          .article blockquote p {
            display: inline;
            margin: 0;
            padding: 0;
          }
          .article blockquote::before {
            color: var(--a);
            content: open-quote;
          }
          .article blockquote::after {
            color: var(--a);
            content: close-quote;
          }
          .article pre {
            margin: 1rem 0rem;
          }
          @media screen and (min-width: 52rem) {
            .article pre {
              margin: 2rem -2rem;
            }
          }
          .article ul,
          .article ol {
            list-style-position: inside;
          }
          @media screen and (min-width: 40rem) {
            .article ul,
            .article ol {
              list-style-position: outside;
            }
          }
          .article h1,
          .article h2,
          .article h3,
          .article h4,
          .article h5,
          .article h6 {
            margin-top: 2em;
            margin-bottom: 1em;
          }
          .has-video,
          .has-image {
            text-align: center;
            margin: 1em 0;
          }
          .example {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          iframe {
            width: calc(100vw - 2rem);
            height: calc(.6 * (100vw - 2rem));
          }
          @media screen and (min-width: 50rem) {
            iframe {
              width: 50rem;
              margin-left: -2.5rem;
              height: calc(.6 * 50rem);
            }
          }

          .task-list-item {
            list-style: none;
          }

          .error {
            text-align: center;
            padding: 1em;
            color: #e74c3c;
            background-color: #F19990;
          }

          .article code:not([data-lang]) {
            background-color: var(--light-gray);
            color: var(--d);
            display: inline-block;
            padding: 0 .3em;
            border-radius: 4px;
          }

        `}</style>
      </div>
    )
  }
};

export default PostRenderer;
