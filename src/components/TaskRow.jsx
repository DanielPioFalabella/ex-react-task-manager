import { memo } from "react"
import "./TaskRow.css"

const TaskRow = memo(({task}) => {

    return (
        <tr>
            <td className="title-task">{task.title}</td>
            <td className={task.status.replace(" ", "-").toLowerCase()}>{task.status}</td>
            <td className="created-at">{new Date (task.createdAt).toLocaleDateString()}</td>
        </tr>
    )
})

export default TaskRow