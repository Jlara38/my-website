import AboutMe from "./AboutMe.jsx";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";
import Education from "./Education.jsx";
import NavBar from "./Navbar.jsx";


export default function App() {
    return (
        <>
            <header>
                <NavBar></NavBar>
            </header>

            <main className="content">
                <AboutMe></AboutMe>

                <Experience></Experience>

                <Projects></Projects>

                <Skills></Skills>

                <Education></Education>
            </main>
        </>
    );
}