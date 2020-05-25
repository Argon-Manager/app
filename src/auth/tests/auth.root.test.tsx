import React from "react"
import "jest-localstorage-mock"
import "mutationobserver-shim"
import { MemoryRouter, Route } from "react-router-dom"
import { cleanup, render, waitFor, act } from "@testing-library/react"
import { TestingWrapper } from "../../app/tests/lib"
import AuthRoot from "../auth.root"
import { AuthProvider } from "../lib"

describe("AuthRoot", () => {
  afterEach(cleanup)

  describe("registration route", () => {
    test("redirect to home page when user is authenticated", async () => {
      let _location

      render(
        <TestingWrapper>
          <MemoryRouter initialEntries={["/registration"]}>
            <AuthProvider
              initialValue={{ token: "mocked-token", user: { id: "1", email: "test@email.com" } }}
            >
              <AuthRoot />
            </AuthProvider>
            <Route
              path={"*"}
              render={({ location }) => {
                _location = location
                return null
              }}
            />
          </MemoryRouter>
        </TestingWrapper>
      )

      await act(async () => {
        await waitFor(() => {
          expect(_location.pathname).toEqual("/")
        })
      })
    })

    test("display when user not auth", async () => {
      const { getByText } = render(
        <TestingWrapper>
          <MemoryRouter initialEntries={["/registration"]}>
            <AuthProvider>
              <AuthRoot />
            </AuthProvider>
          </MemoryRouter>
        </TestingWrapper>
      )
      expect(getByText("Registration")).toBeInTheDocument()
    })
  })

  describe("login route", () => {
    test("redirect to home page when user is authenticated", async () => {
      let _location

      render(
        <TestingWrapper>
          <MemoryRouter initialEntries={["/login"]}>
            <AuthProvider
              initialValue={{ token: "mocked-token", user: { id: "1", email: "test@email.com" } }}
            >
              <AuthRoot />
            </AuthProvider>
            <Route
              path={"*"}
              render={({ location }) => {
                _location = location
                return null
              }}
            />
          </MemoryRouter>
        </TestingWrapper>
      )

      await act(async () => {
        await waitFor(() => {
          expect(_location.pathname).toEqual("/")
        })
      })
    })

    test("display when user not auth", async () => {
      const { getByText } = render(
        <TestingWrapper>
          <MemoryRouter initialEntries={["/login"]}>
            <AuthProvider>
              <AuthRoot />
            </AuthProvider>
          </MemoryRouter>
        </TestingWrapper>
      )
      expect(getByText("Login")).toBeInTheDocument()
    })
  })
})
