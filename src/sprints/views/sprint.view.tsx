import React from "react"
import { useParams } from "react-router-dom"
import { Title, Typography } from "../../app"
import { useSprintQuery } from "../../generated/graphql"

const SprintView = () => {
  const { sprintId } = useParams<{ sprintId: string }>()
  const { data } = useSprintQuery({ variables: { id: sprintId } })

  if (!data?.sprint) {
    return null
  }

  return (
    <>
      <Title variant={"h3"}>{data.sprint.name}</Title>
      <Typography>{data.sprint.description}</Typography>
    </>
  )
}

export default SprintView
