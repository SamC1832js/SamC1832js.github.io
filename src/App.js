import './App.css';
import { Route, Routes, Link, Navigate, useLocation } from 'react-router-dom'; 
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  const location = useLocation(); // Now it will work because Router is at root

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
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Routes location={location}>
              <Route path="/" element={<Navigate to="/home" />} />
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
  );
}

export default App;
