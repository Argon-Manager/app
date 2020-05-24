import React from "react"
import { AppRouter, ThemeProvider } from "./app"

const Root = () => {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  )
}

export default Root
