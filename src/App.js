import './App.css';
import { Route, Routes, Link, Navigate, useLocation } from 'react-router-dom'; 
import React from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  // Define motion variants for the transition effect
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="navbar-left">
            <h1>Sam C</h1>
          </div>
          <div className="navbar-right">
            <Link to="/home"><button>Home</button></Link>
            <Link to="/about"><button>About</button></Link>
            <Link to="/skills"><button>Skills</button></Link>
            <Link to="/projects"><button>Projects</button></Link>
            <Link to="/contact"><button>Contact</button></Link>
          </div>
        </nav>
      </header>

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route 
              path="/" 
              element={<Navigate to="/home" />} 
            />
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
    </div>
  );
}

export default App;