import React, { useEffect, useRef, useState } from 'react';
import image from '../../assert/image.jpg';
import './intro.css';


const roles = ["FULL STACK DEVELOPER", "DEVELOPER"];

const Intro = () => {
  const imgRef = useRef();
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const img = imgRef.current;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 25;
      const y = (e.clientY - innerHeight / 2) / 25;
      img.style.transform = `translate(-50%, -50%) rotateY(${x}deg) rotateX(${-y}deg)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
      setSubIndex((prev) => deleting ? prev - 1 : prev + 1);
      setText(roles[index].substring(0, subIndex));
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    
    <section id="home" className="intro-section">
      <div className="intro-left">
        <span className="hello">
          <span className="txt">
            Hello,<br /><span className="ptxt">I'm</span>
          </span>
          <span className="name"> Sudharsan Ram M<br /></span>
        </span>

        <span className="typewriter-text">{text}<span className="cursor">|</span></span>
      </div>

      <img
        ref={imgRef}
        src={image}
        alt="img"
        className="bg-3d"
      />
    </section>
    
  );
};

export default Intro;
