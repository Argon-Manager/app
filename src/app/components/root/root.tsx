import React from "react"
import GlobalStyle from "./global-style";
import ThemeProvider from "./theme-provider"

const Root = () => {
  return <ThemeProvider>
    <GlobalStyle />
    Root
  </ThemeProvider>
}

export default Root
