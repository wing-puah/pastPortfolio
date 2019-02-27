import styled, { createGlobalStyle } from 'styled-components'

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
    font-size: 1.5rem;
    line-height: 2;
  }

  a {
    font-size: 1.5rem;
    text-decooration: none;
  }

  .width--full {
    width: 100%;
  }
`

export default GlobalStyles;
