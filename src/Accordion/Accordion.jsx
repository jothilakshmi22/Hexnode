import React, { useState } from "react";
import "./Accordion.css";
import greenCheck from "../Assets/check.png";
import { FaChevronDown } from "react-icons/fa";
import { kioskModesData as data } from "../kioskModesJson";
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div
            className={`accordion-header ${
              activeIndex === index && "bg-black"
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <h3>{item.title}</h3>
            <span
              className={`accordion-icon ${
                activeIndex === index ? "rotate" : ""
              }`}
            >
              <FaChevronDown />
            </span>
          </div>
          <div
            className={`accordion-content ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <img src={item.image} alt={item.title}  />
            <h3 className="accordion-context-title">{item.contextTitle}</h3>
            {item.points.map((point) => (
              <div className="accordion-context-points">
                <img src={greenCheck} alt="check" className="check-image" />
                <p> {point} </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
