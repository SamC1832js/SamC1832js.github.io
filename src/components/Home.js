//import { NavBar } from "./Homecomponents/NavBar";
import React, { useEffect, useRef } from "react";
import { Banner } from "./Homecomponents/Banner";
import { SkillsSection } from "./Homecomponents/SkillsSection";
import Skills from "./Skills";
//import { Contact } from "./components/Contact";
import { Footer } from "./Homecomponents/Footer";
import Timeline from "./Homecomponents/TimelineFrontPage";
import Contact from "./Contact";
import Title from "./Homecomponents/Title";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const sectionRefs = {
    home: useRef(null),
    title: useRef(null),
    skills: useRef(null),
    timeline: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && sectionRefs[hash]?.current) {
      sectionRefs[hash].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [location]);

  return (
    <div className="home-container">
      <section id="home" ref={sectionRefs.home}>
        <Banner />
      </section>

      <SkillsSection />

      <section id="title" ref={sectionRefs.title}>
        <Title />
      </section>

      <section id="timeline" ref={sectionRefs.timeline}>
        <Timeline />
      </section>

      <section id="skills" ref={sectionRefs.skills}>
        <Skills />
      </section>

      <section id="contact" ref={sectionRefs.contact}>
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
export default Home;
