import { act, cleanup, fireEvent, render, waitFor } from "@testing-library/react"
import "mutationobserver-shim"
import "jest-localstorage-mock"
import React from "react"
import { TestingWrapper } from "../../../app/tests/lib"
import { RegisterDocument } from "../../../generated/graphql"
import { AuthProvider } from "../../lib"
import RegistrationView from "../registration.view"

describe("RegistrationView", () => {
  afterEach(() => {
    cleanup()
  })

  test("submit user credential and set token to localhost", async () => {
    const input = { email: "test@email.com", password: "testpass" }
    const data = {
      register: {
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
                query: RegisterDocument,
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
          <RegistrationView />
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
        expect(localStorage.__STORE__["token"]).toBe(data.register.token)
      })
    })
  })
})
