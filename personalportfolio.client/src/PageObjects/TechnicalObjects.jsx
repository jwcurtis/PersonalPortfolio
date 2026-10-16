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
export function TechnicalObject({ technicalHighlight, class: ClassName = "" }) {
    return (
        <div className={ClassName}>
            <Title title={technicalHighlight.technicalName} />
            <Content class="project-content" content={technicalHighlight.technicalType} />
            <Content class="project-content" content={technicalHighlight.technicalDescription} />
        </div>

    );
}