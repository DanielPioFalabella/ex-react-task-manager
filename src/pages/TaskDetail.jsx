import "./TaskDetail.css"
import { useParams, useNavigate } from "react-router-dom"
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const TaskDetail = () => {
    const { id } = useParams();
    const { tasks, removeTask } = useContext(GlobalContext)
    const navigateTo = useNavigate()

    const task = tasks.find(t => t.id === parseInt(id))
    if (!task) {
        return (<p>task nn trovata</p>)
    }

    const handleRemove = async () => {
        try{
            await removeTask(task.id)
            alert("task eliminata correttamente!")
            navigateTo("/")
        } catch(error) {
            alert(error.message)
        }
    }

    return(
        <div className="card-detail">
            <p><strong>Nome:</strong> {task.title}</p>
            <p><strong>Descrizione:</strong> {task.description}</p>
            <p><strong>Stato:</strong> {task.status}</p>
            <p><strong>Data di creazione:</strong> {new Date(task.createdAt).toLocaleDateString()}</p>
            <button className="btn-delete" onClick={handleRemove}>Elimina Task</button>
        </div>
    )
}

export default TaskDetail