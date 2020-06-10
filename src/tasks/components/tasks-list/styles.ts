import styled from "styled-components"

export const TasksListWrapper = styled.div``

export const TaskItemWrapper = styled.div`
  border: 1px solid #000;
  padding: 10px;

  border-radius: 5px;

  &:not(:last-child) {
    margin-bottom: 2px;
  }
`
