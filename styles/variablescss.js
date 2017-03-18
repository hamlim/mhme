export default `
  :root {
    --a: #F08080;
    --a-muted: #FFA07A;
    --b: #4169E1;
    --b-muted: color(#4169E1 lightness(+ 15%));
    --c: springgreen;
    --c-muted: color(springgreen lightness(+ 25%));

    --d: #1abc9c;
    --d-muted: #9DE2D5;


    --gray: #566573;
    --gray-muted: #D5D8DC;
    --white: #FEFEFE;
    --black: #0f0f0f;

    --fonts: -apple-system,
              BlinkMacSystemFont,
              "Segoe UI",
              Roboto,
              Oxygen-Sans,
              Ubuntu,
              Cantarell,
              "Helvetica Neue",
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
  }
`;