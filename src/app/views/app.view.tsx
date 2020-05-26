import React from "react"
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import { AuthChecker, LoginView, RegistrationView, useAuth } from "../../auth"
import { useMeQuery } from "../../generated/graphql"
import { ProjectsView } from "../../projects"
import { Main } from "../components"

const AppView = () => {
  const { token, user, setAuth } = useAuth()

  useMeQuery({
    skip: !token,
    onCompleted: (data) => {
      data && setAuth({ user: data.me! })
    },
  })

  if (token && !user) {
    return null
  }

  return (
    <Router>
      <Main>
        <Switch>
          <Route path={["/registration", "/login"]}>
            <AuthChecker type={"requireNotAuth"}>
              <Route path="/registration" exact>
                <RegistrationView />
              </Route>
              <Route path="/login" exact>
                <LoginView />
              </Route>
            </AuthChecker>
          </Route>
          <Route path={"/projects"} exact>
            <AuthChecker type={"requireAuth"}>
              <ProjectsView />
            </AuthChecker>
          </Route>
          <Route to={"/"} exact>
            <Redirect to={"/projects"} />
          </Route>
        </Switch>
      </Main>
    </Router>
  )
}

export default AppView
