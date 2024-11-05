import "./App.css";
import { Route, Routes, Link, Navigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Timeline from "./components/Timeline";
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as SettingIcon } from "./icon/list-settings-line.svg";
import logo from "./components/assets/img/logo.png";
import Enter from "./components/Enter";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    document.body.classList.toggle("no-scroll", !showMenu);
  };

  useEffect(() => {
    if (!loading) {
      const navbar = document.querySelector(".navbar");

      if (navbar) {
        const stickyOffset = navbar.offsetTop;

        const handleScroll = () => {
          if (window.scrollY > stickyOffset) {
            navbar.classList.add("sticky");
          } else {
            navbar.classList.remove("sticky");
          }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }
    }
  }, [loading]);
  useEffect(() => {
    let scrollTarget = window.scrollY;
    let isAnimating = false;

    const smoothScroll = () => {
      isAnimating = true;
      const currentScroll = window.scrollY;
      const distance = scrollTarget - currentScroll;

      if (Math.abs(distance) > 1) {
        window.scrollTo(0, currentScroll + distance * 0.1); // Smooth out the movement
        requestAnimationFrame(smoothScroll);
      } else {
        isAnimating = false; // Stop animation when close to target
      }
    };

    const handleScroll = (event) => {
      scrollTarget += event.deltaY * 5;
      scrollTarget = Math.max(
        0,
        Math.min(scrollTarget, document.body.scrollHeight - window.innerHeight)
      );

      if (!isAnimating) {
        requestAnimationFrame(smoothScroll);
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Enter />
      ) : (
        <>
          <header className="App-header">
            <nav className="navbar">
              <div className="navbar-left">
                <img src={logo} alt="Logo" />
              </div>
              <div className="navbar-right">
                <button className="menu-button" onClick={toggleMenu}>
                  <SettingIcon
                    style={{ width: "24px", height: "24px", fill: "#000" }}
                  />
                </button>
                <div className={`nav-links ${showMenu ? "show" : ""}`}>
                  <Link to="/home">
                    <button onClick={toggleMenu}>Home</button>
                  </Link>
                  {/*<Link to="/about">
                <button onClick={toggleMenu}>About</button>
              </Link>*/}
                  <Link to="/skills">
                    <button onClick={toggleMenu}>Skills</button>
                  </Link>
                  <Link to="/timeline">
                    <button onClick={toggleMenu}>Timeline</button>
                  </Link>
                  <Link to="/projects">
                    <button onClick={toggleMenu}>Projects</button>
                  </Link>
                  <Link to="/contact">
                    <button onClick={toggleMenu}>Contact</button>
                  </Link>
                </div>
              </div>
            </nav>
          </header>

          <main>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route
                  path="/home"
                  element={
                    <motion.div
                      variants={pageTransition}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                    >
                      <Home />
                    </motion.div>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <motion.div
                      variants={pageTransition}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                    >
                      <About />
                    </motion.div>
                  }
                />
                <Route
                  path="/skills"
                  element={
                    <motion.div
                      variants={pageTransition}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                    >
                      <Skills />
                    </motion.div>
                  }
                />
                <Route
                  path="/timeline"
                  element={
                    <motion.div
                      variants={pageTransition}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                    >
                      <Timeline />
                    </motion.div>
                  }
                />
                <Route
                  path="/projects"
                  element={
                    <motion.div
                      variants={pageTransition}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                    >
                      <Projects />
                    </motion.div>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <motion.div
                      variants={pageTransition}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                    >
                      <Contact />
                    </motion.div>
                  }
                />
              </Routes>
            </AnimatePresence>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
