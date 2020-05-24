import React, { useCallback } from "react"
import { Title, Typography } from "../../app/components"
import { useRegisterMutation } from "../../generated/graphql"
import { AuthForm } from "../components"
import { FormData } from "../components/auth-form/types"
import { useAuth } from "../lib"

const RegistrationView = () => {
  const { setAuth } = useAuth()

  const [registerMutation] = useRegisterMutation()

  const handleSubmit = useCallback(async (values: FormData) => {
    const { data } = await registerMutation({ variables: { input: values } })
    data && setAuth(data?.register!)
  }, [])

  return (
    <>
      <Title level="h2">Registration</Title>
      <Typography>Register to service and your project start to grow.</Typography>
      <AuthForm onSubmit={handleSubmit} type={"registration"} />
    </>
  )
}

export default RegistrationView
