import SectionHeader from '../components/SectionHeader.jsx'
import { SkillsData } from '../data/skills.js'
import SkillCard from '../components/SkillCard.jsx'



export default function Skills(){
    return(
        <div className="general-skills">
            <SectionHeader title={"Skills"}></SectionHeader>

            <div className='skills-container'>
                {SkillsData.map((section) => {
                    return(
                        <div className='skills-section'>
                            <label className='skills-section-title'>{section.type}</label>
                            <div className='skills-list'>
                                {section.list.map((skill) => {
                                    return(
                                        <SkillCard
                                            key={skill.name} 
                                            skill={skill.name}
                                            iconClass={skill.icon}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}