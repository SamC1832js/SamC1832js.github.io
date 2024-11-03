import "./Home.css";
import React, { useState, useEffect } from "react";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import { Link } from "react-router-dom";
export const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Software QA Analyst",
    "Software Engineer In Test",
    "Web Developer",
  ];
  const period = 2000;

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

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) setIsVisible(true);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="banner" id="home">
      <div className="banner-content">
        <div
          className={`text-content ${
            isVisible ? "animate__animated animate__fadeIn" : ""
          }`}
        >
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <Link to="/contact">
            <button className="banner-button">
              <span className="text">Let’s Connect</span>{" "}
              <ArrowRightCircle size={25} />
            </button>
          </Link>
        </div>
        <div
          className={`image-content ${
            isVisible ? "animate__animated animate__zoomIn" : ""
          }`}
        >
          <img src={headerImg} alt="Header Img" />
        </div>
      </div>
    </section>
  );
};
