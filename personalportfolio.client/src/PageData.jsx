import ProjectThumbnail from './ProjectThumbnail';
import { useEffect, useState, ViewTransition, startTransition} from 'react';

export function ReturnContent(targetContent) {
    switch (targetContent) {
        case 'featured-projects':
              return <ReturnProjects />;
        case 'languages':
            return <ReturnLanguages />;
        case 'technical-highlights':
            return <ReturnTechnical />;
        case 'resume':
            return <ReturnResume />;
        case 'contacts':
            return <ReturnContacts />;
        case 'education':
            return <ReturnEducation />;
        default:
            return null;
    }
}

function ReturnProjects() {
    const [projects, setProjects] = useState();

    useEffect(() => {
        populateProjects();
    }, []);

    const featuredProjects = (
        <div className="thumbnail-holder">
            {projects?.map(project => (
               
                <ProjectThumbnail key={project.projectId} project={project} />
            ))}
        </div>
    );

    return (featuredProjects);

    async function populateProjects() {
        const response = await fetch('projects');
        if (response.ok) {
            const data = await response.json();
            startTransition(() => {
                setProjects(data);
            });
        }
    }
}

function ReturnLanguages() {
    return (
        <div className="languages">
            <h2>Languages</h2>
        </div>
    );
}

function ReturnTechnical() {
    return (
        <div className="technical-highlights">
            <h2>Technical Highlights</h2>
        </div>
    );
}

function ReturnResume() {
    return(
        <div className="resume">
            <h2>Resume</h2>
        </div>
    )
}

function ReturnContacts() {
    return(
        <div className="contacts">
            <h2>Contacts</h2>
        </div>
    )
}

function ReturnEducation() {
    return(
        <div className="education">
            <h2>Education</h2>
        </div>
    )
}