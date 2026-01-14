import Header from '../components/SectionHeader.jsx'
import PCard from '../components/Card.jsx'
import Zena from '../assets/images/zena_cat.jpg'

export default function Projects(){

    const projects = [
        {
            id: 1,
            pname: 'Portfolio Website', 
            pdesc: 'Add Desc here', 
            pskills: ['React', 'Vite', 'UI/UX'], 
            pimage: Zena,
            pimagealt: 'zena'
        }
    ];

    return(
        <div className='general-projects'>
            <Header title={'Projects'}></Header>

            <div className='projects-container'>
                {projects.map(project => (
                    <PCard
                        key={project.id}
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