import React, { ReactNode } from "react"
import { MainWrapper } from "./styles"

const Main = ({ children }: { children: ReactNode }) => {
  return <MainWrapper>{children}</MainWrapper>
}

export default Main
