import arknights from '../assets/gifs/arknights-hoolheyak.gif'
import zena from '../assets/images/zena_cat.jpg'

export default function AboutMe(){
    return (
        <div className="aboutme-container">

            <div className="general-info">

                <div className="name-titles">
                    <h1>Jose Lara</h1>
                </div>

                <div className="professional-headshot">
                    <img src={zena} alt="A picture of myself" id='picture'></img>
                </div>
            </div>

        </div>
    )
}