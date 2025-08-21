import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <article className={styles.card}>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#" className="btn">
        View project
      </a>
    </article>
  );
};
export default ProjectCard;
