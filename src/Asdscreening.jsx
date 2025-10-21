import React from "react";
import "./Applied.css";
import aut1 from "./assets/aut1.png";
import aut2 from "./assets/aut2.jpg";
import aut3 from "./assets/aut3.jpg";
import Aut4 from "./assets/Aut4.jpg";
import { useNavigate } from "react-router-dom";

// Icons
import {
  FaSearch,
  FaCompass,
  FaChartLine,
  FaHandshake,
  FaStopwatch,
  FaClipboardList,
  FaUsers,
  FaFileAlt,
  FaEye,
} from "react-icons/fa";

function ASDScreening() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Intro Section */}
      <div className="text">
        <div> OUR SERVICES</div>
        <h1> Autism Spectrum Disorder (ASD) Screening </h1>
      </div>

      {/* What is Section */}
      <div className="card-container">
        <div className="card">
          <div className="card-text">
            <h2>What is ASD Screening?</h2>
            <p>
              ASD Screening is an early identification process to detect signs
              of autism spectrum disorder in children. It helps families and
              professionals understand developmental challenges and ensures
              timely intervention for communication, social, and behavioral
              needs.
            </p>
          </div>
          <div className="card-image">
            <img src={aut2} alt="ASD Screening" />
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <section className="benefits-section">
        <h2 className="benefits-title">Key Benefits of ASD Screening</h2>
        <div className="benefits-container">
          <div className="benefit-card pink">
            <FaSearch className="benefit-icon" />
            <h3>Early Identification</h3>
            <p>Spot signs of autism before school age for better outcomes.</p>
          </div>
          <div className="benefit-card purple">
            <FaCompass className="benefit-icon" />
            <h3>Guided Next Steps</h3>
            <p>
              Provides direction for further evaluation or <br />
              therapy.
            </p>
          </div>
          <div className="benefit-card orange">
            <FaChartLine className="benefit-icon" />
            <h3>Track Development Over Time</h3>
            <p>Supports ongoing monitoring even without a diagnosis.</p>
          </div>
          <div className="benefit-card green">
            <FaHandshake className="benefit-icon" />
            <h3>Family Empowerment</h3>
            <p>
              Gives parents clarity, reassurance, and a voice in next steps.
            </p>
          </div>
          <div className="benefit-card blue">
            <FaStopwatch className="benefit-icon" />
            <h3>Faster Access to Support</h3>
            <p>Reduces wait time by flagging needs early.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section">
        <h2 className="how-title">How ASD Screening Works</h2>
        <div className="how-container">
          <div className="how-card">
            <FaClipboardList className="how-icon" />
            <h3>Initial Assessment</h3>
            <p>Understand child’s behavior, development & communication</p>
          </div>
          <div className="how-card">
            <FaUsers className="how-icon" />
            <h3>Parent Interviews</h3>
            <p>Gather developmental history & concerns</p>
          </div>
          <div className="how-card">
            <FaFileAlt className="how-icon" />
            <h3>Standardized Tools</h3>
            <p>Use questionnaires & checklists to assess behaviors</p>
          </div>
          <div className="how-card">
            <FaEye className="how-icon" />
            <h3>Observation</h3>
            <p>Watch how the child interacts & communicates</p>
          </div>
          <div className="how-card">
            <FaChartLine className="how-icon" />
            <h3>Progress Tracking</h3>
            <p>Receive regular updates & future planning steps</p>
          </div>
        </div>
      </section>

      {/* Banner */}
      <div className="image-card">
        <img src={aut1} alt="ASD screening banner" />
      </div>

      {/* Challenges */}
      <div className="child-support-container">
        <div className="left-box">
          <img
            src={aut3}
            alt="Child in ASD screening activity"
            className="structured-image"
          />
        </div>
        <div className="right-box">
          <h2>Helps in Addressing Below Challenges for Your Child</h2>
          <ul className="challenges-list">
            <li>Delayed Speech or Language Development</li>
            <li>Difficulty with Eye Contact or Social Interaction</li>
            <li>Repetitive Behaviors or Restricted Interests</li>
            <li>Trouble with Transitions or Changes</li>
            <li>Regression or Loss of Skills</li>
            <li>Challenges in Social, Communication, or Cognitive Skills</li>
          </ul>
        </div>
      </div>

      {/* What to Expect */}
      <div className="therapy-container">
        <div className="therapy-content">
          <h2>What to Expect from an ASD Screening Session?</h2>
          <ul>
            <li>45–90 minute session duration</li>
            <li>Developmental history gathering and caregiver interviews</li>
            <li>Child observation in natural, interactive settings</li>
            <li>Use of standardized questionnaires & tools</li>
            <li>Screening report with insights & professional feedback</li>
            <li>
              Recommendations for therapy intervention or further evaluation
            </li>
            <li>Family-centered, supportive guidance</li>
          </ul>
        </div>
        <div className="therapy-image-card">
          <img src={Aut4} alt="ASD Screening session" />
        </div>
      </div>

      {/* Who Can Benefit */}
      <div className="benefit-container">
        <div className="therapy-content">
          <h2>Who Can Benefit?</h2>
          <ul>
            <li className="purplee">Children with delayed milestones</li>
            <li className="purplee">
              Kids showing regression or social difficulties
            </li>
            <li className="purplee">
              Any child with concerning behaviors or communication issues
            </li>
            <li className="purplee">
              Families seeking early insights & tailored support
            </li>
          </ul>
          <div className="quote-line">
            At Tiny Steps, ASD Screening empowers families with clarity, timely
            action, and hope for their child’s future.
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-container">
        <div className="clin">Start Your Child’s Developmental Journey</div>
        <p>Book an ASD Screening session at Tiny Steps Clinic today.</p>
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

export default ASDScreening;
