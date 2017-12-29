import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import colors from '../styles/colors'
import { extractCritical } from 'emotion-server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const emotionStyles = extractCritical(html)
    return { html, head, errorHtml, chunks, ...emotionStyles }
  }
  render() {
    return (
      <html className="avenir">
        <Head>
          <meta charset="UTF-8" />
          <meta name="theme-color" content={colors.a} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="/static/src/hljs-ocean.css" />
          <link rel="stylesheet" href="/static/src/tachyons.min.css" />
          <style>
            {`
           :root {
            --a: ${colors.a};
            --a-muted: ${colors.aMuted};
            --b: ${colors.b};
            --b-muted: ${colors.bMuted};
            --c: ${colors.c};
            --c-muted: ${colors.cMuted};

            --d: ${colors.d};
            --d-muted: ${colors.dMuted};


            --gray: ${colors.gray};
            --gray-muted: ${colors.grayMuted};
            --light-gray: ${colors.lightGray};
            --white: ${colors.white};
            --black: ${colors.black};

            --fonts: -apple-system,
                      BlinkMacSystemFont,
                      Roboto,
                      Oxygen-Sans,
                      Ubuntu,
                      Cantarell,
                      sans-serif;
            --font-size: 18px;

            --width: 45rem;
            --width-s: 30rem;
          }


          *, *::after, *::before {
            box-sizing: inherit;
            margin: 0;
            padding: 0;
          }
          html {
            box-sizing: border-box;
            font-family: var(--fonts);
            font-size: var(--font-size);
            transition: background-color 1s, color 1s;
          }`}
          </style>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
