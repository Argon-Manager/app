import React from "react"
import { useForm } from "react-hook-form"
import { Button, Input, Title, Typography } from "../../../app/components"
import { FormData } from "./types"

type Props = {
  onSubmit: any
}

const AuthForm = ({ onSubmit }: Props) => {
  const { register: registerInput, handleSubmit } = useForm<FormData>()

  return (
    <form style={{ margin: "50px 50px" }} onSubmit={handleSubmit(onSubmit)}>
      <Title level="h2">Registration</Title>
      <Typography>Register to use full capabilities of service.</Typography>
      <Input
        name={"email"}
        label={"Email"}
        placeholder={"developer@gmail.com"}
        inputRef={registerInput}
      />
      <Input
        name={"password"}
        label={"Password"}
        placeholder={"jsdfi(787e"}
        type={"password"}
        inputRef={registerInput}
      />
      <Button variant={"submit"} type={"submit"}>
        Sign Up
      </Button>
    </form>
  )
}

export default AuthForm
