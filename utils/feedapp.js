import React from 'react';
import Link from 'next/link';

export default ({feed}) => (
  <section className="wrap">
    <ul className="list">
      {feed.map((post, index) => (
        <li key={index}>
          <Link href={
            post.route ? post.route :
            { pathname: '/blog/post', query: { slug: `${post.slug}` }}}><a className="link">
            <div className="postcard">
              <h4 className="posttitle">{post.title}</h4>
              <p className="postlede">
                {post.lede && post.lede.substring(0, 65) + '...'}
              </p>
              <p className="posttime">Publication Date: {`${post.day} of ${post.month}, ${post.year}`}</p>
            </div>
          </a></Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      .link {
        color: var(--a, #F08080);
        text-decoration: none;
      }

      .link:hover > .postcard,
      .link:focus > .postcard {
        box-shadow: 0 0 1em 0 var(--b, #4169E1);
      }

      .list {
        list-style: none;
        display: grid;
        grid-gap: 1em;
        grid-template-columns: 1fr;
        margin: 2rem 0;
      }

      .postcard {
        margin: 0 auto;
        max-width: 25rem;
        padding: 1em;
        border-radius: 5px;
        height: 100%;
      }

      .posttitle {
        font-weight: bold;
        font-size: 2rem;
        margin-bottom: 1em;
      }
      .posttime {
        color: var(--b-muted);
      }
      .postlede {
        font-size: 1.25rem;
        margin: .5em 0;
      }
      @media screen and (min-width: 45rem) {
        .list {
          grid-template-columns: 1fr 1fr 1fr;
        }
        .postcard {
          will-change: box-shadow;
          box-shadow: 0 0 1em 0 #eee;
        }
      }

    `}</style>
  </section>
);
