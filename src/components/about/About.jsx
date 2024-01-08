import React from 'react';
import './about.css';
import urlCV from '/src/assets/documents/Cv-0124.pdf';


const About = () => {
  return (
    <section className='container-about' id="about">
        <div className="content-about">
            <h1>A few things about me</h1>
            <p>Full-stack software development with experience in design, installation,
              testing and maintenance of software systems. Experience in the most cutting-edge
              development tools and procedures. Able to effectively self-manage independent projects.
              Good collaboration skills within a productive team.
            </p>
        </div>
        <a className='btn cv' href={urlCV} target='_blank' rel='noopener noreferrer'>
          Show CV
          <span className="external-link-icon">↗</span>
        </a>
    </section>
  )
}

export default About