import React, { useState, useEffect } from "react";
import "./BreathingCircle.css";

function BreathingCircle() {
  const [breathingIn, setBreathingIn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBreathingIn((prevBreathingIn) => !prevBreathingIn);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFullscreenClick = () => {
    if (document.fullscreenEnabled) {
      document.documentElement.requestFullscreen();
    }
  };

  return (
    <div className="container-fluid h-100 p-0" onClick={handleFullscreenClick}>
      <div className={`row justify-content-center align-items-center h-100 ${breathingIn ? "bg-primary" : "bg-danger"}`}>
        <div className="col text-center">
          <div className={`circle ${breathingIn ? "breathing-in" : "breathing-out"}`}>
            <div className="breath-circle"></div>
            <div className="breath-text">{breathingIn ? "Inhale" : "Exhale"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreathingCircle;
