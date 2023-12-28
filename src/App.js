import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Experience from "./components/Experience.js";
import Projects from "./components/Projects.js";
import Home from "./components/Home.js";
import Contact from "./components/Contact.js";
import ReactGA from "react-ga4";

ReactGA.initialize("G-9LCNTQQC1G");

export default function App() {
  useEffect(() => {
    ReactGA.send("pageview")
  }, []);

  return (
    <BrowserRouter>
      <div id='app'>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Contact />
      </div>
    </BrowserRouter>
  )
}