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
                        wide spectrum of skills. His skills includes <u>MERN + MEVN Stack</u> development
                        with expertise in major frontend frameworks and tools like <u>ReactJS,
                        and Tailwind CSS</u>. He mixes MERN Stack with <u>UI/UX</u> to create magic.
                    </p>
                    <hr className="vertical-line" />
                    <p>
                        He writes <u>technical blogs</u> on wide variety of topics,and contributes
                        regularly in Open Source. Has contributed in multiple <u>open source
                        programs</u>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Sectionone;
