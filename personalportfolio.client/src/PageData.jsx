import {ProjectObject, PageHeader} from './PageObjects/PageObjects';
import { LanguageFrameworkObject } from './PageObjects/LanguageFrameworkObjects';
import { ResumeExperienceObject } from './PageObjects/ResumeObjects';
import { ContactsObject } from './PageObjects/ContactsObjects';
import { TechnicalObject } from './PageObjects/TechnicalObjects';
import { EducationObject } from './PageObjects/EducationObjects'; 
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
            <PageHeader title="Languages & Frameworks" subtitle="Programming languages and frameworks I have worked with." />
            <div className="object-holder">
                {languages?.map(language => (
                    <LanguageFrameworkObject key={language.languageFrameworkId} languageFramework={language} class ="square-object" />
                ))}
            </div>
        </div>
    );

    return (languagesData);

}

function ReturnTechnical() {
    const [technical, setTechnical] = useState();

    useEffect(() => {
        populateData('Technical', setTechnical);
    }, []);

    const technicalHighlights = (
        <div className="technical-highlights">
            <PageHeader title="Technical Highlights" subtitle="Highlights of some of my technical work" />
            <div className="object-holder">
                {technical?.map(tech => (
                    <TechnicalObject key={tech.technicalId} technicalHighlight={tech} class="square-object" />
                ))}
            </div>
        </div>
    );

    return (technicalHighlights);
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
    const [contacts, setContacts] = useState();

    useEffect(() => {
        populateData('Contacts', setContacts);  
    }, []);

    const languagesData = (
        <div className="languages-frameworks">
            <PageHeader title="Contacts & Links" subtitle="Feel free to reach out to me through any of the following channels." />
            <div className="object-holder">
                {contacts?.map(contact => (
                    <ContactsObject key={contact.contactId} contact={contact} class="square-object" />
                ))}
            </div>
        </div>
    );

    return (languagesData);
}

function ReturnEducation() {
    const [educations, setEducations] = useState();

    useEffect(() => {
        populateData('Education', setEducations);
    }, []);

    const educationData = (
        <div className="education">
            <PageHeader title="Education & Certifications"  />
            <div className="object-holder">
                {educations?.map(education => (
                    <EducationObject key={education.educationId} education={education} class="square-object" />
                ))}
            </div>
        </div>
    );

    return (educationData);
}