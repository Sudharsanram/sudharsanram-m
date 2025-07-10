import React, { useState } from 'react';
import './navbar.css';
import contact from '../../assert/icons8-topic-48.png';

const Navbar = ({ onResumeClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (callback) => {
    setMenuOpen(false);
    if (callback) callback();
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className={`menu ${menuOpen ? "active" : ""}`}>
        <a href="#home" className="menulist" onClick={() => handleClick()}>Home</a>
        <a href="#about" className="menulist" onClick={() => handleClick()}>About</a>
        <a href="#portfolio" className="menulist" onClick={() => handleClick()}>Portfolio</a>
        <span className="menulist" onClick={() => handleClick(onResumeClick)}>Resume</span>
      </div>

      <button className="menubtn" onClick={() => handleClick()}>
        <img src={contact} alt="contact" className="menubtnimg" />
        <a href="#contact" className="cont">Contact Me</a>
      </button>
    </nav>
  );
};

export default Navbar;
