import React from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { AuthRoot } from "../auth"
import { Main } from "./components"

const AppRoot = () => {
  return (
    <Main>
      <Router>
        <Switch>
          <AuthRoot />
        </Switch>
      </Router>
    </Main>
  )
}

export default AppRoot
