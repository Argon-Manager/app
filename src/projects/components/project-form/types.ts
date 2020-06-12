import { Project } from "../../../generated/graphql"

export type FormData = Pick<Project, "name" | "description">
