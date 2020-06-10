import styled from "styled-components"

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;

  z-index: 1;

  & > div {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }

  & > span {
    cursor: pointer;
  }

  & > .dropdown__open {
    display: block;

    & > div {
      padding: 10px;

      & a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
`
