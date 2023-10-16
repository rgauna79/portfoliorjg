import {Navbar, Header, About, Skills, Contact, Projects} from './components'
import './App.css'

function App() {
  

  return (
    <div className='container-root'>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
