export default function ProjectThumbnail({ project }) {
  return (<div className = "project-thumbnail">
      <h2 className="thumbnail-title">{project.projectName}</h2>
      <p className="thumbnail-content">{project.projectType}</p>
      <p className="thumbnail-content">{project.projectDescription}</p>
      <p className="thumbnail-content">{project.dateCompleted}</p>
      <p className="thumbnail-content">{<a href={project.projectLink} target="_blank" rel="noopener noreferrer">
        View Project in New Tab
      </a>}</p>
  </div>);
}

