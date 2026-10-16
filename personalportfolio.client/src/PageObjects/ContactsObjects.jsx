function ContactsContent({ contentType, content}) {
    switch (contentType) {
        case "Email":
            return (
                <a className="link" href={`mailto:${content}`} target="_blank" rel="noopener noreferrer">
                    {content}
                </a>
            );
        case "Phone":
            return (
                <p>{content}</p>
            );
        case "Link":
            return (
                <a className="link" href={content} target="_blank" rel="noopener noreferrer">
                    Visit!
                </a>
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