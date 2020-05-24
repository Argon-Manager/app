import React from "react"
import { Route, Switch } from "react-router-dom"
import { RegistrationView } from "./views"

const AuthRoot = () => {
  return (
    <Switch>
      <Route path="/registration" exact>
        <RegistrationView />
      </Route>
    </Switch>
  )
}

export default AuthRoot
