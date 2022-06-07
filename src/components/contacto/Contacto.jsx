import "./contacto.scss"
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

export default function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yu0it3e', 'template_asxyrg2', form.current, 'Ip5D2-q_h5aizItXa')
      
    e.target.reset()
  };

  return (
    <div className='contacto' id="contacto">
        <h1 className="h1">CONTACTO</h1>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <RiMessengerLine className="contact__option-icon"/>
              <h4>Messenger</h4>
              <h5>Daniel Lenis</h5>
              <a target="_blank" href="https://m.me/danielstilenis">Enviave un mensaje</a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon"/>
              <h4>WhatsApp</h4>
              <h5>+57 3136321770</h5>
              <a target='_blank' href='https://api.whatsapp.com/send?phone=573136321770'>Enviave un mensaje</a>
            </article>
          </div>
          {/*FINAL DE OPCIONES DE CONTACTO*/}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="Nombre" placeholder="Tu nombre commpleto" required/>
            <input type="email" name="Email" placeholder="Tu Email" required />
            <textarea name="mensaje" rows="7" placeholder="Tu mensjae" required></textarea>
            <button type="submit" className="btn btn-primary">Enviar mensaje</button>
          </form>
        </div>
    </div>
  )
}
