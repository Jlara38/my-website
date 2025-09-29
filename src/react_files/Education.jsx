// import uic from "../assets/uic.png";
import SectionHeader from "../components/SectionHeader";

const courses = [
  { 
    title: "Data Structures & Algorithms",
    description: "Ane"
  },

  {
    title: "Database Systems",
    description: dataset
  },
  {
    title: "Database Systems",
    description: dataset
  },
  {
    title: "Database Systems",
    description: dataset
  },
  {
    title: "Database Systems",
    description: dataset
  },
  {
    title: "Database Systems",
    description: dataset
  },
  {
    title: "Database Systems",
    description: dataset
  },
  {
    title: "Database Systems",
    description: dataset
  },
]

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

        <div className="RelClasses">
          <h1> HELLO</h1>
        </div>
      </div>
    </>
  );
}

