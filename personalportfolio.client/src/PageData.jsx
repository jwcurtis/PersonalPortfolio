import {ProjectObject, PageHeader} from './PageObjects/PageObjects';
import { LanguageFrameworkObject } from './PageObjects/LanguageFrameworkObjects';
import { ResumeExperienceObject } from './PageObjects/ResumeObjects';
import { useEffect, useState, startTransition} from 'react';

async function populateData(url, setter) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        startTransition(() => {
            setter(data);
        });
    }
}
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
        populateData('projects', setProjects);
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

}

function ReturnLanguages() {
    const [languages, setLanguages] = useState();

    useEffect(() => {
        populateData('languageframework', setLanguages);
    }, []);

    const languagesData = (
        <div className="languages-frameworks">
            <PageHeader title="Languages & Frameworks" subtitle="JavaScript, React, Node.js, Express, MongoDB, SQL, HTML, CSS" />
            <div className="object-holder">
                {languages?.map(language => (
                    <LanguageFrameworkObject key={language.languageFrameworkId} languageFramework={language} class ="square-object-small" />
                ))}
            </div>
        </div>
    );

    return (languagesData);

}

function ReturnTechnical() {
    return (
        <PageHeader title="Technical Highlights" subtitle="Full Stack Development, RESTful APIs, Responsive Design, Version Control (Git), Agile Methodologies" />
    );
}

function ReturnResume() {
    const [experiences, setExperiences] = useState();

    useEffect(() => {
        populateData('Resume', setExperiences);
    }, []);

    const languagesData = (
        <div className="languages-frameworks">
            <PageHeader title="Resume" subtitle="A summary of professional experience and qualifications." />
            <div className="object-holder">
                {experiences?.map(experience => (
                    <ResumeExperienceObject key={experience.jobId} resumeExperience={experience} class="square-object-long" />
                ))}
            </div>
        </div>
    );

    return (languagesData);
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