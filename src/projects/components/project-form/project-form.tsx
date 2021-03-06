import React from "react"
import { useForm } from "react-hook-form"
import { Button, Input, Textarea } from "../../../app"
import { Project } from "../../../generated/graphql"
import { FormData } from "./types"

type Props = {
  onSubmit: (values: FormData) => void
  defaultValues?: Pick<Project, "name" | "description">
  submitLabel: string
}

const ProjectForm = ({ onSubmit, defaultValues, submitLabel }: Props) => {
  const { register, handleSubmit } = useForm<FormData>({
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
