import React from "react";
import "./SignupForm.css";

const SignupForm = () => {
  return (
    <div className="sign-up-form">
      <input
        type="text"
        className="email-inputBox"
        placeholder="Your Work Email"
        aria-label="email input box"
      />
      <button className="button" aria-label="get started">Get Started</button>
    </div>
  );
};

export default SignupForm;
