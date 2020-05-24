import React from "react"
import { Route, Switch } from "react-router-dom"
import { AuthChecker } from "./components"
import { LoginView, RegistrationView } from "./views"

const AuthRoot = () => {
  return (
    <Switch>
      <Route path="/registration" exact>
        <AuthChecker type={"requireNotAuth"}>
          <RegistrationView />
        </AuthChecker>
      </Route>
      <Route path="/login" exact>
        <AuthChecker type={"requireNotAuth"}>
          <LoginView />
        </AuthChecker>
      </Route>
    </Switch>
  )
}

export default AuthRoot
