import "./sectionthree.css";

interface skill {
    name: string;
}

interface Skills {
    [key: string]: skill;
}

interface Skills {
    s1: skill;
    s2: skill;
    s3: skill;
    s4: skill;
    s5: skill;
    s6: skill;
    s7: skill;
    s8: skill;
    s9: skill;
    s10: skill;
    s11: skill;
    s12: skill;
}
const Skills: Skills = {
    s1: {
        name: "ReactJS",
    },
    s2: {
        name: "NodeJS",
    },
    s3: {
        name: "ExpressJS",
    },
    s4: {
        name: "MongoDB",
    },
    s5: {
        name: "Typescript",
    },
    s6: {
        name: "NextJS",
    },
    s7: {
        name: "Tailwind CSS",
    },
    s8: {
        name: "Git & Github",
    },
    s9: {
        name: "Figma",
    },
    s10: {
        name: "Solidity",
    },
    s11: {
        name: "Python",
    },
    s12: {
        name: "C/CPP",
    },
};

const Sectionthree: React.FC = () => {
    return (
        <div className="sectionthree">
            <div className="skill-wrap">
                <ul>
                    {Object.keys(Skills).map((key) => (
                        <li key={key}>
                            <p>{Skills[key].name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sectionthree;
