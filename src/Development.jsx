import React from "react";
import "./Applied.css";
import Dev1 from "./assets/Dev1.jpg";
import dev3 from "./assets/dev3.jpg";
import dev2 from "./assets/dev2.jpg";
import dev4 from "./assets/dev4.avif";
import { useNavigate } from "react-router-dom";
import {
  FaRegLightbulb,
  FaArrowRight,
  FaChartLine,
  FaRegClock,
  FaUsers,
  FaClipboardList,
  FaUserMd,
  FaSearch,
  FaLink,
} from "react-icons/fa";

function Development() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Intro */}
      <div className="text">
        <div> OUR SERVICES</div>
        <h1> Developmental Screening </h1>
      </div>

      {/* What is Screening */}
      <div className="card-container">
        <div className="card">
          <div className="card-text">
            <h2>What is Developmental Screening?</h2>
            <p>
              Developmental screening is a brief, standardized process to
              monitor your child's growth in key areas like communication, motor
              skills, problem-solving, and social interaction. It helps identify
              children who may need further evaluation or early intervention
              support.
            </p>
          </div>
          <div className="card-image">
            <img src={Dev1} alt="Developmental Screening" />
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section className="benefits-section">
        <h2 className="benefits-title">
          Key Benefits of Developmental Screening
        </h2>
        <div className="benefits-container">
          <div className="benefit-card pink">
            <FaRegLightbulb className="benefit-icon" />
            <h3>Early Identification</h3>
            <p>Detects delays before they impact learning or behavior.</p>
          </div>
          <div className="benefit-card purple">
            <FaArrowRight className="benefit-icon" />
            <h3>Guided Next Steps</h3>
            <p>
              Helps determine whether further support or evaluation is needed.
            </p>
          </div>
          <div className="benefit-card orange">
            <FaChartLine className="benefit-icon" />
            <h3>Development Monitoring</h3>
            <p>Tracks your child’s progress across key milestones.</p>
          </div>
          <div className="benefit-card green">
            <FaRegClock className="benefit-icon" />
            <h3>Timely Intervention</h3>
            <p>Allows for earlier support that can improve outcomes.</p>
          </div>
          <div className="benefit-card blue">
            <FaUsers className="benefit-icon" />
            <h3>Family Empowerment</h3>
            <p>
              Provides parents with resources and confidence to advocate for
              their child.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section">
        <h2 className="how-title">How Developmental Screening Works</h2>
        <div className="how-container">
          <div className="how-card">
            <FaClipboardList className="how-icon" />
            <h3>Standardized Questionnaires</h3>
            <p>
              Parents complete age-specific forms about the child’s development
            </p>
          </div>
          <div className="how-card">
            <FaUserMd className="how-icon" />
            <h3>Professional Review</h3>
            <p>
              Experts review responses to identify potential areas of concern
            </p>
          </div>
          <div className="how-card">
            <FaSearch className="how-icon" />
            <h3>Observation</h3>
            <p>Optional child observation for additional insights</p>
          </div>
          <div className="how-card">
            <FaUsers className="how-icon" />
            <h3>Discussion with Parents</h3>
            <p>Review results and next steps with a specialist</p>
          </div>
          <div className="how-card">
            <FaLink className="how-icon" />
            <h3>Referral (if needed)</h3>
            <p>Recommendations for further evaluation or intervention</p>
          </div>
        </div>
      </section>

      {/* Banner */}
      <div className="image-card">
        <img src={dev2} alt="Doctor with child during screening" />
      </div>

      {/* Challenges */}
      <div className="child-support-container">
        <div className="left-box">
          <img
            src={dev4}
            alt="Child in screening session"
            className="structured-image"
          />
          <p className="image-caption">Child during developmental check</p>
        </div>

        <div className="right-box">
          <h2>Helps in Identifying Below Challenges</h2>
          <ul className="challenges-list">
            <li>Speech and language delays</li>
            <li>Social interaction or emotional issues</li>
            <li>Fine and gross motor difficulties</li>
            <li>Cognitive delays in problem-solving</li>
            <li>Lack of milestone achievement</li>
            <li>Behavioral concerns flagged by parents or caregivers</li>
          </ul>
        </div>
      </div>

      {/* What to Expect */}
      <div className="therapy-container">
        <div className="therapy-content">
          <h2>What to Expect from a Developmental Screening Session?</h2>
          <ul>
            <li>30–60 minute session</li>
            <li>Parent-completed questionnaires (ASQ, M-CHAT)</li>
            <li>Optional observation or play-based screening</li>
            <li>Quick results summary with guidance</li>
            <li>Referrals or support if concerns are flagged</li>
            <li>Peace of mind when development is on track</li>
          </ul>
        </div>

        <div className="therapy-image-card">
          <img src={dev3} alt="Parent with child during session" />
        </div>
      </div>

      {/* Who Can Benefit */}
      <div className="benefit-container">
        <div className="therapy-content">
          <h2>Who Can Benefit?</h2>
          <ul>
            <li className="purplee">Children aged 6 months to 5 years</li>
            <li className="purplee">Parents seeking peace of mind</li>
            <li className="purplee">Kids not meeting typical milestones</li>
            <li className="purplee">
              Children transitioning into school or daycare
            </li>
          </ul>
          <p className="quote-line">
            Developmental screening empowers families with early knowledge to
            give children their best start in life.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-container">
        <div className="clin">Screen Early. Support Smart.</div>
        <p>
          Book a developmental screening at Tiny Steps Clinic to ensure your
          child is on track and thriving.
        </p>

        <div className="cta-buttons">
          <a
            href="https://wa.me/919886062430"
            target="_blank"
            rel="noreferrer"
            className="btn primary-btn">
            Book a Screening
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

        <p className="cta-footerr">Give your child the best start </p>
      </div>
    </div>
  );
}

export default Development;
