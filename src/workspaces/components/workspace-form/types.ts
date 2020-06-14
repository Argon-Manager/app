import { WorkspaceInput } from "../../../generated/graphql"

export type FormData = Omit<WorkspaceInput, "projectId">
