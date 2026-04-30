import { memo } from "react"
import { Link } from "react-router-dom"
import "./TaskRow.css"

const TaskRow = memo(({task}) => {
    return (
        <tr>
            <td className="title-task">
                <Link to={`/task/${task.id}`}>{task.title}</Link> 
            </td>
            <td className={task.status.replace(" ", "-").toLowerCase()}>{task.status}</td>
            <td className="created-at">{new Date (task.createdAt).toLocaleDateString()}</td>
        </tr>
    )
})

export default TaskRow