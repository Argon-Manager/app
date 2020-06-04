import { Project } from "../../generated/graphql"

const serializeProjectData = (data: Project) => ({
  name: data!.name,
  description: data!.description,
})

export default serializeProjectData
