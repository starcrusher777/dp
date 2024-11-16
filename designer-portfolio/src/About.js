import React from "react";
import './Styles/AboutStyles.css'

const About = () => {
    const sections = [
        { title: 'Introduction', content: "Some info" },
        { title: 'Skills', content: "Some info" },
        { title: 'Experience', content: "Some info" },
        { title: 'Mentions', content: "Some info" },
    ];

    return (
        <div className="about-me">
            {sections.map((section, index) => (
                <div key={index} className={`section ${index % 2 === 0 ? 'left' : 'right'}`}>
                    <h2 className="section-title">{section.title}</h2>
                    <p className="section-content">{section.content}</p>
                </div>
            ))}
        </div>
    );
};

export default About;