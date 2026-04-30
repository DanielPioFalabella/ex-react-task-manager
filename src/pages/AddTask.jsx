import { NavLink, useNavigate } from "react-router-dom"
import { useState, useRef, useMemo, useContext } from "react"
import {GlobalContext} from "../context/GlobalContext"
import "./AddTask.css"

const AddTask = () => {
    const { addTask } = useContext(GlobalContext)
    const [titleTask, setTitleTask] = useState("")
    const descriptionRef = useRef()
    const statusRef = useRef()
    const symbols = "!@#£$%^&*()-_=+[]{}|;:'\",.<>?/`~";
    const navigateTo = useNavigate()

    const titleTaskError = useMemo(() => {
        if (!titleTask.trim()) {
            return "questo campo non può essere lasciato vuoto"
        }
        if ([...titleTask].some(char => symbols.includes(char))) {
            return "questo campo non può contenere simboli speciali"
        }
        return ""
    }, [titleTask])

    const handleForm = async (e) => {
        e.preventDefault();

        const newTask = {
            title: titleTask,
            description: descriptionRef.current.value,
            status: statusRef.current.value
        }

        console.log(newTask)

        try{
            await addTask(newTask)
            alert("task creata correttamente!")
            setTitleTask("");
            descriptionRef.current.value = ""
            statusRef.current.value = ""
            navigateTo("/")
        } catch(error){
            alert(error.message)
        }
    }

    return (
        <>
        <NavLink to={"/"}>Torna alla lista dei task</NavLink>

        <form className="add-task-form" onSubmit={handleForm}>
            <input type="text" 
            value={titleTask}
            onChange={(e) => setTitleTask(e.target.value)}
            placeholder="titolo task"/>
            {titleTaskError && (
                <p className="error">{titleTaskError}</p>
            )}

            <textarea ref={descriptionRef} placeholder="descrizione"/>

            <select ref={statusRef} defaultValue="To do">
                <option value={"To do"}>To do</option>
                <option value={"Doing"}>Doing</option>
                <option value={"Done"}>Done</option>
            </select>

            <button className="add-task" type="submit">Aggiungi task</button>
        </form>
        </>
    )
}

export default AddTask