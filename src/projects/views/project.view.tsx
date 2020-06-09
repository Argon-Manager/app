import React from "react"
import { useParams } from "react-router-dom"
import { Title, Typography } from "../../app/components"
import { useProjectQuery } from "../../generated/graphql"

const ProjectView = () => {
  const { id } = useParams<{ id: string }>()
  const { data } = useProjectQuery({ variables: { id } })

  if (!data) {
    return null
  }

  return (
    <>
      <Title variant={"h3"}>{data.project?.name}</Title>
      <Typography>{data.project?.description}</Typography>
    </>
  )
}

export default ProjectView
