import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); //loading state
  const [error, setError] = useState(null); //error state

  // bu effect component birinchi marta render bo'lganda faqat bir marta ishlaydi
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error("data fetching failed!");
        }
        const data = await response.json();

        // ma'lumotni state ga joylaymiz va loadingni to'xtatamiz
        setProjects(data.slice(0, 6)); // faqat birinchi 6tasini olamiz
        setLoading(false);
      } catch (error) {
        // xatoni state ga joylaymiz va loadingni to'xtatamiz
        setError(error.message);
        setLoading(false);
      }
    };

    // async function ni darhol chaqiramiz
    fetchProjects();
  }, []); // Bo'sh massiv effect faqat 1 marta ishlashini taminlaydi

  return (
    <section id="projects">
      <h2>Projects</h2>
      {/* yuklanish holatini ko'rsatish */}
      {loading && <p>Loading projects...</p>}

      {/* Xatolik holatini ko'rsatish */}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {/*  Ma'lumotlar muvaffaqiyatli yuklanganda ularni render qilish */}

      <div className="projects-grid">
        {!loading &&
          !error &&
          projects.map((project) => (
            <ProjectCard
              key={project.id} // API'dan kelgan noyob ID'ni ishlatamiz
              title={project.title}
              description={project.body} // API'da 'body' deb keladi
              imageUrl="/img/img-project-portfolio/portfolio-480.png" // Hozircha bir xil rasm
            />
          ))}
      </div>
    </section>
  );
};
export default ProjectSection;
