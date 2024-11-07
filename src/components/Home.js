//import { NavBar } from "./Homecomponents/NavBar";
import React, { useEffect, useRef } from "react";
import { Banner } from "./Homecomponents/Banner";
import { SkillsSection } from "./Homecomponents/SkillsSection";
//import { Contact } from "./components/Contact";
import { Footer } from "./Homecomponents/Footer";
import Timeline from "./Timeline";
import Contact from "./Contact";
import Title from "./Homecomponents/Title";

function Home() {
  return (
    <div className="home-container">
      <Banner />
      <SkillsSection />
      <Title />
      {/* <Timeline /> */}
      <Contact />

      <Footer />
    </div>
  );
}
export default Home;
