import React, { useCallback } from "react"
import { useParams } from "react-router-dom"
import { useModal } from "../../app"
import { useCreateTaskMutation } from "../../generated/graphql"
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
    </div>
  )
}

export default BacklogView
