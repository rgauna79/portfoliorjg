import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { skillsBack, skillsFront, skillsTools } from "../../assets/icons";
import projectsVar from "./projectsData";
import "./projects.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Projects = () => {
  const options = {
    threshold: 0.1,
  };

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("img-animation");
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  useEffect(() => {
    const targets = document.querySelectorAll(".project-card");
    targets.forEach((img) => observer.observe(img));

    return () => {
      targets.forEach((img) => observer.unobserve(img));
    };
  }, []);

  const renderProjectCards = (category) => {
    const settings = {
        dots: true,
        fade: true,
        // adaptiveHeight: true,
        centerMode: true,
        centerPadding: "10px",
    }
    return ( 
    
    <Slider {...settings}>
    {Object.values(projectsVar[category]).map((element, index) => (

      <div key={index} className="project-card">
        <div className="project-card-header">
          <h4>{element.name}</h4>
        </div>
        <div className="project-card-content">
          <p className="project-description">{element.description}</p>
          <img
            src={element.image}
            alt={element.name}
            className="project-img"
          ></img>
        </div>
        <div className="project-card-footer">
          <p>Techs used: </p>
          {element.content.split(", ").map((skill, skillIndex) => (
            <img
              key={skillIndex}
              src={getImageSkill(skill)}
              alt={skill}
              className="skill-img"
            />
          ))}
        </div>
        <div className="middle">
          <div className="project-links">
            <a href={element.code} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} shake />
            </a>
            <a href={element.live} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
            <p>Code</p>
            <p>Live demo</p>
          </div>
        </div>
      </div>
    ))}
    </Slider>
    );
  };

  return (
    <section className="projects-main" id="projects">
      <h1>Experience</h1>
        
        <div className="project-section">
        <h2 className="project-title">Personal Projects</h2>
        <div className="project-content">
            {renderProjectCards("personal")}</div>
      </div>
      <div className="project-section">
        <h2 className="project-title">Odin Projects</h2>
        <div className="project-content">
            
          {renderProjectCards("odinprojects")}
        </div>
      </div>
      <div className="project-section">
        <h2 className="project-title">FreeCodeCamp Projects</h2>
        <div className="project-content">
          {renderProjectCards("freecodecamp")}
        </div>
      </div>
       
    </section>
  );
};

function getImageSkill(skill) {
  const allSkills = { ...skillsFront, ...skillsBack, ...skillsTools };
  return allSkills[skill.toLowerCase()]?.image || "";
}

export default Projects;
