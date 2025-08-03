import uic from "../assets/uic.png";

export default function Education() {
    return(
        <>
        <div className="education_header_wrapper">
            <h1>Education</h1>
        </div>

        <div className="education_container">

            <div className="uic_img_container">
                <img src={uic} alt="UIC Banner"/>
            </div>

            <div className="uic_relevant_coursework_container">
                <h2> Relevant Coursework</h2>
                <ul>
                    <li>Data Structures (CS251)</li>
                    <li>Programming Language Concepts (CS341)</li>
                    <li>Software Design (CS342)</li>
                    <li>Introduction to Data Science (CS418)</li>
                    <li>User Interface Design (CS422)</li>
                    <li>Development of Mobile Apps (CS478)</li>
                </ul>
            </div>
            
        </div>
        </>
    );
}