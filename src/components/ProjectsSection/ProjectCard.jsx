// Fayl: src/components/ProjectsSection/ProjectCard.jsx
import React from "react";
import styles from "./ProjectCard.module.css";

// 'githubLink'ni ham prop sifatida qabul qilamiz
const ProjectCard = ({
  title,
  description,
  imageUrl,
  projectLink,
  githubLink,
}) => {
  return (
    <article className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>

        {/* Tugmalarni alohida div'ga o'raymiz */}
        <div className={styles.buttonGroup}>
          {/* Faqat githubLink mavjud bo'lganda "View Code" tugmasini ko'rsatamiz */}
          {githubLink && githubLink !== "#" && (
            <a
              href={githubLink}
              className="btn btn-secondary" // Boshqa stil uchun qo'shimcha class
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          )}

          {/* Faqat projectLink '#' bo'lmaganda "View Project" tugmasini ko'rsatamiz */}
          {projectLink && projectLink !== "#" && (
            <a
              href={projectLink}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
