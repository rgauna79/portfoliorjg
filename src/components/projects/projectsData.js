import Markdown from '/src/assets/img/markdown.jpg';
import Quotes from '/src/assets/img/quotes.png';
import Calculator from '/src/assets/img/calculator.png';
import RockPaperScissors from '/src/assets/img/rock-paper-scissors.png';
import TicTacToe from '/src/assets/img/Tic-tac-toe.jpg';
import VirtualLibrary from '/src/assets/img/library.png';
import ComingSoon from '/src/assets/img/coming-soon.png';
import EtchASketch from '/src/assets/img/preview.png';
import ToDoApp from '/src/assets/img/todo.png';



//Projects 
const projectsVar = {
    freecodecamp: [
        {
        name: 'Markdown Live Preview',
        content: 'Html, CSS, JavaScript, React',
        description: 'Markdown editor with live preview, Frecodecamp project',
        image: Markdown,
        live: 'https://codepen.io/rgauna79/pen/qBLqmEO',
        code: 'https://codepen.io/rgauna79/pen/qBLqmEO'
        },
        {
        name: 'Random quotes',
        content: 'Html, CSS, JavaScript, React',
        description: 'Random quote generator, Frecodecamp project',
        image: Quotes,
        live: 'https://codepen.io/rgauna79/full/BavLepV',
        code: 'https://codepen.io/rgauna79/full/BavLepV'  
        },
        {
        name: 'Javascript calculator',
        content: 'Html, CSS, JavaScript',
        description: 'Javascript calculator - Frecodecamp project',
        image: Calculator,
        live: 'https://codepen.io/rgauna79/full/MWZowyE',
        code: 'https://codepen.io/rgauna79/full/MWZowyE'  
        }
    ],
    odinprojects: [
        {
        name: 'Etch A Sketch',
        content: 'Html, CSS, JavaScript',
        description: 'Etch A Skecth game emulation made in JavaScript for Odin projects',
        image: EtchASketch,
        live: 'https://rgauna79.github.io/EtchASketch/',
        code: 'https://github.com/rgauna79/EtchASketch'
        },
        {
        name: 'To-Do App',
        content: 'Html, CSS, JavaScript',
        description: 'App to manage list of task to do for Odin projects',
        image: ToDoApp,
        live: 'https://rgauna79.github.io/ToDoApp/',
        code: 'https://github.com/rgauna79/ToDoApp'
        },
        {
        name: 'Tic Tac Toe Game',
        content: 'Html, CSS, JavaScript',
        description: 'Tradional game of Tic Tac Toe for Odin projects',
        image: TicTacToe,
        live: 'https://rgauna79.github.io/rgauna79.github.com/Tic%20Tac%20Toe/',
        code: 'https://github.com/rgauna79/rgauna79.github.com/tree/master/Tic%20Tac%20Toe'
    }, {
        name: 'Rock Paper Scissors',
        content: 'Html, CSS, JavaScript',
        description: 'Rock Paper Scissors game to play versus Computer for Odin projects',
        image: RockPaperScissors,
        live: 'https://rgauna79.github.io/rgauna79.github.com/Rock%20Paper%20Scissors',
        code: 'https://github.com/rgauna79/rgauna79.github.com/tree/master/Rock%20Paper%20Scissors'  
    },  {
        name: 'Virtual Library',
        content: 'Html, CSS, JavaScript',
        description: 'App to store books for Odin projects',
        image: VirtualLibrary,
        live: 'https://rgauna79.github.io/rgauna79.github.com/Library/',
        code: 'https://github.com/rgauna79/rgauna79.github.com/tree/master/Library'  
    }
    ],
    personal: [
        {
            name: 'Coming soon',
            content: 'coming soon',
            description: 'Future personal projects to add in the portfolio',
            image: ComingSoon,
            live: '',
            code: ''
        },
    ]
}


export default projectsVar;