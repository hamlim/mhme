import React from 'react';
import Link from 'next/link';

const Subnav = ({page}) => (
  <nav className="subnav">
    <Link href="/blog" ><a className={page === 'blog' ? 'subnav__link is-active' : 'subnav__link'}>Blog</a></Link>
    <Link href="/blog/feed"><a className={page === 'feed' ? 'subnav__link is-active' : 'subnav__link'}>Feed</a></Link>
    <Link href="/blog/tags"><a className={page === 'tags' ? 'subnav__link is-active' : 'subnav__link'}>Tags</a></Link>
    <style jsx>{`
      .subnav {
        max-width: var(--width);
        margin: 0 auto 10rem;
      }

      .subnav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 3rem;
        font-size: 1.5rem;
      }

      .subnav__link {
        color: var(--b);
        text-decoration: none;
      }
      .subnav__link.is-active {
        color: var(--a);
        text-decoration: none;
      }

      .subnav__link:hover,
      .subnav__link:focus,
      .subnav__link.is-active:hover,
      .subnav__link.is-active:focus {
        text-decoration: underline;
        color: var(--c);
      }

    `}</style>
  </nav>
);

export default Subnav;