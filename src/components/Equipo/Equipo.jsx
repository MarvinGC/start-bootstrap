import React from 'react';
import './equipo.css';
import parveen from '../../assets/img/team/1.jpg';
import dina from '../../assets/img/team/2.jpg';
import larry from '../../assets/img/team/3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Equipo = () => {
    return (
        <div className="equipo flex__center" id="equipo">
            <div className="equipo-title">
                <h1>Nuestro Asombroso Equipo</h1>
                <p><i>Lorem ipsum dolor sit amet, consectetur adipisicing.</i></p>
            </div>
            <div className="equipo-people flex__center">
                <div className="people-person flex__center">
                    <img src={parveen} alt="parveen"/>
                    <h2>Parveen Anand</h2>
                    <p>lider de diseño</p>
                    <div className="people-person-socialmedia">
                        <div className="people-person-socialmedia_circle flex__center"><FontAwesomeIcon icon={faTwitter} /></div>
                        <div className="people-person-socialmedia_circle flex__center"><FontAwesomeIcon icon={faFacebook} /></div>
                        <div className="people-person-socialmedia_circle flex__center"><FontAwesomeIcon icon={faInstagram} /></div>
                    </div>
                </div>
                <div className="people-person flex__center">
                    <div className="img-border flex__center"><img src={dina} alt="dina"/></div>
                    <h2>Dina Petersen</h2>
                    <p>lider de márquetin</p>
                    <div className="people-person-socialmedia">
                        <div className="people-person-socialmedia_circle flex__center"><FontAwesomeIcon icon={faTwitter} /></div>
                        <div className="people-person-socialmedia_circle flex__center"><FontAwesomeIcon icon={faFacebook} /></div>
                        <div className="people-person-socialmedia_circle flex__center"><FontAwesomeIcon icon={faInstagram} /></div>
                    </div>
                </div>
                <div className="people-person flex__center">
                    <div className="img-border flex__center"><img src={larry} alt="parveen"/></div>
                    <h2>Larry Parker</h2>
                    <p>lider de desarrollo</p>
                    <div className="people-person-socialmedia">
                        <div className="people-person-socialmedia_circle flex__center"><FontAwesomeIcon icon={faTwitter} /></div>
                        <div className="people-person-socialmedia_circle flex__center"><FontAwesomeIcon icon={faFacebook} /></div>
                        <div className="people-person-socialmedia_circle flex__center"><FontAwesomeIcon icon={faInstagram} /></div>
                    </div>
                </div>

            </div>
            <div className="equipo-footer">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam blanditiis doloremque hic nam nihil pariatur quia quis sit tempora
                </p>
            </div>
        </div>
    );
};

export default Equipo;