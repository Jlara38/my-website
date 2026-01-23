import Header from '../components/SectionHeader.jsx'
import PCard from '../components/Card.jsx'
import { projects } from '../data/projects.js';

export default function Projects(){
    return(
        <div className='general-projects' id='projects'>
            <Header title={'Projects'}></Header>

            <div className='projects-container'>
                {projects.map(project => (
                    <PCard
                        key={project.id}
                        link={project.plink}
                        name={project.pname}
                        description={project.pdesc}
                        skills={project.pskills}
                        image={project.pimage}
                        alt={project.pimagealt}
                    />
                ))}
            </div>

        </div>
    )
}