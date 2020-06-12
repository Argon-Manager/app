import React, { useCallback } from "react"
import { useHistory, useParams } from "react-router-dom"
import { useProjectQuery, useUpdateProjectMutation } from "../../generated/graphql"
import { ProjectForm } from "../components"
import { FormData } from "../components/project-form/types"
import { serializeProjectData } from "../lib"

const ProjectUpdateView = () => {
  const { projectId } = useParams<{ projectId: string }>()
  const { data } = useProjectQuery({ variables: { id: projectId } })

  const [updateProjectMutation] = useUpdateProjectMutation()
  const history = useHistory()
  const handleSubmit = useCallback(
    async (values: FormData) => {
      await updateProjectMutation({ variables: { id: projectId, input: values } })
      history.push("/projects")
    },
    [projectId]
  )

  if (!data?.project) {
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
