import React, { useEffect } from 'react'
import './projects.css'
import Markdown from './markdown.jpg';
import Quotes from './quotes.png';
import Calculator from './calculator.png';
import RockPaperScissors from './rock-paper-scissors.png';
import TicTacToe from './Tic-tac-toe.jpg';
import VirtualLibrary from './library.png';
import ComingSoon from './coming-soon.png';
import EtchASketch from '../../../public/img/preview.png';
import ToDoApp from '../../../public/img/todo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


//Projects 
const projectsVar = {
    freecodecamp: [
        {
        name: 'Markdown Live Preview',
        content: 'Html, CSS, JavaScript, React',
        image: Markdown,
        live: 'https://codepen.io/rgauna79/pen/qBLqmEO',
        code: 'https://codepen.io/rgauna79/pen/qBLqmEO'
        },
        {
        name: 'Random quotes',
        content: 'Html, CSS, JavaScript, React',
        image: Quotes,
        live: 'https://codepen.io/rgauna79/full/BavLepV',
        code: 'https://codepen.io/rgauna79/full/BavLepV'  
        },
        {
        name: 'Javascript calculator',
        content: 'Html, CSS, JavaScript',
        image: Calculator,
        live: 'https://codepen.io/rgauna79/full/MWZowyE',
        code: 'https://codepen.io/rgauna79/full/MWZowyE'  
        }
    ],
    odinprojects: [
        {
        name: 'Etch A Sketch',
        content: 'Html, CSS, JavaScript',
        image: EtchASketch,
        live: 'https://rgauna79.github.io/EtchASketch/',
        code: 'https://github.com/rgauna79/EtchASketch'
        },
        {
        name: 'To-Do App',
        content: 'Html, CSS, JavaScript',
        image: ToDoApp,
        live: 'https://rgauna79.github.io/ToDoApp/',
        code: 'https://github.com/rgauna79/ToDoApp'
        },
        {
        name: 'Tic Tac Toe Game',
        content: 'Html, CSS, JavaScript',
        image: TicTacToe,
        live: 'https://rgauna79.github.io/rgauna79.github.com/Tic%20Tac%20Toe/',
        code: 'https://github.com/rgauna79/rgauna79.github.com/tree/master/Tic%20Tac%20Toe'
    }, {
        name: 'Rock Paper Scissors',
        content: 'Html, CSS, JavaScript',
        image: RockPaperScissors,
        live: 'https://rgauna79.github.io/rgauna79.github.com/Rock%20Paper%20Scissors',
        code: 'https://github.com/rgauna79/rgauna79.github.com/tree/master/Rock%20Paper%20Scissors'  
    },  {
        name: 'Virtual Library',
        content: 'Html, CSS, JavaScript',
        image: VirtualLibrary,
        live: 'https://rgauna79.github.io/rgauna79.github.com/Library/',
        code: 'https://github.com/rgauna79/rgauna79.github.com/tree/master/Library'  
    }
    ],
    personal: [
        {
            name: 'Coming soon',
            content: 'coming soon',
            image: ComingSoon,
            live: '',
            code: ''
        },
    ]
}

  


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
        console.log(targets);
    }, []);

    return (
    <section className='projects-main' id='projects'>
    <h1>Experience</h1>
    
        <div className="project-section">
            <h2 className="project-title">
                Odin Projects
            </h2>
            <div className="project-content">
                {Object.values(projectsVar['odinprojects']).map((element) => (
                    <div key={element.index} className="project-card">
                        <h4>{element.name}</h4>
                        <hr></hr>
                        <img src={element.image} alt={element.name} className="project-img"></img>
                        <p>{element.content}</p>
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
                {Object.values(projectsVar['freecodecamp']).map((element) => (
                    <div className="project-card">
                        <h4>{element.name}</h4>
                        <img src={element.image} alt={element.name} className="project-img"></img>
                        <p>{element.content}</p>
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
                {Object.values(projectsVar['personal']).map((element) => (
                    <div key={element.index} className="project-card">
                        <h4>{element.name}</h4>
                        <img src={element.image} alt={element.name} className="project-img"></img>
                        <p>{element.content}</p>
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