import React from 'react'
import Link from 'next/link'

import styled from 'emotion/react'

const PostCard = styled.div`
  margin: 0 auto;
  max-width: 25rem;
  padding: 1em;
  border-radius: 5px;
  height: 100%;
  @media screen and (min-width: 45rem) {
    will-change: box-shadow;
    box-shadow: 0 0 1em 0 #eee;
  }
`
const StyledLink = styled.a`
  color: var(--a, #f08080);
  text-decoration: none;
  &:hover > ${PostCard},
  &:focus > ${PostCard} {
    box-shadow: 0 0 1em 0 var(--b, #4169e1);
  }
`

const List = styled.ul`
  list-style: none;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr;
  margin: 2rem 0;
  @media screen and (min-width: 45rem) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const PostTitle = styled.h4`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1em;
`

const PostLede = styled.p`
  font-size: 1.25rem;
  margin: .5em 0;
`

const PostTime = styled.p`color: var(--b-muted);`

export default ({ feed }) =>
  <section className="wrap">
    <List>
      {feed.map((post, index) =>
        <li key={index}>
          <Link href={post.route ? post.route : { pathname: '/blog/post', query: { slug: `${post.slug}` } }}>
            <StyledLink>
              <PostCard>
                <PostTitle>
                  {post.title}
                </PostTitle>
                <PostLede>
                  {post.lede && post.lede.substring(0, 65) + '...'}
                </PostLede>
                <PostTime>
                  Publication Date: {`${post.day} of ${post.month}, ${post.year}`}
                </PostTime>
              </PostCard>
            </StyledLink>
          </Link>
        </li>,
      )}
    </List>
  </section>
