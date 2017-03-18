import React from 'react';
import Link from 'next/link';
const Header = ({activePage}) => (
  <header className="header">
    <h1><Link href="/"><a className="name">Matt Hamlin</a></Link></h1>
    <nav className="header__nav">
      <ul className="header__list">
        <li><Link href="/blog" prefetch><a className={activePage === "blog" ? "header__link is-active" : "header__link"}>Blog</a></Link></li>
        {/*<li><Link href="/stories" prefetch><a className={activePage === "stories" ? "header__link is-active" : "header__link"}>Stories</a></Link></li>*/}
        <li><Link href="/projects" prefetch><a className={activePage === "projects" ? "header__link is-active" : "header__link"}>Projects</a></Link></li>
        <li><Link href="/travel" prefetch><a className={activePage === "travel" ? "header__link is-active" : "header__link"}>Travel</a></Link></li>
      </ul>
    </nav>
    <style jsx>{`
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 10rem;

        display: grid;
        grid-template-columns: 1fr;

        max-width: var(--width);
        margin: auto;
      }
      .name {
        font-size: 3rem;
        text-decoration: none;
        color: var(--black);
      }

      .header__link {
        text-decoration: none;
        color: black;
        font-size: 1.8rem;
      }
      .header__link.is-active {
        color: var(--c);
      }
      .header__link.is-active:hover,
      .header__link.is-active:focus {
        text-decoration: underline;
        color: var(--a);
      }

      .header__link:hover,
      .header__link:focus,
      .name:hover,
      .name:focus {
        text-decoration: underline;
        color: var(--a);
      }

      .header__list {
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      .header__list > li {
        display: inline-block;
      }

      @media screen and (min-width: 27rem) {
        .header__link {
          padding: 0 .5em;
        }
      }

      @media screen and (min-width: 45rem) {
        .header {
          grid-template-columns: 1fr 1fr;
        }
      }
    `}
    </style>
  </header>
);

export default Header;