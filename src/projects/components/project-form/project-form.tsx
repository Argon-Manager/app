import React from "react"
import { useForm } from "react-hook-form"
import { Button, Input, Textarea } from "../../../app"
import { FormValues } from "./types"

type Props = {
  onSubmit: (values: FormValues) => void
}

const ProjectForm = ({ onSubmit }: Props) => {
  const { register, handleSubmit } = useForm<FormValues>()
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
      <Button>Create</Button>
    </form>
  )
}

export default ProjectForm
