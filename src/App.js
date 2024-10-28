import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import necessary components
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact"
import Home from "./components/Home"

function App() {
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
              <Link to="/"><button>Home</button></Link>
              <Link to="/about"><button>About</button></Link>
              <Link to="/skills"><button>Skills</button></Link>
              <Link to="/projects"><button>Projects</button></Link>
              <Link to="/contact"><button>Contact</button></Link>
            </div>
          </nav>
        </header>

        {/* Main content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Set Projects as the home page */}
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} /> {/* Add Contact component */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
