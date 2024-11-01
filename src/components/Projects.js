import React, { useState, useEffect, Fragment } from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-header">
        <h2>Donation App</h2>
        <a
          href="https://github.com/SamC-1832/DonationApp"
          className="github-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Github
        </a>
      </div>
      <p>
        • Strengthened expertise in full-stack development, enhancing skills in
        API development, database design, and secure payment systems.
      </p>
      <p>
        • Built responsive frontend in Flutter with Stripe integration for
        payment processing.{" "}
      </p>
      <p>
        • Implemented JWT token-based authentication for secure user
        registration, login, and access to donation history.{" "}
      </p>
      <p>
        • Developed Spring Boot backend with PostgreSQL for managing donor and
        donation data through RESTful APIs.
      </p>
      <p>
        <span className="third-color">
          Tech Stack: Flutter, Spring boot, PostgreSQL, Java, Api
        </span>
      </p>

      <div className="projects-header">
        <h2>Movie Engine </h2>
        <a
          href="https://github.com/Luinceanera/WebDesignProject"
          className="github-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Github
        </a>
      </div>
      <p>
        • Crafted user-friendly interface with tabs for home, news, and movie
        search.
      </p>
      <p>
        • Integrated movie API, resulted in instant data retrieval for movie
        info.
      </p>
      <p>
        • Simplified interface to promote ease of use and enhanced user
        experience.
      </p>
      <p>
        <span className="third-color">Tech Stack: HTML, CSS, Javascript</span>
      </p>

      <div className="projects-header">
        <h2>Leetcode Blind 75 </h2>
      </div>
      <p>• Completed 70% out of 164 question.</p>
      <p>
        • Spent 200 hours on tackling data structure and algorithm questions.
      </p>
      <img
        src="https://leetcode-stats.vercel.app/api?username=sam18328578207&theme=Dark"
        alt="leetcode"
      ></img>
      <p>
        <span className="third-color">Tech Stack: C++, Java, Python</span>
      </p>
    </div>
  );
}

export default Projects;
