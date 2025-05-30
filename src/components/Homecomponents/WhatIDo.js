import "./WhatIDo.css";
import codingImg from "../assets/img/coding.svg";
import softwareTesterImg from "../assets/img/softwaretester.png";
import contentCreatorImg from "../assets/img/contentcreator.png";
import webDeveloperImg from "../assets/img/webdeveloper.png";
import React, { useEffect, useRef } from "react";
function WhatIDo() {
  const titleTextRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            Array.from(entry.target.children).forEach((child) => {
              child.style.transform =
                "translate(0px, 0px) scale(1) rotate(0deg)";
              child.style.opacity = "1";
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    titleTextRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  const titleItems = [
    {
      text: [
        "I'M",
        "Software",
        "Tester",
        "I test application to ensure user experience and bug free",
        "01",
      ],
      img: softwareTesterImg,
    },
    {
      text: [
        "I'M",
        "Web",
        "Developer",
        "I like to create optimized and visually appealing interface",
        "02",
      ],
      img: webDeveloperImg, // Use a different image
    },
    {
      text: [
        "I Was",
        "Content",
        "Creator",
        "I shared strategies to help people succeed in games",
        "03",
      ],
      img: contentCreatorImg,
    },
  ];

  return (
    <div className="what-i-do-section">
      <h2 className="section-title">What I Do</h2>
      <div className="title-container">
        {titleItems.map((item, index) => (
          <div className="title-item" key={index}>
            <div
              className="title-text"
              ref={(el) => (titleTextRefs.current[index] = el)}
            >
              {item.text.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

            <div className="title-img">
              <img src={item.img} alt={item.img} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatIDo;
