import React, { useEffect, useState } from "react";
import "./Carousel.css";
import pic1 from "../Assets/carousel/pic1.png";
import pic2 from "../Assets/carousel/pic2.png";
import pic3 from "../Assets/carousel/pic3.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const content = [
    {
      image: pic2,
      title: "Hexnode is of great value. Works great with Android and iOS!",
      name: "Justin Modrak",
      role: "Technology Coordinator",
      additionInfo: "East Troy Community School District",
    },
    {
      image: pic1,
      title:
        "Most complete MDM solution I found, and I tested many of them, including major names",
      name: "Dalibor Kruljac",
      additionInfo: "KAMELEYA LTD",
    },
    {
      image: pic3,
      title: "It seemed to be in-line with everything we were looking at.",
      name: "Chris Robinson",
      role: "Executive Account Manager, NCS",
    },
  ];

  const totalSlides = content.length; // Total number of slides

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        if (direction === 1 && prevIndex === totalSlides - 1) {
          setDirection(-1); // Start moving backward
          return prevIndex - 1;
        } else if (direction === -1 && prevIndex === 0) {
          setDirection(1); // Start moving forward
          return prevIndex + 1;
        } else {
          return prevIndex + direction; // Move based on the current direction
        }
      });
    }, 60000); // Auto-scroll every 1 minute (60000ms)

    return () => clearInterval(interval); //Clean up
  }, [direction]);

  const handlePrevClick = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      setDirection(-1); // Manually switch to backward scrolling
    }
  };

  const handleNextClick = () => {
    if (activeIndex < totalSlides - 1) {
      setActiveIndex(activeIndex + 1);
      setDirection(1); // Manually switch to forward scrolling
    }
  };

  return (
    <>
      <div className="carousel-container">
        <button
          aria-label="previous click"
          className="carousel-icon"
          onClick={handlePrevClick}
          disabled={activeIndex === 0 && direction === -1} // Disable if at first and moving backward
        >
          <MdKeyboardArrowLeft />
        </button>

        <div className="carousel-content">
          <img
            src={content[activeIndex].image}
            alt={content[activeIndex].name}
          />
          <div>
            <h2>"{content[activeIndex].title}"</h2>
            <h3 className="author-name">{content[activeIndex].name}</h3>
            <p>{content[activeIndex].role}</p>
            <p>{content[activeIndex].additionInfo}</p>
          </div>
        </div>

        <button
          aria-label="next click"
          className="carousel-icon"
          onClick={handleNextClick}
          disabled={activeIndex === totalSlides - 1 && direction === 1} // Disable if at last and moving forward
        >
          <MdKeyboardArrowRight />
        </button>
      </div>

      {/* Small Carosel */}
      <div className="carousel-small-container">
        <div className="carousel-content">
          <img
            src={content[activeIndex].image}
            alt={content[activeIndex].name}
          />
          <div>
            <h2>"{content[activeIndex].title}"</h2>
            <h3 className="author-name">{content[activeIndex].name}</h3>
            <p>{content[activeIndex].role}</p>
            <p>{content[activeIndex].additionInfo}</p>
          </div>
        </div>

        <div className="carousel-button">
          <button
            aria-label="previous click"
            className="carousel-icon"
            onClick={handlePrevClick}
            disabled={activeIndex === 0 && direction === -1} // Disable if at first and moving backward
          >
            <MdKeyboardArrowLeft />
          </button>

          <button
            aria-label="next click"
            className="carousel-icon"
            onClick={handleNextClick}
            disabled={activeIndex === totalSlides - 1 && direction === 1} // Disable if at last and moving forward
          >
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
