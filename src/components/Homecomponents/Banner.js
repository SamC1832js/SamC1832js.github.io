import "./Home.css";
import React, { useState, useEffect, useRef } from "react";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import videoBg from "../assets/video/banner-bg.webm";
import { Link } from "react-router-dom";
export const Banner = () => {
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Software QA Analyst",
    "Software Engineer",
    "Web Developer",
  ];
  const period = 2000;
  const bannerTextRef = useRef(null);
  const bannerImgRef = useRef(null);

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
      { threshold: 0.2 }
    );

    if (bannerTextRef.current) observer.observe(bannerTextRef.current);
    if (bannerImgRef.current) observer.observe(bannerImgRef.current);

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <video autoPlay loop muted>
        <source src={videoBg} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="banner-content">
        <div ref={bannerTextRef} className="text-content">
          <span className="tagline">Welcome to my Portfolio</span>
          <h1>
            {`Hi! I'm Sam`}{" "}
            <span
              className="txt-rotate"
              data-period="1000"
              data-rotate='["Software QA Analyst", "Software Engineer In Test", "Web Developer"]'
            >
              <span className="wrap">{text}</span>
            </span>
          </h1>
          <p>
            I am Computer Science graduate passionate about optimizing software
            quality and looking forward to applying my skills to create
            impactful solutions. I excel in using modern tools and development
            practices to build efficient, scalable, and reliable applications. I
            thrive in dynamic environments, and committed to continuous learning
            and adaptability.
          </p>
          <Link to="/contact">
            <button className="banner-button">
              <span className="text">Let’s Connect</span>{" "}
              <ArrowRightCircle className="custom-arrow" size={25} />
            </button>
          </Link>
          <div>
            <button className="banner-button">
              <a
                href="https://drive.google.com/file/d/1-9K6OjFtbtdyLGqWRD6Sn-U2sdLvXVvf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text">Resume Download</span>
                <ArrowRightCircle className="custom-arrow" size={25} />
              </a>
            </button>
          </div>
        </div>
        <div ref={bannerImgRef} className="image-content">
          <img src={headerImg} alt="Header Img" />
        </div>
      </div>
    </section>
  );
};
