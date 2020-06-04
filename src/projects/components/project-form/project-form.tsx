import React from "react"
import { useForm } from "react-hook-form"
import { Button, Input, Textarea } from "../../../app"
import { FormValues } from "./types"

type Props = {
  onSubmit: (values: FormValues) => void
  defaultValues?: FormValues
  submitLabel: string
}

const ProjectForm = ({ onSubmit, defaultValues, submitLabel }: Props) => {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues,
  })
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

export default ProjectForm
