import { NavLink } from "react-router-dom"

const TaskList = () => {
    return (
        <>
            <h3>task list page</h3>
            <NavLink to={"/addTask"}>Aggiungi Task</NavLink>
        </>
    )
}

export default TaskList