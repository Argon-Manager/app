import React, { ReactNode } from "react"
import { ApolloProvider as Provider } from "@apollo/client"
import { client } from "./lib"

const ApolloProvider = ({ children }: { children: ReactNode }) => {
  return <Provider client={client}>{children}</Provider>
}

export default ApolloProvider
