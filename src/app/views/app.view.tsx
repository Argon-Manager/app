import React from "react"
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import { AuthChecker, LoginView, RegistrationView, useAuth } from "../../auth"
import { useMeQuery } from "../../generated/graphql"
import { ProjectsView } from "../../projects"
import { AppLayout, GeneralLayout } from "../components"

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
      <Switch>
        <Route path={["/registration", "/login"]}>
          <GeneralLayout>
            <AuthChecker type={"requireNotAuth"}>
              <Route path="/registration" exact>
                <RegistrationView />
              </Route>
              <Route path="/login" exact>
                <LoginView />
              </Route>
            </AuthChecker>
          </GeneralLayout>
        </Route>
        <Route path={"/"}>
          <AppLayout>
            <AuthChecker type={"requireAuth"}>
              <Switch>
                <Route path={"/projects"} exact>
                  <ProjectsView />
                </Route>
                <Route to={"/"} exact>
                  <Redirect to={"/projects"} />
                </Route>
              </Switch>
            </AuthChecker>
          </AppLayout>
        </Route>
      </Switch>
    </Router>
  )
}

export default AppView
