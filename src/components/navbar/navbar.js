// navbar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import contact from '../../assert/icons8-topic-48.png';
import about from "../../assert/icons8-user.gif";
import res from "../../assert/icons8-document.gif";
import por from "../../assert/icons8-scroll.gif";
import hom from "../../assert/icons8-home.gif";

const Navbar = ({ onResumeClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    setMenuOpen(false);
    navigate('/', { state: { scrollTo: sectionId } });
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className={`menu ${menuOpen ? "active" : ""}`}>
        <button className="menulist" onClick={() => handleNavClick('home')}>
          Home <img src={hom} alt="" className='abt' />
        </button>
        <button className="menulist" onClick={() => handleNavClick('about')}>
          About <img src={about} alt="" className='abt' />
        </button>
        <button className="menulist" onClick={() => handleNavClick('portfolio')}>
          Portfolio <img src={por} alt="" className='abt' />
        </button>
        <a href="/resume" className="menulist" onClick={() => setMenuOpen(false)}>
          Resume <img src={res} alt="" className="abt" />
        </a>
        <button className="menulist contact-menu-item" onClick={() => handleNavClick('contact')}>
          Contact Me
        </button>
      </div>

      <button className="menubtn desktop-only" onClick={() => handleNavClick('contact')}>
        <img src={contact} alt="contact" className="menubtnimg" />
        <span className="cont">Contact Me</span>
      </button>
    </nav>
  );
};

export default Navbar;
