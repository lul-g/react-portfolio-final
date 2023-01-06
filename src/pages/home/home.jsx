import { useState, useEffect } from "react";
import "./home.css";

export default function Home() {
  let colors = document.querySelectorAll(".color");
  function setColor() {
    // toggle active class
    document.querySelectorAll(".color").forEach((color) => {
      color.classList.remove("active");
    });
    event.target.classList.add("active");

    // get color style and update main
    let style_color = event.target.style.backgroundColor;
    document.documentElement.style.setProperty("--main", style_color);
  }

  return (
    <div className='home'>
      <span data-txt='L' className='L float-txt'>
        L
      </span>
      <span data-txt='U' className='U float-txt'>
        U
      </span>
      <span data-txt='L' className='L-2 float-txt'>
        L
      </span>
      <div className='main-body'>
        <div>
          <h1>Lulseged</h1> <h1>Admasu</h1>
        </div>
        <p>
          <span>FRONT DEVELOPER & DESIGNER,</span> From Ethiopia. Currently A
          Senior At NKU Pursuing A <span>CS Major</span>. Been Working On
          Websites For Fun, For Companies, For Freelance Work & As Part Of My
          Internship.
        </p>
        <div className='socials'>
          <li>
            <a href='https://discord.com/channels/Lul#1951'>
              <i className='fa-brands fa-discord'></i>
            </a>
          </li>
          <li>
            <a href=''>
              <i className='fa-brands fa-github'></i>
            </a>
          </li>
          <li>
            <a href=''>
              <i className='fa-brands fa-linkedin-in'></i>
            </a>
          </li>
          <li>
            <a href=''>
              <i className='fa-brands fa-twitter'></i>
            </a>
          </li>
        </div>
        <div className='shader'></div>
      </div>
      <a href='' className='resume btn'>
        R
      </a>
      <div className='color-picker'>
        <span
          onClick={setColor}
          className='color'
          style={{ backgroundColor: "var(--red)" }}
        ></span>
        <span
          onClick={setColor}
          className='color active'
          style={{ backgroundColor: "var(--purple)" }}
        ></span>
        <span
          onClick={setColor}
          className='color'
          style={{ backgroundColor: "var(--green)" }}
        ></span>
        <span
          onClick={setColor}
          className='color'
          style={{ backgroundColor: "var(--yellow)" }}
        ></span>
        <span
          onClick={setColor}
          className='color'
          style={{ backgroundColor: "var(--blue)" }}
        ></span>
      </div>
    </div>
  );
}
