import "./projects.css";

const githublink = () => {
    window.open("https://github.com/ojasaklechayt");
}

const Projects = () => {
    return (
        <div className="project-cover">
            <div className="project-sub-cover">
                <div className="project-title">
                    <h1>Projects!!</h1>
                </div>
                <div className="project-content">
                    <p>Young blogger Ojas Aklecha is making a name for himself in the tech world with his insightful articles on a range of technical topics. From web development to blockchain, ReactJS to NodeJS, Ojas covers it all with his well-researched and informative articles.</p>
                    <hr className="vertical-line"/>
                    <p>Ojas's blogs are a valuable resource for anyone looking to learn about these technical topics. He has a knack for breaking down complex concepts into simple terms that are easy for readers to understand. His articles are not only informative but also engaging, with a friendly and approachable writing style that makes readers feel at ease.</p>
                </div>
                <div className="project-button">
                    <div className="project-button-wrap"><p onClick={githublink}>Explore my Github</p></div>
                </div>
            </div>
        </div>
    )
}

export default Projects