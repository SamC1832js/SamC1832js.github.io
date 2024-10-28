import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'; 
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React, { useState } from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  const [location, setLocation] = useState(window.location.pathname);
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Navbar */}
          <nav className="navbar">
            <div className="navbar-left">
              <h1>Sam C</h1>
            </div>
            <div className="navbar-right">
              <Link to="/home" onClick={() => setLocation("/home")}><button>Home</button></Link>
              <Link to="/about" onClick={() => setLocation("/about")}><button>About</button></Link>
              <Link to="/skills" onClick={() => setLocation("/skills")}><button>Skills</button></Link>
              <Link to="/projects" onClick={() => setLocation("/projects")}><button>Projects</button></Link>
              <Link to="/contact" onClick={() => setLocation("/contact")}><button>Contact</button></Link>
            </div>
          </nav>
        </header>

        {/* Main content */}
        <main>
          <TransitionGroup>
            <CSSTransition key={location} classNames="fade" timeout={300}>
              <Routes location={location}>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </main>
      </div>
    </Router>
  );
}

export default App;
