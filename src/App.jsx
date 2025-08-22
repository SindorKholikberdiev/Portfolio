import { useState } from "react";
// Import the necessary components from react-router-dom.
import { Routes, Route } from "react-router-dom";

// Import Layout components (these will be visible on all pages).
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

// Import Page components (these will change based on the URL).
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import SkillsPage from "./pages/SkillsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

// Import your global styles.
import "./App.css";

function App() {
  // The state remains in the top-level App component.
  const [name, setName] = useState("");

  return (
    <div className="App">
      {/* LAYOUT: The Header is always visible. */}
      <Header name={name} />

      {/* Main content area that will change based on the route. */}
      <main>
        <Routes>
          {/* This Route defines what to show for the homepage ('/'). */}
          {/* We pass the name and onChangeName as props to the HomePage component here. */}
          <Route
            path="/"
            element={<HomePage name={name} onChangeName={setName} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route
            path="/contact"
            element={<ContactPage name={name} onChangeName={setName} />}
          />

          {/* Later, we can add more routes here for other pages. */}
          {/* Masalan: <Route path="/project/:id" element={<ProjectDetailPage />} /> */}
        </Routes>
      </main>

      {/* LAYOUT: The Footer is always visible. */}
      <Footer />
    </div>
  );
}

export default App;
