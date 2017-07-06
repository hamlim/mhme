import React from 'react'
import Link from 'next/link'

import styled from 'emotion/react'

const Wrap = styled.section`margin-top: 3rem;`
const StyledLink = styled.a`color: var(--a, #f08080);`
const Header = styled.header`
  text-decoration: underline;
  font-size: 1.35rem;
  margin-bottom: 1rem;
`
const List = styled.ul`
  list-style-type: none;
  margin-bottom: 2rem;
`

const TagApp = ({ feed }) => {
  let tagSet = new Set()
  feed.forEach(post => {
    if (post.tags) {
      for (let tag of post.tags) {
        if (tag != undefined) {
          tagSet.add(tag)
        }
      }
    }
  })
  let tagArr = [...tagSet]
  return (
    <Wrap>
      {tagArr.map((tag, index) => {
        return (
          <List key={index}>
            <Header id={tag.toLowerCase()}>
              {tag}
            </Header>
            {feed.map((post, index) => {
              if (post.hasOwnProperty('tags') && post.tags.includes(tag)) {
                return (
                  <li key={index}>
                    <Link href={post.route ? post.route : { pathname: '/blog/post', query: { slug: `${post.slug}` } }}>
                      <StyledLink>
                        {post.title}
                      </StyledLink>
                    </Link>
                  </li>
                )
              }
            })}
          </List>
        )
      })}
    </Wrap>
  )
}

export default TagApp
