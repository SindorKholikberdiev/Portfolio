import Header from "./components/Header/Header.jsx";
import { useState } from "react";
import About from "./components/About/About.jsx";
import ProjectSection from "./components/ProjectsSection/ProjectSection.jsx";
import SkillsSection from "./components/Skills/SkillsSection.jsx";
import Counter from "./Counter.jsx";
import ContactForm from "./components/Contact/ContactForm.jsx";
import ToDoList from "./ToDoList.jsx";

function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      {/* Header componentiga name state ni props orqali uzatamiz */}
      <Header name={name} />
      <About />
      <ProjectSection />
      <SkillsSection />

      {/* ContactForm componentiga name state ni props orqali uzatamiz */}
      <ContactForm name={name} onChangeName={setName} />
      <Counter />
      <ToDoList />
    </div>
  );
}

export default App;
