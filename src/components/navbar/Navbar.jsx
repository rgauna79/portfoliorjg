import React, {useState} from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  }



  return (
    <div className="navbar">
    <p>Roberto Gauna</p>
    <div className="bar-menu">
    <div className={`navbar-hamburger ${showMobileMenu ? 'active' : ''}`} onClick={toggleMobileMenu}>
      <FontAwesomeIcon icon={faBars} />
    </div>
    <ul className={`navbar-links ${showMobileMenu ? 'show' : ''}`}>
      <li className="navbar-a-links">
        <a href="#home" onClick={toggleMobileMenu}>Home</a>
      </li>
      <li className="navbar-a-links">
        <a href="#about" onClick={toggleMobileMenu}>About</a>
      </li>
      <li className="navbar-a-links">
        <a href="#projects" onClick={toggleMobileMenu}>Portfolio</a>
      </li>
      <li className="navbar-a-links">
        <a href="#skills" onClick={toggleMobileMenu}>Skills</a>
      </li>
      <li className="navbar-a-links">
        <a href="#contact" onClick={toggleMobileMenu}>Contact</a>
      </li>
    </ul>

    </div>

    </div>
  )
}




export default Navbar