import { SprintInput } from "../../../generated/graphql"

export type FormData = Omit<SprintInput, "projectId">
