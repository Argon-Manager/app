import React from "react"
import { useForm } from "react-hook-form"
import { Button, Input, Textarea } from "../../../app"
import { FormData } from "./types"

type Props = {
  onSubmit: (value: FormData) => void
}

const TaskForm = ({ onSubmit }: Props) => {
  const { register: registerInput, handleSubmit } = useForm<FormData>()
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input name={"name"} label={"Name"} inputRef={registerInput} fullWidth />
        <Textarea name={"description"} label={"Description"} inputRef={registerInput} fullWidth />
        <Button variant={"submit"} type={"submit"}>
          Create
        </Button>
      </form>
    </>
  )
}

export default TaskForm
