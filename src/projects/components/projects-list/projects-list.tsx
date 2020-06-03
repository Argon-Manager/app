import React from "react"
import { AuthUserProjectsQuery } from "../../../generated/graphql"
import ProjectItem from "./project-item"
import { ProjectsListWrapper } from "./styles"

type Props = {
  data: AuthUserProjectsQuery["authUserProjects"]
}

const ProjectsList = ({ data }: Props) => {
  return (
    <ProjectsListWrapper>
      {data?.map((item) => (
        <ProjectItem key={item.id} item={item} />
      ))}
    </ProjectsListWrapper>
  )
}

export default ProjectsList
