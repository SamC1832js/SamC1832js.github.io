import React, { useState, useEffect, Fragment } from "react";
import './Projects.css';

function Projects() {
    return (
          <div className="projects-container">
        <h1>Projects</h1>
        <div className="projects-header">
          <h2>Donation App </h2><a href="https://github.com/SamC-1832/DonationApp" className="github-link" target="_blank" rel="noopener noreferrer"> Github</a>
            </div>
            <p>•	Built responsive frontend in Flutter with Stripe integration for payment processing. </p>
<p>•	Implemented JWT token-based authentication for secure user registration, login, and access to donation history. </p>
 <p>•	Developed Spring Boot backend with PostgreSQL for managing donor and donation data through RESTful APIs.
</p>
            <p>Tech Stack: Flutter, Spring boot, PostgreSQL, Java, Api</p>
            
            <div className="projects-header">
          <h2>Movie Engine </h2><a href="https://github.com/Luinceanera/WebDesignProject" className="github-link" target="_blank" rel="noopener noreferrer"> Github</a>
            </div>
            <p>•	Built responsive frontend in Flutter with Stripe integration for payment processing. </p>
<p>•	Implemented JWT token-based authentication for secure user registration, login, and access to donation history. </p>
 <p>•	Developed Spring Boot backend with PostgreSQL for managing donor and donation data through RESTful APIs.
</p>
            <p>Tech Stack: HTML, CSS, Javascript</p>
            
        </div >
            );
}

export default Projects;