function Paragraph({ content, class: ClassName = "" }) {
    return (
        <p className={ClassName}>{content}</p>
    );
}

function Title({ title }) {
    return (
        <h2 className="title"> {title} </h2>
    );
}

export function LanguageFrameworkObject({ languageFramework, class: ClassName = "" }) {
    return (
        <div className={ClassName}>
            <Title title={languageFramework.name} />
            <Paragraph class="language-framework-content" content={languageFramework.proficiencyLevel} />
        </div>

    );
}