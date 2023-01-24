import React from 'react';
import './acercade.css';
import about01 from '../../assets/img/about/1.jpg';
import about02 from '../../assets/img/about/2.jpg';
import about03 from '../../assets/img/about/3.jpg';
import about04 from '../../assets/img/about/4.jpg';

const AcercaDe = () => {
    return (
        <div className="acercade" id="nosotros">
            <div className="acercade-titulo">
                <h1>Nosotros</h1>
                <p><i>Lorem ipsum dolor sit amet, consectetur adipisicing.</i></p>
            </div>
            <div className="acercade-timeline">
                <div className="timeline-container">
                    <div className="timeline-image">
                        <img src={about01} alt="about01" />
                    </div>
                    <div className="timeline-text">
                        <h1>2009-2011 <br/> Nuestro humilde comienzo</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!
                        </p>
                    </div>
                </div>
                <div className="timeline-container">
                    <div className="timeline-image">
                        <img src={about02} alt="about02" />
                    </div>
                    <div className="timeline-text_inverted">
                        <h1>Marzo 2011 <br/> Nace una agencia</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate iure necessitatibus perspiciatis sit soluta sunt veniam. Consequuntur labore nobis numquam.
                        </p>
                    </div>
                </div>
                <div className="timeline-container">
                    <div className="timeline-image">
                        <img src={about03} alt=""/>
                    </div>
                    <div className="timeline-text">
                        <h1>Diciembre 2015<br/> Transición a tiempo completo</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate iure necessitatibus perspiciatis sit soluta sunt veniam. Consequuntur labore nobis numquam.
                        </p>
                    </div>
                </div>
                <div className="timeline-container">
                    <div className="timeline-image">
                        <img src={about04} alt="about04"/>
                    </div>
                    <div className="timeline-text_inverted">
                        <h1>Julio 2020 <br/> Etapa de dos expansiones</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate iure necessitatibus perspiciatis sit soluta sunt veniam. Consequuntur labore nobis numquam.
                        </p>
                    </div>
                </div>
                <div className="timeline-container">
                    <div className="circle-yellow flex__center">
                        <h2>Se parte <br/> de <br/> nuestra <br/> historia!</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcercaDe;