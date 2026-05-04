import "./TaskList.css"
import { NavLink } from "react-router-dom"
import { useContext, useState, useMemo, useCallback } from "react"
import { GlobalContext } from "../context/GlobalContext"
import TaskRow from "../components/TaskRow"

// debounce function
function debounce(callback, delay) {
    let timer;

    return (value) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback(value)
        }, delay);
    }
}

const TaskList = () => {
    const { tasks } = useContext(GlobalContext)
    const [sortBy, setSortBy] = useState("createdAt")
    const [sortOrder, setSortOrder] = useState(1)
    const [searchQuery, setSearchQuery] = useState("")

    const debounceSearch = useCallback(debounce(setSearchQuery, 500), [])

    const handleItem = (field) => {
        if (sortBy === field) {
            setSortOrder(prev => prev * -1)
        } else {
            setSortBy(field)
            setSortOrder(1)
        }
    }

    const sortIcon = sortOrder === 1 ? "▲" : "▼"

    const tasksOrder = useMemo(() => {
        return [...tasks].filter((t) =>
            t.title.toLowerCase().includes(searchQuery.toLowerCase())
        ).sort((a, b) => {
            let comparison;

            if (sortBy === "title") {
                comparison = a.title.localeCompare(b.title)
            } else if (sortBy === "status") {
                const arrayStatus = ["To do", "Doing", "Done"];
                const statusA = arrayStatus.indexOf(a.status);
                const statusB = arrayStatus.indexOf(b.status)
                comparison = statusA - statusB
            } else if (sortBy === "createdAt") {
                const dateA = new Date(a.createdAt).getTime();
                const dateB = new Date(b.createdAt).getTime();
                comparison = dateA - dateB
            }

            return comparison * sortOrder
        })
    }, [tasks, sortBy, sortOrder, searchQuery])

    return (
        <>
        <div className="header">
            <button className="btn-header"><NavLink to={"/addTask"}>Aggiungi Task</NavLink></button>
        </div>

            <input className="search-bar-task"
                type="text"
                placeholder="cerca una task"
                onChange={(e) => debounceSearch(e.target.value)} />

            <table>
                <thead>
                    <tr className="titolo-tabella">
                        <th onClick={() => handleItem("title")}>Task {sortBy === "title" && sortIcon}</th>
                        <th onClick={() => handleItem("status")}>Stato {sortBy === "status" && sortIcon}</th>
                        <th onClick={() => handleItem("createdAt")}>Data di creazione {sortBy === "createdAt" && sortIcon}</th>
                    </tr>
                </thead>
                <tbody>
                    {tasksOrder.map((t) => {
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