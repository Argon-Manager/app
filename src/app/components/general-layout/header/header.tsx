import React from "react"
import Title from "./title"
import { HeaderWrapper } from "./styles"
import Nav from "./nav"

const Header = () => {
  return (
    <HeaderWrapper>
      <Title />
      <Nav />
    </HeaderWrapper>
  )
}

export default Header
