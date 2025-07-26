import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "./loader.css";
import animationData from "../../assert/Clock.json";
// Corrected import path
import StarfieldBackground from "../background/StarfieldBackground";

const Loader = () => {
  return (
    <div className="loader-overlay">
      {/* Render the StarfieldBackground component here */}
      <StarfieldBackground />

      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "250px", width: "250px" }}
      />
    </div>
  );
};

export default Loader;