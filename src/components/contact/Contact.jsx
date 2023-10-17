import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section className="contact-main">
      <div className='contact-container'>
        <div className="form-container">
          <h2 className='contact-title'>Contact Me</h2>
          <form action="" className="contact-form"></form>
            <fieldset>
              <label htmlFor="">Name: </label>
              <input type="text" name="" id="" />
            </fieldset>
            <fieldset>
              <label htmlFor="">Email: </label>
              <input type="email" name="" id="" />
            </fieldset>
            <fieldset>
              <label htmlFor="">Message</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </fieldset>
            <input type="submit" value="" />
        </div>
        <div className="socialMedia">
          <h3>My Social Media</h3>
          <ul>
            <li><a href=''>Github</a></li>
            <li><a href=''>Gmail</a></li>
            <li><a href=''>Linkedin</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact