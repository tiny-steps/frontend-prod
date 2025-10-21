import React from "react";
import "./Applied.css";
import aqua3 from "./assets/aqua3.png";
import aqua1 from "./assets/aqua1.png";
import aqua4 from "./assets/aqua4.png";
import aqua5 from "./assets/aqua5.png";
import {
  FaRunning,
  FaBullseye,
  FaWater,
  FaSmile,
  FaClipboardList,
  FaFileAlt,
  FaUsers,
  FaFire,
  FaUser,
  FaChartBar,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Aqua() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="text">
        <div>OUR SERVICES</div>
        <h1>Aqua Therapy</h1>
      </div>

      {/* What is Aqua Therapy */}
      <div className="card-container">
        <div className="card">
          <div className="card-text">
            <h2>What is Aqua Therapy?</h2>
            <p>
              Aqua Therapy uses water-based exercises to improve physical
              strength, mobility, and sensory experiences. The buoyancy and
              resistance of water create a safe and supportive environment for
              children to build skills, increase confidence, and enjoy movement
              in a therapeutic way.
            </p>
          </div>
          <div className="card-image">
            <img src={aqua1} alt="Aqua Therapy" />
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <section className="benefits-section">
        <h2 className="benefits-title">Key Benefits of Aqua Therapy</h2>
        <div className="benefits-container">
          <div className="benefit-card blue">
            <FaRunning className="benefit-icon" />
            <p>Improves Motor Skills</p>
          </div>
          <div className="benefit-card green">
            <FaBullseye className="benefit-icon" />
            <p>Enhances Balance & Coordination</p>
          </div>
          <div className="benefit-card orange">
            <FaWater className="benefit-icon" />
            <p>Supports Sensory Regulation</p>
          </div>
          <div className="benefit-card pink">
            <FaSmile className="benefit-icon" />
            <p>Boosts Confidence & Relaxation</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="how-section">
        <h2 className="how-title">How Aqua Therapy Works</h2>
        <div className="how-container">
          <div className="how-card">
            <FaClipboardList className="how-icon" />
            <h3>Initial Assessment</h3>
            <p>Identify strengths, challenges & goals</p>
          </div>
          <div className="how-card">
            <FaFileAlt className="how-icon" />
            <h3>Personalized Water Plan</h3>
            <p>Custom program based on child’s needs</p>
          </div>
          <div className="how-card">
            <FaUsers className="how-icon" />
            <h3>Guided Sessions</h3>
            <p>Therapist-led water-based activities</p>
          </div>
          <div className="how-card">
            <FaFire className="how-icon" />
            <h3>Water Play Activities</h3>
            <p>Fun, structured tasks for skill-building</p>
          </div>
          <div className="how-card">
            <FaUser className="how-icon" />
            <h3>Parental Involvement</h3>
            <p>Parents learn carry-over exercises</p>
          </div>
          <div className="how-card">
            <FaChartBar className="how-icon" />
            <h3>Progress Tracking</h3>
            <p>Regular reviews to refine the plan</p>
          </div>
        </div>
      </section>

      {/* Banner */}
      <div className="image-card">
        <img src={aqua4} alt="Child in aqua therapy session" />
      </div>

      {/* Challenges Section */}
      <div className="child-support-container">
        <div className="left-box">
          <img
            src={aqua3}
            alt="Child in water activity"
            className="structured-image"
          />
          <p className="image-caption">Child engaged in aqua session</p>
        </div>
        <div className="right-box">
          <h2>Helps in addressing below challenges for your child</h2>
          <ul className="challenges-list">
            <li>Gross and Fine Motor Delays</li>
            <li>Balance and Posture Issues</li>
            <li>Difficulty with Sensory Processing</li>
            <li>Low Muscle Tone & Strength</li>
            <li>Fear or Anxiety with Movement</li>
            <li>Difficulty with Social Play</li>
          </ul>
        </div>
      </div>

      {/* What to expect */}
      <div className="therapy-container">
        <div className="therapy-content">
          <h2>What to Expect from an Aqua Therapy Session?</h2>
          <ul>
            <li>Structured 45–60 minute water sessions</li>
            <li>Safe, therapist-guided water activities</li>
            <li>Individualized skill-building programs</li>
            <li>Play-based, fun & motivating environment</li>
            <li>Active family involvement for continuity</li>
            <li>Progress reviews to track improvements</li>
          </ul>
        </div>
        <div className="therapy-image-card">
          <img src={aqua5} alt="Therapist guiding child in water" />
        </div>
      </div>

      {/* Who can benefit */}
      <div className="benefit-container">
        <div className="therapy-content">
          <h2>Who Can Benefit?</h2>
          <ul>
            <li> Children with physical disabilities or mobility challenges</li>
            <li> kids with low muscle tone o strength issues </li>
            <li>children with sensory processing disorders</li>
            <li> kids who benifit from gentle, supportive exercise </li>
            <li>Any child who needs movement thereapy in a safe environment</li>
          </ul>
          <div className="quote-line">
            At tiny steps, Aqua therapy provides a safe and supportive
            environment for children to develop physical strength, coordination,
            and confidence through water-based exercises.
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-container">
        <div className="clin">Take the next step with Tiny Steps Clinic</div>
        <p>
          Book a consultation to begin your child’s personalized Aqua Therapy
          journey.
        </p>
        <div className="cta-buttons">
          <a
            href="https://wa.me/919886062430"
            target="_blank"
            rel="noreferrer"
            className="btn primary-btn">
            Book a Consultation
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

export default Aqua;
