import React, { ReactNode, createElement } from "react"
import { TitleWrapper } from "./styles"

type Props = {
  children: ReactNode
  level: "h1" | "h2" | "h3" | "h4"
}

const Title = ({ children, level }: Props) => {
  const element = createElement(level, null, children)

  return <TitleWrapper>{element}</TitleWrapper>
}

export default Title
