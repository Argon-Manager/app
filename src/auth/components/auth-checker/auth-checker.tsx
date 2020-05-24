import React, { ReactNode } from "react"
import { Redirect } from "react-router-dom"
import { useAuth } from "../../lib"

type Props = {
  type: "requireAuth" | "requireNotAuth"
  children: ReactNode
}

const AuthChecker = ({ children, type }: Props) => {
  const { isAuth } = useAuth()

  console.log(isAuth)
  if (!isAuth && type === "requireAuth") {
    return <Redirect to={"/login"} />
  }

  if (isAuth && type === "requireNotAuth") {
    return <Redirect to={"/"} />
  }

  return <>{children}</>
}

export default AuthChecker
