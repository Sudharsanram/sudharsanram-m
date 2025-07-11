import React, { useState, useRef } from "react";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/introbar/intro";
import Cont from "./components/contact/cont";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Resume from "./components/resume/resume";
import './global.css';
import Certificate from "./components/certificate/certificate";

function App() {
  const [showResume, setShowResume] = useState(false);
  const resumeRef = useRef(null);

  const handleResumeClick = () => {
    setShowResume((prev) => {
      const next = !prev;
      setTimeout(() => {
        if (next && resumeRef.current) {
          resumeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return next;
    });
  };

  return (
    <div className="App">
      <Navbar onResumeClick={handleResumeClick} />

      <Intro />
      <About />
      <Portfolio />
      <Certificate/>
      {showResume && <Resume ref={resumeRef} />}
      <Cont />
    </div>
  );
}

export default App;
