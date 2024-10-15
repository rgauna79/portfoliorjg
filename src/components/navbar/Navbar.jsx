import React, { useState, useEffect } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    const offset = 80;
    const top =
      section.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top: top,
      behavior: "smooth",
    });

    setShowMobileMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      let lastScrollTop = 0;
      let currentScroll = window.scrollY;

      if (currentScroll > lastScrollTop) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isTransparent ? "transparent" : "opaque"}`}>
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
              <a href="#home" onClick={(e) => handleScrollToSection(e, "home")}>
                Home
              </a>
            </li>
            <li className="navbar-a-links">
              <a
                href="#about"
                onClick={(e) => handleScrollToSection(e, "about")}
              >
                About
              </a>
            </li>
            <li className="navbar-a-links">
              <a
                href="#projects"
                onClick={(e) => handleScrollToSection(e, "projects")}
              >
                Portfolio
              </a>
            </li>
            <li className="navbar-a-links">
              <a
                href="#skills"
                onClick={(e) => handleScrollToSection(e, "skills")}
              >
                Skills
              </a>
            </li>
            <li className="navbar-a-links">
              <a
                href="#contact"
                onClick={(e) => handleScrollToSection(e, "contact")}
              >
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
