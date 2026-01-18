import zena from '../assets/images/zena_cat.jpg'
import gitHub from '../assets/icons/github-fill.svg'
import linkedIn from '../assets/icons/linkedin-fill.svg'
import email from '../assets/icons/mail-fill.svg'

export default function AboutMe(){
    return (
        <div className="general-info">

            <div className="name-titles">
                <h1>Jose Lara</h1>
                <h2>Software Engineer</h2>

                <p>
                        I'm a fledgling developer with an interest in app development and data handling.<br/>
                        My interest in software development started with my curiosity on how video games worked <br/>
                        and how developers where able to create these kinds of experiences for the general public.<br/>
                        Since then I have studied and now developing to one day reach the heights that many other <br/>
                        successful developers have reached. 
                </p>

                <div className='icons'>
                    <a href='https://github.com/Jlara38' target='_blank'>
                        <img src={gitHub} alt='GitHub'></img>
                    </a>

                    <a href='https://www.linkedin.com/in/jtlara28/'  target='_blank' alt="LinkedIn">
                        <img src={linkedIn} alt='LinkedIn'></img>
                    </a>

                    <a href="mailto:josetlara28@gmail.com">
                         <img src={email} alt='Email'></img>
                    </a>
                </div>
            </div>

                <div className="professional-headshot">
                    <img src={zena} alt="A picture of myself"></img>
                </div>
            </div>

    )
}