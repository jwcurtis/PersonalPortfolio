import {ProjectObject, PageHeader} from './PageObjects';
import {LanguageFrameworkObject} from './LanguageFrameworkObjects';
import { useEffect, useState, startTransition} from 'react';

export function CreateContent(targetContent) {
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
        <div className="featured-projects">
            <PageHeader title="Featured Projects" subtitle="A showcase of my work and accomplishments." />
            <div className="object-holder">
                {projects?.map(project => (
                    <ProjectObject key={project.projectId} project={project} class="square-object" />
                ))}
            </div>
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
    const languages = (
        <div className="languages-frameworks">
            <PageHeader title="Languages & Frameworks" subtitle="JavaScript, React, Node.js, Express, MongoDB, SQL, HTML, CSS" />
            <div className="language-framework-holder">
                <LanguageFrameworkObject />
            </div>
        </div>
    );

    return (languages);
}

function ReturnTechnical() {
    return (
        <PageHeader title="Technical Highlights" subtitle="Full Stack Development, RESTful APIs, Responsive Design, Version Control (Git), Agile Methodologies" />
    );
}

function ReturnResume() {
    return(
        <PageHeader title="Resume" subtitle="Download my resume for a detailed overview of my skills and experience." />
    )
}

function ReturnContacts() {
    return(
        <PageHeader title="Contacts & Links" subtitle="Feel free to reach out to me through any of the following channels." />
    )
}

function ReturnEducation() {
    return(
        <PageHeader title="Education & Certifications" subtitle="Bachelor of Science in Computer Science" />
    )
}