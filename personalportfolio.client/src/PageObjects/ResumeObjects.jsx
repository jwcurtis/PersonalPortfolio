function Paragraph({ content, class: ClassName = "" }) {
    return (
        <p className={ClassName}>{content}</p>
    );
}

function Title({ company, jobtitle}) {
    return (
        <h2 className="resume-title"> {company} | {jobtitle}  </h2>

    );
}
function SubTitle({ location, dateStart, dateEnd, class: ClassName = "" }) {
    const endDate = dateEnd ? dateEnd : "Present";

    return (
        <p className={ClassName}>
            {location} | {dateStart} - {endDate}
        </p>
    );
}

export function ResumeExperienceObject({ resumeExperience, class: ClassName = "" }) {
    return (
        <div className={ClassName}>
            <Title company={resumeExperience.jobCompany} jobtitle={resumeExperience.jobTitle} />
            <SubTitle class="project-content" location={resumeExperience.jobLocation}
                dateStart={resumeExperience.dateStarted} dateEnd={resumeExperience.dateEnded} />
            <Paragraph class="project-content" content={resumeExperience.jobDescription} />
        </div>

    );
}