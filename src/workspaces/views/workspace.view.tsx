import React from "react"
import { useParams } from "react-router-dom"
import { Title, Typography } from "../../app"
import { useWorkspaceQuery } from "../../generated/graphql"

const WorkspaceView = () => {
  const { workspaceId } = useParams<{ workspaceId: string }>()
  const { data } = useWorkspaceQuery({ variables: { id: workspaceId } })

  if (!data?.workspace) {
    return null
  }

  return (
    <>
      <Title variant={"h3"}>{data.workspace.name}</Title>
      <Typography>{data.workspace.description}</Typography>
    </>
  )
}

export default WorkspaceView
