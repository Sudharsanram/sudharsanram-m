import React, { useEffect } from 'react';
import "./about.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import mail from "../../assert/icons8-gmail-50.png"
import linkedin from "../../assert/icons8-linkedin.gif"
import git from "../../assert/icons8-github-30.png"


const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
     
    <section id="about" className="about-section">
    <div className="about-wrapper">

      <h1 className='head'>About Me</h1> 
      <span className='text1'>
       👋 Hi, I’m Sudharsan Ram M, a curious mind and tech enthusiast pursuing Computer Science and Engineering (IoT) at Saveetha Engineering College, Chennai.
      </span>
    <span className='text1'>I specialize in building smart solutions that blend software and hardware. My skills span across C,Java, Python, HTML, CSS, JavaScript, and MySQL. 
      I work with modern frameworks and tools like React.js, Node.js, Spring Boot, Django, Figma, OpenCV, Pandas, and NumPy.</span>
      <span className='text1'>
       📊 Currently hold a CGPA of 8.03 (till 5th semester).
      </span>
      <span className='text1'>With hands-on experience in IoT development, I’ve created projects using Arduino Uno, ESP32, and STM32, bringing intelligent systems to life. One of my recent projects is an Online Skill Assessment System</span>
      <span className='text1'>🎯 Passionate about solving real-world problems, competing in hackathons, and exploring new places.</span>
       <div className="social-icons">
  <a href="https://github.com/Sudharsanram" target="_blank" rel="noopener noreferrer">
    <img src={git} alt="GitHub"  className='github'/>
  </a>

  <a href="mailto:sudharsanram.m@gmail.com" target="_blank" rel="noopener noreferrer">
    <img src={mail} alt="Gmail" className='mail'/>
  </a>

  <a href="https://www.linkedin.com/in/sudharsan-ram-m/" target="_blank" rel="noopener noreferrer">
    <img src={linkedin} alt="LinkedIn" className='linkedin'/>
  </a>
</div>

</div>
    </section>
    
  );
}

export default About;
