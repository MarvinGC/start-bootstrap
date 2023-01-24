import React from 'react';
import './contacto.css';

const Contacto = () => {
    return (
        <div className="contacto" id="contacto">
            <div className="contacto-title">
                <h1>contactenos</h1>
                <p><i>Lorem ipsum dolor sit amet, consectetur adipisicing.</i></p>
            </div>
            <div className="contacto-content">
                <form className="contacto-form">
                    <div className="form-inputs">
                        <input type="text" placeholder="Tu Nombre *"/>
                        <input type="text" placeholder="Tu Correo Electrónico *"/>
                        <input type="text" placeholder="Tu Número *"/>
                    </div>
                    <textarea name="mensaje" id="" cols="30" rows="10" placeholder="Tu Mensaje *"></textarea>
                </form>
                <div className="contacto-form_button">
                    <a href="#"><b>Enviar mensaje</b></a>
                </div>
            </div>
        </div>
    );
};

export default Contacto;