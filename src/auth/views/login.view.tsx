import React, { useCallback } from "react"
import { Title, Typography } from "../../app"
import { useLoginMutation } from "../../generated/graphql"
import { AuthForm } from "../components"
import { FormValues } from "../components/auth-form/types"
import { useAuth } from "../lib"

const LoginView = () => {
  const { setAuth } = useAuth()

  const [loginMutation] = useLoginMutation()

  const handleSubmit = useCallback(async (values: FormValues) => {
    const { data } = await loginMutation({ variables: { input: values } })
    data && setAuth(data?.login!)
  }, [])

  return (
    <>
      <Title variant="h2">Login</Title>
      <Typography>Login to manage your amazing projects.</Typography>
      <AuthForm onSubmit={handleSubmit} type={"login"} />
    </>
  )
}

export default LoginView
