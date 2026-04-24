import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContaxt"
import { use } from "react"

const TaskList = () => {
    const {tasks} = useContext(GlobalContext)
    console.log("tasks:", tasks)

    return (
        <>
            <h3>task list page</h3>
            <NavLink to={"/addTask"}>Aggiungi Task</NavLink>
        </>
    )
}

export default TaskList