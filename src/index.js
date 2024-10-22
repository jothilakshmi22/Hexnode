import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import FreeTrail from "./FreeTrail/FreeTrail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/free-trail" element={<FreeTrail />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
