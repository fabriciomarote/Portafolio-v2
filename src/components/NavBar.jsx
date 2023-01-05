import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { ThemeProvider } from 'styled-components';
import { NavBarContainer } from "./theme/Changes";
import logo1 from '../assets/img/logo-dark.png';
import logo2 from '../assets/img/logo-light.png';
import Themes from './theme/Themes'
import '../styles/NavBar.css';

const Navbar = (props) => {

    const { theme, setTheme } = props;

    const changeMode = () => {
        let colour;
        if (theme === 'light') {
            setTheme('dark');
            colour = 'dark';
        } else {
            setTheme('light');
            colour = 'light';
        }
        localStorage.setItem('theme', colour);
    }

    const logo = (theme === 'light') ? logo2 : logo1;

    return (
        <ThemeProvider theme={Themes[theme]}>
            <NavBarContainer>
                <div className="navbar-container">
                    <div className="nav">
                        <input type="checkbox" id="nav-check"/>
                        <div className="nav-header">
                            <div className="box-title">  
                                <a href="/" className='logo'><img src={logo} alt="logo" /></a>
                            </div>
                        </div>
                        <div className="nav-btn">
                            <label htmlFor="nav-check">
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                        </div>
                        <div className="nav-links">
                            <div className='icon-theme' onClick={() => changeMode()}>
                                { theme === "dark" ? <BsFillSunFill  className='icon-dark' size={30}/> : <BsFillMoonFill className='icon-light' size={30}/>}
                            </div>
                            <a href="/" className="btn-btn" >Inicio</a>
                            <a href="/about" className="btn-btn" >Sobre mí</a>
                            <a href="/skills" className="btn-btn" >Habilidades</a>
                            <a href="/projects" className="btn-btn">Proyectos</a>
                            <a href="/contact" className="btn-btn" id='contact'> Contacto</a> 
                        </div>
                    </div>
                </div>  
            </NavBarContainer>
        </ThemeProvider>
    );
};

export default Navbar;