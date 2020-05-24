import React, { ReactNode, Ref } from "react"
import { Error, InputWrapper, Label } from "./styles"

type Props = {
  name: string
  label?: ReactNode
  placeholder?: string
  error?: string
  fullWidth?: boolean
  type?: "text" | "password"
  inputRef: Ref<any>
}

const Input = ({ label, name, placeholder, error, fullWidth, type, inputRef }: Props) => {
  return (
    <InputWrapper fullWidth={fullWidth} error={Boolean(error)}>
      {label && <Label htmlFor={`input_${name}`}>{label}</Label>}
      <input
        name={name}
        ref={inputRef}
        type={type ?? "text"}
        id={`input_${name}`}
        placeholder={placeholder}
        className={error ? "input-error" : ""}
      />
      <Error>{error}</Error>
    </InputWrapper>
  )
}

export default Input
