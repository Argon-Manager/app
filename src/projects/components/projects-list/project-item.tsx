import React from "react"
import { Project } from "../../../generated/graphql"
import { ProjectItemWrapper } from "./styles"

type Props = {
  item: Project
}

const ProjectItem = ({ item }: Props) => {
  return (
    <ProjectItemWrapper>
      <header>
        <h3>{item.name}</h3>
      </header>
      <p>{item.description}</p>
    </ProjectItemWrapper>
  )
}

export default ProjectItem
