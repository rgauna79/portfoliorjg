import React, {useState, useEffect} from 'react';
import './skills.css'
import { skillsBack, skillsFront, skillsTools } from '../../assets/icons';



const Skills = () => {

   

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