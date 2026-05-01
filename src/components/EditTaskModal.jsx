import "./EditTaskModal.css"
import Modal from "./Modal"
import { useRef, useState } from "react"

const EditTaskModal = ({ show, onClose, task, onSave }) => {
    const [editTask, setEditTask] = useState(task)
    const formRef = useRef()

    const handleForm = (e) => {
        e.preventDefault();
        onSave(editTask)
    }

    return (
        <Modal
            title="Modifica Task"
            content={
                <form className="update-modal" ref={formRef} onSubmit={handleForm}>
                    <input type="text"
                        value={editTask.title}
                        onChange={(e) => setEditTask(prev => ({ ...prev, title: e.target.value }))} />

                    <textarea
                        value={editTask.description}
                        onChange={(e) => setEditTask(prev => ({ ...prev, description: e.target.value }))}
                    />

                    <select
                        value={editTask.status}
                        onChange={(e) => setEditTask(prev => ({ ...prev, status: e.target.value }))}>
                        <option value="To do">To do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                </form>
            }
            confirmText="Salva"
            show={show}
            onClose={onClose}
            onConfirm={() => formRef.current.requestSubmit()}
        />
    )
}

export default EditTaskModal