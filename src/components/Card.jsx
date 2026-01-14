export default function Card({ name, description, skills, image, alt}) {
    return(
        <div className="card">
            <img src={image} alt={alt}></img>
            <h2>{name}</h2>
            <p>{description}</p>

            <ul className="skill-list">
                {skills.map(skill => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
            {/* Perhaps make it clickable to add a description of what it was that your duties are/were. */}
            {/* <p>Working on this component</p> */}
        </div>
    )
}

// .experience-card-container{
//     width: 100%;
//     display: flex;
//     flex-wrap: wrap;
//     box-sizing: border-box;
//     gap: 2rem;
//     justify-content: center;
//     padding: 2rem;
//     border: 2px solid red;
// }

            
            // <div className='experience-card-container'>
            //     <Card></Card>
            //     <Card></Card>
            //     <Card></Card>
            // </div>