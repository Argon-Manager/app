import React from "react"
import { Link } from "react-router-dom"
import { Dropdown } from "../../../app"
import { Project, useDeleteProjectMutation } from "../../../generated/graphql"
import { ProjectItemWrapper } from "./styles"

type Props = {
  item: Project
}

const ProjectItem = ({ item }: Props) => {
  const [deleteProjectMutation] = useDeleteProjectMutation()

  return (
    <ProjectItemWrapper>
      <header>
        <h3>
          <Link to={`/projects/${item.id}/dashboard`}>{item.name}</Link>
        </h3>
      </header>
      <p>{item.description}</p>
      <Dropdown
        label={"..."}
        items={[
          <Link to={`/projects/update/${item.id}`}>Update</Link>,
          <button onClick={() => deleteProjectMutation({ variables: { id: item.id } })}>
            Delete
          </button>,
        ]}
      />
    </ProjectItemWrapper>
  )
}

export default ProjectItem
