export default function ProjectThumbnail({ project }) {
  return (<div className = "project-thumbnail">
      <h2 className="thumbnail-title">{<a href={project.projectLink} target="_blank" rel="noopener noreferrer">
          {project.projectName}
      </a>}</h2>
      <p className="thumbnail-content">{project.projectType}</p>
      <p className="thumbnail-content">{project.projectDescription}</p>
      <p className="thumbnail-content">{project.dateCompleted}</p>
  </div>);
}

