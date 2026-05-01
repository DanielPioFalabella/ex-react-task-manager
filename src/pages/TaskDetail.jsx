import "./TaskDetail.css"
import { useParams, useNavigate } from "react-router-dom"
import { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import Modal from "../components/Modal";
import EditTaskModal from "../components/EditTaskModal";

const TaskDetail = () => {
    const { id } = useParams();
    const { tasks, removeTask, updateTask } = useContext(GlobalContext)
    const navigateTo = useNavigate()
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showUpdateModal, setShowUpdateModal] = useState(false)

    const task = tasks.find(t => t.id === parseInt(id))
    if (!task) {
        return (<p>task nn trovata</p>)
    }

    // gestione di eliminazione task
    const handleRemove = async () => {
        try{
            await removeTask(task.id)
            alert("task eliminata correttamente!")
            navigateTo("/")
        } catch(error) {
            alert(error.message)
        }
    }

    // gestione di modifica task
    const handleUpdate = async (updatedTask) => {
        try{
            await updateTask(updatedTask)
            setShowUpdateModal(false)
            alert("task modificata correttamente")
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
            <button className="btn-delete" onClick={() => setShowDeleteModal(true)}>Elimina Task</button>
            <button className="btn-update" onClick={() => setShowUpdateModal(true)}>Modifica Task</button>

            <Modal 
            title="Conferma elimina task"
            content="Sei sicuro di voler eliminare questa task?"
            show={showDeleteModal}
            onClose={() => setShowDeleteModal(false)}
            onConfirm={handleRemove}
            confirmText="Elimina"
            />

            <EditTaskModal 
            task={task}
            show={showUpdateModal}
            onClose={() => setShowUpdateModal(false)}
            onSave={handleUpdate}
            />
        </div>
    )
}

export default TaskDetail