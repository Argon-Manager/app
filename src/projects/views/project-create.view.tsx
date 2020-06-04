import React, { useCallback } from "react"
import { useHistory } from "react-router-dom"
import { Title } from "../../app"
import { useCreateProjectMutation } from "../../generated/graphql"
import { ProjectForm } from "../components"
import { FormValues } from "../components/project-form/types"

const ProjectCreateView = () => {
  const [createProjectMutation] = useCreateProjectMutation()
  const history = useHistory()
  const handleSubmit = useCallback(async (values: FormValues) => {
    await createProjectMutation({ variables: { input: values } })
    history.push("/projects")
  }, [])

  return (
    <>
      <Title variant={"h2"}>Create new project</Title>
      <ProjectForm submitLabel={"Create"} onSubmit={handleSubmit} />
    </>
  )
}

export default ProjectCreateView
