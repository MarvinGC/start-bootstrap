import React from 'react';
import ProjectModal from "../../Modals/ProjectModal/ProjectModal";
import './project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { RxCross1 } from 'react-icons/rx';
import { useState } from "react";


const Project = ({image, title, content}) => {
    const [isOpen,setIsOpen] = useState(false);

    return (
        <div className="project">
            <div className="project-img-card flex__center" onClick={() => setIsOpen(true)}>
                <img src={image} alt={title}/>
                <FontAwesomeIcon icon={faPlus} className="project-icon"/>
            </div>
            <h1>{title}</h1>
            <p>
                {content}
            </p>
            <ProjectModal open={isOpen} onClose={() => setIsOpen(false)} >
                <div className="modal-content">
                    <RxCross1 className="x-icon" onClick={() => setIsOpen(false)}/>
                    <h1>NOMBRE DE PROYECTO</h1>
                    <p><i>Lorem ipsum dolor sit amet, consectetur.</i></p>
                    <img src={image} alt={title} />
                    <p>
                        Usa esta sección para describir tu proyecto. Doloremque ducimus fuga quidem recusandae sed tempore.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio iste labore quisquam reiciendis totam. Temporibus!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, fugit incidunt maiores perspiciatis provident vero!
                    </p>
                    <p><b>Cliente:</b> {title}</p>
                    <p><b>Categoría:</b> {content}</p>
                    <div className="close-button" onClick={() => setIsOpen(false)}>
                        <RxCross1 />
                        <b>Cerrar Proyecto</b>
                    </div>
                </div>
            </ProjectModal>
        </div>
    )
};

export default Project;