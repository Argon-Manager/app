import React from "react"
import { Link } from "react-router-dom"
import { NavWrapper } from "./styles"

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to={"/registration"}>Sign Up</Link>
        </li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav
