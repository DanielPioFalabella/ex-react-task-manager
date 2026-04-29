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
    const addTask = async (newTask) => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newTask)
        }) 
        const {success, message, task} = await response.json();
        if(!success) {
            throw new Error(message)
        }

        setTasks(prev => [...prev, task])
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