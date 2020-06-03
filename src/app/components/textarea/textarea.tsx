import React, { ReactNode, Ref } from "react"
import { Error, TextareaWrapper, Label } from "./styles"

type Props = {
  name: string
  label?: ReactNode
  placeholder?: string
  error?: string
  fullWidth?: boolean
  rows?: number
  inputRef?: Ref<any>
}

const Textarea = ({ label, name, placeholder, error, fullWidth, inputRef, rows }: Props) => {
  return (
    <TextareaWrapper fullWidth={fullWidth} error={Boolean(error)}>
      {label && <Label htmlFor={`input_${name}`}>{label}</Label>}
      <textarea
        name={name}
        ref={inputRef}
        id={`text_${name}`}
        placeholder={placeholder}
        rows={rows}
        className={error ? "input-error" : ""}
      />
      <Error>{error}</Error>
    </TextareaWrapper>
  )
}

export default Textarea
