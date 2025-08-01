import React, { useEffect } from 'react';
import "./about.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import mail from "../../assert/icons8-gmail-50.png";
import linkedin from "../../assert/icons8-linkedin.gif";
import git from "../../assert/icons8-github-30.png";
import ser from "../../assert/icons8-analyze.gif";
import leet from '../../assert/icons8-leetcode-24.png'
import Lottie from "lottie-react"; // make sure you installed lottie-react
import animationData from "../../assert/about.json"; // adjust path

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-animation" >
          <Lottie animationData={animationData} loop={true} />
        </div>

        <div className="about-wrapper">
          <h1 className='head'>
            About Me <img src={ser} alt="" />
          </h1>
          <span className='text1'>
            👋 Hi, I’m <span className="col">Sudharsan Ram M</span>, a curious mind and tech enthusiast pursuing <span className="col">Computer Science and Engineering (IoT)</span> at <span className="col">Saveetha Engineering College</span>, Chennai.
          </span>
          <span className='text1'>
            I specialize in building smart solutions that blend software and hardware. My skills span across <span className="col">C, Java, Python, HTML, CSS, JavaScript, and MySQL.</span>
            I work with modern frameworks and tools like <span className="col">React.js, Node.js, Spring Boot, Django, Figma, OpenCV, Pandas, and NumPy.</span>
          </span>
          <span className='text1'>
            📊 Currently hold a CGPA of <span className="col">8.03</span> (till 5th semester).
          </span>
          <span className='text1'>
            With hands-on experience in IoT development, I’ve created projects using<span className="col"> Arduino Uno, ESP32, and STM32,</span>  bringing intelligent systems to life. One of my recent projects is an Online Skill Assessment System.
          </span>
          <span className='text1'>
            🎯 Passionate about solving real-world problems, competing in hackathons, and exploring new places.
          </span>

          <div className="social-icons">
            <a href="https://github.com/Sudharsanram" target="_blank" rel="noopener noreferrer">
              <img src={git} alt="GitHub" className='github' />
            </a>
            <a href="mailto:sudharsanram.m@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src={mail} alt="Gmail" className='mail' />
            </a>
            <a href="https://www.linkedin.com/in/sudharsan-ram-m/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className='linkedin' />
            </a>
            <a href="https://leetcode.com/u/IzwIztHk36/" target="_blank" rel="noopener noreferrer">
              <img src={leet} alt="LeetCode" className='leet' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
