// projects.jsx

import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faGithub,
//   faArrowUpRight,
// } from "@fortawesome/free-brands-svg-icons";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProjectCard from "../ui/ProjectCard/ProjectCard";
import { skillsBack, skillsFront, skillsTools } from "../../assets/icons";
import projectsVar from "./projectsData";
import "./projects.css";

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

  const getImageSkill = (skill) => {
    const allSkills = { ...skillsFront, ...skillsBack, ...skillsTools };
    return allSkills[skill.toLowerCase()]?.image || "";
  };

  const renderProjectCards = (category) => {
    const settings = {
      dots: true,
      fade: true,
      centerMode: true,
      centerPadding: "10px",
    };
    return (
      <Slider {...settings}>
        {Object.values(projectsVar[category]).map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            getImageSkill={getImageSkill}
          />
        ))}
      </Slider>
    );
  };

  return (
    <section className="projects-main" id="projects">

      <div className="project-section">
        <h2 className="project-title">Personal Projects</h2>
        <div className="project-content">{renderProjectCards("personal")}</div>
      </div>
      <div className="project-section">
        <h2 className="project-title">Mini Projects</h2>
        <div className="project-content">
          {renderProjectCards("miniproject")}
        </div>
        <div className="project-content">
          {/* {renderProjectCards("freecodecamp")} */}
        </div>
        
      </div>

    </section>
  );
};

export default Projects;
