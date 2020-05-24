import React from "react"
import ReactDOM from "react-dom"
import { Root } from "./app"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
)

serviceWorker.unregister()
