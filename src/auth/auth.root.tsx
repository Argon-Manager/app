import React from "react"
import { Route, Switch } from "react-router-dom"
import { AuthChecker } from "./components"
import { LoginView, RegistrationView } from "./views"

const AuthRoot = () => {
  return (
    <Route path={["/registration", "/login"]}>
      <AuthChecker type={"requireNotAuth"}>
        <Switch>
          <Route path="/registration" exact>
            <RegistrationView />
          </Route>
          <Route path="/login" exact>
            <LoginView />
          </Route>
        </Switch>
      </AuthChecker>
    </Route>
  )
}

export default AuthRoot
