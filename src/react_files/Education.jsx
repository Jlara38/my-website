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
                <h2>Releveant Coursework</h2>
                <li>CS 251</li>
            </div>
            
        </div>
        </>
    );
}