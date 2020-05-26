import React from "react"
import { ApolloProvider, AppView, ThemeProvider } from "./app"
import { AuthProvider } from "./auth"

const Root = () => {
  return (
    <ApolloProvider>
      <ThemeProvider>
        <AuthProvider initialValue={{ token: localStorage.getItem("token") ?? undefined }}>
          <AppView />
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default Root
