import Card from '../components/Card.jsx'
import Header from '../components/SectionHeader.jsx'

export default function Experience() {
    // const jobs = [
    //     {
    //         "company": "Target", 
    //         "position": "Guest Advocate", 
    //         "start-date": "07/2024", 
    //         "end-date": "Present",
    //         "s1": "Cash Handling",
    //         "s2": "Communication",
    //         "s3": "Inventory Management",
    //         "s4": "Adaptability",
    //         "s5": "Multitasking"
    //     },

    //     {
    //         "company": "Rouge Productions LLC", 
    //         "position": "Software Engineer", 
    //         "start-date": "02/2025", 
    //         "end-date": "08/2025",
    //         "s1": "Flutter/Dart",
    //         "s2": "Comsos DB",
    //         "s3": "Azure Functions",
    //     }
    // ]

    return(
        <div className='general-experience'>
            <Header title={"Experience"}></Header>

            <div className='experience-container'>

                <div className='company-subinfo'>
                    <h2>Target Corporation</h2>
                    <h3>Guest Advocate * August 2024 - Present * Cicero, IL</h3>

                    <div className='description-duties'>
                        <ul>
                            <li>Cross trained and adapted to multiple roles related to the front of the store such as: cashering, guest service,
                                drive up, and cart attendant.
                            </li>

                            <li>
                                <b>Recognized</b> for receiving the highest volume of positive guest feedback in the front-end of the store. 
                            </li>

                            <li>
                                Consistently keep a 85-95% score in drive-up wait times specially on busy days, and have been complimented by 
                                management over my way of interacting with the guest during delivery. 
                            </li>

                            <li>
                                Well know to be flexible and adaptable to most roles in the front being able to comfortably switch between roles 
                                in the front as needed and do well in them. 
                            </li>

                            <li>
                                Have been trained in other departments such as stocking and inventory keeping with the potetial to be trained in 
                                leadership positions. 
                            </li>
                        </ul>
                    </div>

                    <h2>Rouge Productions LLC</h2>
                    <h3> Full-Stack Software Engineer * February 2025 - August 2025 * Tinley Park, IL</h3>

                    <div className='description-duties'>
                        <ul>
                            <li>Cross trained and adapted to multiple roles related to the front of the store such as: cashering, guest service,
                                drive up, and cart attendant.
                            </li>

                            <li>
                                <b>Recognized</b> for receiving the highest volume of positive guest feedback in the front-end of the store. 
                            </li>

                            <li>
                                Consistently keep a 85-95% score in drive-up wait times specially on busy days, and have been complimented by 
                                management over my way of interacting with the guest during delivery. 
                            </li>

                            <li>
                                Well know to be flexible and adaptable to most roles in the front being able to comfortably switch between roles 
                                in the front as needed and do well in them. 
                            </li>

                            <li>
                                Have been trained in other departments such as stocking and inventory keeping with the potetial to be trained in 
                                leadership positions. 
                            </li>
                        </ul>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}