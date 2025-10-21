import React, { useState } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

import Applied from "./Applied";
import Group from "./Group";
import Language from "./Language";
import Music from "./Music";

import Speech from "./Speech";
import Occupational from "./Occupational";
import Behavioral from "./Behavioral";
import Physio from "./Physio";
import Sensory from "./Sensory";
import Special from "./Special";
import Asdscreening from "./Asdscreening";
import Aqua from "./Aqua";

import Development from "./Development";
import Academic from "./Academic";
import After from "./After";
import Earlyinter from "./Earlyinter";
import Iq from "./Iq";
import Online from "./Online";
import School from "./School";

import Nopage from "./Nopage";
import Diagnosis from "./Diagnosis.jsx";
import Termsconditions from "./Termsconditions";
import Privacypolicy from "./Privacypolicy";

export default function Abc() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Services" element={<Services />} />
          <Route path="contact" element={<Contact />} />

          <Route path="Applied" element={<Applied />} />
          <Route path="Group" element={<Group />} />
          <Route path="language" element={<Language />} />
          <Route path="Music" element={<Music />} />
          <Route path="Speech" element={<Speech />} />
          <Route path=" Aqua" element={<Aqua />} />
          <Route path="Occupational" element={<Occupational />} />
          <Route path="Behavioral" element={<Behavioral />} />
          <Route path="physio" element={<Physio />} />
          <Route path="Sensory" element={<Sensory />} />
          <Route path="Special" element={<Special />} />
          <Route path="Asdscreening" element={<Asdscreening />} />
          <Route path="Diagnosis" element={<Diagnosis />} />
          <Route path="Aqua" element={<Aqua />} />

          <Route path="Development" element={<Development />} />
          <Route path="Academic" element={<Academic />} />
          <Route path="After" element={<After />} />
          <Route path="Earlyinter" element={<Earlyinter />} />
          <Route path="Iq" element={<Iq />} />
          <Route path="Online" element={<Online />} />
          <Route path="School" element={<School />} />

          <Route path="Termsconditions" element={<Termsconditions />} />
          <Route path="Privacypolicy" element={<Privacypolicy />} />

          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Abc />
  </StrictMode>
);
