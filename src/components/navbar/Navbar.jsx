import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
    <p>Roberto Gauna</p>
    <ul className="navbar-links">
      <li className="navbar-a-links">
        <a href="#home">Home</a>
      </li>
      <li className="navbar-a-links">
        <a href="#about">About</a>
      </li>
      <li className="navbar-a-links">
        <a href="#projects">Portfolio</a>
      </li>
      <li className="navbar-a-links">
        <a href="#skills">Skills</a>
      </li>
      <li className="navbar-a-links">
        <a href="">Contact</a>
      </li>
    </ul>
    </div>
  )
}

export default Navbar