import { MockedProvider } from "@apollo/client/testing"
import { MockedProviderProps } from "@apollo/client/utilities/testing/mocking/MockedProvider"
import React, { ReactNode } from "react"
import { ThemeProvider } from "../../components"

type Props = {
  children: ReactNode
  apolloConfig: MockedProviderProps
}

const TestingWrapper = ({ children, apolloConfig }: Props) => {
  return (
    <MockedProvider {...apolloConfig}>
      <ThemeProvider>{children}</ThemeProvider>
    </MockedProvider>
  )
}

export default TestingWrapper
