import React from 'react'
import './header.css'
import logo from './Me.jpg'

const Header = () => {
  return (
    <section className='container' id="home">
        <div className="content-header">
            <img className="img-header" src={logo} alt="personal photo" />
            <div className="home-title">
                <h1>Roberto Gauna</h1>
                <h4>Software Engineer</h4>
            </div>
        </div>
    </section>
  )
}

export default Header