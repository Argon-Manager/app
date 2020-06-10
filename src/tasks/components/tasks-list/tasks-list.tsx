import React from "react"
import { TasksQuery } from "../../../generated/graphql"
import { TasksListWrapper } from "./styles"
import TaskItem from "./task-item"

type Props = {
  data: NonNullable<TasksQuery["tasks"]>
}

const TasksList = ({ data }: Props) => {
  return (
    <TasksListWrapper>
      {data.map((item) => (
        <TaskItem item={item} />
      ))}
    </TasksListWrapper>
  )
}

export default TasksList
