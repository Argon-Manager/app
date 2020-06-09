import React from "react"
import { useForm } from "react-hook-form"
import { Button, Input } from "../../../app"
import { FormData } from "./types"

type Props = {
  onSubmit: any
  type: "registration" | "login"
}

const AuthForm = ({ onSubmit, type }: Props) => {
  const { register: registerInput, handleSubmit } = useForm<FormData>()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name={"email"}
        label={"Email"}
        placeholder={"developer@gmail.com"}
        inputRef={registerInput}
        fullWidth
      />
      <Input
        name={"password"}
        label={"Password"}
        placeholder={"jsdfi(787e"}
        type={"password"}
        inputRef={registerInput}
        fullWidth
      />
      <Button variant={"submit"} type={"submit"}>
        {type === "registration" && "Sign Up"}
        {type === "login" && "Sign In"}
      </Button>
    </form>
  )
}

export default AuthForm
