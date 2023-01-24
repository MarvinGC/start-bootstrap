import React from 'react';
import './navbar.css';
import logo from '../../assets/img/navbar-logo.svg';
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink,setActiveLink] = useState('home');

    useEffect(() => {
        const onScroll = () => {
            (window.scrollY > 50) ? setScrolled(true) : setScrolled(false);
            if(window.scrollY > 740){  setActiveLink("servicios"); }
            if(window.scrollY > 1710){ setActiveLink("portfolio"); }
            if(window.scrollY > 2990){ setActiveLink("nosotros");  }
            if(window.scrollY > 4740){ setActiveLink("equipo");    }
            if(window.scrollY > 6010){ setActiveLink("contacto");  }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    const updateLink = (value) => {
        setActiveLink(value);
        setToggleMenu(false);
    }
    const switchLink = (value) => {
        return activeLink === value ? "navbar-menu-active-link" :  "navbar-menu-link";
    }

    return (
        <div className={scrolled ? "navbar-scrolled" : "navbar"}>
            <div className={scrolled ? "navbar-scrolled-logo" : "navbar-logo"} >
                <a href="#"><img src={logo} alt="logo"/></a>
            </div>
            <div className="navbar-menu">
                <p><a className={ switchLink("servicios") } onClick={() => updateLink("servicios")} href="#servicios">  servicios </a></p>
                <p><a className={ switchLink("portfolio") } onClick={() => updateLink("portfolio")} href="#portfolio">  portfolio  </a></p>
                <p><a className={ switchLink("nosotros" ) } onClick={() => updateLink("nosotros") } href="#nosotros" >  nosotros  </a></p>
                <p><a className={ switchLink("equipo"   ) } onClick={() => updateLink("equipo")   } href="#equipo"   >  equipo    </a></p>
                <p><a className={ switchLink("contacto" ) } onClick={() => updateLink("contacto") } href="#contacto" >  contacto  </a></p>
            </div>
            <div className="navbar-smallscreen">
                <FontAwesomeIcon icon={faBars} onClick={() => setToggleMenu(true)}/>
                { toggleMenu && (
                    <div className="navbar-smallscreen_overlay">
                        <FontAwesomeIcon icon={faBars} onClick={() => setToggleMenu(false)}/>
                        <p><a className={ switchLink("servicios") } onClick={() => updateLink("servicios")} href="#servicios">  servicios </a></p>
                        <p><a className={ switchLink("portfolio") } onClick={() => updateLink("portfolio")} href="#portfolio">  portfolio  </a></p>
                        <p><a className={ switchLink("nosotros" ) } onClick={() => updateLink("nosotros") } href="#nosotros" >  nosotros  </a></p>
                        <p><a className={ switchLink("equipo"   ) } onClick={() => updateLink("equipo")   } href="#equipo"   >  equipo    </a></p>
                        <p><a className={ switchLink("contacto" ) } onClick={() => updateLink("contacto") } href="#contacto" >  contacto  </a></p>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;