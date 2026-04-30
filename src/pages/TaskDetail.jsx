import "./TaskDetail.css"
import { useParams, useNavigate } from "react-router-dom"
import { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import Modal from "../components/Modal";

const TaskDetail = () => {
    const { id } = useParams();
    const { tasks, removeTask } = useContext(GlobalContext)
    const navigateTo = useNavigate()
    const [showModal, setShowModal] = useState(false)

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
            <button className="btn-delete" onClick={() => setShowModal(true)}>Elimina Task</button>

            <Modal 
            title="Conferma elimina task"
            content="Sei sicuro di voler eliminare questa task?"
            show={showModal}
            onClose={() => setShowModal(false)}
            onConfirm={handleRemove}
            confirmText="Elimina"
            />
        </div>
    )
}

export default TaskDetail