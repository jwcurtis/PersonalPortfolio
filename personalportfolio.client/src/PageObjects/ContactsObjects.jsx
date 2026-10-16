
function ContactsContent({ contentType, content }) {
    switch (contentType) {
        case "Email":
            return (
                <h3 className="contactLink">
                    <a className="link" href={`mailto:${content}`} target="_blank" rel="noopener noreferrer">
                        {content}
                    </a>
                </h3>
            );
        case "Phone":
            return (
                <h3 className="contactLink">
                    <p>{content}</p>
                </h3>
            );
        case "Link":
            return (
                <h3 className="contactLink">
                    <a className="link" href={content} target="_blank" rel="noopener noreferrer">
                        View Profile!
                    </a>
                </h3>   
            );
    }
}

function Title({ title }) {
    return (
        <h2 className="title"> {title} </h2>
    );
}

export function ContactsObject({ contact, class: ClassName = "" }) {
    return (
        <div className={ClassName}>
            <Title title={contact.contactName} />
            <ContactsContent class="contacts-content" contentType={contact.contactType} content={contact.contactValue} />
        </div>

    );
}