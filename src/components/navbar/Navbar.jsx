import React, { useState, useEffect } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      let currentScroll = window.scrollY;

      if (currentScroll > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isVisible ? "" : "hidden"}`}>
      <div className="navbar-container">
        <p>Roberto Gauna</p>
        <div className="bar-menu">
          <div
            className={`navbar-hamburger ${showMobileMenu ? "active" : ""}`}
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
          <ul className={`navbar-links ${showMobileMenu ? "show" : ""}`}>
            <li className="navbar-a-links">
              <a href="#home" onClick={() => setShowMobileMenu(false)}>
                Home
              </a>
            </li>
            <li className="navbar-a-links">
              <a href="#about" onClick={() => setShowMobileMenu(false)}>
                About
              </a>
            </li>
            <li className="navbar-a-links">
              <a href="#projects" onClick={() => setShowMobileMenu(false)}>
                Portfolio
              </a>
            </li>
            <li className="navbar-a-links">
              <a href="#skills" onClick={() => setShowMobileMenu(false)}>
                Skills
              </a>
            </li>
            <li className="navbar-a-links">
              <a href="#contact" onClick={() => setShowMobileMenu(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
