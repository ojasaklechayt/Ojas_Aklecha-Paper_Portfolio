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
        Quote: "Building scalable organization management system using Javascript and NodeJS.",
        Name: "Developer Intern ~ Genesis Technologies Co. Ltd.",
        Start: "August 2023",
        End: "Present",
    },
    exp2: {
        Quote: "Building a community around Lumos Labs and promoting Web3 culture to the people.",
        Name: "Lumos Wizard ~ Lumos Labs",
        Start: "April 2023",
        End: "Present",
    },
};

const Experience: React.FC = () => {
    return (
        <div className="experience">
            <div className="heading"><div className="experience-heading"><p>Experience</p></div></div>
            <div className="boxes">
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
        </div>
    );
};

export default Experience;