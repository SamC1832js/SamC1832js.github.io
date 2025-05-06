import "./App.css";
import { Route, Routes, Link, Navigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as SettingIcon } from "./icon/list-settings-line.svg";
import logo from "./components/assets/img/logo.png";
import Load from "./components/Load";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
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
      const navbarContainer = document.querySelector(".navbar-container");
      let lastScrollY = window.scrollY;

      if (navbar && navbarContainer) {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > 0) {
            navbar.classList.add("sticky");
          } else {
            navbar.classList.remove("sticky");
          }

          lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }
    }
  }, [loading]);

  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <div className="App">
      {loading ? (
        <Load />
      ) : (
        <>
          <header className="App-header">
            <div className="navbar-container">
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
                    <Link to="/#home">
                      <button onClick={toggleMenu}>Home</button>
                    </Link>
                    <Link to="/#title">
                      <button onClick={toggleMenu}>Experience</button>
                    </Link>
                    <Link to="/#skills">
                      <button onClick={toggleMenu}>Skills</button>
                    </Link>
                    <Link to="/#timeline">
                      <button onClick={toggleMenu}>Timeline</button>
                    </Link>
                    <Link to="/#contact">
                      <button onClick={toggleMenu}>Contact</button>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </header>

          <main>
            <AnimatePresence mode="wait">
              <Routes>
                <Route
                  path="*"
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
              </Routes>
            </AnimatePresence>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
