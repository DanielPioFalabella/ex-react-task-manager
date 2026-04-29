import { useState, useEffect } from "react"
import axios from "axios"

const useTasks = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/tasks`)
            .then(res => {
                setTasks(res.data)
                console.log(res.data)
            })
            .catch(err => console.error(err))
    }, [])

    // function to add task
    const addTask = () => {

    }

    // function to remove task
    const removeTask = () => {

    }

    // function to update task
    const updateTask = () => {

    }

    return {tasks, addTask, removeTask, updateTask}
}

export default useTasks