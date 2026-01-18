export default function Card({
    name,
    description,
    skills = [],
    image,
    alt = '',
    link
}) {
    const content = (
        <div className="card">
            {image && <img src={image} alt={alt || name} />}

            {name && <h2>{name}</h2>}
            {description&& <p>{description}</p>}

            {skills.length > 0 && (
                <div className="skill-list">
                    {skills.map(skill => (
                        <button key={skill}>{skill}</button>
                    ))}
                </div>
            )}
        </div>
    );

    return link ? (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            {content}
        </a>
    ) : (
        content
    );
}