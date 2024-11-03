//import { NavBar } from "./Homecomponents/NavBar";
import React, { useEffect } from "react";
import { Banner } from "./Homecomponents/Banner";
import { SkillsSection } from "./Homecomponents/SkillsSection";
import { Projects } from "./Homecomponents/Projects";
//import { Contact } from "./components/Contact";
import { Footer } from "./Homecomponents/Footer";
function Home() {
  return (
    <div>
      <Banner />
      <SkillsSection />
      <Projects />
      <Footer />
    </div>
  );
}
export default Home;
