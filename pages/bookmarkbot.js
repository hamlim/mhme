import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import styled from 'emotion/react'
import { keyframes } from 'emotion'

const Container = styled.section`
  max-width: 95vw;
  margin: 0 auto;
  @media screen and (min-width: 35rem) {
    max-width: 35rem;
  }
`

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--black);
`

const Copy = styled.p`
  font-size: 1.7rem;
  margin: 1rem 0;
`

const Link = styled.a`color: var(--a);`

const Image = styled.img`
  max-height: 45rem;
  width: auto;
  margin: 0 auto;
`
const Flex = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Spacer = styled.div`height: 3rem;`

export default () =>
  <main>
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Bookmark Bot</title>
    </Head>
    <Header />
    <Container>
      <Title>Bookmark Bot</Title>
      <Copy>Bookmark Bot is a simple Twitter account that you can use to save tweets to look at later.</Copy>
      <Copy>
        Simply follow <Link href="https://twitter.com/saveasbookmark">@saveasbookmark</Link> on twitter.
      </Copy>
      <Copy>
        Then when you find a tweet you want to save for later, simply hit the DM button and send it to{' '}
        <Link href="https://twitter.com/saveasbookmark">@saveasbookmark</Link>.
      </Copy>
      <Flex>
        <Image src="/static/images/bookmarkbot/twitter.png" alt="Twitter timeline" />
      </Flex>
      <Flex>
        <Image src="/static/images/bookmarkbot/dm1.png" alt="Twitter DMs" />
      </Flex>
      <Flex>
        <Image src="/static/images/bookmarkbot/dm2.png" alt="Sending a DM" />
      </Flex>
      <Copy>
        To see the tweets you have saved for later, simply pull up the DM conversation with{' '}
        <Link href="https://twitter.com/saveasbookmark">@saveasbookmark</Link>.
      </Copy>
      <Spacer />
      <Copy>
        Your privacy matters, the SaveAsBookmark Twitter account is not used or looked at by anyone, so you can safely
        save whatever content you want with it, without any prying eyes 🕵🏼‍♂️.
      </Copy>
      <Copy>
        Follow the account now and start saving tweets!{' '}
        <Link href="https://twitter.com/saveasbookmark">@saveasbookmark</Link>
      </Copy>
    </Container>
  </main>