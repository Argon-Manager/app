import React, { ReactNode } from "react"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { theme } from "./lib"

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
}

export default ThemeProvider
