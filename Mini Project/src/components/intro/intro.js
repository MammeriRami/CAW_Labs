import React from "react";
import './intro.css'
import bg from '../../assets/image.png'
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png'

const Intro = () => {
 return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Rami</span> <br/> web dev</span>
            <p className="introPara">4th-year computer science student specializing in web development. <br/>I work with the MERN stack</p>
            <Link><button className="btn"><img src={btnImg} alt="" className="btnImg"/> Hire Me</button></Link>
        </div>
        <img src={bg} alt="profial" className="bg"/>
    </section>
 )
}

export default Intro