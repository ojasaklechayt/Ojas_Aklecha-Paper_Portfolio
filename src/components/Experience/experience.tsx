import React, { useEffect } from "react";
import "./experience.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ExperienceData {
    Quote: string;
    Name: string;
    Start: string;
    End: string;
}

interface Data {
    [key: string]: ExperienceData;
}

const Data: Data = {
    exp1: {
        Quote: "Worked on Full Stack Event Management Platform using MERN Stack and Next JS.",
        Name: "Full Stack Developer Intern ~ Oxlac LLP",
        Start: "October 2023",
        End: "October 2023",
    },
    exp2: {
        Quote: "Built customizable report generation system using VueJS and NodeJS.",
        Name: "Full Stack Developer Intern ~ Genesis Technologies Co. Ltd.",
        Start: "August 2023",
        End: "September 2023",
    },
};

const lengthofData = Object.keys(Data).length;

const Experience: React.FC = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const animateScroll = () => {
            gsap.from('.boxes',{
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                x: 200 + document.querySelector(".boxes")!.scrollWidth - document.documentElement.clientWidth
            })

            gsap.to(".boxes", {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                x: () => -(document.querySelector(".boxes")!.scrollWidth - document.documentElement.clientWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: ".boxes",
                    start: "bottom bottom",
                    end: "top top",
                    scrub: 1.5,
                },
            });
        };

        const isNotMobile = !window.matchMedia("(max-width: 768px)").matches;

        if (isNotMobile && lengthofData>2) {
            animateScroll();
        }
    }, []);

    return (
        <div className="experience">
            <div className="heading">
                <div className="experience-heading">
                    <p>Experience</p>
                </div>
            </div>
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
