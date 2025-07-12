import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "./loader.css";
import animationData from "../../assert/Clock.json";

const Loader = () => {
  return (
    <div className="loader-overlay">
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
