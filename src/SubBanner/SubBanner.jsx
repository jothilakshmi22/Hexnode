import React from "react";
import "./SubBanner.css";

const SubBanner = () => {
  return (
    <div className="sub-banner-wrapper">
      <div className="sub-banner container-width">
        <div className="sub-banner-line pr sub-banner-hover-effect">
          <div className="sub-banner-content">
            <h1 className="IDC"> IDC </h1>
            <p>
              Hexnode is listed as a leader and a major player in IDC
              MarketScape UEM Vendors Assessment Report 2024.
            </p>
          </div>
          <div className="horizontal-line"></div>
        </div>
        <div className="sub-banner-line px sub-banner-hover-effect">
          <div className="sub-banner-content">
            <h1>Gartner</h1>
            <p>
              Hexnode mentioned as a Notable Vendore in Midmarket Context: Magic
              Quadrant for Unified Endpoint Management tools 2022.
            </p>
          </div>
          <div className="horizontal-line"></div>
        </div>
        <div className="pl sub-banner-hover-effect sub-banner-content">
          <h1 className="pt-serif">
            F <span> orrester</span>
          </h1>
          <p>
            Forrester includes Hexnode as a Notable vendor in The Unified
            Endpoint Management Landscape Q3 2023.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubBanner;

