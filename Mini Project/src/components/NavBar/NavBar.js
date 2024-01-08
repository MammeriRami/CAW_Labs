import React from "react";
import './NavBar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';

const NavBar = () => {
 return (
    <nav className="navbar">
        <img src={logo} alt="logo" className="logo"/>
        
        <div className="desktopMenu">
            <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">home</Link>
            <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to="works" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Protfolio</Link>
            <Link activeClass='active' to="contactPage" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Contacts</Link>

        </div>
        <button className="desktopMenuBtn" onClick={() =>{
            document.getElementById('contact').scrollIntoView({behavior: 'smooth' })
        }}>
            <img src={contactImg} alt="" className="desktopMenuImg"/>Contact Me
        </button>
    </nav>
 )
}

export default NavBar