import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        <ProjectCard
          title="Portfoliowebsite"
          description="My first project built with React."
          imageUrl="/img/img-project-portfolio/portfolio-480.png"
        />
        {/* 2-project card */}
        <ProjectCard
          title="Quote Generator"
          description="A tool for daily inspiration built with Vanilla JS"
          imageUrl="/img/for-quote-generator.jpg"
        />
        {/* 3-project card */}
        <ProjectCard
          title="E-commerce Site"
          description="A future project to master React state"
          imageUrl="/img/img-project-E-commerce/project-E-commerce-640.png"
        />
      </div>
    </section>
  );
};
export default ProjectSection;
