import Card from '../components/Card.jsx'

import SectionHeader from '../components/SectionHeader.jsx'
export default function Education(){ 

    const classwork = [
        {
            id: 1,
            cname: 'Program Design I',
            cdesc: 'add desc here'
        },

        {
            id: 2,
            cname: 'Program Design II',
            cdesc: 'add desc here'
        },

        {
            id: 3,
            cname: 'Data Structures',
            cdesc: 'add desc here'
        },

        {
            id: 4,
            cname: 'Introduction to Data Science',
            cdesc: 'add desc here'
        },

        {
            id: 5,
            cname: 'User Interface Design',
            cdesc: 'add desc here'
        },

        {
            id: 6,
            cname: 'Database Systems',
            cdesc: 'add desc here'
        },

        {
            id: 7,
            cname: 'Development of Mobile Apps',
            cdesc: 'add desc here'
        },

    ]
    return (
        <div className='education-section'>
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