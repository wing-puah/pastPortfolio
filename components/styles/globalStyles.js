import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizieng: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    line-height: 2;
    background: ${theme.palette.background.default};
  }

  div, p {
    font-size: 1.6rem;
  }

  a {
    font-size: 1.6rem;
    text-decooration: none;
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2rem;
    ${theme.breakpoints.up('sm')} {
      font-size: 2.4rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    ${theme.breakpoints.up('sm')} {
      font-size: 2rem;
    }
  }

  .width--full {
    width: 100%;
  }

  .height--full {
    height: 100%;
  }

  nav a {
    &:hover {
      text-decoration: none;
    }
  }

  .container {
    width: 90%;
    padding: 40px 0;
    margin: auto;
    ${theme.breakpoints.up('sm')} {
      padding: 80px 0;
    }
  }
`;

export default GlobalStyles;
