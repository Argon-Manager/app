import React, { ReactNode } from "react"
import { useAuth } from "../../../auth"
import { Header, Main, Nav, TopBar } from "./styles"

const AppLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth()

  return (
    <>
      <Header>
        <TopBar>
          <div>
            <h1>{user?.email}</h1>
            <nav>
              <ul>
                <li>Logout</li>
              </ul>
            </nav>
          </div>
        </TopBar>
        <Nav>
          <ul>
            <li>Dashboard</li>
            <li>Projects</li>
          </ul>
        </Nav>
      </Header>
      <Main>{children}</Main>
    </>
  )
}

export default AppLayout
