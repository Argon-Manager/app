import React, { useCallback } from "react"
import { useParams } from "react-router-dom"
import { Button, Title, useModal } from "../../app"
import { useCreateTaskMutation, useTasksQuery } from "../../generated/graphql"
import { TaskForm, TasksList } from "../components"
import { FormData } from "../components/task-form/types"

const BacklogView = () => {
  const { setModal } = useModal()

  const { projectId } = useParams<{ projectId: string }>()

  const [createTaskMutation] = useCreateTaskMutation()

  const handleSubmit = useCallback(async (values: FormData) => {
    await createTaskMutation({ variables: { input: { ...values, projectId } } })
    setModal(undefined)
  }, [])

  const { data } = useTasksQuery({ variables: { projectId } })

  return (
    <>
      <header>
        <Title variant={"h2"}>Backlog</Title>
        <Button
          onClick={() =>
            setModal({
              content: <TaskForm onSubmit={handleSubmit} />,
            })
          }
        >
          Create
        </Button>
      </header>
      {data?.tasks && <TasksList data={data.tasks} />}
    </>
  )
}

export default BacklogView
