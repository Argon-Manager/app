import React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../../../auth"
import { NavWrapper } from "./styles"

const Nav = () => {
  const { isAuth } = useAuth()

  return (
    <NavWrapper>
      <ul>
        {isAuth ? (
          <li>
            <Link to={"/projects"}>Projects</Link>
          </li>
        ) : (
          <>
            <li>
              <Link to={"/registration"}>Sign Up</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          </>
        )}
      </ul>
    </NavWrapper>
  )
}

export default Nav
