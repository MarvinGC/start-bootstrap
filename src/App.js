import React from 'react';
import {Navbar, Hero, Servicios, Portfolio, AcercaDe, Equipo, Contacto, Marcas, Footer} from './components';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Servicios />
        <Portfolio />
        <AcercaDe />
        <Equipo />
        <Marcas />
        <Contacto />
        <Footer />
    </div>
  );
}

export default App;
