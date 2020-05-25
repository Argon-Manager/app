import React from "react"
import { ApolloProvider, AppRoot, ThemeProvider } from "./app"
import { AuthProvider } from "./auth"

const Root = () => {
  return (
    <ApolloProvider>
      <ThemeProvider>
        <AuthProvider initialValue={{ token: localStorage.getItem("token") ?? undefined }}>
          <AppRoot />
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default Root
