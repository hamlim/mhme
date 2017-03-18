export const headerstyles = `
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10rem;

    display: grid;
    grid-template-columns: 1fr;

    max-width: var(--width);
    margin: auto;
  }
  .name {
    font-size: 3rem;
    text-decoration: none;
    color: var(--black);
  }

  .header__link {
    text-decoration: none;
    color: black;
    font-size: 1.8rem;
  }
  .header__link.is-active {
    color: var(--c);
  }
  .header__link.is-active:hover,
  .header__link.is-active:focus {
    text-decoration: underline;
    color: var(--a);
  }

  .header__link,
  .name {
    &:hover,
    &:focus {
      text-decoration: underline;
      color: var(--a);
    }
  }

  .header__list {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .header__list > li {
    display: inline-block;
  }

  @media screen and (min-width: 27rem) {
    .header__link {
      padding: 0 .5em;
    }
  }

  @media screen and (min-width: 45rem) {
    .header {
      grid-template-columns: 1fr 1fr;
    }
  }
`;