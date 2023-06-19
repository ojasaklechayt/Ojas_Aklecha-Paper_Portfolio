import "./sectionthree.css";

interface skill {
    name: string;
    rating: number;
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
        rating: 5,
    },
    s2: {
        name: "NodeJS",
        rating: 5,
    },
    s3: {
        name: "ExpressJS",
        rating: 5,
    },
    s4: {
        name: "MongoDB",
        rating: 4.5,
    },
    s5: {
        name: "Typescript",
        rating: 4,
    },
    s6: {
        name: "NextJS",
        rating: 2,
    },
    s7: {
        name: "Tailwind CSS",
        rating: 5,
    },
    s8: {
        name: "Git & Github",
        rating: 5,
    },
    s9: {
        name: "Figma",
        rating: 5,
    },
    s10: {
        name: "Solidity",
        rating: 3,
    },
    s11: {
        name: "Python",
        rating: 5,
    },
    s12: {
        name: "C/CPP",
        rating: 4,
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
                            <p>{Skills[key].rating}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sectionthree;
