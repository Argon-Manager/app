import React from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { AuthRoot } from "../auth"

const AppRoot = () => {
  return (
    <Router>
      <Switch>
        <AuthRoot />
      </Switch>
    </Router>
  )
}

export default AppRoot
