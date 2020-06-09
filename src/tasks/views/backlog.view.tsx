import React, { useCallback } from "react"
import { useParams } from "react-router-dom"
import { useModal } from "../../app"
import { useCreateTaskMutation, useTasksQuery } from "../../generated/graphql"
import { TaskForm } from "../components"
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
    <div>
      Backlog view
      <button
        onClick={() =>
          setModal({
            content: <TaskForm onSubmit={handleSubmit} />,
          })
        }
      >
        create task
      </button>
      <ul>
        {data?.tasks?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default BacklogView
