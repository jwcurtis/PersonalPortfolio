function Paragraph({ content, class : ClassName = "" }) {
    return (
        <p className={ClassName}>{content}</p>
    );
}

function TitleLink({ title, link }) {
    return(
        <h2 className="link-title">
            <a className ="link" href={link} target="_blank" rel="noopener noreferrer">
                {title}
            </a>
        </h2>
    );
}

export function PageHeader({ title, subtitle }) {
    return (
        <div className="page-header">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    );
}

export function ProjectObject({ project, class : ClassName = "" }) {
    return (
        <div className={ClassName}>
            <TitleLink title={project.projectName} link={project.projectLink} />
            <Paragraph class = "project-content" content={project.projectType} />
            <Paragraph class = "project-content" content={project.projectDescription} />
            <Paragraph class = "project-content" content={project.dateCompleted} />
        </div>
        
    );
}
export function PortfolioHeader(){

   return(
        <div className="portfolio-header">
            <h1 className="portfolio-name">Jacob Curtis</h1>
            <h2 className="portfolio-title">Software Engineer</h2>
        </div>
   );
}
