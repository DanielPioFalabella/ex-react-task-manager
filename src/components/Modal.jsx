import "./Modal.css"
import { createPortal } from "react-dom"

const Modal = ({title, content, show, onClose, onConfirm, confirmText = "Conferma"}) => {
    if(!show) return null;

    return createPortal(
        <div className="modal-overlay">
            <div className="modal">
                <h2>{title}</h2>
                <p>{content}</p>
                <div className="button-madal">
                    <button className="btn-modal" onClick={onClose}>Annulla</button>
                    <button className="btn-modal" onClick={onConfirm}>{confirmText}</button>
                </div>
            </div>
        </div>,
        document.body
    )
}

export default Modal