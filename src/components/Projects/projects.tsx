import { useState } from 'react';
import './projects.css';
import mun from '../../assets/mun.png';
import ojublogs from '../../assets/ojublogs.png';
import reslink from '../../assets/reslink.png';
import groovewave from '../../assets/groovewave.png';
import nftmarketplace from '../../assets/nftmarketplace.png';
import vibrance24 from '../../assets/vibrance24.png';
import biosphereclub from '../../assets/biosphereclubwebsite.png';
import emicalculator from '../../assets/emicalculator.png';
import dragdrop from '../../assets/dragdrop.png';
import csvtojson from '../../assets/csvtojson.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importing arrow icons from Font Awesome

const Projects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const projects = [
        { name: "MUN Project", image: mun, link: "https://github.com/VITCMUN-2023/VITCMUN23" },
        { name: "Oju's Blogs", image: ojublogs, link: "https://github.com/ojasaklechayt/Oju-s-Blogs" },
        { name: "Reslink Dashboard Frontend", image: reslink, link: "https://github.com/ojasaklechayt/Reslink-Dashboard" },
        { name: "Groovewave", image: groovewave, link: "https://github.com/ojasaklechayt/Music-Streaming-App" },
        { name: "NFTic Marketplace", image: nftmarketplace, link: "https://github.com/ojasaklechayt/NFTic-Marketplace" },
        { name: "Vibrance 2024", image: vibrance24, link: "https://www.vitvibrance.com/" },
        { name: "The Biosphere Club Website", image: biosphereclub, link: "https://thebiosphereclubwebsite.vercel.app"},
        { name: "EMI Calculator", image: emicalculator, link: "https://github.com/ojasaklechayt/EMI-Calculator-Quasar"},
        { name: "Custom Report Template Management System", image: dragdrop, link: "https://github.com/ojasaklechayt/drag-drop-arena"},
        { name: "CSV to JSON Converter with dynamic data changes", image: csvtojson, link: "https://github.com/ojasaklechayt/CSV-to-JSON-convertor"},
    ];

    const githublink = () => {
        window.open('https://github.com/ojasaklechayt');
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="project-cover">
            <div className="project-sub-cover">
                <div className="project-title">
                    <h1>Projects!!</h1>
                </div>
                <div className="project-content">
                    <div className='project-controls'>
                        <FaArrowLeft className="arrow-icon arrow-left" onClick={goToPrevSlide} />
                    </div>
                    <div className="image-container">
                        {projects.map((project, index) => (
                            <div key={index} className="slide" style={{ display: index === currentSlide ? 'block' : 'none' }}>
                                <img src={project.image} alt={project.name} onClick={() => window.open(project.link)} />
                            </div>
                        ))}
                    </div>
                    <div className="project-controls">
                        <FaArrowRight className="arrow-icon arrow-right" onClick={goToNextSlide} />
                    </div>
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
