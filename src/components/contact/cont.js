import React, { useRef, useEffect } from "react";
import "./cont.css";
import emailjs from "emailjs-com";
import FaPaperPlane from "../../assert/icons8-paper-plane-50.png";
import FaEnvelope from "../../assert/icons8-gmail-50.png";
import FaPhone from "../../assert/icons8-call-50.png";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../assert/contactani.json";

const Cont = () => {
  const form = useRef();
  const headingRef = useRef();

  useEffect(() => {
    const target = headingRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting
          ? entry.target.classList.add("show")
          : entry.target.classList.remove("show");
      },
      { threshold: 0.6 }
    );

    if (target) observer.observe(target);
    return () => target && observer.unobserve(target);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_15c14ij", "template_259cnff", form.current, "HFZv1otMS-XUuhiqE")
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch(() => {
        alert("Failed to send message, try again!");
      });
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <h1 className="head animate-in" ref={headingRef}>Contact me</h1>
          <form ref={form} onSubmit={sendEmail}>
            <div className="input-container">
              <label>Full Name</label>
              <input type="text" name="user_name" placeholder="Enter your name" required />
            </div>

            <div className="input-container">
              <label>Email address</label>
              <input type="email" name="user_email" placeholder="Enter email" required />
            </div>

            <div className="input-container">
              <label>Message</label>
              <textarea name="message" placeholder="Enter message" required />
            </div>

            <button type="submit">
              Submit <img src={FaPaperPlane} alt="Send" className="send-icon" />
            </button>
          </form>
        </div>

        <div className="contact-right">
          <Player autoplay loop src={animationData} className="contact-animation" />
          
          <div className="contact-info">
            <div className="icon-text">
              <div className="icon-circle">
                <a href="mailto:sudharsanram.m@gmail.com" target="_blank" rel="noopener noreferrer">
                  <img src={FaEnvelope} alt="Email" className="email" />
                </a>
              </div>
              <span>sudharsanram.m@gmail.com</span>
            </div>

            <div className="icon-text1">
              <div className="icon-circle">
                <img src={FaPhone} alt="Phone" />
              </div>
              <span>+91 9791085106</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cont;
