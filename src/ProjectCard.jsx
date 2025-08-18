const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <article className="project-card">
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
