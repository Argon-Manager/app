import React from "react"
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import { AuthChecker, LoginView, RegistrationView, useAuth } from "../../auth"
import { useMeQuery } from "../../generated/graphql"
import { ProjectCreateView, ProjectsView, ProjectUpdateView, ProjectView } from "../../projects"
import { SprintsView, SprintView } from "../../sprints"
import { BacklogView } from "../../tasks"
import { WorkspacesView } from "../../workspaces"
import { AppLayout, GeneralLayout, Modals } from "../components"

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
    <>
      <Modals />
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
            <AuthChecker type={"requireAuth"}>
              <AppLayout>
                <Switch>
                  <Route path={"/projects"}>
                    <Route path={"/projects"} exact>
                      <ProjectsView />
                    </Route>
                    <Route path={"/projects/update/:projectId"} exact>
                      <ProjectUpdateView />
                    </Route>
                    <Route path={"/projects/create"} exact>
                      <ProjectCreateView />
                    </Route>
                    <Route path={"/projects/:projectId"}>
                      <Switch>
                        <Route path={"/projects/:projectId"} exact>
                          <ProjectView />
                        </Route>
                        <Route path={"/projects/:projectId/backlog"} exact>
                          <BacklogView />
                        </Route>
                        <Route path={"/projects/:projectId/sprints"} exact>
                          <SprintsView />
                        </Route>
                        <Route path={"/projects/:projectId/sprints/:sprintId"} exact>
                          <SprintView />
                        </Route>
                        <Route path={"/projects/:projectId/workspaces"} exact>
                          <WorkspacesView />
                        </Route>
                      </Switch>
                    </Route>
                  </Route>
                  <Route to={"/"} exact>
                    <Redirect to={"/projects"} />
                  </Route>
                </Switch>
              </AppLayout>
            </AuthChecker>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default AppView
