import { useState, useEffect } from "react";
import "./App.css";
import Header from "./pages/header/header";
import Home from "./pages/home/home";

import { ReactComponent as Logo } from "./assets/MEDIA/logo.svg";

function App() {
  return (
    <div className='App'>
      <div
        className='preloader'
        onLoad={() => {
          document.querySelector("audio").currentTime = ".5";
          document.querySelector("audio").play();
        }}
      >
        <Logo />
        {/* <audio autoPlay>
          <source src='../src/assets/fire_aduio.wav' type='audio/wav' />
        </audio> */}
      </div>

      <div className='landing-page'>
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
