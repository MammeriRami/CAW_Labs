import React from "react";
import './protfolio.css'
import A from '../../assets/portfolio-1.png'
import B from '../../assets/portfolio-2.png'
import C from '../../assets/portfolio-3.png'
import D from '../../assets/portfolio-4.png'
import E from '../../assets/portfolio-5.png'



const Works = () => {
 return (
   <section id="works">
    <span className="worksTitle">Protfolio</span>
    <span className="worksDesc">here some of the project i worked on in my past years</span>
    <div className="worksImgs">
      <img src={A} alt="" className="worksImg"/>
      <img src={B} alt="" className="worksImg"/>
      <img src={C} alt="" className="worksImg"/>
      <img src={D} alt="" className="worksImg"/>
      <img src={E} alt="" className="worksImg"/>
      
    </div>
    <button className="worksbtn"> see more</button>


   </section>
 )
}

export default Works