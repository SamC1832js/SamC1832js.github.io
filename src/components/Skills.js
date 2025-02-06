import React, { useState, useEffect, Fragment, useRef } from "react";
import "./Skills.css";

function Skills() {
  const [sortBy, setSortBy] = useState("total");
  const [isAscending, setIsAscending] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const programmingLanguages = [
    { name: "CPP", academicYOE: 2.5, workYOE: 0.3 },
    { name: "CSharp", academicYOE: 0.7, workYOE: 0.3 },
    { name: "Java", academicYOE: 1.6, workYOE: 0.3 },
    { name: "Python", academicYOE: 1.0, workYOE: 0.3 },
    { name: "Angular", academicYOE: 1.0, workYOE: 0.3 },
    { name: "React", academicYOE: 0.7, workYOE: 0.0 },
  ];

  const databases = [
    { name: "MySQL" },
    { name: "PostgreSQL" },
    { name: "Spring Data JPA" },
  ];

  const frameworks = [
    { name: "Spring Boot" },
    { name: "Flutter" },
    { name: "Kafka" },
    { name: "RESTful API" },
  ];

  const testingTools = [
    { name: "Selenium" },
    { name: "Playwright" },
    { name: "JUnit" },
    { name: "Postman" },
  ];

  const cicd = [
    { name: "Git" },
    { name: "Perforce" },
    { name: "TeamCity" },
    { name: "DevOps" },
    { name: "Docker" },
    { name: "Kubernetes" },
    { name: "AWS EC2" },
  ];

  const projectTools = [
    { name: "JIRA" },
    { name: "Confluence" },
    { name: "Kanban" },
    { name: "Agile" },
    { name: "Scrum" },
  ];

  const spokenLanguages = [
    { name: "Mandarin" },
    { name: "Cantonese" },
    { name: "English" },
  ];
  const sortedLanguages = [...programmingLanguages].sort((a, b) => {
    let aYOE =
      sortBy === "total" ? a.academicYOE + a.workYOE : a[`${sortBy}YOE`];
    let bYOE =
      sortBy === "total" ? b.academicYOE + b.workYOE : b[`${sortBy}YOE`];
    return isAscending ? aYOE - bYOE : bYOE - aYOE;
  });
  const [isInView, setIsInView] = useState(false);
  const skillRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) observer.unobserve(skillRef.current);
    };
  }, []);

  // Get calculated dasharray values for all data
  const dashArrayData = calculateDashArray(sortedLanguages);

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
    if (!isInView) return;
    dashArrayData.forEach(({ name, academicDashArray, workDashArray }) => {
      const academicCircle = document.querySelector(
        `.${name} .academic-circle`
      );
      const workCircle = document.querySelector(`.${name} .work-circle`);

      if (academicCircle && workCircle) {
        academicCircle.style.strokeDasharray = "226.2";
        academicCircle.style.strokeDashoffset = (
          226.2 - academicDashArray
        ).toString();
        workCircle.style.strokeDasharray = "226.2";
        workCircle.style.strokeDashoffset = (226.2 - workDashArray).toString();
        setTimeout(() => {
          academicCircle.style.strokeDashoffset = `${
            226.2 - academicDashArray
          }`;
          workCircle.style.strokeDashoffset = `${226.2 - workDashArray}`;
        }, 70);
      }
    });
  }, [isInView, dashArrayData, sortBy, isAscending]);

  useEffect(() => {
    if (!isInView) return;
    const totalFrames = 110;

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
  }, [isInView, sortBy, isAscending]);

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
    <div className="SkillsHome">
      <h1>My Skills</h1>
      <div ref={skillRef} className="skills-container">
        <div className="skills-category-header">
          <h2>Programming Languages</h2>
          <div className="labels">
            <div className="label academic-label">
              <span className="color-box"></span> Academic Years of Experience
            </div>
            <div className="label work-label">
              <span className="color-box"></span> Work Years of Experience
            </div>
          </div>
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
            <div className="programming-item" key={lang.name}>
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

        {/* Frameworks Section */}
        <h2>Frameworks & Libraries</h2>
        <div className="skills-category">
          {frameworks.map((item) => (
            <div className="skills-items" key={item.name}>
              <div className={item.name}>
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Testing Tools Section */}
        <h2>Testing Tools</h2>
        <div className="skills-category">
          {testingTools.map((item) => (
            <div className="skills-items" key={item.name}>
              <div className={item.name}>
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Databases Section */}
        <h2>Databases</h2>
        <div className="skills-category">
          {databases.map((item) => (
            <div className="skills-items" key={item.name}>
              <div className={item.name}>
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* CI/CD Section */}
        <h2>CI/CD & Version Control</h2>
        <div className="skills-category">
          {cicd.map((item) => (
            <div className="skills-items" key={item.name}>
              <div className={item.name}>
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Project Tools Section */}
        <h2>Project Tools</h2>
        <div className="skills-category">
          {projectTools.map((item) => (
            <div className="skills-items" key={item.name}>
              <div className={item.name}>
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <h2>Languages</h2>
        <div className="skills-category">
          {spokenLanguages.map((item) => (
            <div className="skills-items" key={item.name}>
              <div className={item.name}>
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Skills;
