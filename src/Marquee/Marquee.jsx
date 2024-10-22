import React, { useEffect, useState } from "react";
import "./Marquee.css";
import wolt from "../Assets/marquee/wolt.png";
import marriott from "../Assets/marquee/marriott.png";
import merck from "../Assets/marquee/merck.png";
import hilton from "../Assets/marquee/hilton.png";
import group from "../Assets/marquee/group.png";
import lowes from "../Assets/marquee/lowes.png";
import polaris from "../Assets/marquee/polaris.png";

const Marquee = () => {
  const logos = [
    wolt, marriott, merck, hilton, group, lowes, polaris,
    wolt, marriott, merck, hilton, group, lowes, polaris,
    wolt, marriott, merck, hilton, group, lowes, polaris,
    wolt, marriott, merck, hilton, group, lowes, polaris,
    wolt, marriott, merck, hilton, group, lowes, polaris,
    wolt, marriott, merck, hilton, group, lowes, polaris,
  ];

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const togglePause = () => {
      setIsPaused(true);
      setTimeout(() => {
        setIsPaused(false);
      }, 800); // Pause for 0.8 seconds
    };

    const intervalId = setInterval(() => {
      togglePause();
    }, 1300); // Run every 1.3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="marquee-container container-width">
      <div className={`marquee-content ${isPaused ? "paused" : ""}`}>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`} 
            className="marquee-logo"
          />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
