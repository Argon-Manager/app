import React, { useCallback } from "react"
import { Link, useParams } from "react-router-dom"
import { Button, Title, useModal } from "../../app"
import { useCreateTaskMutation, useTasksQuery } from "../../generated/graphql"
import { TaskForm, TasksList } from "../components"
import { FormData } from "../components/task-form/types"

const BacklogView = () => {
  const { setModal } = useModal()

  const { id } = useParams<{ id: string }>()

  const [createTaskMutation] = useCreateTaskMutation()

  const handleSubmit = useCallback(async (values: FormData) => {
    await createTaskMutation({ variables: { input: { ...values, projectId: id } } })
    setModal(undefined)
  }, [])

  const { data } = useTasksQuery({ variables: { projectId: id } })

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
      <TasksList data={data?.tasks} />
    </>
  )
}

export default BacklogView
