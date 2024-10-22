import React, { useState } from "react";
import "./SlidingAccordion.css"; 
import zeroTouch from "../Assets/slidingAccordion/zero-touch.png";
import brandVisibility from "../Assets/slidingAccordion/brand-visibility.png";
import dataSecurity from "../Assets/slidingAccordion/data-security.png";
import appManagemnet from "../Assets/slidingAccordion/app-mng.png";
import easyToUse from "../Assets/slidingAccordion/easy-to-use.png";
import { useNavigate } from "react-router-dom";

const SlidingAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0); 

  const navigate = useNavigate();

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const slidingAccordionData = [
    {
      title: "Effortless kiosk deployment & management",
      image: `${zeroTouch}`,
      content:
        "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.",
    },
    {
      title: "Customized interface for brand visibility",
      image: `${brandVisibility}`,
      content:
        "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",
    },
    {
      title: "What more can you do with Hexnode kiosk?",
      image: `${dataSecurity}`,
      content:
        "Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.",
    },

    {
      title: "Secure and update your app ecosystem",
      image: `${appManagemnet}`,
      content:
        "Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.",
    },

    {
      title: "Provide an easy-to-use interface for end-users",
      image: `${easyToUse}`,
      content:
        "Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.",
    },
  ];

  return (
    <>
      <div className="sliding-accordion">
        {slidingAccordionData.map((item, index) => (
          <div className="sliding-accordion-item" key={index}>
            {activeIndex === index ? (
              ""
            ) : (
              <div
                className="sliding-accordion-header"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="title">{item.title}</h3>
              </div>
            )}

            <div
              className={`sliding-accordion-content ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <img src={item.image} alt={item.title} />
              <div>
                <h3 className="title">{item.title}</h3>
                <p className="content">{item.content}</p>
                <p
                  onClick={() => navigate("/free-trail")}
                  className="try-for-free"
                  aria-label="try for free"
                >
                  Try for free &gt;
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* larger screen */}
      <div className="sliding-horizontal-accordion">
        <div className="sliding-image-section">
          <img
            key={activeIndex} 
            src={slidingAccordionData[activeIndex]?.image}
            alt={slidingAccordionData[activeIndex]?.title}
            className="sliding-accordion-image"
          />
        </div>

        <div className="sliding-content-section">
          {slidingAccordionData.map((item, index) => (
            <div
              key={index}
              className={`sliding-accordion-item  ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <h3 className="title">{item.title}</h3>
              {activeIndex === index && (
                <>
                  <div className="content">{item.content}</div>
                  <p
                    onClick={() => navigate("/free-trail")}
                    className="try-for-free"
                  >
                    Try for free &gt;
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SlidingAccordion;

