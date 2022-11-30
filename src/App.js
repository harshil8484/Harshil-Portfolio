import { render } from "react-dom";
import Navbar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Opener from "./components/Opener/Opener";

const App = () => {
  return (
    <main>
      <Opener />
      <Navbar />
      <About />
      <div className="main-content">
        <Projects />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default App;

render(<App />, document.querySelector("#root"));
