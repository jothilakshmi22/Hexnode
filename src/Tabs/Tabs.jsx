import React, { useState, useRef, useEffect } from "react";
import "./Tabs.css";
import greenCheck from "../Assets/check.png";
import { kioskModesData as data } from "../kioskModesJson";

function Tabs() {
  const [activeTab, setActiveTab] = useState("Single App Kiosk");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");

  const tabs = [
    "Single App Kiosk",
    "Multi-App Kiosk",
    "Web-based Kiosk",
    "Digital Signages",
    "ASAM Kiosk",
  ];

  const tabContent = {
    "Single App Kiosk": data[0] || {},
    "Multi-App Kiosk": data[1] || {},
    "Web-based Kiosk": data[2] || {},
    "Digital Signages": data[3] || {},
    "ASAM Kiosk": data[4] || {},
  };

  const tabContainerRef = useRef(null);

  const handleTabChange = (tab, index) => {
    if (index === currentIndex) return;
    setSlideDirection(index > currentIndex ? "slide-left" : "slide-right");
    setTimeout(() => {
      setActiveTab(tab);
      setCurrentIndex(index);
      scrollToTab(index);
    }, 200);
  };

  const scrollToTab = (index) => {
    const tabContainer = tabContainerRef.current;
    const tabWidth = tabContainer.children[0]?.offsetWidth || 0;
    const visibleTabs = Math.floor(tabContainer.offsetWidth / tabWidth);

    let scrollPosition;
    if (index > currentIndex) {
      scrollPosition = (index - visibleTabs + 1) * tabWidth;
    } else {
      scrollPosition = index * tabWidth;
    }

    if (scrollPosition < 0) scrollPosition = 0;

    tabContainer.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTab(currentIndex);
  }, [currentIndex]);

  const activeTabContent = tabContent[activeTab] || {};

  return (
    <div className="tab">
      <div className="tab-nav">
        <div className="tabs" ref={tabContainerRef}>
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={`tab-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => handleTabChange(tab, index)}
            >
              <p>{tab}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="tab-content">
        <div className={`tab-pane ${slideDirection}`}>
          {activeTabContent.title && (
            <div className="selected-tab-content">
              <div className="tab-left">
                <h3>{activeTabContent.contextTitle}</h3>

                {Array.isArray(activeTabContent.points) &&
                  activeTabContent.points.map((point, idx) => (
                    <div className="points" key={idx}>
                      <img
                        src={greenCheck}
                        alt="check"
                        className="check-image"
                      />
                      <div>{point}</div>
                    </div>
                  ))}
              </div>

              <div className="tab-right">
                {activeTabContent.image && (
                  <img
                    src={activeTabContent.image}
                    alt={activeTabContent.title}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
