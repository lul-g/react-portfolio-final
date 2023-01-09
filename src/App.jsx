import { useState, useEffect } from "react";
import "./App.css";
// pages
import Header from "./pages/header/header";
import Home from "./pages/home/home";
import About from "./pages/about/About";
import Projects from "./pages/projects/projects";
import Skills from "./pages/skills/skills";
import Contact from "./pages/contact/contact";

// components
import Preloader from "./components/preloader/preloader";

import { ReactComponent as Logo } from "./assets/MEDIA/logo.svg";

function App() {
  setTimeout(() => {
    document.querySelector(".website").style.display = "inline";
  }, 5000);
  function proximityHover() {
    // get mouse position
    let mouseX = event.clientX;
    let mouseY = event.clientY;

    let dot = document.getElementById("prox");
    const rect = document
      .querySelector(".nav-indicator")
      .getBoundingClientRect();
    const nav_indi_X = rect.left + rect.width / 2;
    const nav_indi_Y = rect.top + rect.height / 2;

    const deg =
      (Math.atan2(nav_indi_Y - mouseY, nav_indi_X - mouseX) * 180) / Math.PI;
    dot.style.transform = `rotate(${deg + 140}deg)`;
  }
  return (
    <div className='App' onMouseMove={proximityHover}>
      <Preloader />
      <div className='website'>
        <Header />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
