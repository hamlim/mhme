import React, { Component } from 'react'

export default class extends Component {
	state = {
		loadHighRes: false,
	}
	componentDidMount() {
		this.setState({
			loadHighRes: true,
		})
	}
	render() {
		let { images } = this.props
		let thumbnails = images.map((image, index) =>
			<div className="lightboxcontent" key={index}>
				<h4 className="h4">{image.title}</h4>
				<p>{image.text}</p>
				<figure className="lightboxwrapper">
					<a href={'#LB_target_' + index} className="escape">
						<img id={'LB_' + index} src={image.lowres} alt={image.caption} className="lightboximage" />
					</a>
					<figcaption className="lightboxcaption">{image.caption}</figcaption>
				</figure>
			</div>,
		)
		return (
			<section className="lightboxComponent">
				{thumbnails}
				{this.state && this.state.loadHighRes
					? <section>
							{images.map((image, index) =>
								<a href={'#LB_' + index} className="lightboxtargetWrapper escape" id={'LB_target_' + index} key={index}>
									<figure className="lightboxtarge">
										<img src={image.img} alt={image.caption} className="lightboxtargetImg" />
										<figcaption className="lightboxtargetCaption">{image.caption}</figcaption>
									</figure>
								</a>,
							)}
						</section>
					: null}
				<style jsx global>{`

          .h4 {
            text-decoration: underline;
            text-decoration-style: wavy;
            text-decoration-color: var(--c);
            text-underline-position: under;
            padding-bottom: .5em;
            font-size: 2.5rem;
          }


          .lightboxwrapper {
            margin: 1rem 0;
          }
          .lightboxwrapper a {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
          }
          .lightboximage {
            align-self: flex-start;
            max-width: 100vw;
            flex: 1 1 55vw;
            height: auto;
            margin: 0 auto;
            border: 0;
          }
          .lightboxtargetWrapper {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .lightboxtarget {
            display: flex;
            flex-flow: column;
            justify-content: space-around;
            max-width: 90vw;
            max-height: 90vh;
            z-index: 2;
          }
          .lightboxtargetImg {
            align-self: flex-start;
            max-width: 90vw;
            max-height: 90vh;
          }
          .lightboxtargetWrapper::before {
            content: '';
            position: fixed;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            z-index: -1;
            background-color: var(--light-gray);
          }
          .lightboxtargetWrapper:not(:target) {
            display: none;
          }
          .lightboxcaption, .lightboxtargetCaption {
            text-align: center;
            margin: 0 0 1.5rem;
            display: block;
          }

          .lightboxcontent {
            margin: 3rem 0;
          }

          .escape {
            text-decoration: none;
            color: var(--black);
          }

          @media screen and (min-width: 35rem) {
            .lightboximage {
              max-width: 85vw;
            }
          }
          @media screen and (min-width: 45rem) {
            .lightboximage {
              max-width: 75vw;
            }
          }
        `}</style>
			</section>
		)
	}
}
