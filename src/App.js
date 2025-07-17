// App.js
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/introbar/intro";
import Cont from "./components/contact/cont";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Internship from "./components/internship/internship";
import FullPage from "./components/fullpage/fullpage";
import Loader from "./components/loading/loading";

import './global.css';

const MainPage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const location = useLocation();

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    portfolio: portfolioRef,
    contact: contactRef,
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      const ref = sectionRefs[location.state.scrollTo];
      if (ref?.current) {
        setTimeout(() => {
          ref.current.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <Navbar />
      <div ref={homeRef}>
        <Intro />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <Internship />
      <div ref={contactRef}>
        <Cont />
      </div>
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
