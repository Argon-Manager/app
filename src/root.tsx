import React from "react"
import { ApolloProvider, AppView, ThemeProvider } from "./app"
import { AuthProvider, getAuth } from "./auth"

const Root = () => {
  return (
    <ApolloProvider>
      <ThemeProvider>
        <AuthProvider initialValue={getAuth()}>
          <AppView />
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default Root
