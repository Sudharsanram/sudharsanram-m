import React, { useEffect, useRef } from 'react';
import './internship.css';

import timelineIcon from "../../assert/icons8-next-page.gif";
import Lottie from "lottie-react";
import animationData from "../../assert/Laptop.json";

const Internship = () => {
  const headingRef = useRef();
  const timelineRef = useRef();

useEffect(() => {
  const heading = headingRef.current; // ← store once
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    },
    { threshold: 0.5 }
  );

  if (heading) observer.observe(heading);

  return () => {
    if (heading) observer.unobserve(heading); // ← use local variable
  };
}, []);

useEffect(() => {
  const timeline = timelineRef.current; // ← store once
  const obs = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) timeline.classList.add('slide-in');
    },
    { threshold: 0.4 }
  );

  if (timeline) obs.observe(timeline);

  return () => {
    if (timeline) obs.unobserve(timeline); // ← use local variable
  };
}, []);


  return (
    <div className="internship-section">
      <h1 className="intern animate-in" ref={headingRef}>EXPERIENCE</h1>

      <div className="internship-container">
        {/* Left side Lottie — no animation */}
        <div className="internship-animation">
          <Lottie animationData={animationData} loop style={{ width: "100%", height: "100%" }} />
        </div>

        {/* Timeline Right side */}
        <div className="timeline-container" ref={timelineRef}>
          <div className="timeline-item">
            <div className="timeline-icon">
              <img src={timelineIcon} alt="step" />
            </div>

            <div className="timeline-content">
              <h3>Internship • Connect Infosystem</h3>
              <h4>Web Designing &amp; Development</h4>
              <p>June 2024 – July 2024</p>
              <ul>
                <li>Developed a full‑featured e‑commerce site for computer accessories.</li>
                <li>Designed responsive and intuitive UI/UX for easy navigation.</li>
                <li>Implemented using HTML, CSS &amp; JavaScript for scalability.</li>
                <li>Performed cross‑browser testing and debugging.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship;
