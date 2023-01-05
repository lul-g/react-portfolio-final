import { useState, useEffect } from "react";
import "./home.css";

export default function Home() {
  return (
    <div className='home'>
      <span className='L'>L</span>
      <span className='U'>U</span>
      <span className='L'>L</span>
      <div className='main-body'>
        <h1></h1>
        <p></p>
        <div className='socials flex'></div>
        {/* the purple thingy in the back */}
        <div className='shader'></div>
      </div>
      <div className='resume btn-1'></div>
      <div className='color-pciker'>
        <span className='color'></span>
        <span className='color'></span>
        <span className='color'></span>
        <span className='color'></span>
        <span className='color'></span>
      </div>
    </div>
  );
}
