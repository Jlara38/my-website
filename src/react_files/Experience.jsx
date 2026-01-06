import Card from '../components/Card.jsx'
import Header from '../components/SectionHeader.jsx'

export default function Experience() {
    return(
        <div className='general-experience'>
            <Header title={"Experience"}></Header>

            <div className='experience-card-container'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    )
}