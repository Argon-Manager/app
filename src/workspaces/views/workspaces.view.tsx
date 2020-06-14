import React, { useCallback } from "react"
import { useParams } from "react-router-dom"
import { Button, Title, useModal } from "../../app"
import { useCreateWorkspaceMutation, useWorkspacesQuery } from "../../generated/graphql"
import { WorkspaceForm, WorkspacesList } from "../components"
import { FormData } from "../components/workspace-form/types"

const WorkspacesView = () => {
  const { setModal } = useModal()

  const { projectId } = useParams<{ projectId: string }>()
  const [createWorkspaceMutation] = useCreateWorkspaceMutation()
  const handleSubmit = useCallback(async (values: FormData) => {
    await createWorkspaceMutation({ variables: { input: { ...values, projectId } } })
  }, [])

  const { data } = useWorkspacesQuery({ variables: { projectId } })

  return (
    <>
      <header>
        <Title variant={"h2"}>Workspaces</Title>
        <Button
          onClick={() =>
            setModal({
              content: <WorkspaceForm onSubmit={handleSubmit} submitLabel={"Create"} />,
            })
          }
        >
          Create
        </Button>
      </header>
      {data?.workspaces && (
        <WorkspacesList data={data.workspaces} projectId={parseInt(projectId)} />
      )}
    </>
  )
}

export default WorkspacesView
