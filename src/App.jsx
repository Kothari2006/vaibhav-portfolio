import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import AboutDetails from "./pages/AboutDetails";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>

      <div className="portfolio">

        {/* NAVBAR */}
        <nav className="navbar">

          <Link to="/" className="navbar-logo">
            Vaibhav Kothari
          </Link>

          <div className="nav-links">

            <Link to="/">
              Home
            </Link>

            <Link to="/about">
              About
            </Link>

            <Link to="/services">
              Services
            </Link>

            <Link to="/skills">
              Skills
            </Link>

            <Link to="/projects">
              Projects
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </div>

        </nav>


        {/* PAGES */}
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/about-details"
            element={<AboutDetails />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/skills"
            element={<Skills />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>


        {/* FOOTER */}
        <footer className="footer">

          <p>
            © 2026 Vaibhav Kothari | All Rights Reserved
          </p>

        </footer>

      </div>

    </BrowserRouter>
  );
}

export default App;