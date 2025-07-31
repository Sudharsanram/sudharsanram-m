import React, { useState, useEffect, useRef, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/introbar/intro";
import Cont from "./components/contact/cont";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Internship from "./components/internship/internship";
import FullPage from "./components/fullpage/fullpage";
import Loader from "./components/loading/loading";
import StarfieldBackground from "./components/background/StarfieldBackground";

import './global.css';
import Footer from "./components/footer/footer";

const MainPage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const location = useLocation();

  // FIX: Memoizing the refs object to make it a stable dependency for useEffect.
  const sectionRefs = useMemo(() => ({
    home: homeRef,
    about: aboutRef,
    portfolio: portfolioRef,
    contact: contactRef,
  }), []);

  // FIX: This is the most reliable way to handle scrolling.
  useEffect(() => {
    if (location.state?.scrollTo) {
      const ref = sectionRefs[location.state.scrollTo];
      
      // We use a timeout to ensure the browser has finished rendering and calculating
      // the layout before we attempt to scroll. This fixes timing issues.
      const timer = setTimeout(() => {
        if (ref?.current) {
          ref.current.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState({}, document.title);
        }
      }, 100); // 100ms is a safe delay.

      // Cleanup the timer if the component unmounts or location changes again.
      return () => clearTimeout(timer);
    }
  }, [location, sectionRefs]); // Correct dependencies.

  return (
    <>
      <StarfieldBackground />
      <Navbar />

      {/* Attach refs to wrapper divs for components that don't use forwardRef */}
      <div id="home" ref={homeRef}>
        <Intro />
      </div>
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      
      {/* KEY FIX: Pass the ref DIRECTLY to the Portfolio component.
        The `forwardRef` you have in Portfolio.js is designed for this.
        Do NOT wrap it in another div.
      */}
      <Portfolio ref={portfolioRef} />
      
      <Internship />
      
      {/* The Contact section ref is on a wrapper div, which is okay, but less robust. */}
      <div id="contact" ref={contactRef}>
        <Cont />
      </div>
      
      <Footer />
    </>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/resume" element={<FullPage />} />
      </Routes>
    </Router>
  );
}

export default App;
