import styled from "styled-components"

export const ProjectsListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  overflow-wrap: break-word;
`

export const ProjectItemWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  position: relative;

  height: 100px;
  padding: 15px;

  border: solid 1px #ccc;
  border-radius: 3px;

  overflow: hidden;

  & > p {
    width: 100%;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    overflow-wrap: break-word;
  }
`
