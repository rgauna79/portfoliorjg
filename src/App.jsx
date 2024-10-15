import {
  Navbar,
  Header,
  About,
  Skills,
  Contact,
  Projects,
  Footer,
} from "./components";
import "./App.css";

function App() {
  return (
    <div className="container-root">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
