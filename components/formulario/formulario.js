
import classes from './formulario.module.scss'

import React from 'react';
import emailjs from 'emailjs-com';


export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className={classes.container}>
        <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number"/>
        
        <input type="text" name="user_name" placeholder="Nombre"/>
        
        <input type="email" name="user_email" placeholder="Email"/>
        <input type='tel' name='telefono' placeholder='Telefono'/>
        <textarea name="message" rows="10" placeholder="Mensaje"/>
        <input className={classes.boton} type="submit" value="Enviar"/>
        </form>
    </div>
  );
}
