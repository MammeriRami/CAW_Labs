import React from "react";
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'


const Skills = () => {
 return (
   <section id="skills">
    <span className="skillTitle">What I do</span>
    <span className="skillDesc">I'am a full stack web developer in experience on building small website , can help <br/>on school project or a small business web site ! </span>
   
<div className="skillbars">
    <div className="skillbar">
        <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
        <div className="skillBarText">
            <h2>React developer</h2>
            <p>I have experience working with React, a JavaScript library for building user interfaces. </p>
        </div>
    </div>

    <div className="skillbar">
        <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
        <div className="skillBarText">
            <h2>Node js developer</h2>
            <p>I have experience on JavaScript framework nodejs with Express.</p>
        </div>
    </div>  

    <div className="skillbar">
        <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
        <div className="skillBarText">
            <h2>Mongodb developer</h2>
            <p>I have experience working with MongoDB, a NoSQL database, for managing and storing data.</p>
        </div>
    </div> 
    </div>
   
   </section>
 )
}

export default Skills