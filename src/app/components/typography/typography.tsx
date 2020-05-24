import React, { ReactNode } from "react"
import { TypographyWrapper, Variant } from "./styles"

type Props = {
  children: ReactNode
  variant?: Variant
}

const Typography = ({ children, variant }: Props) => {
  return (
    <TypographyWrapper variant={variant ?? "body"}>
      <p>{children}</p>
    </TypographyWrapper>
  )
}

export default Typography
