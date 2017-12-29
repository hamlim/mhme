import React from 'react'
import Link from 'next/link'
import { css } from 'react-emotion'

const linkClass = css`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  text-decoration: none;
  color: var(--black, black);
  font-size: 1.25rem;
  transition: color 0.15s ease-in;
`
const activeLinkClass = css`
  composes: ${linkClass};
  color: var(--green, #19a974);
`

const Anchor = ({ active, children, href }) => (
  <a href={href} className={active ? activeLinkClass : linkClass}>
    {children}
  </a>
)

const header = css`
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 30em) {
    flex-direction: row;
  }
`
const headerLink = css`
  font-size: 2.25rem;
  text-decoration: none;
  color: var(--black, black);
`
const dib = css`
  display: inline-block;
`
const headerList = css`
  list-style-type: none;
  disply: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Header = ({ activePage }) => (
  <header className={header}>
    <h1 className={dib}>
      <Link href="/">
        <a className={headerLink}>Matt Hamlin</a>
      </Link>
    </h1>
    <nav
      css={`
        margin-left: 0.5rem;
      `}
    >
      <ul className={headerList}>
        <li className={dib}>
          <Link href="/blog" prefetch>
            <Anchor active={activePage === 'blog'} href="/blog">
              ✍️ Blog
            </Anchor>
          </Link>
        </li>
        <li className={dib}>
          <Link href="/projects" prefetch>
            <Anchor active={activePage === 'projects'} href="/projects">
              ✨ Projects
            </Anchor>
          </Link>
        </li>
        <li className={dib}>
          <Link href="/travel" prefetch>
            <Anchor active={activePage === 'travel'} href="/travel">
              ✈️ Travel
            </Anchor>
          </Link>
        </li>
        <li className={dib}>
          <Link href="/resolutions" prefetch>
            <Anchor active={activePage === 'resolutions'} href="/resolutions">
              📓️ 2018 Resolutions
            </Anchor>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
