import { useState, useEffect } from "react";
import "./header.css";
import { ReactComponent as Logo } from "../../assets/MEDIA/logo_sm.svg";

export default function Header() {
  function toggleNav() {
    let nav = document.querySelector("nav");
    let navIndicator = document.querySelector(".nav-indicator");
    let navIndicator_p = document.querySelector(".nav-indicator > p");
    nav.classList.toggle("active");
    if (nav.classList.contains("active")) {
      navIndicator.style.setProperty("--opacity_num", "0");
      navIndicator_p.textContent = "X";
    } else {
      navIndicator_p.textContent = "N";
    }
  }
  return (
    <header className='header'>
      <a href='/'>
        <Logo className='logo' />
      </a>
      <nav className='nav-list'>
        <li className='active'>
          <a href='#'>
            <i className='fa-solid fa-house'></i>
          </a>
        </li>
        <li>
          <a href=''>
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
        <p>N</p>
        <span>01</span>
      </div>
      <a href='#contact' className='contact '>
        C
        <div className='orbital btn-orbit'>
          <div className='planet'></div>
        </div>
      </a>
    </header>
  );
}
