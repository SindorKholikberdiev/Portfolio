import About from "./About.jsx";
import ProjectSection from "./ProjectSection.jsx";
import Counter from "./Counter.jsx";
import ContactForm from "./ContactForm.jsx";

function App() {
  return (
    <>
      <header className="App-header">
        <h1> React Counter lesson</h1>
        <Counter />

        <h1>Sindor's Portfolio</h1>
        <nav aria-label="Primary">
          <ul className="nav-list">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <About />
      <ProjectSection />
      <ContactForm />
    </>
  );
}

export default App;
