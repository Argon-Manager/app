import styled from "styled-components"

export const ProjectsListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`

export const ProjectItemWrapper = styled.div`
  height: 100px;
  padding: 15px;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  border: solid 1px black;
  border-radius: 3px;

  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px;
`
