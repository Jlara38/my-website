import AboutMe from "./AboutMe.jsx";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";
import Education from "./Education.jsx";
import NavBar from "./Navbar.jsx";


export default function App() {
    return (
        <>
            <header className="mhead">
                <NavBar></NavBar>
            </header>

            <main className="content">
                <section className="section about"><AboutMe></AboutMe></section>
                
                <section className="section experience"><Experience></Experience></section>

                <section className="section projects"><Projects></Projects></section>

                <section className="section skills"><Skills></Skills></section>

                <section className="section education"><Education></Education></section>
            </main>
        </>
    );
}