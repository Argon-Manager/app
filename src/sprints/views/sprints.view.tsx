import React, { useCallback } from "react"
import { useParams } from "react-router-dom"
import { Button, Title } from "../../app/components"
import { useModal } from "../../app"
import { useCreateSprintMutation, useSprintsQuery } from "../../generated/graphql"
import { SprintForm, SprintsList } from "../components"
import { FormData } from "../components/sprint-form/types"

const SprintsView = () => {
  const { projectId } = useParams<{ projectId: string }>()
  const { setModal } = useModal()

  const [createSprintMutation] = useCreateSprintMutation()
  const handleSubmit = useCallback(async (data: FormData) => {
    await createSprintMutation({
      variables: { input: { ...data, projectId, active: false } },
    })
  }, [])

  const { data } = useSprintsQuery({ variables: { projectId } })

  return (
    <>
      <header>
        <Title variant={"h2"}>Sprints</Title>
        <Button
          onClick={() =>
            setModal({
              content: <SprintForm onSubmit={handleSubmit} submitLabel={"Create"} />,
            })
          }
        >
          Create
        </Button>
        {data && <SprintsList data={data["sprints"]} projectId={parseInt(projectId)} />}
      </header>
    </>
  )
}

export default SprintsView
