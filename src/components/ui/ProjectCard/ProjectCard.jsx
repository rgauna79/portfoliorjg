// ProjectCard.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./projectcard.css"; // Import the CSS for styling

const ProjectCard = ({ project, getImageSkill }) => {
  const renderSkills = (content) => {
    return content
      .split(", ")
      .map((skill, skillIndex) => (
        <img
          key={skillIndex}
          src={getImageSkill(skill)}
          alt={skill}
          className="skill-img"
        />
      ));
  };

  return (
    <div className="project-card">
      <div className="project-card-header">
        <h4>{project.name}</h4>
      </div>
      <div className="project-card-content">
        <div className="project-description-container">
          <p className="project-description">{project.description}</p>
          <div className="project-links">
            <a href={project.code} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <p>Code</p>
            <p>Live demo</p>
          </div>
        </div>
        <div className="project-img-container">
          <img src={project.image} alt={project.name} className="project-img" />
        </div>
      </div>

      <div className="project-card-footer">
        <p>Techs used: </p>
        {renderSkills(project.content)}
      </div>
    </div>
  );
};

export default ProjectCard;
