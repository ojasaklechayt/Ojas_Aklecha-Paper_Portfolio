import "./experience.css";

interface ExperienceData {
    Quote: string;
    Name: string;
    Start: string;
    End: string;
}

interface Data {
    [key: string]: ExperienceData;
}

interface Data {
    exp1: ExperienceData;
    exp2: ExperienceData;
}

const Data: Data = {
    exp1: {
        Quote: "Providing in-depth and well researched blogs on various concepts of Web3.",
        Name: "Technical Content Writer ~ Articulate Content Management Services",
        Start: "April 2023",
        End: "Present",
    },
    exp2: {
        Quote: "Building a community around Lumos Labs and promoting Web3 knowledge to the people.",
        Name: "Lumos Wizard ~ Lumos Labs",
        Start: "April 2023",
        End: "Present",
    },
};

const Experience: React.FC = () => {
    return (
        <div className="experience">
            <div className="experience-heading"><p>Experience</p></div>
            {Object.keys(Data).map((key) => (
                <div className="experience-item" key={key}>
                    <div className="sub-experience">
                        <div className="experience-quote">{Data[key].Quote}</div>
                        <div className="experience-name">{Data[key].Name}</div>
                        <div className="experience-date">
                            {Data[key].Start} - {Data[key].End}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Experience;