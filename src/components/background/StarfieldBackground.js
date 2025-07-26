import React, { useEffect } from "react";
import createStarfield from "./starfieldAnimation";
import "./starfield.css";

const StarfieldBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById("stars");
    if (canvas) createStarfield(canvas);
  }, []);

  return <canvas id="stars" className="starfield-canvas"></canvas>;
};

export default StarfieldBackground;
