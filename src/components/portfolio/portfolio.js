import React, { useEffect, useRef, useState } from 'react';
import './portfolio.css';

import proj1 from '../../assert/proj.png';
import pr from '../../assert/icons8-project.gif';
import pro from '../../assert/icons8-blog.gif';

import Certificate from '../certificate/certificate';

import Lottie from 'lottie-react';
import animationData from '../../assert/Man Working on Laptop in Office.json';

const SkillMeter = ({ skill, percent, animate }) => {
  const radius = 70;
  const circumference = Math.PI * radius;
  const progress = animate ? (circumference * percent) / 100 : 0;

  return (
    <div className="skill-meter">
      <svg width="160" height="90" viewBox="0 0 160 90">
        <path className="track" d="M10,80 A70,70 0 0 1 150,80" fill="transparent" />
        <path
          className="progress"
          d="M10,80 A70,70 0 0 1 150,80"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
        />
      </svg>
      <div className="label">
        <h4>{skill}</h4>
        <span>{percent}%</span>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const portfolioRef = useRef();
  const titleRef = useRef();
  const [inView, setInView] = useState(false);
  const [activeTab, setActiveTab] = useState('skills');

  const projects = [
    {
      name: 'Melanoma Detection Using Machine Learning Techniques',
      description:
        'Developed an AI-based tool for early melanoma detection using dermatoscopic images. Integrated pre-trained CNN models (AlexNet, ResNet50, VGG16, VGG19) for accurate classification of skin lesions. Designed a user-friendly web interface for dermatologists to upload images and receive real-time diagnostic predictions with confidence scores.',
      github: 'https://github.com/Sudharsanram/Melanoma-Detection-Using-Machine-Learning-Techniques',
      image: proj1,
    },
    {
      name: 'Smart Barricade System using STM32',
      description:
        'Designed a road safety system using STM32 and GPS to detect hazardous zones. Provided real-time alerts via LEDs, buzzer, and app integration for incoming vehicles. Integrated Google Maps API to display barricade locations in the app.',
      github: null,
      image: null,
    },
  ];

  useEffect(() => {
    const target = portfolioRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (target) observer.observe(target);
    return () => target && observer.unobserve(target);
  }, []);

  useEffect(() => {
    const headingObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      },
      { threshold: 0.6 }
    );
    if (titleRef.current) headingObserver.observe(titleRef.current);
    return () => headingObserver.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={portfolioRef} className="portfolio-section">
      <div className="portfolio-container">
        {/* LEFT: Portfolio Content */}
        <div className="portfolio-content">
          {/* Single Heading — visible on all devices */}
          <div className="portfolio-heading">
            <h1 className="port animate-in" ref={titleRef}>
              PORTFOLIO
            </h1>
            <img src={pro} alt="Portfolio Icon" className="pro" />
          </div>

          <div className="portfolio-buttons">
            <button
              className={activeTab === 'skills' ? 'tab-btn active' : 'tab-btn'}
              onClick={() => setActiveTab('skills')}
            >
              Technical Skills
            </button>
            <button
              className={activeTab === 'internship' ? 'tab-btn active' : 'tab-btn'}
              onClick={() => setActiveTab('internship')}
            >
              Certificates
            </button>
            <button
              className={activeTab === 'projects' ? 'tab-btn active' : 'tab-btn'}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </button>
          </div>

          {activeTab === 'skills' && (
            <>
              <h2 className="portfolio-title">TECHNICAL SKILLS</h2>
              <div className="skill-list">
                <div className="skill-row">
                  <SkillMeter skill="JAVA" percent={85} animate={inView} />
                  <SkillMeter skill="C" percent={80} animate={inView} />
                  <SkillMeter skill="Python" percent={85} animate={inView} />
                  <SkillMeter skill="JavaScript" percent={75} animate={inView} />
                </div>
                <div className="skill-row">
                  <SkillMeter skill="ReactJS" percent={70} animate={inView} />
                  <SkillMeter skill="HTML/CSS" percent={90} animate={inView} />
                </div>
              </div>
            </>
          )}

          {activeTab === 'internship' && (
            <div className="certificate-tab-wrapper">
              <Certificate />
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="projects-section">
              <h2 className="portfolio-title">PROJECTS</h2>
              <div className="projects-list-flip">
                {projects.map((proj, index) => (
                  <div
                    className={`project-flip-card ${proj.name.includes('Melanoma') ? 'melanoma-bg' : ''}`}
                    key={index}
                  >
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <h3>{proj.name}</h3>
                        <img src={pr} alt="project-icon" />
                      </div>
                      <div className="flip-card-back">
                        <p>{proj.description}</p>
                        {proj.image && (
                          <img
                            src={proj.image}
                            alt="project"
                            style={{ width: '100%', marginTop: '1rem', borderRadius: '10px' }}
                          />
                        )}
                        {proj.github && (
                          <a href={proj.github} target="_blank" rel="noopener noreferrer">
                            View on GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT: JSON Animation */}
        <div className="portfolio-animation">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
