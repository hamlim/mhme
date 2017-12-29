import React, { Component } from 'react'

import styled, { css } from 'react-emotion'

const ImageTitle = styled.h4`
  text-decoration: underline;
  text-decoration-style: wavy;
  text-decoration-color: var(--c);
  text-underline-position: under;
  padding-bottom: 0.5em;
  font-size: 2.5rem;
`

const LightBoxTarget = styled.figure`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  max-width: 90vw;
  max-height: 90vh;
  z-index: 2;
`

const LightBoxTargetImg = styled.img`
  align-self: flex-start;
  max-width: 90vw;
  max-height: 90vh;
`

const LightBoxCaption = styled.figcaption`
  text-align: center;
  margin: 0 0 1.5rem;
  display: block;
`

const LightBoxTargetWrapper = styled.a`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: '';
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background-color: var(--light-gray);
  }
  &:not(:target) {
    display: none;
  }
  text-decoration: none;
  color: var(--black);
`

const LightBoxLink = styled.a`
  text-decoration: none;
  color: var(--black);
`

const LightBoxImage = styled.img`
  align-self: flex-start;
  max-width: 100vw;
  flex: 1 1 55vw;
  height: auto;
  margin: 0 auto;
  border: 0;
  @media screen and (min-width: 35rem) {
    max-width: 85vw;
  }
  @media screen and (min-width: 45rem) {
    max-width: 75vw;
  }
`

const LightBoxWrapper = styled.figure`
  margin: 1rem 0;
  & a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`

export default class extends Component {
  state = {
    loadHighRes: false,
  }
  componentDidMount() {
    this.setState(() => ({
      loadHighRes: true,
    }))
  }
  render() {
    let { images } = this.props
    let thumbnails = images.map((image, index) => (
      <div
        css={`
          margin: 3rem 0;
        `}
        key={index}
      >
        <ImageTitle>{image.title}</ImageTitle>
        <p>{image.text}</p>
        <LightBoxWrapper>
          <LightBoxLink href={'#LB_target_' + index}>
            <LightBoxImage id={'LB_' + index} src={image.lowres} alt={image.caption} />
          </LightBoxLink>
          <LightBoxCaption>{image.caption}</LightBoxCaption>
        </LightBoxWrapper>
      </div>
    ))
    return (
      <section>
        {thumbnails}
        {this.state &&
          this.state.loadHighRes && (
            <section>
              {images.map((image, index) => (
                <LightBoxTargetWrapper href={'#LB_' + index} id={'LB_target_' + index} key={index}>
                  <LightBoxTarget>
                    <LightBoxTargetImg src={image.img} alt={image.caption} />
                    <LightBoxCaption>{image.caption}</LightBoxCaption>
                  </LightBoxTarget>
                </LightBoxTargetWrapper>
              ))}
            </section>
          )}
      </section>
    )
  }
}
