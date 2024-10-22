import React from "react";
import "./PlatformSupport.css";
import andriod from "../Assets/platformSupport/andriod.png";
import andriodTv from "../Assets/platformSupport/andriodTv.png";
import fire from "../Assets/platformSupport/fire.png";
import ios from "../Assets/platformSupport/ios.png";
import window from "../Assets/platformSupport/window.png";
import apple from "../Assets/platformSupport/apple.png";

const PlatformSupport = () => {
  return (
    <div className="platform-support">
      <img src={andriod} alt="andriod" />
      <img src={window} className="window" alt="window" />
      <img className="ios" src={ios} alt="ios" />
      <img className="andriodTv" src={andriodTv} alt="andriod tv" />
      <img className="appleTv" src={apple} alt="apple tv" />
      <img src={fire} className="fire" alt="fire" />
    </div>
  );
};

export default PlatformSupport;
