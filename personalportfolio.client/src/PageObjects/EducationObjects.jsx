function formatDate(dateString) {
    if (!dateString) return "Present";

    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}


function Title({ title, class: ClassName = "" }) {
    return (
        <h2 className={`title ${ClassName}`}>{title}</  h2>
    );
}
function Content({ content, class: ClassName = "" }) {
    return (
        <p className={`content ${ClassName}`}>{content}</p>
    );
}
export function EducationObject({ education, class: ClassName = "" }) {
    return (
        <div className={ClassName}>
            <Title title={education.school} />
            <Content class="education-content" content={education.honors} />
            <Content class="education-content" content={formatDate(education.dateAwarded)} />
            <Content class="education-content" content={education.degree} />
            <Content class="education-content" content={education.fieldOfStudy} />
        </div>
    );
}