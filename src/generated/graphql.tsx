import gql from "graphql-tag"
import * as ApolloReactCommon from "@apollo/client"
import * as ApolloReactHooks from "@apollo/client"
export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Query = {
  __typename?: "Query"
  me?: Maybe<User>
  project?: Maybe<Project>
  authUserProjects: Array<Project>
  sprints: Array<Sprint>
  sprint?: Maybe<Sprint>
  tasks: Array<Task>
  workspaces: Array<Workspace>
  workspace?: Maybe<Workspace>
}

export type QueryProjectArgs = {
  id: Scalars["ID"]
}

export type QuerySprintsArgs = {
  projectId: Scalars["ID"]
}

export type QuerySprintArgs = {
  id: Scalars["ID"]
}

export type QueryTasksArgs = {
  projectId: Scalars["ID"]
}

export type QueryWorkspacesArgs = {
  projectId: Scalars["ID"]
}

export type QueryWorkspaceArgs = {
  id: Scalars["ID"]
}

export type Mutation = {
  __typename?: "Mutation"
  register: Auth
  login?: Maybe<Auth>
  createProject: Project
  updateProject?: Maybe<Project>
  deleteProject?: Maybe<Scalars["Int"]>
  createSprint: Sprint
  createTask: Task
  createWorkspace: Workspace
}

export type MutationRegisterArgs = {
  input: RegisterInput
}

export type MutationLoginArgs = {
  input: LoginInput
}

export type MutationCreateProjectArgs = {
  input: ProjectInput
}

export type MutationUpdateProjectArgs = {
  id: Scalars["ID"]
  input: ProjectInput
}

export type MutationDeleteProjectArgs = {
  id: Scalars["ID"]
}

export type MutationCreateSprintArgs = {
  input: SprintInput
}

export type MutationCreateTaskArgs = {
  input: TaskInput
}

export type MutationCreateWorkspaceArgs = {
  input: WorkspaceInput
}

export type Auth = {
  __typename?: "Auth"
  user: User
  token: Scalars["String"]
}

export type RegisterInput = {
  email: Scalars["String"]
  password: Scalars["String"]
}

export type LoginInput = {
  email: Scalars["String"]
  password: Scalars["String"]
}

export type Project = {
  __typename?: "Project"
  id: Scalars["ID"]
  name: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  users: Array<User>
}

export type ProjectInput = {
  name: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  userIds?: Maybe<Array<Scalars["ID"]>>
}

export type Sprint = {
  __typename?: "Sprint"
  id: Scalars["ID"]
  name: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  active: Scalars["Boolean"]
  projectId: Scalars["ID"]
  project: Project
  workspaceId?: Maybe<Scalars["ID"]>
  workspace?: Maybe<Workspace>
  tasks: Array<Task>
  users: Array<User>
}

export type SprintInput = {
  name: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  active: Scalars["Boolean"]
  projectId: Scalars["ID"]
  workspaceId?: Maybe<Scalars["ID"]>
  userIds?: Maybe<Array<Scalars["ID"]>>
}

export type Task = {
  __typename?: "Task"
  id: Scalars["ID"]
  name: Scalars["String"]
  projectId: Scalars["ID"]
  project: Project
  description?: Maybe<Scalars["String"]>
  assignedId?: Maybe<Scalars["ID"]>
  assigned?: Maybe<User>
}

export type TaskInput = {
  name: Scalars["String"]
  projectId: Scalars["ID"]
  description?: Maybe<Scalars["String"]>
  assignedId?: Maybe<Scalars["ID"]>
}

export type User = {
  __typename?: "User"
  id: Scalars["ID"]
  email: Scalars["String"]
}

export type Workspace = {
  __typename?: "Workspace"
  id: Scalars["ID"]
  name: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  projectId: Scalars["ID"]
  project: Project
  users: Array<User>
}

export type WorkspaceInput = {
  name: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  projectId: Scalars["ID"]
  userIds?: Maybe<Array<Scalars["ID"]>>
}

export type LoginMutationVariables = {
  input: LoginInput
}

export type LoginMutation = { __typename?: "Mutation" } & {
  login?: Maybe<
    { __typename?: "Auth" } & Pick<Auth, "token"> & {
        user: { __typename?: "User" } & UserFieldsFragment
      }
  >
}

export type MeQueryVariables = {}

export type MeQuery = { __typename?: "Query" } & {
  me?: Maybe<{ __typename?: "User" } & UserFieldsFragment>
}

export type RegisterMutationVariables = {
  input: RegisterInput
}

export type RegisterMutation = { __typename?: "Mutation" } & {
  register: { __typename?: "Auth" } & Pick<Auth, "token"> & {
      user: { __typename?: "User" } & UserFieldsFragment
    }
}

export type AuthUserProjectsQueryVariables = {}

export type AuthUserProjectsQuery = { __typename?: "Query" } & {
  authUserProjects: Array<{ __typename?: "Project" } & ProjectFieldsFragment>
}

export type CreateProjectMutationVariables = {
  input: ProjectInput
}

export type CreateProjectMutation = { __typename?: "Mutation" } & {
  createProject: { __typename?: "Project" } & ProjectFieldsFragment
}

export type DeleteProjectMutationVariables = {
  id: Scalars["ID"]
}

export type DeleteProjectMutation = { __typename?: "Mutation" } & Pick<Mutation, "deleteProject">

export type ProjectFieldsFragment = { __typename?: "Project" } & Pick<
  Project,
  "id" | "name" | "description"
> & { users: Array<{ __typename?: "User" } & UserFieldsFragment> }

export type ProjectQueryVariables = {
  id: Scalars["ID"]
}

export type ProjectQuery = { __typename?: "Query" } & {
  project?: Maybe<{ __typename?: "Project" } & ProjectFieldsFragment>
}

export type UpdateProjectMutationVariables = {
  id: Scalars["ID"]
  input: ProjectInput
}

export type UpdateProjectMutation = { __typename?: "Mutation" } & {
  updateProject?: Maybe<{ __typename?: "Project" } & ProjectFieldsFragment>
}

export type CreateSprintMutationVariables = {
  input: SprintInput
}

export type CreateSprintMutation = { __typename?: "Mutation" } & {
  createSprint: { __typename?: "Sprint" } & SprintFieldsFragment
}

export type SprintFieldsFragment = { __typename?: "Sprint" } & Pick<
  Sprint,
  "id" | "name" | "active" | "description" | "projectId" | "workspaceId"
> & {
    project: { __typename?: "Project" } & ProjectFieldsFragment
    users: Array<{ __typename?: "User" } & UserFieldsFragment>
  }

export type SprintQueryVariables = {
  id: Scalars["ID"]
}

export type SprintQuery = { __typename?: "Query" } & {
  sprint?: Maybe<{ __typename?: "Sprint" } & SprintFieldsFragment>
}

export type SprintsQueryVariables = {
  projectId: Scalars["ID"]
}

export type SprintsQuery = { __typename?: "Query" } & {
  sprints: Array<{ __typename?: "Sprint" } & SprintFieldsFragment>
}

export type CreateTaskMutationVariables = {
  input: TaskInput
}

export type CreateTaskMutation = { __typename?: "Mutation" } & {
  createTask: { __typename?: "Task" } & TaskFieldsFragment
}

export type TaskFieldsFragment = { __typename?: "Task" } & Pick<
  Task,
  "id" | "name" | "description" | "assignedId" | "projectId"
> & {
    assigned?: Maybe<{ __typename?: "User" } & UserFieldsFragment>
    project: { __typename?: "Project" } & ProjectFieldsFragment
  }

export type TasksQueryVariables = {
  projectId: Scalars["ID"]
}

export type TasksQuery = { __typename?: "Query" } & {
  tasks: Array<{ __typename?: "Task" } & TaskFieldsFragment>
}

export type UserFieldsFragment = { __typename?: "User" } & Pick<User, "id" | "email">

export type CreateWorkspaceMutationVariables = {
  input: WorkspaceInput
}

export type CreateWorkspaceMutation = { __typename?: "Mutation" } & {
  createWorkspace: { __typename?: "Workspace" } & WorkspaceFieldsFragment
}

export type WorkspaceFieldsFragment = { __typename?: "Workspace" } & Pick<
  Workspace,
  "id" | "name" | "description" | "projectId"
> & {
    project: { __typename?: "Project" } & ProjectFieldsFragment
    users: Array<{ __typename?: "User" } & UserFieldsFragment>
  }

export const UserFieldsFragmentDoc = gql`
  fragment UserFields on User {
    id
    email
  }
`
export const ProjectFieldsFragmentDoc = gql`
  fragment ProjectFields on Project {
    id
    name
    description
    users {
      ...UserFields
    }
  }
  ${UserFieldsFragmentDoc}
`
export const SprintFieldsFragmentDoc = gql`
  fragment SprintFields on Sprint {
    id
    name
    active
    description
    projectId
    workspaceId
    project {
      ...ProjectFields
    }
    users {
      ...UserFields
    }
  }
  ${ProjectFieldsFragmentDoc}
  ${UserFieldsFragmentDoc}
`
export const TaskFieldsFragmentDoc = gql`
  fragment TaskFields on Task {
    id
    name
    description
    assigned {
      ...UserFields
    }
    assignedId
    project {
      ...ProjectFields
    }
    projectId
  }
  ${UserFieldsFragmentDoc}
  ${ProjectFieldsFragmentDoc}
`
export const WorkspaceFieldsFragmentDoc = gql`
  fragment WorkspaceFields on Workspace {
    id
    name
    description
    projectId
    project {
      ...ProjectFields
    }
    users {
      ...UserFields
    }
  }
  ${ProjectFieldsFragmentDoc}
  ${UserFieldsFragmentDoc}
`
export const LoginDocument = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        ...UserFields
      }
    }
  }
  ${UserFieldsFragmentDoc}
`
export type LoginMutationFn = ApolloReactCommon.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>
) {
  return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    baseOptions
  )
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>
export const MeDocument = gql`
  query Me {
    me {
      ...UserFields
    }
  }
  ${UserFieldsFragmentDoc}
`

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions)
}
export function useMeLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions)
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>
export const RegisterDocument = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      token
      user {
        ...UserFields
      }
    }
  }
  ${UserFieldsFragmentDoc}
`
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>
) {
  return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
    baseOptions
  )
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>
export const AuthUserProjectsDocument = gql`
  query AuthUserProjects {
    authUserProjects {
      ...ProjectFields
    }
  }
  ${ProjectFieldsFragmentDoc}
`

/**
 * __useAuthUserProjectsQuery__
 *
 * To run a query within a React component, call `useAuthUserProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthUserProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthUserProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAuthUserProjectsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    AuthUserProjectsQuery,
    AuthUserProjectsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<AuthUserProjectsQuery, AuthUserProjectsQueryVariables>(
    AuthUserProjectsDocument,
    baseOptions
  )
}
export function useAuthUserProjectsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    AuthUserProjectsQuery,
    AuthUserProjectsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<AuthUserProjectsQuery, AuthUserProjectsQueryVariables>(
    AuthUserProjectsDocument,
    baseOptions
  )
}
export type AuthUserProjectsQueryHookResult = ReturnType<typeof useAuthUserProjectsQuery>
export type AuthUserProjectsLazyQueryHookResult = ReturnType<typeof useAuthUserProjectsLazyQuery>
export type AuthUserProjectsQueryResult = ApolloReactCommon.QueryResult<
  AuthUserProjectsQuery,
  AuthUserProjectsQueryVariables
>
export const CreateProjectDocument = gql`
  mutation CreateProject($input: ProjectInput!) {
    createProject(input: $input) {
      ...ProjectFields
    }
  }
  ${ProjectFieldsFragmentDoc}
`
export type CreateProjectMutationFn = ApolloReactCommon.MutationFunction<
  CreateProjectMutation,
  CreateProjectMutationVariables
>

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProjectMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateProjectMutation,
    CreateProjectMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<CreateProjectMutation, CreateProjectMutationVariables>(
    CreateProjectDocument,
    baseOptions
  )
}
export type CreateProjectMutationHookResult = ReturnType<typeof useCreateProjectMutation>
export type CreateProjectMutationResult = ApolloReactCommon.MutationResult<CreateProjectMutation>
export type CreateProjectMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateProjectMutation,
  CreateProjectMutationVariables
>
export const DeleteProjectDocument = gql`
  mutation DeleteProject($id: ID!) {
    deleteProject(id: $id)
  }
`
export type DeleteProjectMutationFn = ApolloReactCommon.MutationFunction<
  DeleteProjectMutation,
  DeleteProjectMutationVariables
>

/**
 * __useDeleteProjectMutation__
 *
 * To run a mutation, you first call `useDeleteProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProjectMutation, { data, loading, error }] = useDeleteProjectMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProjectMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    DeleteProjectMutation,
    DeleteProjectMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<DeleteProjectMutation, DeleteProjectMutationVariables>(
    DeleteProjectDocument,
    baseOptions
  )
}
export type DeleteProjectMutationHookResult = ReturnType<typeof useDeleteProjectMutation>
export type DeleteProjectMutationResult = ApolloReactCommon.MutationResult<DeleteProjectMutation>
export type DeleteProjectMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteProjectMutation,
  DeleteProjectMutationVariables
>
export const ProjectDocument = gql`
  query Project($id: ID!) {
    project(id: $id) {
      ...ProjectFields
    }
  }
  ${ProjectFieldsFragmentDoc}
`

/**
 * __useProjectQuery__
 *
 * To run a query within a React component, call `useProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProjectQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ProjectQuery, ProjectQueryVariables>
) {
  return ApolloReactHooks.useQuery<ProjectQuery, ProjectQueryVariables>(
    ProjectDocument,
    baseOptions
  )
}
export function useProjectLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProjectQuery, ProjectQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<ProjectQuery, ProjectQueryVariables>(
    ProjectDocument,
    baseOptions
  )
}
export type ProjectQueryHookResult = ReturnType<typeof useProjectQuery>
export type ProjectLazyQueryHookResult = ReturnType<typeof useProjectLazyQuery>
export type ProjectQueryResult = ApolloReactCommon.QueryResult<ProjectQuery, ProjectQueryVariables>
export const UpdateProjectDocument = gql`
  mutation UpdateProject($id: ID!, $input: ProjectInput!) {
    updateProject(id: $id, input: $input) {
      ...ProjectFields
    }
  }
  ${ProjectFieldsFragmentDoc}
`
export type UpdateProjectMutationFn = ApolloReactCommon.MutationFunction<
  UpdateProjectMutation,
  UpdateProjectMutationVariables
>

/**
 * __useUpdateProjectMutation__
 *
 * To run a mutation, you first call `useUpdateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectMutation, { data, loading, error }] = useUpdateProjectMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProjectMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateProjectMutation,
    UpdateProjectMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<UpdateProjectMutation, UpdateProjectMutationVariables>(
    UpdateProjectDocument,
    baseOptions
  )
}
export type UpdateProjectMutationHookResult = ReturnType<typeof useUpdateProjectMutation>
export type UpdateProjectMutationResult = ApolloReactCommon.MutationResult<UpdateProjectMutation>
export type UpdateProjectMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateProjectMutation,
  UpdateProjectMutationVariables
>
export const CreateSprintDocument = gql`
  mutation CreateSprint($input: SprintInput!) {
    createSprint(input: $input) {
      ...SprintFields
    }
  }
  ${SprintFieldsFragmentDoc}
`
export type CreateSprintMutationFn = ApolloReactCommon.MutationFunction<
  CreateSprintMutation,
  CreateSprintMutationVariables
>

/**
 * __useCreateSprintMutation__
 *
 * To run a mutation, you first call `useCreateSprintMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSprintMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSprintMutation, { data, loading, error }] = useCreateSprintMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSprintMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateSprintMutation,
    CreateSprintMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<CreateSprintMutation, CreateSprintMutationVariables>(
    CreateSprintDocument,
    baseOptions
  )
}
export type CreateSprintMutationHookResult = ReturnType<typeof useCreateSprintMutation>
export type CreateSprintMutationResult = ApolloReactCommon.MutationResult<CreateSprintMutation>
export type CreateSprintMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateSprintMutation,
  CreateSprintMutationVariables
>
export const SprintDocument = gql`
  query Sprint($id: ID!) {
    sprint(id: $id) {
      ...SprintFields
    }
  }
  ${SprintFieldsFragmentDoc}
`

/**
 * __useSprintQuery__
 *
 * To run a query within a React component, call `useSprintQuery` and pass it any options that fit your needs.
 * When your component renders, `useSprintQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSprintQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSprintQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<SprintQuery, SprintQueryVariables>
) {
  return ApolloReactHooks.useQuery<SprintQuery, SprintQueryVariables>(SprintDocument, baseOptions)
}
export function useSprintLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SprintQuery, SprintQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<SprintQuery, SprintQueryVariables>(
    SprintDocument,
    baseOptions
  )
}
export type SprintQueryHookResult = ReturnType<typeof useSprintQuery>
export type SprintLazyQueryHookResult = ReturnType<typeof useSprintLazyQuery>
export type SprintQueryResult = ApolloReactCommon.QueryResult<SprintQuery, SprintQueryVariables>
export const SprintsDocument = gql`
  query Sprints($projectId: ID!) {
    sprints(projectId: $projectId) {
      ...SprintFields
    }
  }
  ${SprintFieldsFragmentDoc}
`

/**
 * __useSprintsQuery__
 *
 * To run a query within a React component, call `useSprintsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSprintsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSprintsQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useSprintsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<SprintsQuery, SprintsQueryVariables>
) {
  return ApolloReactHooks.useQuery<SprintsQuery, SprintsQueryVariables>(
    SprintsDocument,
    baseOptions
  )
}
export function useSprintsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SprintsQuery, SprintsQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<SprintsQuery, SprintsQueryVariables>(
    SprintsDocument,
    baseOptions
  )
}
export type SprintsQueryHookResult = ReturnType<typeof useSprintsQuery>
export type SprintsLazyQueryHookResult = ReturnType<typeof useSprintsLazyQuery>
export type SprintsQueryResult = ApolloReactCommon.QueryResult<SprintsQuery, SprintsQueryVariables>
export const CreateTaskDocument = gql`
  mutation CreateTask($input: TaskInput!) {
    createTask(input: $input) {
      ...TaskFields
    }
  }
  ${TaskFieldsFragmentDoc}
`
export type CreateTaskMutationFn = ApolloReactCommon.MutationFunction<
  CreateTaskMutation,
  CreateTaskMutationVariables
>

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTaskMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateTaskMutation,
    CreateTaskMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(
    CreateTaskDocument,
    baseOptions
  )
}
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>
export type CreateTaskMutationResult = ApolloReactCommon.MutationResult<CreateTaskMutation>
export type CreateTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateTaskMutation,
  CreateTaskMutationVariables
>
export const TasksDocument = gql`
  query Tasks($projectId: ID!) {
    tasks(projectId: $projectId) {
      ...TaskFields
    }
  }
  ${TaskFieldsFragmentDoc}
`

/**
 * __useTasksQuery__
 *
 * To run a query within a React component, call `useTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useTasksQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<TasksQuery, TasksQueryVariables>
) {
  return ApolloReactHooks.useQuery<TasksQuery, TasksQueryVariables>(TasksDocument, baseOptions)
}
export function useTasksLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TasksQuery, TasksQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<TasksQuery, TasksQueryVariables>(TasksDocument, baseOptions)
}
export type TasksQueryHookResult = ReturnType<typeof useTasksQuery>
export type TasksLazyQueryHookResult = ReturnType<typeof useTasksLazyQuery>
export type TasksQueryResult = ApolloReactCommon.QueryResult<TasksQuery, TasksQueryVariables>
export const CreateWorkspaceDocument = gql`
  mutation CreateWorkspace($input: WorkspaceInput!) {
    createWorkspace(input: $input) {
      ...WorkspaceFields
    }
  }
  ${WorkspaceFieldsFragmentDoc}
`
export type CreateWorkspaceMutationFn = ApolloReactCommon.MutationFunction<
  CreateWorkspaceMutation,
  CreateWorkspaceMutationVariables
>

/**
 * __useCreateWorkspaceMutation__
 *
 * To run a mutation, you first call `useCreateWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkspaceMutation, { data, loading, error }] = useCreateWorkspaceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateWorkspaceMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateWorkspaceMutation,
    CreateWorkspaceMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>(
    CreateWorkspaceDocument,
    baseOptions
  )
}
export type CreateWorkspaceMutationHookResult = ReturnType<typeof useCreateWorkspaceMutation>
export type CreateWorkspaceMutationResult = ApolloReactCommon.MutationResult<
  CreateWorkspaceMutation
>
export type CreateWorkspaceMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateWorkspaceMutation,
  CreateWorkspaceMutationVariables
>
