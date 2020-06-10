import React, { ReactNode } from "react"
import { CardWrapper } from "./styles"

type Props = {
  children: ReactNode
}

const Card = ({ children }: Props) => {
  return <CardWrapper>{children}</CardWrapper>
}

export default Card
