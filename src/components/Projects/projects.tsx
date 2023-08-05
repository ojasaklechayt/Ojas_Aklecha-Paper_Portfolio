import './projects.css';
import mun from '../../assets/mun.png';
import ojublogs from '../../assets/ojublogs.png';

const githublink = () => {
    window.open('https://github.com/ojasaklechayt');
};

const ojublog = () => {
    window.open('https://github.com/ojasaklechayt/Oju-s-Blogs');
};

const munproject = () => {
    window.open('https://github.com/VITCMUN-2023/VITCMUN23');
};

const Projects = () => {
    return (
        <div className="project-cover">
            <div className="project-sub-cover">
                <div className="project-title">
                    <h1>Projects!!</h1>
                </div>
                <div className="project-content">
                    {/* Swap onClick events for the images */}
                    <img onClick={munproject} src={mun} alt="MUN Project" />
                    <img onClick={ojublog} src={ojublogs} alt="Oju's Blogs" />
                </div>
                <div className="project-button">
                    <div className="project-button-wrap">
                        <p onClick={githublink}>Explore my Github</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
