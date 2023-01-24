import React from 'react';
import './marcas.css';
import microsoft from '../../assets/img/logos/microsoft.svg';
import google from '../../assets/img/logos/google.svg';
import facebook from '../../assets/img/logos/facebook.svg';
import ibm from '../../assets/img/logos/ibm.svg';
const Marcas = () => {
    return (
        <div className="marcas flex__center">
            <img src={microsoft} alt="microsoft"/>
            <img src={google} alt="google"/>
            <img src={facebook} alt="facebook"/>
            <img src={ibm} alt="ibm"/>
        </div>
    );
};

export default Marcas;