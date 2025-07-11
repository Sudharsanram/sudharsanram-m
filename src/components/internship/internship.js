import React, { useEffect, useRef } from 'react';
import './internship.css';

import timelineIcon from "../../assert/icons8-next-page.gif";

const Internship = () => {
  const headingRef = useRef();     // for EXPERIENCE text
  const timelineRef = useRef();    // for the timeline container

  /* ─── EXPERIENCE heading: keep original animate‑in logic ─── */
  useEffect(() => {
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
    if (headingRef.current) observer.observe(headingRef.current);
    return () => headingRef.current && observer.unobserve(headingRef.current);
  }, []);

  /* ─── Timeline slide‑in – separate animation ─── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) timelineRef.current.classList.add('slide-in');
      },
      { threshold: 0.4 }
    );
    if (timelineRef.current) obs.observe(timelineRef.current);
    return () => timelineRef.current && obs.unobserve(timelineRef.current);
  }, []);

  return (
    <div className="internship-section">
      {/* keeps the original animate‑in animation */}
      <h1 className="intern animate-in" ref={headingRef}>EXPERIENCE</h1>

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
  );
};

export default Internship;
