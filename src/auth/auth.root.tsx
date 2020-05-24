import React from "react"
import { Route, Switch } from "react-router-dom"
import { LoginView, RegistrationView } from "./views"

const AuthRoot = () => {
  return (
    <Switch>
      <Route path="/registration" exact>
        <RegistrationView />
      </Route>
      <Route path="/login" exact>
        <LoginView />
      </Route>
    </Switch>
  )
}

export default AuthRoot
