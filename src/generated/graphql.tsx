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

export type RegisterMutationVariables = {
  input: RegisterInput
}

export type RegisterMutation = { __typename?: "Mutation" } & {
  register: { __typename?: "Auth" } & Pick<Auth, "token"> & {
      user: { __typename?: "User" } & UserFieldsFragment
    }
}

export type UserFieldsFragment = { __typename?: "User" } & Pick<User, "id" | "email">

export const UserFieldsFragmentDoc = gql`
  fragment UserFields on User {
    id
    email
  }
`
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
