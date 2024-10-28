import React, { useState, useEffect } from "react";
import './About.css';
import headshot from '../images/headshot.png';

function About() {
    const jobTitles = [
    "Automation Engineer",
    "QA Analyst",
    "Engineer In Test",
    "Engineer",
    "Developer",
    ];

    
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Start fade out
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) =>
          prevIndex === jobTitles.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true); // Start fade in
      }, 600); // Match this with the fade out duration
    }, 3000); // Change title every 3 seconds

        // Change title every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
        }, [jobTitles.length]);
    return (
      <body>
    <div className="about-container">
      <div className="about-image">
        <img src={headshot} alt="headshot" />
      </div>
      <div className="about-content">
        <h2><span className="primary-color">Cheng Sam </span> <span className="secondary-color">Cheang</span> </h2>
                    <h3><span>Aspiring Software </span>
          <span className={`dissolving-title ${isVisible ? "visible" : ""}`}>
            {jobTitles[currentTitleIndex]}
          </span></h3>
                    <hr className="about-divider" />
        <p>
          My name is <span className="third-color">Cheng Sam Cheang</span>, I go by <span className="third-color">Sam</span>, I love creating user-friendly applications that add value and improve
          users' lives. I'm always eager to learn new technologies and tackle
          challenges with creative solutions.  I love creating user-friendly applications that add value and improve
          users' lives. I'm always eager to learn new technologies and tackle I love creating user-friendly applications that add value and improve
          users' lives. I'm always eager to learn new technologies and tackle
        </p>
      </div>
            </div>
            </body>
  );
}

export default About;
