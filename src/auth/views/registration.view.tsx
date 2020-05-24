import React from "react"
import { useForm } from "react-hook-form"
import { Button, Input, Title, Typography } from "../../app"

const RegistrationView = () => {
  const { register, handleSubmit } = useForm()

  return (
    <form style={{ margin: "50px 50px" }} onSubmit={handleSubmit(console.log)}>
      <Title level="h2">Registration</Title>
      <Typography>Register to use full capabilities of service.</Typography>
      <Input
        name={"email"}
        label={"Email"}
        placeholder={"developer@gmail.com"}
        inputRef={register}
      />
      <Input
        name={"password"}
        label={"Password"}
        placeholder={"jsdfi(787e"}
        type={"password"}
        inputRef={register}
      />
      <Button variant={"submit"} type={"submit"}>
        Sign Up
      </Button>
    </form>
  )
}

export default RegistrationView
