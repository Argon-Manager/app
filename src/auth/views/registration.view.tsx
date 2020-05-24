import React, { useCallback } from "react"
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

  return <AuthForm onSubmit={handleSubmit} />
}

export default RegistrationView
