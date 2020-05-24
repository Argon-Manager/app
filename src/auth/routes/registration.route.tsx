import React from "react"
import { Route } from "react-router-dom"
import { RegistrationView } from "../views"

const RegistrationRoute = () => {
  return (
    <Route path="/registration" exact>
      <RegistrationView />
    </Route>
  )
}

export default RegistrationRoute
