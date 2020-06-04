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
  authUserProjects?: Maybe<Array<Project>>
}

export type QueryProjectArgs = {
  id: Scalars["ID"]
}

export type Mutation = {
  __typename?: "Mutation"
  register: Auth
  login?: Maybe<Auth>
  createProject: Project
  updateProject?: Maybe<Project>
  deleteProject?: Maybe<Scalars["Int"]>
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
  users?: Maybe<Array<Maybe<User>>>
}

export type ProjectInput = {
  name: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  userIds?: Maybe<Array<Scalars["ID"]>>
}

export type User = {
  __typename?: "User"
  id: Scalars["ID"]
  email: Scalars["String"]
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
  authUserProjects?: Maybe<Array<{ __typename?: "Project" } & ProjectFieldsFragment>>
}

export type CreateProjectMutationVariables = {
  input: ProjectInput
}

export type CreateProjectMutation = { __typename?: "Mutation" } & {
  createProject: { __typename?: "Project" } & ProjectFieldsFragment
}

export type ProjectFieldsFragment = { __typename?: "Project" } & Pick<
  Project,
  "id" | "name" | "description"
> & { users?: Maybe<Array<Maybe<{ __typename?: "User" } & UserFieldsFragment>>> }

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

export type UserFieldsFragment = { __typename?: "User" } & Pick<User, "id" | "email">

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
