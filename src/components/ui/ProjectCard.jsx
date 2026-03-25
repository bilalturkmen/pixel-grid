export const ProjectCard = ({ project, index }) => {
  const displayIndex = (index + 1).toString().padStart(2, "0");

  return (
    <div className="project-card">
      <div className="project-image-container">
        <span className="project-number-overlay">{displayIndex}</span>
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>
      <div className="project-info">
        <span className="project-type-badge">{project.type}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          className="project-link"
          rel="noopener noreferrer"
        >
          View Project <span>→</span>
        </a>
      </div>
    </div>
  );
};
