import React, { ReactNode } from "react"
import { CardActionsWrapper } from "./styles"

type Props = {
  children: ReactNode
}

const CardActions = ({ children }: Props) => {
  return <CardActionsWrapper>{children}</CardActionsWrapper>
}

export default CardActions
