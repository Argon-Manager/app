import React, { ReactNode } from "react"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import GlobalStyle from "./global-style"
import { theme } from "./lib"

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <GlobalStyle />
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </>
  )
}

export default ThemeProvider
