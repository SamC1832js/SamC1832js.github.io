import React, { useState, useEffect, Fragment } from "react";
import "./Skills.css";

function Skills() {
  const [sortBy, setSortBy] = useState("total");
  const [isAscending, setIsAscending] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const programmingLanguages = [
    { name: "CPP", academicYOE: 2.5, workYOE: 0.3 },
    { name: "Java", academicYOE: 1.6, workYOE: 0.3 },
    { name: "Python", academicYOE: 1.0, workYOE: 0.3 },
    { name: "DotNET", academicYOE: 1.0, workYOE: 0.3 },
    { name: "HTML", academicYOE: 0.8, workYOE: 0.3 },
    { name: "JavaScript", academicYOE: 0.7, workYOE: 0.3 },
    { name: "React", academicYOE: 0.8, workYOE: 0.0 },
    { name: "CSharp", academicYOE: 0.4, workYOE: 0.3 },
    { name: "VB", academicYOE: 0.6, workYOE: 0.0 },
    { name: "Dart", academicYOE: 0.3, workYOE: 0.3 },
  ];

  const databases = [
    { name: "MySQL", academicYOE: 1.2, workYOE: 0.3 },
    { name: "PostgreSQL", academicYOE: 0.6, workYOE: 0.3 },
  ];

  const tools = [
    { name: "Git", academicYOE: 1.2, workYOE: 0.3 },
    { name: "Linux", academicYOE: 0.7, workYOE: 0 },
    { name: "Perforce", academicYOE: 0.3, workYOE: 0.3 },
    { name: "TeamCity", academicYOE: 0.3, workYOE: 0.3 },
    { name: "Selenium", academicYOE: 0.3, workYOE: 0.3 },
    { name: "Automated Testing Suite", academicYOE: 0.3, workYOE: 0.3 },
    { name: "Jira", academicYOE: 0.3, workYOE: 0.3 },
    { name: "Azure", academicYOE: 0.3, workYOE: 0.3 },
    { name: "Playwright", academicYOE: 0.2, workYOE: 0.0 },
    { name: "Postman", academicYOE: 0.3, workYOE: 0.0 },
    { name: "Spring Boot", academicYOE: 0.3, workYOE: 0.3 },
    { name: "RESTful API", academicYOE: 0.3, workYOE: 0.3 },
    { name: "Flutter", academicYOE: 0.3, workYOE: 0.3 },
  ];

  const techinicalSkills = [
    { name: "Machine Learning", academicYOE: 0.6, workYOE: 0 },
    { name: "Artificial Intelligence", academicYOE: 0.3, workYOE: 0 },
    { name: "Software Development", academicYOE: 1.2, workYOE: 0.3 },
    { name: "Web Development", academicYOE: 1.2, workYOE: 0.3 },
    { name: "UI Automation", academicYOE: 0.3, workYOE: 0.3 },
    { name: "Test Automation", academicYOE: 0.3, workYOE: 0.3 },
    { name: "Agile", academicYOE: 0.3, workYOE: 0.3 },
    { name: "Regression Testing", academicYOE: 0.3, workYOE: 0.3 },
    { name: "Scrum", academicYOE: 0.3, workYOE: 0.3 },
  ];

  const spokenLanguages = [
    { name: "Mandarin", academicYOE: 0, workYOE: 0 },
    { name: "Cantonese", academicYOE: 0, workYOE: 0 },
    { name: "English", academicYOE: 0, workYOE: 0 },
  ];
  // Combine all data into a single array
  const allData = [
    ...programmingLanguages,
    ...databases,
    ...tools,
    ...techinicalSkills,
    ...spokenLanguages,
  ];

  // Get calculated dasharray values for all data
  const dashArrayData = calculateDashArray(allData);

  function calculateDashArray(languages) {
    const fullDashArray = 200; // Full circumference of the circle

    // Calculate total YOE for each language and find the maximum total YOE
    const totalYOEValues = languages.map(
      (lang) => lang.academicYOE + lang.workYOE
    );
    const maxYOE = Math.max(...totalYOEValues);

    // Calculate scale factor to convert YOE to dasharray
    const scaleFactor = fullDashArray / maxYOE;

    return languages.map((lang) => {
      const { academicYOE, workYOE } = lang;
      const totalYOE = academicYOE + workYOE;

      // Calculate dasharray values
      const academicDashArray = totalYOE * scaleFactor;
      const workDashArray = workYOE * scaleFactor;

      return {
        name: lang.name,
        academicDashArray,
        workDashArray,
      };
    });
  }
  const [animatedYOE, setAnimatedYOE] = useState(
    programmingLanguages.map((lang) => ({
      name: lang.name,
      academic: 0,
      work: 0,
    }))
  );

  useEffect(() => {
    dashArrayData.forEach(({ name, academicDashArray, workDashArray }) => {
      const academicCircle = document.querySelector(
        `.${name} .academic-circle`
      );
      const workCircle = document.querySelector(`.${name} .work-circle`);

      if (academicCircle) {
        academicCircle.style.strokeDasharray = "226.2";
        academicCircle.style.strokeDashoffset = "226.2";
        setTimeout(() => {
          academicCircle.style.strokeDashoffset = `${
            226.2 - academicDashArray
          }`;
        }, 50);
      }
      if (workCircle) {
        workCircle.style.strokeDasharray = "226.2";
        workCircle.style.strokeDashoffset = "226.2";
        setTimeout(() => {
          workCircle.style.strokeDashoffset = `${226.2 - workDashArray}`;
        }, 50);
      }
    });
  }, [dashArrayData]);

  useEffect(() => {
    const totalFrames = 120;

    programmingLanguages.forEach((lang) => {
      const startAcademic = 0;
      const endAcademic = lang.academicYOE;
      const startWork = 0;
      const endWork = lang.workYOE;

      let frame = 0;

      const animateYOE = () => {
        frame++;
        const progress = frame / totalFrames;

        setAnimatedYOE((prev) =>
          prev.map((item) =>
            item.name === lang.name
              ? {
                  ...item,
                  academic: Math.min(
                    startAcademic + progress * endAcademic,
                    endAcademic
                  ),
                  work: Math.min(startWork + progress * endWork, endWork),
                }
              : item
          )
        );

        if (frame < totalFrames) {
          requestAnimationFrame(animateYOE);
        }
      };

      requestAnimationFrame(animateYOE);
    });
  }, []);

  const sortedLanguages = [...programmingLanguages].sort((a, b) => {
    let aYOE =
      sortBy === "total" ? a.academicYOE + a.workYOE : a[`${sortBy}YOE`];
    let bYOE =
      sortBy === "total" ? b.academicYOE + b.workYOE : b[`${sortBy}YOE`];
    return isAscending ? aYOE - bYOE : bYOE - aYOE;
  });

  const handleSortSelection = (criteria, isAsc) => {
    setIsAscending(isAsc);
    setSortBy(criteria);
    setShowDropdown(false);
  };

  const getSortButtonText = () => {
    const criteriaText =
      sortBy === "total"
        ? "Total"
        : sortBy === "academic"
        ? "Academic"
        : "Work";
    const orderText = isAscending ? "Low to High" : "High to Low";
    return `Sort by: ${criteriaText} YOE: ${orderText}`;
  };
  return (
    <div className="skills-container">
      <div className="skills-category-header">
        <h2>Programming Languages</h2>
        <div className="sort-dropdown">
          <button onClick={() => setShowDropdown(!showDropdown)}>
            {getSortButtonText()}
          </button>
          {showDropdown && (
            <div className="dropdown-menu">
              <button onClick={() => handleSortSelection("total", false)}>
                Total YOE: High to Low
              </button>
              <button onClick={() => handleSortSelection("total", true)}>
                Total YOE: Low to High
              </button>
              <button onClick={() => handleSortSelection("academic", false)}>
                Academic YOE: High to Low
              </button>
              <button onClick={() => handleSortSelection("academic", true)}>
                Academic YOE: Low to High
              </button>
              <button onClick={() => handleSortSelection("work", false)}>
                Work YOE: High to Low
              </button>
              <button onClick={() => handleSortSelection("work", true)}>
                Work YOE: Low to High
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="skills-category">
        {sortedLanguages.map((lang) => (
          <div className="skills-items">
            <div className={lang.name}>
              <h3>{lang.name}</h3>
              <div className="progress">
                <svg>
                  <circle
                    cx="38"
                    cy="38"
                    r="36"
                    className="academic-circle"
                  ></circle>
                  <circle
                    cx="38"
                    cy="38"
                    r="36"
                    className="work-circle"
                  ></circle>
                </svg>
                <div className="YOE">
                  <div className="academic">
                    A:{" "}
                    {animatedYOE
                      .find((item) => item.name === lang.name)
                      ?.academic.toFixed(1)}
                  </div>
                  <div className="work">
                    W:{" "}
                    {animatedYOE
                      .find((item) => item.name === lang.name)
                      ?.work.toFixed(1)}
                  </div>
                </div>
              </div>
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
              <div className="progress">
                <svg>
                  <circle
                    cx="38"
                    cy="38"
                    r="36"
                    className="academic-circle"
                  ></circle>
                  <circle
                    cx="38"
                    cy="38"
                    r="36"
                    className="work-circle"
                  ></circle>
                </svg>
                <div className="YOE">
                  <div className="academic">A: {lang.academicYOE}</div>
                  <div className="work">W: {lang.workYOE}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Tools & Framework & Others</h2>
      <div className="skills-category">
        {tools.map((lang) => (
          <div className="skills-items" key={lang.name}>
            <div className={lang.name}>
              <h3>{lang.name}</h3>
            </div>
          </div>
        ))}
      </div>

      <h2>Technical Skills</h2>
      <div className="skills-category">
        {techinicalSkills.map((lang) => (
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
  );
}
export default Skills;
