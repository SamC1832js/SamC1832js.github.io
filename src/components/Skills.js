import React, { useState, useEffect, Fragment } from "react";
import './Skills.css';

function Skills() {
  return (
      <>

      

      <div className="skills-container">
          <h1>Skills</h1>
      <div className="skills-category">
        <h2>Programming Languages</h2>
        <p>C++, C#, Java, Python, HTML, JavaScript, VB, .Net, Dart, React</p>
      </div>
      
      <div className="skills-category">
        <h2>Databases</h2>
        <p>MySQL, PostgreSQL</p>
      </div>
      
      <div className="skills-category">
        <h2>Tools</h2>
        <p>Git, Linux, Perforce, TeamCity, Selenium, Automated Testing Suite, Jira, Azure, Playwright, Postman, Spring Boot, RESTful API, Flutter</p>
      </div>

      <div className="skills-category">
        <h2>Technical Skills</h2>
        <p>Machine Learning, Artificial Intelligence, Software Development, Web Development, UI Automation, Test Automation, Agile, SDLC, Regression Testing, Scrum</p>
      </div>

      <div className="skills-category">
        <h2>Languages</h2>
        <p>Mandarin, Cantonese, English</p>
      </div>
      </div>
      </>
  );
}
export default Skills;