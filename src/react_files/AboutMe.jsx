import donDance from "../assets/DonDance.gif";

export default function AboutMe() {
  return (
    <div className="aboutMe-container">

      <div className="aboutMeImg-container">
        <img src={donDance} alt="Don Dancing"/>
      </div>

      <div className="aboutMeTxt-container">
        <h2> Hello, I'm Jose</h2>
        <h3> I'm a software developer with a passion for app development, data manipulation through databases, and occasionally building random apps and programs just for fun. </h3>
      </div>

    </div>
  );
}