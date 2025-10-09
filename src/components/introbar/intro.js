import React, { useEffect, useRef, useState } from "react";
import image from "../../assert/image1.jpg";
import "./intro.css";

const roles = ["FULL STACK DEVELOPER", "DEVELOPER"];

const Intro = () => {
  const imgRef = useRef(null);

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = img.getBoundingClientRect();
      const x = e.clientX - (left + width / 2);
      const y = e.clientY - (top + height / 2);

      const rotateX = (-y / 20).toFixed(2);
      const rotateY = (x / 20).toFixed(2);

      img.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      img.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg)";
    };

    img.addEventListener("mousemove", handleMouseMove);
    img.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      img.removeEventListener("mousemove", handleMouseMove);
      img.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));
      setText(roles[index].substring(0, subIndex));
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <section id="home" className="intro-section">
      <div className="intro-left">
        <span className="hello">
          <span className="txt">
            Hello,
            <br />
            <span className="ptxt">I'm<br /></span>
          </span>
          <span className="name">
            Sudharsan Ram M
            <br />
          </span>
        </span>
        <span className="typewriter-text">
          {text}
          <span className="cursor">|</span>
        </span>
      </div>

      <img ref={imgRef} src={image} alt="profile" className="bg-3d" />
    </section>
  );
};

export default Intro;
