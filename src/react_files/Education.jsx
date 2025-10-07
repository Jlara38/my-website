// import uic from "../assets/uic.png";
import SectionHeader from "../components/SectionHeader";
import CourseWorkCarousel from "../components/CourseworkCarousel";
import {courses} from "../data/coursesData.json";


export default function Education() {
  return (
    <>
      <SectionHeader title="Education" />
      <div className="EduDiv">

        <div className="SchBannHead">
          {/* <img src={uic} alt="UIC Banner"/> */}
          <h1>University of Illinois Chicago</h1>
          <p>Bachelor of Science in Computer Science 
            <br></br>
            Gradution Date: 2024 
          </p>
        </div>

        <CourseWorkCarousel data={courses}></CourseWorkCarousel>

      </div>
    </>
  );
}

