// We no longer need useState or useEffect because we are not fetching data.
// Bizga endi useState yoki useEffect kerak emas, chunki biz ma'lumot yuklamayapmiz.
import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import styles from "./ProjectSection.module.css";

// Import the local data directly from our new file.
// Lokal ma'lumotlarni to'g'ridan-to'g'ri yangi faylimizdan import qilamiz.
import { projectsData } from "../../data/projectsData.js";

const ProjectSection = () => {
  // Since the data is local, we don't need loading or error states.
  // Ma'lumotlar lokal bo'lgani uchun, bizga yuklanish yoki xatolik holatlari kerak emas.

  return (
    <section id="projects">
      <h2>Projects</h2>

      {/* We can now directly map over our imported 'projectsData' array. */}
      {/* Endi biz to'g'ridan-to'g'ri import qilingan 'projectsData' massivini map qilishimiz mumkin. */}
      <div className={styles.projectsGrid}>
        {projectsData.map((project) => (
          <ProjectCard
            // It's best practice to use the unique ID from your data as the key.
            // Eng yaxshi amaliyot - kalit sifatida ma'lumotlaringizdan kelgan unikal ID'ni ishlatish.
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            // You can now pass more specific props like links.
            // Endi siz linklar kabi aniqroq props'larni uzata olasiz.
            projectLink={project.projectLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
