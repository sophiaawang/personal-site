'use client'

import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Contact from "./components/Contact";

import ReactGA from "react-ga4";

ReactGA.initialize("G-9LCNTQQC1G");

export default function App() {
  useEffect(() => {
    ReactGA.send("pageview")
  }, []);

  return (
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
  )
}