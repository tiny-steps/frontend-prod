import React from "react";
import "./Applied.css";
import png6 from "./assets/png6.jpeg";
import phy4 from "./assets/phy4.png";
import phy3 from "./assets/phy3.png";
import phy8 from "./assets/phy8.webp";

import { useNavigate } from "react-router-dom";

// Icons
import {
  FaBalanceScale,
  FaAlignLeft,
  FaRunning,
  FaFirstAid,
  FaUserCheck,
  FaPlayCircle,
  FaClipboardList,
  FaTasks,
  FaChild,
  FaCogs,
  FaWalking,
  FaChartLine,
} from "react-icons/fa";

function Physio() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Header */}
      <div className="text">
        <div> OUR SERVICES</div>
        <h1> Physiotherapy </h1>
      </div>

      {/* What is Physio */}
      <div className="card-container">
        <div className="card">
          {/* Left Side */}
          <div className="card-text">
            <h2>What is Physiotherapy?</h2>
            <p>
              Physiotherapy for children focuses on improving physical strength,
              mobility, posture, and coordination. It helps children develop
              essential motor skills, recover from injuries, and overcome
              movement challenges through engaging, play‑based exercises and
              therapeutic techniques.
            </p>
          </div>

          {/* Right Side */}
          <div className="card-image">
            <img src={phy8} alt="Physiotherapy" />
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section className="benefits-section">
        <h2 className="benefits-title">Key Benefits of Physiotherapy</h2>
        <div className="benefits-container">
          <div className="benefit-card pink">
            <FaBalanceScale className="benefit-icon" />
            <p>Strength, Balance & Coordination</p>
          </div>
          <div className="benefit-card purple">
            <FaAlignLeft className="benefit-icon" />
            <p>Supports Posture & Alignment</p>
          </div>
          <div className="benefit-card orange">
            <FaRunning className="benefit-icon" />
            <p>Mobility & Flexibility</p>
          </div>
          <div className="benefit-card green">
            <FaFirstAid className="benefit-icon" />
            <p>Recovery from Injuries</p>
          </div>
          <div className="benefit-card blue">
            <FaUserCheck className="benefit-icon" />
            <p>Builds Confidence</p>
          </div>
          <div className="benefit-card yellow">
            <FaPlayCircle className="benefit-icon" />
            <p>Active Play & Sports</p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="how-section">
        <h2 className="how-title">How Physiotherapy Works</h2>
        <div className="how-container">
          <div className="how-card">
            <FaClipboardList className="how-icon" />
            <h3>Assessment</h3>
            <p>Posture, movement & strength evaluation</p>
          </div>
          <div className="how-card">
            <FaTasks className="how-icon" />
            <h3>Individualized Plan</h3>
            <p>Custom therapy based on needs</p>
          </div>
          <div className="how-card">
            <FaChild className="how-icon" />
            <h3>Play-Based Exercises</h3>
            <p>Fun activities for motor skills</p>
          </div>
          <div className="how-card">
            <FaCogs className="how-icon" />
            <h3>Therapy Equipment</h3>
            <p>Balls, boards & stretching</p>
          </div>
          <div className="how-card">
            <FaWalking className="how-icon" />
            <h3>Posture & Gait Training</h3>
            <p>Walking & alignment improvement</p>
          </div>
          <div className="how-card">
            <FaChartLine className="how-icon" />
            <h3>Progress Tracking</h3>
            <p>Regular reviews with parents</p>
          </div>
        </div>
      </section>
      <div className="image-card">
        <img src={phy4} alt="Therapist and child working at table" />
      </div>

      {/* Challenges */}
      <div className="child-support-container">
        <div className="left-box">
          <img
            src={png6}
            alt="Child engaged in structured task"
            className="structured-image"
          />
        </div>
        <div className="right-box">
          <h2>Helps in addressing below challenges for your child</h2>
          <ul className="challenges-list">
            <li>Walking, running, or climbing difficulties</li>
            <li>Poor balance, posture, or muscle strength</li>
            <li>Developmental motor delays</li>
            <li>Recovery after injury or surgery</li>
            <li>Joint or muscle stiffness</li>
            <li>Low confidence in physical activities</li>
          </ul>
        </div>
      </div>

      {/* Session */}
      <div className="therapy-container">
        <div className="therapy-content">
          <h2>What to Expect from a Physiotherapy Session?</h2>
          <ul>
            <li>45–60 minute sessions with structured activities</li>
            <li> Movement-based, play-oriented exercises for engagement</li>
            <li>Strength, flexibility, and coordination training</li>
            <li>Use of therapy balls, balance boards, and obstacle courses</li>
            <li>Safe environment encouraging independence and mobility</li>
            <li>Guidance for parents to continue exercises at home</li>
            <li> A positive, energetic, and motivating experience</li>
          </ul>
        </div>
        {/* Right Side */}
        <div className="therapy-image-card">
          <img
            src={phy3} // Replace with your real image
            alt="Therapist guiding child at Tiny Steps Clinic"
          />
        </div>
      </div>

      {/* Who Can Benefit */}
      <div className="benefit-container">
        <div className="therapy-content">
          <h2>Who Can Benefit?</h2>
          <ul>
            <li>
              Children with developmental delays, kids recovering from injuries
              or surgeries,
            </li>
            <li>
              childens with posture balance issues, kids with low muscle tone or
              coordination problems
            </li>
            <li>
              basically any child who needs support building physical strength
              and confidence.
            </li>
          </ul>
          <div className="quote-line">
            At Tiny Steps, physiotherapy helps children move freely,build
            strength, and enjoy an active, confident life.
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-container">
        <div className="clin">
          Support Your Child’s Growth with Physiotherapy
        </div>
        <p>
          Book a session today at Tiny Steps Clinic and help your child thrive.
        </p>
        <div className="cta-buttons">
          <a
            href="https://wa.me/919886062430"
            target="_blank"
            rel="noreferrer"
            className="btn primary-btn">
            Book a Session
          </a>
          <button
            onClick={() => {
              navigate("/contact");
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
            className="btn secondary-btn">
            Contact Us
          </button>
        </div>
        <p className="cta-footerr">Happy child and therapist high five </p>
      </div>
    </div>
  );
}

export default Physio;
