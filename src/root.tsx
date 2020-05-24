import React from "react"
import { ApolloProvider, AppRouter, ThemeProvider } from "./app"

const Root = () => {
  return (
    <ApolloProvider>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default Root
