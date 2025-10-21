import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Footer.css";
import logo from "./assets/logo.webp";
import rece3 from "./assets/rece3.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaClock,
} from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo + Social */}
        <div className="footer-logo">
          <div className="logo-circle">
            <img src={logo} alt="Tiny Steps Logo" />
          </div>
          <div className="round">
            <span className="rou1"> Partnering with Parents,</span>
            <br />
            <span className="rou2">Empowering </span>
            <span className="rou3">Every Child</span>
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com/share/1YjphZeHuo/">
              <FaFacebookF />
            </a>
            <a href="https://www.youtube.com/@tinystepscdc">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/tinysteps.cdc?igsh=c2l3N3dzanRvdDF5">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/tinystepschilddevelopmentcenter">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="footer-section">
          <ul className="services-list">
            <li>
              <Link smooth to="/services">
                <h3>Our Services</h3>
              </Link>
            </li>
            <li>
              <FaAngleRight className="service-icon" />
              <Link smooth to="/applied">
                Applied Behavior Analysis
              </Link>
            </li>
            <li>
              <FaAngleRight className="service-icon" />
              <Link smooth to="/aqua">
                Aqua Therapy
              </Link>
            </li>
            <li>
              <FaAngleRight className="service-icon" />
              <Link smooth to="/behavioral">
                Behavioral Therapy
              </Link>
            </li>
            <li>
              <FaAngleRight className="service-icon" />
              <Link smooth to="/group">
                Group Therapy
              </Link>
            </li>
            <li>
              <FaAngleRight className="service-icon" />
              <Link smooth to="/language">
                Language Therapy
              </Link>
            </li>
            <li>
              <FaAngleRight className="service-icon" />
              <Link smooth to="/music">
                Music and Art Therapy
              </Link>
            </li>
            <li>
              <FaAngleRight className="service-icon" />
              <Link smooth to="/occupational">
                Occupational Therapy
              </Link>
            </li>
            <li>
              <FaAngleRight className="service-icon" />
              <Link smooth to="/physio">
                Physiotherapy
              </Link>
            </li>
            <li>
              <FaAngleRight className="service-icon" />
              <Link smooth to="/special">
                Special Education Plan
              </Link>
            </li>
            <li>
              <FaAngleRight className="service-icon" />
              <Link smooth to="/speech">
                Speech Therapy
              </Link>
            </li>
            <li>
              <FaAngleRight className="service-icon" />
              <Link smooth to="/sensory">
                Sensory Integration Therapy
              </Link>
            </li>
          </ul>
        </div>

        <div className="clinic-wrapper">
          <div className="clinic-image-container">
            <div className="clinic-info-card">
              <img src={rece3} alt="Clinic" className="clinic-image" />
              <h2 className="clinic-title">Tiny Steps – Mahadevapura</h2>
              <a
                href="https://www.google.com/maps/place/Tiny+Steps+Child+Development+Centre+(Pediatric+Rehabilitation+Centre)/@12.9929325,77.6889173,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae11d01c218539:0x64adbca730670700!8m2!3d12.9929325!4d77.6889173!16s%2Fg%2F11vjq_xf6d?entry=ttu&g_ep=EgoyMDI1MDgzMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="clinic-link">
                <span className="clinic-icon">📍</span> LOCATE CLINIC
              </a>

              <div className="clinic-details">
                <p>
                  <FaPhoneAlt color="purple" /> <strong>+91 9886062430</strong>
                </p>
                <p>
                  <FaEnvelope className="iconn" /> tinystepscdc@gmail.com
                </p>
                <p>
                  <FaClock className="iconn" /> Mon – Sun: 7:00 AM – 9:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-left">
          <a href="/privacypolicy">Privacy Policy</a> |
          <a href="/Termsconditions"> Terms & Conditions</a>
        </div>
        <div className="footer-center">
          <p>Copyright © 2025 Tiny Steps CDC | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
