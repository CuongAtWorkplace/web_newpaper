import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


const ModalContent = ({ children, onClose }) => {
    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ height: 200 }}>
                {children}
                <button className="Modal_Button" onClick={onClose}>
                    <i className="fas fa-times"></i>
                </button>
            </div>
        </div>,
        document.body
    );
};

export default ModalContent;
