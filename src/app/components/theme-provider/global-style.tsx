import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  html {
    box-sizing: border-box;
    font-size: 62.5%; // 10px/16px = 62.5%, 1rem = 10px
    font-family: Roboto, sans-serif;
    background: #f6f7fb;
  }
  
  body {
    font-size: 1.6rem;
  }
`

export default GlobalStyle
