import React from 'react';
import './footer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-izquierda">
                <p>Copyright &copy; Start Bootstrap 2022</p>
            </div>
            <div className="footer-socialmedia">
                <div className="footer-socialmedia_circle flex__center"><FontAwesomeIcon className="socialmedia-icon" icon={faTwitter} /></div>
                <div className="footer-socialmedia_circle flex__center"><FontAwesomeIcon className="socialmedia-icon" icon={faFacebook} /></div>
                <div className="footer-socialmedia_circle flex__center"><FontAwesomeIcon className="socialmedia-icon" icon={faInstagram} /></div>
            </div>
            <div className="footer-derecha">
                <a href="#contacto"><p>Política de privacidad</p></a>
                <a href="#contacto"><p>Terminos de uso</p></a>
            </div>
        </div>
    );
};

export default Footer;