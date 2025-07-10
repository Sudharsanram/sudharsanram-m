import React, { useRef, useEffect } from 'react';
import './resume.css';

const Resume = React.forwardRef((props, ref) => {
  const titleRef = useRef();

  useEffect(() => {
    const el = titleRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('fade-slide-in');     // Remove previous animation
          void el.offsetWidth;                      // Force reflow to restart animation
          el.classList.add('fade-slide-in');        // Add animation class again
        }
      },
      { threshold: 0.3 }
    );

    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section ref={ref} className="resume-section">
      <h2 ref={titleRef} className="resume-title">
        My Resume
      </h2>

      <div className="download-btn-container">
        <a
          href="/Sudharsan_Ram_M-Resume.pdf"
          download="Sudharsan_Ram_M-Resume.pdf"
          className="download-btn"
        >
          Download Resume
        </a>
      </div>

      <div className="resume-viewer">
        <iframe
          src="/Sudharsan_Ram_M-Resume.pdf"
          title="Resume"
          className="resume-iframe"
        ></iframe>
      </div>

      <div className="download-btn-container">
        <a
          href="/Sudharsan_Ram_M-Resume.pdf"
          download="Sudharsan_Ram_M-Resume.pdf"
          className="download-btn"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
});

export default Resume;
