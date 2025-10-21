import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "./assets/logo.webp";
import { HashLink as Link } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  const [generalOpen, setGeneralOpen] = useState(false);

  const location = useLocation();

  const isActive = (path) =>
    location.pathname.toLowerCase() === path.toLowerCase();

  const isServicesActive = () =>
    [
      "/services",
      "/applied",
      "/aqua",
      "/behavioral",
      "/group",
      "/language",
      "/music",
      "/occupational",
      "/physio",
      "/special",
      "/speech",
      "/sensory",
    ].includes(location.pathname.toLowerCase());

  const isAssessmentActive = () =>
    ["/asdscreening", "/diagnosis", "/development"].includes(
      location.pathname.toLowerCase()
    );

  const isGeneralActive = () =>
    [
      "/academic",
      "/after",
      "/earlyinter",
      "/iq",
      "/online",
      "/school",
    ].includes(location.pathname.toLowerCase());

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/Home">
          <img className="logo-1" src={logo} alt="Logo" />
        </a>
        <h3 className="Log">Child Development Center</h3>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`menu ${menuOpen ? "open" : ""}`}>
        <li>
          <Link
            to="/Home"
            className={isActive("/home") ? "active" : ""}
            onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/About"
            className={isActive("/about") ? "active" : ""}
            onClick={handleLinkClick}>
            About
          </Link>
        </li>

        {/* Our Services */}
        <li
          className={`dropdown centered-parent ${
            isServicesActive() ? "active" : ""
          }`}>
          <div
            className="dropbtn"
            onClick={(e) => {
              if (window.innerWidth <= 1041) {
                e.preventDefault();
                setServicesOpen(!servicesOpen);
              }
            }}>
            <span>
              <Link
                to="/Services"
                className={isActive("/services") ? "active" : ""}
                onClick={handleLinkClick}>
                Our&nbsp;Services
              </Link>
            </span>
            <span className={`arroww ${servicesOpen ? "open" : ""}`}></span>
          </div>

          <ul className={`dropdown-content ${servicesOpen ? "show" : ""}`}>
            <li>
              <Link
                to="/applied"
                className={isActive("/applied") ? "active" : ""}
                onClick={handleLinkClick}>
                Applied Behavior Analysis
              </Link>
            </li>
            <li>
              <Link
                to="/aqua"
                className={isActive("/aqua") ? "active" : ""}
                onClick={handleLinkClick}>
                Aqua Therapy
              </Link>
            </li>
            <li>
              <Link
                to="/behavioral"
                className={isActive("/behavioral") ? "active" : ""}
                onClick={handleLinkClick}>
                Behavioral Therapy
              </Link>
            </li>
            <li>
              <Link
                to="/group"
                className={isActive("/group") ? "active" : ""}
                onClick={handleLinkClick}>
                Group Therapy
              </Link>
            </li>
            <li>
              <Link
                to="/language"
                className={isActive("/language") ? "active" : ""}
                onClick={handleLinkClick}>
                Language Therapy
              </Link>
            </li>
            <li>
              <Link
                to="/music"
                className={isActive("/music") ? "active" : ""}
                onClick={handleLinkClick}>
                Music and Art Therapy
              </Link>
            </li>
            <li>
              <Link
                to="/occupational"
                className={isActive("/occupational") ? "active" : ""}
                onClick={handleLinkClick}>
                Occupational Therapy
              </Link>
            </li>
            <li>
              <Link
                to="/physio"
                className={isActive("/physio") ? "active" : ""}
                onClick={handleLinkClick}>
                Physiotherapy
              </Link>
            </li>
            <li>
              <Link
                to="/special"
                className={isActive("/special") ? "active" : ""}
                onClick={handleLinkClick}>
                Special Education Plan
              </Link>
            </li>
            <li>
              <Link
                to="/speech"
                className={isActive("/speech") ? "active" : ""}
                onClick={handleLinkClick}>
                Speech Therapy
              </Link>
            </li>
            <li>
              <Link
                to="/sensory"
                className={isActive("/sensory") ? "active" : ""}
                onClick={handleLinkClick}>
                Sensory Integration Therapy
              </Link>
            </li>
          </ul>
        </li>

        {/* Assessment Services */}
        <li className={`dropdown ${isAssessmentActive() ? "active" : ""}`}>
          <div
            className="dropbtn"
            onClick={(e) => {
              if (window.innerWidth <= 1041) {
                e.preventDefault();
                setAssessmentOpen(!assessmentOpen);
              }
            }}>
            <span className="menu-title">Assessment&nbsp; Services</span>
            <span className={`arroww ${assessmentOpen ? "open" : ""}`}></span>
          </div>

          <ul className={`dropdown-assessment ${assessmentOpen ? "show" : ""}`}>
            <li>
              <Link
                to="/asdscreening"
                className={isActive("/asdscreening") ? "active" : ""}
                onClick={handleLinkClick}>
                ASD Screening
              </Link>
            </li>
            <li>
              <Link
                to="/diagnosis"
                className={isActive("/diagnosis") ? "active" : ""}
                onClick={handleLinkClick}>
                Diagnosis
              </Link>
            </li>
            <li>
              <Link
                to="/development"
                className={isActive("/development") ? "active" : ""}
                onClick={handleLinkClick}>
                Developmental Screening
              </Link>
            </li>
          </ul>
        </li>

        {/* General Services */}
        <li className={`dropdown ${isGeneralActive() ? "active" : ""}`}>
          <div
            className="dropbtn"
            onClick={(e) => {
              if (window.innerWidth <= 1041) {
                e.preventDefault();
                setGeneralOpen(!generalOpen);
              }
            }}>
            <span className="menu-title">General&nbsp; Services</span>
            <span className={`arroww ${generalOpen ? "open" : ""}`}></span>
          </div>

          <ul className={`dropdown-content ${generalOpen ? "show" : ""}`}>
            <li>
              <Link
                to="/academic"
                className={isActive("/academic") ? "active" : ""}
                onClick={handleLinkClick}>
                Academic Skill Deficit Program
              </Link>
            </li>
            <li>
              <Link
                to="/after"
                className={isActive("/after") ? "active" : ""}
                onClick={handleLinkClick}>
                After School Club
              </Link>
            </li>
            <li>
              <Link
                to="/earlyinter"
                className={isActive("/earlyinter") ? "active" : ""}
                onClick={handleLinkClick}>
                Early Intervention Program
              </Link>
            </li>
            <li>
              <Link
                to="/iq"
                className={isActive("/iq") ? "active" : ""}
                onClick={handleLinkClick}>
                IQ Testing
              </Link>
            </li>
            <li>
              <Link
                to="/online"
                className={isActive("/online") ? "active" : ""}
                onClick={handleLinkClick}>
                Online Intervention Program
              </Link>
            </li>
            <li>
              <Link
                to="/school"
                className={isActive("/school") ? "active" : ""}
                onClick={handleLinkClick}>
                School Readiness Program
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link
            to="/Contact"
            className={isActive("/contact") ? "active" : ""}
            onClick={handleLinkClick}>
            Contact
          </Link>
        </li>

        <li>
          <a
            href="https://wa.me/919886062430"
            target="_blank"
            rel="noopener noreferrer">
            <button className="appointment-btn">Book Appointment</button>
          </a>
        </li>
        <li>
          <a
            href="https://dev.tinystepscdc.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className={isActive("/Sign in") ? "active" : ""}
            onClick={handleLinkClick}>
            Sign In
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
