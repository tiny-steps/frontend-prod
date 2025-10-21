import React from "react";
import "./Applied.css";
import spe1 from "./assets/spe1.png";
import spe2 from "./assets/spe2.jpg";
import spe3 from "./assets/spe3.jpg";
import spe4 from "./assets/spe4.jpg";
import { useNavigate } from "react-router-dom";
import {
  FaBook,
  FaBrain,
  FaHandshake,
  FaRocket,
  FaComments,
  FaBullseye,
  FaClipboardCheck,
  FaPuzzlePiece,
  FaSyncAlt,
  FaUsers,
} from "react-icons/fa";

function Special() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Header Text */}
      <div className="text">
        <div> Our Services</div>
        <h1>Special Education Plan </h1>
      </div>

      {/* Intro Card */}
      <div className="card-container">
        <div className="card">
          <div className="card-text">
            <h2>What is a Special Education Plan?</h2>
            <p>
              A Special Education Plan (SEP) provides personalized learning
              strategies and support for children with unique learning needs. It
              ensures tailored academic, behavioral, and developmental guidance
              so every child can thrive.
            </p>
          </div>
          <div className="card-image">
            <img src={spe1} alt="Special Education Therapy" />
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <section className="benefits-section">
        <h2 className="benefits-title">
          Key Benefits of Special Education Plan
        </h2>
        <div className="benefits-container">
          <div className="benefit-card pink">
            <FaBook className="benefit-icon" />
            <h3>Provides Personalized Learning Approaches</h3>
            <p>
              Tailored teaching methods that match each child's strengths and
              needs.
            </p>
          </div>
          <div className="benefit-card purple">
            <FaBrain className="benefit-icon" />
            <h3>Supports Academic and Behavioral Growth</h3>
            <p>
              Structured strategies to boost performance and behavior in school.
            </p>
          </div>
          <div className="benefit-card orange">
            <FaHandshake className="benefit-icon" />
            <h3>Builds Confidence and Motivation</h3>
            <p>
              Positive reinforcement and achievable goals to increase
              engagement.
            </p>
          </div>
          <div className="benefit-card green">
            <FaRocket className="benefit-icon" />
            <h3>Encourages Independence & Self-Advocacy</h3>
            <p>
              Skills that help children speak up for themselves and manage
              tasks.
            </p>
          </div>
          <div className="benefit-card blue">
            <FaComments className="benefit-icon" />
            <h3>Enhances Communication & Social Skills</h3>
            <p>
              Activities to strengthen peer interactions and expressive skills.
            </p>
          </div>
          <div className="benefit-card yellow">
            <FaBullseye className="benefit-icon" />
            <h3>Helps Reach Developmental Milestones</h3>
            <p>Targeted interventions to support growth across domains.</p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="how-section">
        <h2 className="how-title">How Special Education Plan Works</h2>
        <div className="how-container">
          <div className="how-card">
            <FaClipboardCheck className="how-icon" />
            <h3>Comprehensive Assessment</h3>
            <p>Identify strengths, challenges, and learning profile.</p>
          </div>
          <div className="how-card">
            <FaBullseye className="how-icon" />
            <h3>Goal Setting</h3>
            <p>Clear academic, social, and behavioral objectives.</p>
          </div>
          <div className="how-card">
            <FaBook className="how-icon" />
            <h3>Individualized Strategies</h3>
            <p>Teaching approaches tailored to the child.</p>
          </div>
          <div className="how-card">
            <FaPuzzlePiece className="how-icon" />
            <h3>Therapy Integration</h3>
            <p>Coordinate Speech, OT, PT when needed.</p>
          </div>
          <div className="how-card">
            <FaSyncAlt className="how-icon" />
            <h3>Regular Review</h3>
            <p>Ongoing adjustments to maximize progress</p>
          </div>
          <div className="how-card">
            <FaUsers className="how-icon" />
            <h3>Parent & Teacher Involvement</h3>
            <p>Consistency across home and school environments.</p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <div className="image-card">
        <img src={spe2} alt="Special Education in action" />
      </div>

      {/* Challenges Section */}
      <div className="child-support-container">
        <div className="left-box">
          <img
            src={spe3}
            alt="Child learning with support"
            className="structured-image"
          />
          <p className="image-caption">
            Child receiving specialized instruction
          </p>
        </div>
        <div className="right-box">
          <h2>Helps in addressing below challenges for your child</h2>
          <ul className="challenges-list">
            <li>Learning difficulties in reading, writing, or math</li>
            <li>Behavioral or emotional regulation challenges</li>
            <li>Trouble focusing or following instructions</li>
            <li>Social interaction or communication struggles</li>
            <li>Low self-esteem or lack of motivation in school</li>
            <li>Developmental delays affecting academic success</li>
          </ul>
        </div>
      </div>

      {/* What to Expect */}
      <div className="therapy-container">
        <div className="therapy-content">
          <h2>What to Expect from a SEP Session?</h2>
          <ul>
            <li>Clear, structured goals set for the child’s progress</li>
            <li>
              45–60 minute guided sessions for academic & developmental support
            </li>
            <li>Individualized teaching methods tailored to learning style</li>
            <li>
              Use of visual aids, interactive activities, and adaptive tools
            </li>
            <li>Regular feedback sessions for parents and teachers</li>
            <li>Continuous monitoring and adjustments to maximize growth</li>
            <li>
              A supportive, encouraging, and child-centered learning journey
            </li>
          </ul>
        </div>
        <div className="therapy-image-card">
          <img src={spe4} alt="SEP Session at Tiny Steps Clinic" />
        </div>
      </div>

      {/* Who Can Benefit */}
      <div className="benefit-container">
        <div className="therapy-content">
          <h2>Who Can Benefit?</h2>
          <ul>
            <li className="purplee">
              Children with autism, ADHD, or learning disabilities
            </li>
            <li className="purplee">
              Kids with developmental delays or cognitive challenges
            </li>
            <li className="purplee">
              Children struggling academically in traditional settings
            </li>
            <li className="purplee">
              Kids with emotional or behavioral regulation needs
            </li>
            <li className="purplee">
              Any child requiring personalized support to achieve learning
              success
            </li>
          </ul>
          <div className="quote-line">
            At Tiny Steps, a Special Education Plan ensures that every child
            receives the right support, guidance, and encouragement to learn,
            grow, and thrive at their own pace.
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-container">
        <div className="clin">Take the next step with Tiny Steps Clinic</div>
        <p>
          Book a consultation to begin your child’s personalized Special
          Education plan journey.
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

export default Special;
