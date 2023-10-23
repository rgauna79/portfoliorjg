import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section className="contact-main">
        <div className="form-container">
          <h2 className='contact-title'>Contact Me</h2>
          <form action="" className="contact-form"></form>
            <fieldset>
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" id="name" />
            </fieldset>
            <fieldset>
              <label htmlFor="email">Email: </label>
              <input type="email" name="email" id="email" />
            </fieldset>
            <fieldset>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" cols="30" rows="10"></textarea>
            </fieldset>
            <button type="submit" value="" id="submit-contact" >Submit</button>
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