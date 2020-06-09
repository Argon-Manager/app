import React from "react"
import { ApolloProvider, AppView, ModalProvider, ThemeProvider } from "./app"
import { AuthProvider, getAuth } from "./auth"

const Root = () => {
  return (
    <ApolloProvider>
      <ThemeProvider>
        <AuthProvider initialValue={getAuth()}>
          <ModalProvider>
            <AppView />
          </ModalProvider>
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default Root
