import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { AuthRouter } from "../auth"

const AppRouter = () => {
  return (
    <Router>
      <AuthRouter />
    </Router>
  )
}

export default AppRouter
