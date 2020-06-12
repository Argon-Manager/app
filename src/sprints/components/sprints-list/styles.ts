import styled from "styled-components"
import { Typography } from "../../../app/components"

export const ProjectsListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`

export const ProjectDescription = styled(Typography)`
  height: 30px;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
