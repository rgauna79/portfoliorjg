import React, { useEffect } from 'react'
import './projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import projectsVar from './projectsData';



const Projects = () => {

    
    // Implementation to make animations
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
    }, []);

    return (
    <section className='projects-main' id='projects'>
    <h1>Experience</h1>
    
        <div className="project-section">
            <h2 className="project-title">
                Odin Projects
            </h2>
            <div className="project-content">
                {Object.values(projectsVar['odinprojects']).map((element, index) => (
                    <div key={index} className="project-card">
                        <div className="project-card-header">
                            <h4>{element.name}</h4>
                        </div>
                        <div className="project-card-content">
                            <p className='project-description'>{element.description}</p>
                            <img src={element.image} alt={element.name} className="project-img"></img>
                            
                        </div>
                        <div className="project-card-footer">
                            <p>{element.content}</p>
                        </div>
                        <div className="middle">
                            <div className="project-links">
                                <a href={element.code} target='_blank'><FontAwesomeIcon icon={faGithub} shake/></a>
                                <a href={element.live} target='_blank'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                                <p>Code</p>
                                <p>Live demo</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="project-section">
            <h2 className="project-title">
                FreeCodeCamp Projects
            </h2>
            <div className="project-content">
                {Object.values(projectsVar['freecodecamp']).map((element, index) => (
                    <div key={index} className="project-card">
                        <div className="project-card-header">
                            <h4>{element.name}</h4>
                        </div>
                        <div className="project-card-content">
                            <p className='project-description'>{element.description}</p>
                            <img src={element.image} alt={element.name} className="project-img"></img>
                        </div>
                        <div className="project-card-footer">
                            <p>{element.content}</p>
                        </div>
                        <div className="middle">
                            <div className="project-links">
                                <a href={element.code} target='_blank'><FontAwesomeIcon icon={faGithub} shake/></a>
                                <a href={element.live} target='_blank'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                                <p>Code</p>
                                <p>Live demo</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="project-section">
            <h2 className="project-title">
                Personal Projects
            </h2>
            <div className="project-content">
                {Object.values(projectsVar['personal']).map((element, index) => (
                    <div key={index} className="project-card">
                        <div className="project-card-header">
                            <h4>{element.name}</h4>
                        </div>
                        <div className="project-card-content">
                            <p className='project-description'>{element.description}</p>
                            <img src={element.image} alt={element.name} className="project-img"></img>
                        </div>
                        <div className="project-card-footer">
                            <p>{element.content}</p>
                        </div>
                        <div className="middle">
                            <div className="project-links">
                                <a href={element.code} target='_blank'><FontAwesomeIcon icon={faGithub} shake/></a>
                                <a href={element.live} target='_blank'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                                <p>Code</p>
                                <p>Live demo</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    
</section>
  )
}

export default Projects