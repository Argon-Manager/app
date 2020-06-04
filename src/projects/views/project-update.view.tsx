import React, { useCallback } from "react"
import { useHistory, useParams } from "react-router-dom"
import { useProjectQuery, useUpdateProjectMutation } from "../../generated/graphql"
import { ProjectForm } from "../components"
import { FormValues } from "../components/project-form/types"
import { serializeProjectData } from "../lib"

const ProjectUpdateView = () => {
  const { id } = useParams<{ id: string }>()
  const { data } = useProjectQuery({ variables: { id } })

  const [updateProjectMutation] = useUpdateProjectMutation()
  const history = useHistory()
  const handleSubmit = useCallback(
    async (values: FormValues) => {
      await updateProjectMutation({ variables: { id, input: values } })
      history.push("/projects")
    },
    [id]
  )

  if (!data) {
    return null
  }

  return (
    <ProjectForm
      submitLabel={"Save"}
      onSubmit={handleSubmit}
      defaultValues={serializeProjectData(data.project!)}
    />
  )
}

export default ProjectUpdateView
