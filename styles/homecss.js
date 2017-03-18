export default `
  .lead {
    font-size: 2.4rem;
  }

  .content > p {
    font-size: 1.5rem;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  .link {
    color: var(--a);
    text-decoration: none;
  }

  .wrapper,
  .footer {
    margin-top: 3rem;
    max-width: var(--width);
    margin: auto;
  }

  .footer {
    margin: 5rem auto;
    height: 10rem;
    display: flex;
    align-items: center;
  }
  .footerText {
    font-size: 1.8rem;
  }
  .footerLink {
    text-decoration: none;
    color: black;
  }
  .footerLink:hover, 
  .footerLink:focus {
    text-decoration: underline;
    color: var(--c);
  }

  @media screen and (min-width: 45rem) {
    .header {
      grid-template-columns: 1fr 1fr;
    }
    .second {
      grid-column: 2 / -1;
      grid-row: 2 / 3;
    }
    .third {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
    }
    .fourth {
      grid-column: 2 / -1;
      grid-row: 4 / 5;
    }
    .content {
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
    }
  }
`;