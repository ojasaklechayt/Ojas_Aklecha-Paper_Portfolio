import "./sectionone.css";
import ojas from "../../assets/ojasinhd.jpg";
const Sectionone = () => {
    return (
        <div className="section-one">
            <div className="subsection-one">
                <img src={ojas} alt="Ojas Aklecha" />
            </div>
            <div className="subsection-two">
                <div className="titlesection">
                    <h1>Entitle for action, not for fruit</h1>
                </div>
                <div className="news">
                    <p>
                        Ojas Aklecha is a strong player in technology space who expertise in
                        wide spectrum of skills. His skills includes MERN Stack development
                        with expertise in major frontend frameworks and tools like ReactJS,
                        and Tailwind CSS. He mixes MERN Stack with UI/UX to create magic.
                    </p>
                    <hr className="vertical-line" />
                    <p>
                        He writes technical blogs on wide variety of topics,and contributes
                        regularly in Open Source. Has contributed in multiple open source
                        programs
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Sectionone;
