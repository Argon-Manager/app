import React from "react"
import { Link } from "react-router-dom"
import { Card, CardActions, Dropdown, Typography } from "../../../app"
import { useDeleteProjectMutation, WorkspacesQuery } from "../../../generated/graphql"
import { ProjectDescription, ProjectsListWrapper } from "./styles"

type Props = {
  data: WorkspacesQuery["workspaces"]
  projectId: number
}

const WorkspacesList = ({ data, projectId }: Props) => {
  const [deleteProjectMutation] = useDeleteProjectMutation()

  return (
    <ProjectsListWrapper>
      {data.map((item) => (
        <Card>
          <Typography variant={"subtitle"}>
            <Link to={`/projects/${projectId}/workspaces/${item.id}`}>{item.name}</Link>
          </Typography>
          {item.description && <ProjectDescription>{item.description}</ProjectDescription>}
          <CardActions>
            <Dropdown
              label={"..."}
              items={[
                <Link to={`/projects/${projectId}/workspaces/update/${item.id}`}>Update</Link>,
                <span onClick={() => deleteProjectMutation({ variables: { id: item.id } })}>
                  Delete
                </span>,
              ]}
            />
          </CardActions>
        </Card>
      ))}
    </ProjectsListWrapper>
  )
}

export default WorkspacesList
