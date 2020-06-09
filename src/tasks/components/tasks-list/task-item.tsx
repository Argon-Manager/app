import React from "react"
import { Task } from "../../../generated/graphql"
import { TaskItemWrapper } from "./styles"

type Props = {
  item: Task
}

const TaskItem = ({ item }: Props) => {
  return (
    <TaskItemWrapper>
      <header>
        <span>{item.name}</span>
      </header>
    </TaskItemWrapper>
  )
}

export default TaskItem
