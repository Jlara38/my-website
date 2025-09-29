import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";


export default function CourseWorkCarousel({ data }) {
    const [courseKey, setCourse] = useState(0);

    const nextCourse = () => {
        setCourse(courseKey === data.length - 1 ? 0 : courseKey + 1);
    };

    const prevCourse = () => {
        setCourse(courseKey === 0 ? data.length - 1 : courseKey - 1);
    };

    return (
    <div className="carousel">
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevCourse}/>

        {data.map((item, idx) => (
            <div className={courseKey === idx ? "courseKey": "courseKey courseKey-hidden"} key={idx}>
            <h3>{item.course}</h3>
            <p>{item.description}</p>
            </div>
        ))}

        <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextCourse}/>
        <span className="indicators">
            {data.map((_,idx) => {
                return <button key={idx} onClick={null} className={courseKey === idx ? "indicator" : "indicator indicator-inactive"}></button>
            })}
        </span>
    </div>
  );
}