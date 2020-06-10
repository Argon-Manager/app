import React, { ReactNode } from "react"
import { TypographyWrapper, Variant } from "./styles"

type Props = {
  children: ReactNode
  variant?: Variant
  className?: string
}

const Typography = ({ children, variant, className }: Props) => {
  return (
    <TypographyWrapper variant={variant ?? "body"}>
      <p className={className}>{children}</p>
    </TypographyWrapper>
  )
}

export default Typography
