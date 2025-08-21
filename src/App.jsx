import Header from "./components/Header/Header.jsx";
import { useState } from "react";
import About from "./components/About/About.jsx";
import ProjectSection from "./components/ProjectsSection/ProjectSection.jsx";
import SkillsSection from "./components/Skills/SkillsSection.jsx";
import ContactInfo from "./components/ContactInfo/ContactInfo.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      {/* Header componentiga name state ni props orqali uzatamiz */}
      <Header name={name} />
      <About />
      <ProjectSection />
      <SkillsSection />

      {/* --- CONTACT SECTION LAYOUT --- */}
      {/* We create a wrapper section to act as the flex container for our two components. */}
      {/* Bu section ContactInfo va ContactForm uchun "ota" konteyner bo'ladi. */}
      <section className="contactSection">
        {/* The two components are now direct children of our flex container. */}
        {/* Ikkala komponent endi flex konteynerning bevosita "farzandlari". */}
        <ContactInfo />
        {/* ContactForm componentiga name state ni props orqali uzatamiz */}
        <ContactForm name={name} onChangeName={setName} />
      </section>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
