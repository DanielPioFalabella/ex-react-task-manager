import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const GlobalContext = createContext() 

export const GlobalProvider = ({children}) => {
const [tasks, setTasks] = useState([])

useEffect (() => {
axios.get(`${import.meta.env.VITE_API_URL}/tasks`)
.then(res => {
    setTasks(res.data)
    console.log(res.data)
})
.catch(err => console.error(err))
}, [])

return (
    <GlobalContext.Provider value={{tasks, setTasks}}>
        {children}
    </GlobalContext.Provider>
)
}

export default GlobalContext