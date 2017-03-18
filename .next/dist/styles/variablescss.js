"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  :root {\n    --a: #F08080;\n    --a-muted: #FFA07A;\n    --b: #4169E1;\n    --b-muted: color(#4169E1 lightness(+ 15%));\n    --c: springgreen;\n    --c-muted: color(springgreen lightness(+ 25%));\n\n    --d: #1abc9c;\n    --d-muted: #9DE2D5;\n\n\n    --gray: #566573;\n    --gray-muted: #D5D8DC;\n    --white: #FEFEFE;\n    --black: #0f0f0f;\n\n    --fonts: -apple-system,\n              BlinkMacSystemFont,\n              \"Segoe UI\",\n              Roboto,\n              Oxygen-Sans,\n              Ubuntu,\n              Cantarell,\n              \"Helvetica Neue\",\n              sans-serif;\n    --font-size: 18px;\n\n    --width: 45rem;\n    --width-s: 30rem;\n  }\n\n\n  *, *::after, *::before {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n  }\n  html {\n    box-sizing: border-box;\n    font-family: var(--fonts);\n    font-size: var(--font-size);\n    transition: background-color 1s, color 1s;\n  }\n";