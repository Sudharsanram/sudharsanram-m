// App.js
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/introbar/intro";
import Cont from "./components/contact/cont";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Internship from "./components/internship/internship";
import FullPage from "./components/fullpage/fullpage"; // Assuming this is your Resume page
import Loader from "./components/loading/loading";
import StarfieldBackground from "./components/background/StarfieldBackground";

import './global.css';
import Footer from "./components/footer/footer";

const MainPage = () => {
  // Create refs for each scrollable section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const location = useLocation(); // Hook to access the current URL and its state

  // Map section names to their corresponding refs
  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    portfolio: portfolioRef,
    contact: contactRef,
  };

  // Effect to handle scrolling when location state changes
  useEffect(() => {
    // Check if there's a 'scrollTo' property in the location state
    if (location.state?.scrollTo) {
      const ref = sectionRefs[location.state.scrollTo]; // Get the ref for the target section
      if (ref?.current) { // Ensure the ref and its current element exist
        // Use a small timeout to ensure the DOM has updated and the element is ready
        // before attempting to scroll. This helps with navigation transitions.
        setTimeout(() => {
          ref.current.scrollIntoView({ behavior: "smooth" }); // Smoothly scroll to the element

          // Clear the scrollTo state from history to prevent re-scrolling
          // if the component re-renders or user navigates back/forward
          window.history.replaceState({}, document.title);
        }, 100); // Reduced delay to 100ms
      }
    }
    // Dependency array includes location to re-run effect when location changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <StarfieldBackground /> {/* Your background component */}
      <Navbar /> {/* Your navigation bar */}

      {/* Attach refs and add section classes for scroll-margin-top */}
      <div id="home" ref={homeRef} className="home-section">
        <Intro />
      </div>
      <div id="about" ref={aboutRef} className="about-section">
        <About />
      </div>
      <div id="portfolio" ref={portfolioRef} className="portfolio-section">
        <Portfolio />
      </div>
      {/* Internship component might not need a ref if it's not a direct scroll target */}
      <Internship />
      <div id="contact" ref={contactRef} className="contact-section">
        <Cont />
      </div>
       <Footer />
    </>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate a loading period
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Show loader while loading
  if (loading) return <Loader />;

  return (
    <Router>
      <Routes>
        {/* Route for the main portfolio page with all sections */}
        <Route path="/" element={<MainPage />} />
        {/* Route for the separate Resume page */}
        <Route path="/resume" element={<FullPage />} />
      </Routes>
    </Router>
  );
}

export default App;
