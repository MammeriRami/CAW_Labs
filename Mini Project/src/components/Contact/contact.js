import React, { useRef } from "react";
import './contact.css'
import A from '../../assets/facebook.png'

import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();  
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_esr2yod', 'template_3qtqe65', form.current, 'EpmcJ-MmIhEj2mYM5')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
      
 return (
    <section id="contactPage">
        <div className="socials">
            <h1 className="PageTitle">My Contacts</h1>
            <p className="Desc">
                YOU CAN FIND ME OUT HERE
            </p>

            <div className="Imgs">
                <img src={A} alt="" className="Img"/>
               


            </div>
           
        </div>

         {/* form */}
        <div id="contact">
            <h1 className="contactTitle">Contact Me</h1>
            <spam className="contactDesc">Please Fill out the from below to discussany work opportunity</spam>
            
            
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                
                <input type="text" className="name" placeholder="Your Name" name="from_name"/>
                <input type="email" className="email" placeholder="Your Email"name="to_name"/>
                <textarea className="msg" name="massage" rows="5" placeholder="Your Message"></textarea>
                <button type="submit" className="submitBtn">send</button>

            </form>
        </div>
        <p className="Desc">
        © made by rami ㋡
            </p>
    </section>
 )
}

export default Contact