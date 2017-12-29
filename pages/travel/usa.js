import React, { Component } from 'react'
import Link from 'next/link'
import Header from '../../components/header'
import USA from '../../components/travel/usa'

import styled from 'react-emotion'

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
`
const Section = styled.section`
  max-width: 35rem;
  margin: 1rem auto;
`

export default () => (
  <Wrapper>
    <Header activePage="travel" />
    <Section>
      <h2>United States of America</h2>
      <p>
        The United States is my home country and one that I have spent a large amount of time traveling to many
        different states.
      </p>
    </Section>
    <USA />
  </Wrapper>
)
