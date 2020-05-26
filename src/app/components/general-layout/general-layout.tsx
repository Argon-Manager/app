import React, { ReactNode } from "react"
import { MainWrapper } from "./styles"
import { Header } from "./header"

const GeneralLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <MainWrapper>{children}</MainWrapper>
    </>
  )
}

export default GeneralLayout
