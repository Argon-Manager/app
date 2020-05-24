import React, { ButtonHTMLAttributes, ReactNode } from "react"
import { ButtonWrapper, Variant } from "./styles"

type Props = { children: ReactNode; variant?: Variant } & Pick<
  ButtonHTMLAttributes<unknown>,
  "type" | "disabled"
>

const Button = ({ children, variant }: Props) => {
  return <ButtonWrapper variant={variant ?? "default"}>{children}</ButtonWrapper>
}

export default Button
