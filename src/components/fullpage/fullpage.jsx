import React from 'react';
import Navbar from '../navbar/navbar';
import './fullpage.css';
import dwn from '../../assert/icons8-export-pdf.gif';

const DownloadButton = () => (
  <div className="download-btn-container">
    <a
      href="/Sudharsan_Ram_M-Resume.pdf"
      download="Sudharsan_Ram_M-Resume.pdf"
      className="download-btn"
    >
      Download Resume <img src={dwn} alt="Download Icon" className="dwn" />
    </a>
  </div>
);

const FullPage = ({ onResumeClick }) => {
  return (
    <div className="full-resume-page">
      {/* ✅ Pass down the scroll handler */}
      <Navbar onResumeClick={onResumeClick} />

      <DownloadButton />

      <div className="resume-wrapper">
        <iframe
          src="/Sudharsan_Ram_M-Resume.pdf"
          title="Sudharsan Ram Resume PDF"
          className="resume-iframe"
          aria-label="Embedded resume PDF"
        ></iframe>
      </div>

      <DownloadButton />
    </div>
  );
};

export default FullPage;
