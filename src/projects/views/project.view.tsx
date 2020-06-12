import React from "react"
import { useParams } from "react-router-dom"
import { Title, Typography } from "../../app"
import { useProjectQuery } from "../../generated/graphql"

const ProjectView = () => {
  const { projectId } = useParams<{ projectId: string }>()
  const { data } = useProjectQuery({ variables: { id: projectId } })

  if (!data?.project) {
    return null
  }

  return (
    <>
      <Title variant={"h3"}>{data.project.name}</Title>
      <Typography>{data.project.description}</Typography>
    </>
  )
}

export default ProjectView
