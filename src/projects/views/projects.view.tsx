import React from "react"
import { Link } from "react-router-dom"
import { Button, Title } from "../../app"
import { useAuthUserProjectsQuery } from "../../generated/graphql"
import { ProjectsList } from "../components"

const ProjectsView = () => {
  const { data } = useAuthUserProjectsQuery()

  return (
    <>
      <header>
        <Title variant={"h2"}>Projects</Title>
        <Link to={"/projects/create"}>
          <Button>Create</Button>
        </Link>
      </header>
      <ProjectsList data={data?.authUserProjects} />
    </>
  )
}

export default ProjectsView
