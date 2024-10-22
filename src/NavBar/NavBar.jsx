import React from "react";
import { useEffect, useState } from "react";
import logoBlack from "../Assets/logo.png";
import logoWhite from "../Assets/whiteLogo.png";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  const [scrollCount, setScrollCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = () => {
    setScrollCount(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleChange);
  }, []);
  return (
    <div
      className={`nav-wrapper ${
        (isOpen === false) | (isOpen === true) ? "navbar-menu-wrapper" : ""
      } ${scrollCount > 0 ? "scroll" : "scroll-0"}`}
    >
      <nav className="container-width">
        <div>
          <img className="logo logo-white" alt="hexnode logo" src={logoWhite} />
          <img className="logo logo-black" src={logoBlack} alt="hexnode logo"/>
        </div>
        <div className="navbar-button">
          <button className="button" aria-label="free trail" onClick={() => navigate("/free-trail")}>
            14 Day Free Trail
          </button>
        </div>

        <div className="navbar-menu">
          {isOpen && <div className="overlay"> </div>}
          <div className="burger-menu" onClick={toggleMenu}>
            <div className={isOpen ? "line line1 open" : "line line1"}></div>
            <div className={isOpen ? "line line2 open" : "line line2"}></div>
            <div className={isOpen ? "line line3 open" : "line line3"}></div>
          </div>

          <div className={isOpen ? "menu open" : "menu"}>
            <div></div>
            <button
            aria-label="free trail"
              className="button model-button"
              onClick={() => navigate("/free-trail")}
            >
              14 Day Free Trail
            </button>
            <p> Login</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
