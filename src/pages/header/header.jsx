import { useState, useEffect } from "react";
import "./header.css";
import { ReactComponent as Logo } from "../../assets/MEDIA/logo_sm.svg";

export default function Header() {
  let prevTop = 0;
  function collapseNav() {
    document.querySelector("nav").classList.remove("active");
  }
  function activateLink() {
    let nav_list = [...document.querySelectorAll("nav > li")];
    let nav = document.querySelector(".nav-list");
    let contact_btn = document.querySelector("header .contact");
    nav_list.push(contact_btn);
    nav_list.forEach((el) => {
      el.classList.remove("active");
    });
    if (event.target.parentElement.classList.contains("contact")) {
      event.target.parentElement.classList.add("active");
    } else {
      event.target.parentElement.parentElement.classList.add("active");
    }
    nav.classList.remove("bg");
  }
  function removeHeader() {
    let logo = document.querySelector(".logo");
    let contact = document.querySelector("header .contact");
    let nav = document.querySelector(".nav-list");

    logo.classList.add("collapse");
    contact.classList.add("collapse");
  }
  function showHeader() {
    let logo = document.querySelector(".logo");
    let contact = document.querySelector("header .contact");
    let nav = document.querySelector(".nav-list");

    logo.classList.remove("collapse");
    contact.classList.remove("collapse");
  }

  document.addEventListener("scroll", () => {
    let currTop =
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      window.pageYOffset;

    if (currTop === 0) {
      showHeader();
    } else {
      removeHeader();
    }

    prevTop = currTop;
  });
  function toggleNav() {
    let header_cont = document.querySelector(".header_container");
    let nav = document.querySelector("nav");
    let nav_list = document.querySelector(".nav-list");
    let navIndicator = document.querySelector(".nav-indicator");

    nav.classList.toggle("active");
    nav_list.classList.toggle("bg");
    if (nav.classList.contains("active")) {
      navIndicator.style.setProperty("--opacity_num", "0");
    }
    if (
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      window.pageYOffset
    ) {
      removeHeader();
    }
  }

  return (
    <header className='header'>
      <div className='header_container'>
        <Logo className='logo' />
        <nav className='nav-list'>
          <li
            className='active'
            onClick={() => {
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
              activateLink();
              collapseNav();
            }}
          >
            <a>
              <i className='fa-solid fa-house'></i>
            </a>
          </li>
          <li
            onClick={() => {
              activateLink();
              collapseNav();
            }}
          >
            <a href='#about'>
              <i className='fa-solid fa-circle-info'></i>
            </a>
          </li>
          <li
            onClick={() => {
              activateLink();
              collapseNav();
            }}
          >
            <a href='#projects'>
              <i className='fa-solid fa-diagram-project'></i>
            </a>
          </li>
          <li
            onClick={() => {
              activateLink();
              collapseNav();
            }}
          >
            <a href='#skills'>
              <i className='fa-solid fa-file'></i>
            </a>
          </li>
          {/* <li
            onClick={() => {
              activateLink();
              collapseNav();
            }}
          >
            <a href='#contact'>
              <i className='fa-solid fa-comment'></i>
            </a>
          </li> */}
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
          className='nav-indicator btn '
        >
          <p id='prox'></p>
          <span>01</span>
        </div>
        <a
          onClick={() => {
            activateLink();
            collapseNav();
          }}
          href='#contact'
          className='contact '
        >
          C
          <div className='orbital btn-orbit'>
            <div className='planet'></div>
          </div>
        </a>
      </div>
    </header>
  );
}
