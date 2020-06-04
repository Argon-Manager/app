import React from "react"
import { Link } from "react-router-dom"
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
        <h3>{item.name}</h3>
      </header>
      <p>{item.description}</p>
      <div>
        <ul>
          <li>
            <Link to={`/projects/update/${item.id}`}>Update</Link>
          </li>
          <li onClick={() => deleteProjectMutation({ variables: { id: item.id } })}>Delete</li>
        </ul>
      </div>
    </ProjectItemWrapper>
  )
}

export default ProjectItem
