import React, { ReactNode, createElement } from "react"
import { TitleWrapper } from "./styles"

type Props = {
  children: ReactNode
  variant: "h1" | "h2" | "h3" | "h4"
}

const Title = ({ children, variant }: Props) => {
  const element = createElement(variant, null, children)

  return <TitleWrapper>{element}</TitleWrapper>
}

export default Title
