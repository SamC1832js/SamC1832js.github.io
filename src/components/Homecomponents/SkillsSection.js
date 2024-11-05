import React, { useState, useEffect, useRef, useMemo } from "react";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import "../Skills.css";

export const SkillsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [isInView, setIsInView] = useState(false);
  const title = [
    { name: "Software QA Analyst", academicYOE: 95, workYOE: 0 },
    { name: "Software Engineer", academicYOE: 85, workYOE: 0 },
    { name: "Web Developer", academicYOE: 90, workYOE: 0 },
    { name: "Software QA Analyst", academicYOE: 95, workYOE: 0 },
    { name: "Software Engineer", academicYOE: 85, workYOE: 0 },
    { name: "Web Developer", academicYOE: 90, workYOE: 0 },
  ];
  const SkillsRef = useRef(null);
  const carouselRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fadeIn");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    if (SkillsRef.current) observer.observe(SkillsRef.current);

    return () => observer.disconnect();
  }, []);
  const dashArrayData = useMemo(() => {
    const fullDashArray = 200;

    const totalYOEValues = title.map((lang) => lang.academicYOE + lang.workYOE);
    const maxYOE = Math.max(...totalYOEValues);

    const scaleFactor = fullDashArray / maxYOE;

    return title.map((lang) => {
      const { academicYOE, workYOE } = lang;
      const totalYOE = academicYOE + workYOE;

      const academicDashArray = totalYOE * scaleFactor;
      const workDashArray = workYOE * scaleFactor;

      return {
        name: lang.name,
        academicDashArray,
        workDashArray,
      };
    });
  }, [title]);

  const [animatedYOE, setAnimatedYOE] = useState(
    title.map((lang) => ({
      name: lang.name,
      academic: 0,
      work: 0,
    }))
  );

  useEffect(() => {
    if (!isInView) return;
    const totalFrames = 110;

    const animateYOE = () => {
      title.forEach((lang) => {
        const startAcademic = 0;
        const endAcademic = lang.academicYOE;
        const startWork = 0;
        const endWork = lang.workYOE;

        let frame = 0;

        const animateYOEFrame = () => {
          frame++;
          const progress = frame / totalFrames;

          setAnimatedYOE((prev) =>
            prev.map((item) =>
              item.name === lang.name
                ? {
                    ...item,
                    academic: Math.min(
                      Math.floor(startAcademic + progress * endAcademic),
                      endAcademic
                    ),
                    work: Math.min(
                      Math.floor(startWork + progress * endWork),
                      endWork
                    ),
                  }
                : item
            )
          );

          if (frame < totalFrames) {
            requestAnimationFrame(animateYOEFrame);
          }
        };

        requestAnimationFrame(animateYOEFrame);
      });
    };

    if (isInView) {
      animateYOE(); // Start animation only when `carousel-inner` is in view
    }
  }, [isInView]);

  const updateItemsToShow = () => {
    if (carouselRef.current) {
      const carouselWidth = carouselRef.current.offsetWidth;
      const itemWidthWithMargin = 113 + 2 * (window.innerWidth * 0.02); // Adjust for item width and margin
      const calculatedItems = Math.floor(carouselWidth / itemWidthWithMargin);
      const limitedItems = Math.min(Math.max(calculatedItems, 1), 3);
      setItemsToShow(limitedItems);
    }
  };

  useEffect(() => {
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.7 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) observer.unobserve(carouselRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;
    dashArrayData.forEach(({ name, academicDashArray, workDashArray }) => {
      // Select all academic and work circles with the given name
      const academicCircles = document.querySelectorAll(
        `.${name.replace(/\s+/g, "-")} .academic-circle`
      );
      const workCircles = document.querySelectorAll(
        `.${name.replace(/\s+/g, "-")} .work-circle`
      );

      // Apply styles to all matched academic circles
      academicCircles.forEach((academicCircle) => {
        academicCircle.style.strokeDasharray = "226.2";
        academicCircle.style.strokeDashoffset = (
          226.2 - academicDashArray
        ).toString();
      });

      // Apply styles to all matched work circles
      workCircles.forEach((workCircle) => {
        workCircle.style.strokeDasharray = "226.2";
        workCircle.style.strokeDashoffset = (226.2 - workDashArray).toString();
      });
    });
  }, [isInView, dashArrayData]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const remainingItems = title.length - prevIndex;
      if (remainingItems <= itemsToShow) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return title.length - itemsToShow;
      }
      return prevIndex - 1;
    });
  };

  const displayItems = () => {
    const itemWidth = 140;
    const itemMargin = 2 * (window.innerWidth * 0.02);
    const itemWidthWithMargin = itemWidth + itemMargin;
    const translateX = -currentIndex * itemWidthWithMargin;

    return (
      <div
        className="skills-category"
        style={{
          transform: `translateX(${translateX}px)`, // Apply the translation
        }}
      >
        {title.map((lang, index) => (
          <div className="skills-items" key={index}>
            <div className={`${lang.name.replace(/\s+/g, "-")} skill-item`}>
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
                    <span className="space"> </span>
                    {
                      animatedYOE.find((item) => item.name === lang.name)
                        ?.academic
                    }{" "}
                    %
                  </div>
                  <div className="work"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="skill" id="skills">
      <div ref={SkillsRef} className="skill-bx">
        <h2>Skills</h2>
        <p>
          I am dedicated to creating high-quality software and I am experienced
          in many areas of software development, <br />
          including quality assurance, front-end and back-end development, and
          optimization projects.
        </p>

        <div className="carousel" ref={carouselRef}>
          <button className="carousel-control prev" onClick={prevSlide}>
            <img src={arrow1} alt="Previous" />
          </button>
          <div className="carousel-inner">{displayItems()}</div>
          <button className="carousel-control next" onClick={nextSlide}>
            <img src={arrow2} alt="Next" />
          </button>
        </div>
      </div>
    </section>
  );
};
