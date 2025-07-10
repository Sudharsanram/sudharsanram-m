import React, { useEffect, useRef, useState } from 'react';
import './portfolio.css';
import proj1 from '../../assert/proj.png';

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
  const [showCompany, setShowCompany] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [activeTab, setActiveTab] = useState('skills');
  const [expandedProject, setExpandedProject] = useState(null);

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
      description: [
        'Designed a road safety system using STM32 and GPS to detect hazardous zones.',
        'Provided real-time alerts via LEDs, buzzer, and app integration for incoming vehicles.',
        'Integrated Google Maps API to display barricade locations in the app.'
      ]
    }
  ];

  useEffect(() => {
    const target = portfolioRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (target) observer.observe(target);
    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  useEffect(() => {
    const headingObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      },
      { threshold: 0.6 }
    );
    if (titleRef.current) headingObserver.observe(titleRef.current);
    return () => headingObserver.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={portfolioRef} className="portfolio-section">
      <h1 className="port animate-in" ref={titleRef}>PORTFOLIO</h1>

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
          Internship
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
        <div className="internship-section">
          <h1 className="intern">INTERNSHIP</h1>
          <div className="vertical-box" onClick={() => setShowCompany(!showCompany)}>
            Internship Experience
          </div>
          {showCompany && (
            <>
              <div className="vertical-line" />
              <div className="horizontal-flow">
                <div className="horizontal-box" onClick={() => setShowDetails(!showDetails)}>
                  Connect Infosystem
                </div>
                {showDetails && (
                  <>
                    <div className="horizontal-connector" />
                    <div className="internship-details-box">
                      <h4>Web Designing and Development</h4>
                      <p>Duration: June 2024 – July 2024</p>
                      <ul>
                        <li>Developed a full-featured e-commerce site for computer accessories.</li>
                        <li>Designed responsive and intuitive UI/UX for easy navigation.</li>
                        <li>Built using HTML, CSS, and JavaScript for a scalable solution.</li>
                        <li>Performed testing and debugging for cross-browser compatibility.</li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      )}

      {activeTab === 'projects' && (
        <div className="projects-section">
          <h2 className="portfolio-title">PROJECTS</h2>
          <div className="projects-list">
            {projects.map((proj, idx) => (
              <div
                className="project-card"
                key={idx}
                onClick={() => setExpandedProject(expandedProject === idx ? null : idx)}
              >
                <h3 className="project-title">{proj.name}</h3>
                {expandedProject === idx && (
                  <>
                    {Array.isArray(proj.description) ? (
                      <ul>
                        {proj.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{proj.description}</p>
                    )}
                    {proj.image && <img src={proj.image} alt={proj.name} className="project-image" />}
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noopener noreferrer">
                        <br />
                        View on GitHub
                      </a>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
