import React from 'react';
import './ProjectModal.css';
import ReactDom from 'react-dom'

const ProjectModal = ({open,children, onClose}) => {
    if(!open) return null;

    return ReactDom.createPortal(
        <>
            <div className="project-modal-overlay" onClick={onClose}/>
            <div className="project-modal-content">
                {children}
            </div>
        </>,
        document.getElementById('project-modal')
    );
};

export default ProjectModal;