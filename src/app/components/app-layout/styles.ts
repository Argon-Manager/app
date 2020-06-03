import styled from "styled-components"

export const Header = styled.header`
  background: #ffffff;

  margin-bottom: 6rem;
`

export const TopBar = styled.section`
  border-bottom: 1px solid #eee;

  & > div {
    width: 80%;
    margin: 0 auto;

    height: 70px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & h1 {
    cursor: pointer;
  }

  & ul {
    & li {
      cursor: pointer;
      list-style: none;
    }
  }
`

export const Nav = styled.nav`
  width: 60%;
  margin: 0 auto;

  & ul {
    display: flex;
    align-items: center;
    height: 60px;

    & li {
      list-style: none;
      padding: 1rem;

      text-transform: uppercase;

      &:not(:last-child) {
        margin-right: 2.5rem;
      }
    }
  }
`

export const Main = styled.main`
  width: 60%;
  margin: 0 auto;
  padding: 3rem;

  background: #ffffff;
`
