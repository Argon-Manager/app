import React from "react"
import { useForm } from "react-hook-form"
import { Button, Input, Textarea } from "../../../app"
import { FormData } from "./types"

type Props = {
  onSubmit: (data: FormData) => void
  submitLabel: string
}

const SprintForm = ({ onSubmit, submitLabel }: Props) => {
  const { register, handleSubmit } = useForm<FormData>()
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input name={"name"} label={"Name"} inputRef={register} fullWidth />
      <Textarea
        name={"description"}
        label={"Description"}
        inputRef={register}
        rows={10}
        fullWidth
      />
      <Button>{submitLabel}</Button>
    </form>
  )
}

export default SprintForm
