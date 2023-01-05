import { useState, useEffect } from "react";
import "./header.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export default function Header() {
  return (
    <header className='header'>
      <Logo className='logo' />
      <nav className='nav-list'>
        <li>Home</li>
        <li>About Me</li>
        <li>projects</li>
        <li>qualifications</li>
      </nav>
      <div className='nav-indicator'>N</div>
      <a href='#contact' className='contact'>
        C
      </a>
    </header>
  );
}
