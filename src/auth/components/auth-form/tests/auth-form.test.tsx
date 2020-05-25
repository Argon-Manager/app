import React from "react"
import "mutationobserver-shim"
import { cleanup, render, fireEvent, act } from "@testing-library/react"
import AuthForm from "../auth-form"

describe("AuthForm", () => {
  beforeEach(() => {
    cleanup()
  })

  test("submit user data", async () => {
    const data = { email: "test@email.com", password: "testpass" }
    const onSubmitMock = jest.fn()
    const { container } = render(<AuthForm onSubmit={onSubmitMock} type={"login"} />)

    const emailInput = container.querySelector("[name=email]")
    const passwordInput = container.querySelector("[name=password]")
    const button = container.querySelector("button")

    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(button).toBeInTheDocument()

    fireEvent.change(passwordInput!, { target: { value: data.password } })
    fireEvent.change(emailInput!, { target: { value: data.email } })

    await act(async () => {
      fireEvent.click(button!)
    })

    expect(onSubmitMock.mock.calls[0][0]).toEqual(data)
  })
})
