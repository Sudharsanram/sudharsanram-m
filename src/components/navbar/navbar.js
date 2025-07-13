import React, { useState } from 'react';
import './navbar.css';
import contact from '../../assert/icons8-topic-48.png';
import about from "../../assert/icons8-user.gif";
import res from "../../assert/icons8-document.gif";
import por from "../../assert/icons8-scroll.gif";
import hom from "../../assert/icons8-home.gif";

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
        <a href="#home" className="menulist" onClick={() => handleClick()}>Home <img src={hom} alt="" className='abt' /></a>
        <a href="#about" className="menulist" onClick={() => handleClick()}>About <img src={about} alt="" className='abt' /></a>
        <a href="#portfolio" className="menulist" onClick={() => handleClick()}>Portfolio <img src={por} alt="" className='abt' /></a>
        <span className="menulist" onClick={() => handleClick(onResumeClick)}>Resume <img src={res} alt="" className='abt' /></span>
        <a href="#contact" className="menulist contact-menu-item" onClick={() => handleClick()}>Contact Me</a>
      </div>

      <a href="#contact" className="menubtn desktop-only" onClick={() => handleClick()}>
        <img src={contact} alt="contact" className="menubtnimg" />
        <span className="cont">Contact Me</span>
      </a>
    </nav>
  );
};

export default Navbar;
