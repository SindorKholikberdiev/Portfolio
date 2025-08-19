import Header from "./Header.jsx";
import { useState } from "react";
import About from "./About.jsx";
import ProjectSection from "./ProjectSection.jsx";
import Counter from "./Counter.jsx";
import ContactForm from "./ContactForm.jsx";
import ToDoList from "./ToDoList.jsx";

function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      {/* Header componentiga name state ni props orqali uzatamiz */}
      <Header name={name} />
      <About />
      <ProjectSection />

      {/* ContactForm componentiga name state ni props orqali uzatamiz */}
      <ContactForm name={name} onChangeName={setName} />
      <Counter />
      <ToDoList />
    </div>
  );
}

export default App;
