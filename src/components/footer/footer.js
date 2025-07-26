// components/footer/Footer.js
import React from 'react';
import './footer.css'; // Import the CSS for styling
import mail from "../../assert/icons8-gmail-50.png";
import linkedin from "../../assert/icons8-linkedin.gif";
import git from "../../assert/icons8-github-30.png";
import leet from '../../assert/icons8-leetcode-24.png'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Your name */}
        <p className="footer-name">© {new Date().getFullYear()} Sudharsan Ram M</p>
        {/* Social Icons - now directly within footer-content */}
        <div className="footer-social-icons"> {/* Renamed class for clarity */}
          <a href="https://github.com/Sudharsanram" target="_blank" rel="noopener noreferrer">
            <img src={git} alt="GitHub" className='f-icon' /> {/* Renamed class */}
          </a>
          <a href="mailto:sudharsanram.m@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={mail} alt="Gmail" className='f-icon' /> {/* Renamed class */}
          </a>
          <a href="https://www.linkedin.com/in/sudharsan-ram-m/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className='f-icon' /> {/* Renamed class */}
          </a>
          <a href="https://leetcode.com/u/IzwIztHk36/" target="_blank" rel="noopener noreferrer">
            <img src={leet} alt="LeetCode" className='f-icon' /> {/* Renamed class */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
