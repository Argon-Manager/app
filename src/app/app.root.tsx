import React from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { AuthRoot } from "../auth"
import { Main } from "./components"

const AppRoot = () => {
  return (
    <Router>
      <Main>
        <Switch>
          <AuthRoot />
        </Switch>
      </Main>
    </Router>
  )
}

export default AppRoot
