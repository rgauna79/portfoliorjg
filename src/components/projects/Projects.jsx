// projects.jsx

import React, { useEffect } from "react";

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

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const targets = document.querySelectorAll(".project-card");
    targets.forEach((img) => observer.observe(img));

    return () => {
      targets.forEach((img) => observer.unobserve(img));
    };
  }, [options]);

  const getImageSkill = (skill) => {
    const allSkills = { ...skillsFront, ...skillsBack, ...skillsTools };
    return allSkills[skill.toLowerCase()]?.image || "";
  };

  const renderProjectSection = (category) => {
    return (
      <div className="project-section">
        <h2 className="project-title">{category.toUpperCase()}</h2>
        <div className="project-content">
          {Object.values(projectsVar[category]).map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              getImageSkill={getImageSkill}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="projects-main" id="projects">
      {renderProjectSection("personal")}
      {/* {renderProjectSection("miniprojects")} */}
    </section>
  );
};

export default Projects;
