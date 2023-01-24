import React from 'react';
import Project from "../Project/Project";
import './portfolio.css';
import imgHilos from '../../assets/img/portfolio/1.jpg';
import imgExplorar from '../../assets/img/portfolio/2.jpg';
import imgTerminar from '../../assets/img/portfolio/3.jpg';
import imgLineas from '../../assets/img/portfolio/4.jpg';
import imgSurOeste from '../../assets/img/portfolio/5.jpg';
import imgVentana from '../../assets/img/portfolio/6.jpg';

const Portfolio = () => {
    return (
        <div className="portfolio" id="portfolio">
            <div className="portfolio-title">
                <h1>Portfolio</h1>
                <p><i>Lorem ipsum dolor sit amet, consectetur.</i></p>
            </div>
            <div className="portfolio-grid">
                <Project image={imgHilos} title="Hilos" content="Ilustración"/>
                <Project image={imgExplorar} title="Explorar" content="Diseño gráfico"/>
                <Project image={imgTerminar} title="Terminar" content="Identidad"/>
                <Project image={imgLineas} title="Lineas" content="Marca"/>
                <Project image={imgSurOeste} title="SurOeste" content="Diseño web"/>
                <Project image={imgVentana} title="Ventana" content="Fotografía"/>
            </div>
        </div>
    );
};

export default Portfolio;