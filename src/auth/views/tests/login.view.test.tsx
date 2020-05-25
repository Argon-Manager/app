import { act, cleanup, fireEvent, render, waitFor } from "@testing-library/react"
import "jest-localstorage-mock"
import "mutationobserver-shim"
import React from "react"
import { TestingWrapper } from "../../../app/tests/lib"
import { LoginDocument } from "../../../generated/graphql"
import { AuthProvider } from "../../lib"
import LoginView from "../login.view"

describe("LoginView", () => {
  afterEach(() => {
    cleanup()
  })

  test("submit user credential and set token to localhost", async () => {
    const input = { email: "test@email.com", password: "testpass" }
    const data = {
      login: {
        token: "mocked-token",
        user: { id: "1", ...input },
      },
    }
    const { container } = render(
      <TestingWrapper
        apolloConfig={{
          mocks: [
            {
              request: {
                query: LoginDocument,
                variables: { input },
              },
              result: {
                data,
              },
            },
          ],
        }}
      >
        <AuthProvider>
          <LoginView />
        </AuthProvider>
      </TestingWrapper>
    )

    const emailInput = container.querySelector("[name=email]")
    const passwordInput = container.querySelector("[name=password]")
    const button = container.querySelector("button")

    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(button).toBeInTheDocument()

    fireEvent.change(passwordInput!, { target: { value: input.password } })
    fireEvent.change(emailInput!, { target: { value: input.email } })

    await act(async () => {
      fireEvent.click(button!)
    })

    await act(async () => {
      await waitFor(() => {
        expect(localStorage.__STORE__["token"]).toBe(data.login.token)
      })
    })
  })
})
