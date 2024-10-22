import React from "react";
import logoWhite from "../Assets/whiteLogo.png";
import "./FreeTrail.css";
import AmericanFlag from "../Assets/America-flag.webp";
import pic1 from "../Assets/carousel/pic3.png";
import { useNavigate } from "react-router-dom";

const FreeTrail = () => {
  const navigate = useNavigate();
  return (
    <div className="free-trail-container">
      <div className="free-trail-left">
        <div className="free-trail-header">
          <img src={logoWhite} alt="logo" onClick={() => navigate("/")} />

          <select>
            <option value="English" selected>
              English
            </option>
            <option value="spanish">Spanish</option>
            <option value="tamil">Tamil</option>
          </select>
        </div>
        <div>
          <h1>Try Hexnode free for 14 days</h1>
          <div>
            <input
              type="text"
              className="email-inputBox free-trail-inputBox"
              placeholder="Your Work Email"
              aria-label="email input box"
            />
            <button className="button free-trail-button" aria-label="get start button">Get Started</button>
          </div>
        </div>

        <div className="footer-toll-free">
          <footer>
            <img
              src={AmericanFlag}
              alt="American flag"
              className="flag"
            />
            <p> +1-833-HEXNODE(439-6633) (Toll Free)</p>
          </footer>
          <footer>
            <img
              src={AmericanFlag}
              alt="American flag"
              className="flag"
            />
            <p>+44-800-3689920 (Toll Free)</p>
          </footer>
        </div>
      </div>
      <div className="free-trail-right">
        <p>
          It seemed to be in-line with everything we were looking at so wasn't a
          bargain, I was the most impressed with what Hexnode had offered
          compared to the others.
        </p>
        <img src={pic1} aria-label="person image"  />
        <div className="name">Chris Robinson</div>
        <div>Executive Account Manager, NCS</div>
      </div>
    </div>
  );
};

export default FreeTrail;
