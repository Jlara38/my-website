import Header from '../components/SectionHeader.jsx'
import PCard from '../components/Card.jsx'
import Zena from '../assets/images/zena_cat.jpg'

export default function Projects(){

    const projects = [
        {
            id: 1,
            plink: 'https://github.com/Jlara38/my-website/tree/main',
            pname: 'Portfolio Website', 
            pdesc: 'Add Desc here', 
            pskills: ['React', 'Vite', 'UI/UX', 'Git'], 
            pimage: Zena,
            pimagealt: 'zena'
        },

        {
            id: 2,
            plink: 'https://github.com/Jlara38/my-website/tree/main',
            pname: 'Portfolio Website', 
            pdesc: 'Add Desc here', 
            pskills: ['React', 'Vite', 'UI/UX', 'Git'], 
            pimage: Zena,
            pimagealt: 'zena'
        },

        {
            id: 3,
            plink: 'https://github.com/Jlara38/my-website/tree/main',
            pname: 'Portfolio Website', 
            pdesc: 'Add Desc here', 
            pskills: ['React', 'Vite', 'UI/UX', 'Git'], 
            pimage: Zena,
            pimagealt: 'zena'
        },
    ];

    return(
        <div className='general-projects'>
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