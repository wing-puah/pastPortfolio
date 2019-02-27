import styled, { createGlobalStyle } from 'styled-components'
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

  .width--full {
    width: 100%;
  }

  .container {
    width: 90%;
    padding: 40px 0;
    margin: auto;
    ${theme.breakpoints.up('sm')} {
      padding: 80px 0;
    }
  }
`

export default GlobalStyles;
