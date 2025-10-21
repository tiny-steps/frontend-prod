import React from "react";

import "./Applied.css";
import ocu4 from "./assets/ocu4.jpg";
import ocu5 from "./assets/ocu5.webp";
import ocu2 from "./assets/ocu2.png";
import ocu3 from "./assets/ocu3.jpg";
import { useNavigate } from "react-router-dom";

// Icons
import {
  FaHandPaper,
  FaCrosshairs,
  FaLock,
  FaRegClock,
  FaBolt,
  FaSlidersH,
  FaClipboardList,
  FaBullseye,
  FaPlay,
  FaPen,
  FaLayerGroup,
  FaChartBar,
} from "react-icons/fa";

function Occupational() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Intro */}
      <div className="text">
        <div>OUR SERVICES</div>
        <h1>Occupational Therapy </h1>
      </div>

      {/* What is OT */}
      <div className="card-container">
        <div className="card">
          <div className="card-text">
            <h2>What is Occupational Therapy?</h2>
            <p>
              Occupational Therapy (OT) helps children develop the skills they
              need for daily living, learning, and playing. It focuses on
              improving fine motor skills, sensory processing, coordination, and
              independence. Through engaging activities and structured support,
              OT empowers children to gain confidence in everyday tasks.
            </p>
          </div>
          <div className="card-image">
            <img src={ocu2} alt="Occupational Therapy" />
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section className="benefits-section">
        <h2 className="benefits-title">Key Benefits of Occupational Therapy</h2>
        <div className="benefits-container">
          <div className="benefit-card blue">
            <FaHandPaper className="benefit-icon" />
            <p>Enhances Fine & Gross Motor Skills</p>
          </div>
          <div className="benefit-card green">
            <FaCrosshairs className="benefit-icon" />
            <p>Improves Focus, Attention & Learning</p>
          </div>
          <div className="benefit-card orange">
            <FaLock className="benefit-icon" />
            <p>Supports Independence in Daily Living</p>
          </div>
          <div className="benefit-card pink">
            <FaRegClock className="benefit-icon" />
            <p>Strengthens Coordination & Motor Planning</p>
          </div>
          <div className="benefit-card purple">
            <FaBolt className="benefit-icon" />
            <p>Builds Confidence in School & Social</p>
          </div>
          <div className="benefit-card yellow">
            <FaSlidersH className="benefit-icon" />
            <p>Helps with Sensory Processing</p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="how-section">
        <h2 className="how-title">How Occupational Therapy Works</h2>
        <div className="how-container">
          <div className="how-card">
            <FaClipboardList className="how-icon" />
            <h3>Assessment</h3>
            <p>Evaluate abilities & needs</p>
          </div>
          <div className="how-card">
            <FaBullseye className="how-icon" />
            <h3>Individualized Goals</h3>
            <p>Set daily activity plans.</p>
          </div>
          <div className="how-card">
            <FaPlay className="how-icon" />
            <h3>Play-Based Exercises</h3>
            <p>Functional activities for skill-building.</p>
          </div>
          <div className="how-card">
            <FaPen className="how-icon" />
            <h3>Handwriting & Self-Care</h3>
            <p>Improve essential skills.Improve essential skills.</p>
          </div>
          <div className="how-card">
            <FaLayerGroup className="how-icon" />
            <h3>Sensory Integration</h3>
            <p>Regulation through sensory play.</p>
          </div>
          <div className="how-card">
            <FaChartBar className="how-icon" />
            <h3>Progress Tracking</h3>
            <p>Regular parent feedback.</p>
          </div>
        </div>
      </section>

      <div className="image-card">
        <img src={ocu3} alt="Therapist guiding child" />
      </div>

      {/* Challenges */}
      <div className="child-support-container">
        <div className="left-box">
          <img
            src={ocu4}
            alt="Child practicing skills"
            className="structured-image"
          />
          <p className="image-caption">Child engaged in OT activities</p>
        </div>
        <div className="right-box">
          <h2>Helps in addressing below challenges for your child</h2>
          <ul className="challenges-list">
            <li>Difficulty with Writing, Drawing, or Hand Skills</li>
            <li>Struggles with Dressing, Eating, or Self-Care Tasks</li>
            <li>Poor Balance, Coordination, or Posture</li>
            <li>Sensory Processing Issues (over/under sensitivity)</li>
            <li>Low Confidence in School or Play Activities</li>
            <li>Trouble with Focus, Attention, or Task Completion</li>
          </ul>
        </div>
      </div>

      {/* Session */}
      <div className="therapy-container">
        <div className="therapy-content">
          <h2>What to Expect from an OT Session?</h2>
          <ul>
            <li>45–60 minute tailored sessions</li>
            <li>Fun, engaging, and play-based activities</li>
            <li>Exercises supporting independence </li>
            <li>Motor skill games,crafts, and movement</li>
            <li>Sensory activities for regulation and focus</li>
            <li>Therapist guidance and home strategies A supportive and</li>
            <li> A supportive and confidence-boosting experience </li>
          </ul>
        </div>
        <div className="therapy-image-card">
          <img src={ocu5} alt="OT session at Tiny Steps Clinic" />
        </div>
      </div>

      {/* Who Can Benefit */}
      <div className="benefit-container">
        <div className="therapy-content">
          <h2>Who Can Benefit?</h2>
          <ul>
            <li className="purplee">
              Children with autism, ADHD, or developmental delays
            </li>
            <li className="purplee">Kids with sensory processing challenges</li>
            <li className="purplee">
              Children struggling with handwriting, focus, or motor skills
            </li>
            <li className="purplee">
              Kids facing difficulties in self-care routines
            </li>
            <li className="purplee">
              Any child needing independence and confidence
            </li>
          </ul>
          <div className="quote-line">
            At Tiny Steps, Occupational Therapy helps children gain
            independence, improve essential life skills, and thrive with
            confidence in their daily world.
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-container">
        <div className="clin">Take the next step with Tiny Steps Clinic</div>
        <p>
          Book a consultation to begin your child’s personalized Occupational
          Therapy journey.
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
        <p className="cta-footerr">Happy child and therapist high five ✨</p>
      </div>
    </div>
  );
}

export default Occupational;
