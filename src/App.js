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

    const sectionRefs = useMemo(() => ({
        home: homeRef,
        about: aboutRef,
        portfolio: portfolioRef,
        contact: contactRef,
    }), []);

    useEffect(() => {
        if (location.state?.scrollTo) {
            const ref = sectionRefs[location.state.scrollTo];
            const timer = setTimeout(() => {
                if (ref?.current) {
                    ref.current.scrollIntoView({ behavior: "smooth" });
                    // Optional: Clean the state after scrolling to prevent re-scrolling on refresh
                    window.history.replaceState({}, document.title, window.location.pathname);
                }
            }, 100);

            return () => clearTimeout(timer);
        }
    }, [location, sectionRefs]);

    return (
        <>
            <StarfieldBackground />
            <Navbar />
            <div id="home" ref={homeRef}>
                <Intro />
            </div>
            <div id="about" ref={aboutRef}>
                <About />
            </div>
            <div id="portfolio" ref={portfolioRef}>
                <Portfolio />
            </div>
            <Internship />
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