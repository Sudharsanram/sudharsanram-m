import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/introbar/intro";
import Cont from "./components/contact/cont";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Resume from "./components/resume/resume";
import Internship from "./components/internship/internship";

import './global.css';
import Loader from "./components/loading/loading";

function App() {
  const [loading, setLoading] = useState(true); // 🆕 For loading screen
  const [showResume, setShowResume] = useState(false);
  const resumeRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 🆕 Simulated loading
    return () => clearTimeout(timer);
  }, []);

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

  // 🆕 Show loader before rendering the actual portfolio
  if (loading) {
    return <Loader/>;
  }

  return (
    <div className="App">
      <Navbar onResumeClick={handleResumeClick} />
      <Intro />
      <About />
      <Portfolio />
      <Internship />
      {showResume && <Resume ref={resumeRef} />}
      <Cont />
    </div>
  );
}

export default App;
