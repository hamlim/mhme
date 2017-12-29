import React from 'react'
import Link from 'next/link'
import styled, { css } from 'react-emotion'

const StyledSubnav = styled.nav`
  max-width: var(--width);
  margin: 0 auto 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  font-size: 1.5rem;
`

const SubnavLink = styled.a`
  color: var(--b);
  text-decoration: none;
  &.is-active {
    color: var(--a);
    text-decoration: none;
  }
  &:hover,
  &:focus,
  &.is-active:hover,
  &.is-active:focus {
    text-decoration: underline;
    color: var(--c);
  }
`

const Subnav = ({ page }) => (
  <StyledSubnav>
    <Link href="/blog">
      <SubnavLink className={page === 'blog' && 'is-active'}>Blog</SubnavLink>
    </Link>
    <Link href="/blog/feed">
      <SubnavLink className={page === 'feed' && 'is-active'}>Feed</SubnavLink>
    </Link>
    <Link href="/blog/tags">
      <SubnavLink className={page === 'tags' && 'is-active'}>Tags</SubnavLink>
    </Link>
  </StyledSubnav>
)

export default Subnav
