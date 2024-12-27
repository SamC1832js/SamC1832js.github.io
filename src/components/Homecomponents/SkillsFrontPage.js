import React, { useState, useEffect, Fragment, useRef } from "react";
import "./SkillsFrontPage.css";

function SkillsFrontPage() {
  const programmingLanguages = [
    { name: "C++" },
    { name: "Java" },
    { name: "Python" },
    { name: ".Net" },
    { name: "HTML" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "C#" },
    { name: "VB" },
    { name: "Dart" },
    { name: "Flutter" },
    { name: "Spring Boot" },
  ];

  const databases = [
    { name: "MySQL" },
    { name: "PostgreSQL" },
    { name: "SQL Server" },
    { name: "MongoDB" },
    { name: "Hibernate ORM" },
    { name: "SQLite" },
  ];

  const tools = [
    { name: "Git" },
    { name: "Linux" },
    { name: "Perforce" },
    { name: "TeamCity" },
    { name: "Selenium" },
    { name: "Automated Testing Suite" },
    { name: "Jira" },
    { name: "Azure" },
    { name: "Playwright" },
    { name: "Postman" },
    { name: "RESTful API" },
    { name: "Docker" },
    { name: "Kubernetes" },
    { name: "Photoshop" },
    { name: "Premiere" },
  ];

  const spokenLanguages = [
    { name: "Mandarin", academicYOE: 0, workYOE: 0 },
    { name: "Cantonese", academicYOE: 0, workYOE: 0 },
    { name: "English", academicYOE: 0, workYOE: 0 },
  ];

  return (
    <div className="SkillsHome">
      <h1>My Skills</h1>
      <div className="skills-container">
        <div className="skills-category-header">
          <h2>Programming Languages & Framework</h2>
        </div>
        <div className="skills-category">
          {programmingLanguages.map((lang) => (
            <div className="skills-items">
              <div className={lang.name}>
                <h3>{lang.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <h2>Databases</h2>
        <div className="skills-category">
          {databases.map((lang) => (
            <div className="skills-items" key={lang.name}>
              <div className={lang.name}>
                <h3>{lang.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <h2>Tools & Others</h2>
        <div className="skills-category">
          {tools.map((lang) => (
            <div className="skills-items" key={lang.name}>
              <div className={lang.name}>
                <h3>{lang.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <h2>Languages</h2>
        <div className="skills-category">
          {spokenLanguages.map((lang) => (
            <div className="skills-items" key={lang.name}>
              <div className={lang.name}>
                <h3>{lang.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default SkillsFrontPage;
