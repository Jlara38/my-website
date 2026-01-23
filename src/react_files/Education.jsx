import Card from '../components/Card.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { classwork } from '../data/classwork.js';

export default function Education(){ 
    return (
        <div className='education-section' id='education'>
            <SectionHeader title={"Education"}></SectionHeader>

            <div className='education-container'>
                <div className='university-info'>
                    <h2>University of Illinois Chicago</h2>
                    <h3>Bachelor of Science in Computer Science</h3>

                    <div className='coursework-container'>
                        {classwork.map(cwork => (
                            <Card
                                key={cwork.id}
                                name={cwork.cname}
                                description={cwork.cdesc}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}