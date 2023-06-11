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
        Quote: "Providing in-depth and well researched blogs on various concepts of Web3. Writing 4 articles a week with quality and SEO content.",
        Name: "Technical Content Writer ~ Articulate Content Management Services",
        Start: "April 2023",
        End: "Present",
    },
    exp2: {
        Quote: "Provided content for a number of posts on the official Lumos Wizard Twitter platform. Took several sessions on Figma application in the Lumos community. Building a community around Lumos Labs and promoting Web3 knowledge to the people.",
        Name: "Lumos Wizard ~ Lumos Labs",
        Start: "April 2023",
        End: "Present",
    },
};

const Experience: React.FC = () => {
    return (
        <div className="experience">
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