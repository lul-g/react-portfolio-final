import { useState, useEffect } from "react";
import "./header.css";
import { ReactComponent as Logo } from "../../assets/MEDIA/logo_sm.svg";

export default function Header() {
  let prevTop = 0;

  document.addEventListener("scroll", () => {
    let currTop =
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      window.pageYOffset;
    let header_cont = document.querySelector(".header_container");
    // if at top, header active and no bg
    // if scroll down, header inactive and no bg
    // if scroll up and not top 0, header active and bg

    if (currTop === 0) {
      header_cont.classList.add("active");
      header_cont.classList.remove("bg");
    }
    // on scroll up
    else if (currTop != 0 && currTop < prevTop) {
      header_cont.classList.add("active");
      header_cont.classList.add("bg");
    } else if (currTop > 5000 && currTop > prevTop) {
      header_cont.classList.remove("active");
      header_cont.classList.remove("bg");
    }

    prevTop = currTop;
  });
  function toggleNav() {
    let nav = document.querySelector("nav");
    let navIndicator = document.querySelector(".nav-indicator");
    let navIndicator_p = document.querySelector(".nav-indicator > p");
    nav.classList.toggle("active");
    if (nav.classList.contains("active")) {
      navIndicator.style.setProperty("--opacity_num", "0");
    }
  }

  return (
    <header className='header'>
      <div className='header_container'>
        <a href='/'>
          <Logo className='logo' />
        </a>
        <nav className='nav-list'>
          <li className='active'>
            <a href='#home'>
              <i className='fa-solid fa-house'></i>
            </a>
          </li>
          <li>
            <a href='#about'>
              <i className='fa-solid fa-circle-info'></i>
            </a>
          </li>
          <li>
            <a href=''>
              <i className='fa-solid fa-diagram-project'></i>
            </a>
          </li>
          <li>
            <a href=''>
              <i className='fa-solid fa-file'></i>
            </a>
          </li>
        </nav>
        <div
          onClick={toggleNav}
          onMouseEnter={() => {
            let navIndicator = document.querySelector(".nav-indicator");
            if (!document.querySelector("nav").classList.contains("active")) {
              navIndicator.style.setProperty("--opacity_num", "0");
            }
          }}
          onMouseLeave={() => {
            let navIndicator = document.querySelector(".nav-indicator");
            if (!document.querySelector("nav").classList.contains("active")) {
              navIndicator.style.setProperty("--opacity_num", "1");
            }
          }}
          className='nav-indicator btn'
        >
          <p id='prox'></p>
          <span>01</span>
        </div>
        <a href='#contact' className='contact '>
          C
          <div className='orbital btn-orbit'>
            <div className='planet'></div>
          </div>
        </a>
      </div>
    </header>
  );
}
