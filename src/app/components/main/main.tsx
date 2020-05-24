import React, { ReactNode } from "react"
import { MainWrapper } from "./styles"
import { Header } from "./header"

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <MainWrapper>{children}</MainWrapper>
    </>
  )
}

export default Main
