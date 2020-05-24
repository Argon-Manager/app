import React from "react"
import { Switch, Route } from "react-router-dom"
import { AuthChecker } from "../auth/components"
import { ProjectsView } from "./views"

const ProjectsRoot = () => {
  return (
    <Route path={"/projects"}>
      <AuthChecker type={"requireAuth"}>
        <Switch>
          <Route path={"/projects"} exact>
            <ProjectsView />
          </Route>
        </Switch>
      </AuthChecker>
    </Route>
  )
}

export default ProjectsRoot
