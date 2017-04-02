import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import color from 'css-color-function';

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage()
    const styles = flush()
    return { html, head, styles }
  }

  render () {
    return (
     <html>
       <Head>
         <meta charset="UTF-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <link rel="stylesheet" href="/static/src/hljs-ocean.css" />
         <style>{`
           :root {
            --a: #F08080;
            --a-muted: #FFA07A;
            --b: #4169E1;
            --b-muted: ${color.convert('color(#4169E1 lightness(+ 15%))')};
            --c: springgreen;
            --c-muted: ${color.convert('color(springgreen lightness(+ 25%))')};

            --d: #1abc9c;
            --d-muted: #9DE2D5;


            --gray: #566573;
            --gray-muted: #D5D8DC;
            --light-gray: ${color.convert('color(#FFFFFF shade(8%))')};
            --white: #FEFEFE;
            --black: #0f0f0f;

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
       </Head>
       <body>
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}
