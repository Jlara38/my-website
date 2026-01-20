
export default function SkillCard({ skill, iconClass: Icon }){
    return(
        <div className="skill-card">
            <div className="skill-icon">
                <Icon size={96}/>
            </div>

            <span className="skill-name">{skill}</span>
        </div>
    )
}