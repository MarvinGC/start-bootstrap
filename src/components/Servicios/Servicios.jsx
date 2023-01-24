import React from 'react';
import './servicios.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faLaptop, faLock } from '@fortawesome/free-solid-svg-icons';

const Servicios = () => {
    return (
        <div className="servicios" id="servicios">
            <div className="servicios-title">
                <h1>Servicios</h1>
                <p><i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis.</i></p>
            </div>
            <div className="servicios-section">
                <div className="servicios-section_service">
                    <div className="servicios-section_service-circle flex__center">
                        <FontAwesomeIcon className="service-icon" icon={faCartShopping} />
                    </div>
                    <h1>E-Commerce</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores assumenda consequatur eius facere ipsa laboriosam, magnam, molestiae nam odit quas qui quia quis repellat repellendus soluta sunt totam?
                    </p>
                </div>
                <div className="servicios-section_service">
                    <div className="servicios-section_service-circle flex__center">
                        <FontAwesomeIcon className="service-icon" icon={faLaptop} />
                    </div>
                    <h1>Diseño Responsivo</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores assumenda consequatur eius facere ipsa laboriosam, magnam, molestiae nam odit quas qui quia quis repellat repellendus soluta sunt totam?
                    </p>
                </div>
                <div className="servicios-section_service">
                    <div className="servicios-section_service-circle flex__center">
                        <FontAwesomeIcon className="service-icon" icon={faLock} />
                    </div>
                    <h1>Seguridad en la Web</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci asperiores assumenda consequatur eius facere ipsa laboriosam, magnam, molestiae nam odit quas qui quia quis repellat repellendus soluta sunt totam?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Servicios;