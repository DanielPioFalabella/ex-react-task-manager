import "./TaskList.css"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContaxt"
import TaskRow from "../components/TaskRow"

const TaskList = () => {
    const { tasks } = useContext(GlobalContext)
    console.log("tasks:", tasks)

    return (
        <>
            <NavLink to={"/addTask"}>Aggiungi Task</NavLink>

            <table>
                <thead>
                    <tr className="titolo-tabella">
                        <th>Task</th>
                        <th>Stato</th>
                        <th>Data di creazione</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((t) => {
                        return <TaskRow 
                        key={t.id} task={t}
                        /> 
                    })}
                </tbody>
            </table>
        </>
    )
}

export default TaskList