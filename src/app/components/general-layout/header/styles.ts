import styled from "styled-components"

export const HeaderWrapper = styled.header`
  width: 80%;
  padding: 2rem 0;
  margin: 0 auto 6rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const AppName = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`

export const NavWrapper = styled.nav`
  & li {
    display: inline-block;
    list-style: none;
    padding: 2rem;

    & a {
      text-decoration: none;
      color: #6c707a;

      transition: color 0.25s;

      &:hover {
        color: #1a79f4;
      }
    }
  }
`
