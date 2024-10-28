import "./Home.css";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";

function Home() {
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
            setIsVisible(false); 
            setTimeout(() => {
                setCurrentTitleIndex((prevIndex) =>
                    prevIndex === jobTitles.length - 1 ? 0 : prevIndex + 1
                );
                setIsVisible(true); 
            }, 600); 
        }, 3000);

        return () => clearInterval(interval); 
    }, [jobTitles.length]);

    return (
        <div className="home-container">
            <h1><span className="primary-color">Cheng Sam </span><span className="secondary-color">Cheang</span></h1>
            <span className="primary-color">
                <h3>
                    <span>Aspiring Software </span>
                    <span className={`dissolving-title ${isVisible ? "visible" : ""}`}>
                        {jobTitles[currentTitleIndex]}
                    </span>
                </h3>
            </span>
            <Link to="/contact"><button>Get In Touch</button></Link> 
        </div>
    );
}

export default Home;
