import React, { ReactNode } from "react"
import { ButtonWrapper, Variant } from "./styles"

type Props = { children: ReactNode; variant?: Variant } & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const Button = ({ children, variant, onClick }: Props) => {
  return (
    <ButtonWrapper onClick={onClick} variant={variant ?? "default"}>
      {children}
    </ButtonWrapper>
  )
}

export default Button
