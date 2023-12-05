import React, {useRef} from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

//Build a modal window to show the Succesful message
const showModalOk = () => {
    alert('message sent succesfully');


}


const Contact = () => {

  const refForm = useRef();

  // Handle form information 
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const serviceId = "service_064reeh";
    const templateId = "template_ao7mfvp";
    
    const apiKey = "YDA6pojR1x78PmXQ0";

    emailjs.sendForm(serviceId,templateId,refForm.current,apiKey)
      .then(result => { 
        if (result.text === 'OK')
        {
          showModalOk();
          refForm.current.reset();
        }
        
      })
      .catch(error => console.error(error))
  }

  return (
    <section className="contact-main" id='contact'>
        <div className="form-container">
          <h2 className='contact-title'>Contact Me</h2>
          <form ref={refForm} onSubmit={handleSubmit} className="contact-form">
            <fieldset>
              <label htmlFor="name" className='symbol-required'>Name: </label>
              <input type="text" name="username" id="name" placeholder='Enter your name' required/>
            </fieldset>
            <fieldset>
              <label htmlFor="email" className='symbol-required'>Email: </label>
              <input type="email" name="email" id="email" placeholder='Ex. yourname@dom.com' required/>
            </fieldset>
            <fieldset>
              <label htmlFor="message" className='symbol-required' >Message</label>
              <textarea maxLength="500" name="message" id="message" cols="30" rows="10" placeholder='Insert your message'></textarea>
            </fieldset>
            <button type="submit" value="" id="submit-contact" className='btn'>Submit</button>
            </form>
        </div>




      <div className="social-media">
          <h3>My Social Media</h3>
          <ul className='social-media-links'>
            <li className='social-media-a-links'><a href='https://github.com/rgauna79' target='_blank'>Github</a></li>
            <li className='social-media-a-links'><a href='mailto:rgauna@gmail.com' target='_blank'>Gmail</a></li>
            <li className='social-media-a-links'><a href='https://linkedin.com/in/rgauna' target='_blank'>Linkedin</a></li>
          </ul>
      </div>
    </section>
  )
}

export default Contact