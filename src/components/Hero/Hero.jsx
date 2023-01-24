import React from 'react';
import './hero.css';

const Hero = () => (
    <div className="hero">
        <div className="hero-container">
            <h2><i>¡Bienvenido a nuestro estudio!</i></h2>
            <h1>Es un gusto conocerte</h1>
            <div className="hero-container_button">
                <a href="#servicios"><b>Saber más</b></a>
            </div>
        </div>
    </div>
);

export default Hero;