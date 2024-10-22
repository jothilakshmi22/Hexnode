import React from "react";
import devices from "../Assets/devices.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner container-width">
        <div className="banner-left">
          <h1 className="banner-text">
            Turn your devices into kiosks in a few minutes with Hexnode UEM
          </h1>
          <div className="banner-form">
            <input
              type="text"
              className="email-inputBox"
              placeholder="Your Work Email"
              aria-label="email input box"
            />
            <button className="button" aria-label="get started now">Get Started Now!</button>
          </div>
        </div>
        <div className="banner-right">
          <img src={devices} alt="devices" className="devices-image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
