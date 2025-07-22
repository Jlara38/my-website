import donDance from "../assets/DonDance.gif";
import gitHub from "../assets/github_icon.png";
import linkedIn from "../assets/linked_in.png";

export default function AboutMe() {
  return (
    <>
    <div className="aboutMe-header-wrapper">
      <h1 className="aboutMe-header">About me</h1>
    </div>

    <div className="aboutMe-container">
      <div className="aboutMeImg-container">
        <img src={donDance} alt="Don Dancing"/>
      </div>

      <div className="aboutMeTxt-container">
        <h2> Hello,</h2>
        <p> 
          I'm Jose Lara, and I am a graduate software developer from UIC.
          <br></br>
          <br></br>
            My passion lies in app development, data manipulation through databases, 
            and occasionally building random apps and programs just for fun. Now that 
            I have the tools to explore the possibilities of the tech world, I'm eager 
            to see what else can be created and maintained with technology.
          <br></br>
          <br></br>

          <a href="https://github.com/Jlara38">
            <img src={gitHub} alt="GitHub"></img>
          </a>

          <a href="https://www.linkedin.com/in/jtlara28/">
            <img src={linkedIn} alt="linkedIn"></img>
          </a>
        </p>

      </div>

      <div className="aboutMeTxt-hobbies-container">
        <h2> Hello,</h2>
        <h3> Kom </h3>
      </div>

    </div>
    </>
  );
}