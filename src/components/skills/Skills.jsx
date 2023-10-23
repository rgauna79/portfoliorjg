import React from 'react';
import './skills.css'
import { skillsBack, skillsFront, skillsTools } from '../../assets/icons';

const Skills = () => {
    // const skillsFront = {
    //     html: {
    //         name: 'Html',
    //         image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    //     },
    //     css: {
    //         name: 'CSS',
    //         image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    //     },
    //     javascript: {
    //         name: 'Javascript',
    //         image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    //     },
    //     bootstrap: {
    //         name: 'Bootstrap',
    //         image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
    //     },
    //     react: {
    //         name: 'React',
    //         image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    //     }
    // }
    // const skillsBack = {
    //     python: {
    //         name: 'Python',
    //         image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    //     },
    //     django: {
    //         name: 'Django',
    //         image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'
    //     },
    //     php: {
    //         name: 'Php',
    //         image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
    //     },
    //     elixir: {
    //         name: 'Elixir',
    //         image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg'
    //     }
    // }
    // const skillsTools = {
    //     git: {
    //         name: 'Git',
    //         image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    //     },
    //     github: {
    //         name: 'GitHub',
    //         image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    //     },
    //     webpack: {
    //         name: 'WebPack',
    //         image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg'
    //     }
    // }
  return (
    <section className='skills-main' id='skills'>
        <h1 className="skills-title">Skills</h1>
        <div className="skills-container">
            <div className="skills-card">
                <h2 className="skills-title">
                    Front-End 
                </h2>
                <div className="skills-content-card">
                    {Object.values(skillsFront).map((element,index) => (
                        <div key={index} className="skills-icons">
                            <img src={element.image} alt={element.name} className="img-icons"></img>
                            <p key={index}>{element.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="skills-card">
                <h2 className="skills-title">
                    Back-End
                </h2>
                <div className="skills-content-card">
                    {Object.values(skillsBack).map((element,index) => (
                        <div key={index} className="skills-icons">
                            <img src={element.image} alt={element.name} className="img-icons"></img>
                            <p key={index}>{element.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="skills-card">
                <h2 className="skills-title">
                    Tools
                </h2>
                <div className="skills-content-card">
                    {Object.values(skillsTools).map((element,index) => (
                        <div key={index} className="skills-icons">
                            <img src={element.image} alt={element.name} className="img-icons"></img>
                            <p key={index}>{element.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills