import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { AuthRoot, useAuth } from "../auth"
import { useMeQuery } from "../generated/graphql"
import { ProjectsRoot } from "../projects"
import { Main } from "./components"

const AppRoot = () => {
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
            <AuthRoot />
          </Route>
          <Route path={"/projects"}>
            <ProjectsRoot />
          </Route>
          <Route to={"/"} exact>
            <Redirect to={"/projects"} />
          </Route>
        </Switch>
      </Main>
    </Router>
  )
}

export default AppRoot
