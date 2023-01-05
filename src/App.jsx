import { useState, useEffect } from "react";
import "./App.css";
import Header from "./pages/header/header";
import Home from "./pages/home/home";

import { ReactComponent as Logo } from "./assets/logo.svg";

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

      <Header />
      <Home />
    </div>
  );
}

export default App;
