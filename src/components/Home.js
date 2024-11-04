//import { NavBar } from "./Homecomponents/NavBar";
import React, { useEffect } from "react";
import { Banner } from "./Homecomponents/Banner";
import { SkillsSection } from "./Homecomponents/SkillsSection";
//import { Contact } from "./components/Contact";
import { Footer } from "./Homecomponents/Footer";
import Timeline from "./Timeline";
import Contact from "./Contact";
function Home() {
  return (
    <div className="home-container">
      <Banner />
      <SkillsSection />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}
export default Home;
