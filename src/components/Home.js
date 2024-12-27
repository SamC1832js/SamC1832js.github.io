//import { NavBar } from "./Homecomponents/NavBar";
import React, { useEffect, useRef } from "react";
import { Banner } from "./Homecomponents/Banner";
import { SkillsSection } from "./Homecomponents/SkillsSection";
import Skills from "./Homecomponents/SkillsFrontPage";
//import { Contact } from "./components/Contact";
import { Footer } from "./Homecomponents/Footer";
import Timeline from "./Homecomponents/TimelineFrontPage";
import Contact from "./Contact";
import Title from "./Homecomponents/Title";

function Home() {
  return (
    <div className="home-container">
      <Banner />
      <SkillsSection />
      <Title />
      <Timeline />
      <Skills />
      <Contact />

      <Footer />
    </div>
  );
}
export default Home;
