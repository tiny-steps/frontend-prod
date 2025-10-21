import React from "react";

import "./Applied.css";

import bea1 from "./assets/bea1.png";
import beaa1 from "./assets/beaa1.jpg";
import beh3 from "./assets/beh3.png";
import beh4 from "./assets/beh4.png";
import { useNavigate } from "react-router-dom";
import {
  FaSmile,
  FaHandsHelping,
  FaUsers,
  FaStar,
  FaPuzzlePiece,
  FaClipboardList,
  FaFileAlt,
  FaChalkboardTeacher,
  FaGift,
  FaChild,
  FaUserFriends,
} from "react-icons/fa";

function Behavioral() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="text">
        <div>OUR SERVICES</div>
        <h1>Behavioral Therapy</h1>
      </div>

      <div className="card-container">
        <div className="card">
          {/* Left Side - Text */}
          <div className="card-text">
            <h2>What is Behavioral Therapy?</h2>
            <p>
              Behavioral Therapy focuses on understanding, managing, and
              improving a child’s behaviors through structured strategies. It
              helps children replace challenging behaviors with positive
              alternatives, supporting emotional growth, self-control, and
              social skills.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="card-image">
            <img src={beaa1} alt="Behavioral Therapy" />
          </div>
        </div>
      </div>

      <section className="benefits-section">
        <h2 className="benefits-title">Key Benefits of Behavioral Therapy</h2>
        <div className="benefits-container">
          <div className="benefit-card blue">
            <FaSmile className="benefit-icon" />
            <p>Improves Emotional Regulation</p>
          </div>
          <div className="benefit-card green">
            <FaHandsHelping className="benefit-icon" />
            <p>Reduces Challenging Behaviors</p>
          </div>
          <div className="benefit-card orange">
            <FaUsers className="benefit-icon" />
            <p>Enhances Social Skills</p>
          </div>
          <div className="benefit-card pink">
            <FaStar className="benefit-icon" />
            <p>Boosts Self-Confidence</p>
          </div>
          <div className="benefit-card purple">
            <FaPuzzlePiece className="benefit-icon" />
            <p>Builds Problem Solving Skills</p>
          </div>
        </div>
      </section>

      <section className="how-section">
        <h2 className="how-title">How Behavioral Therapy Works</h2>
        <div className="how-container">
          <div className="how-card">
            <FaClipboardList className="how-icon" />
            <h3>Behavioral Assessment</h3>
            <p>Initial assessment of behavior patterns.</p>
          </div>
          <div className="how-card">
            <FaFileAlt className="how-icon" />
            <h3>Behavior Intervention Plan</h3>
            <p>Individualized BIP to set goals & track growth.</p>
          </div>
          <div className="how-card">
            <FaChalkboardTeacher className="how-icon" />
            <h3>1:1 Therapy Sessions</h3>
            <p>Focused therapist-led child sessions.</p>
          </div>
          <div className="how-card">
            <FaGift className="how-icon" />
            <h3>Positive Reinforcement</h3>
            <p>Encouraging desired behaviors.</p>
          </div>
          <div className="how-card">
            <FaChild className="how-icon" />
            <h3>Role-Play Activities</h3>
            <p>Practice skills in real-life situations.</p>
          </div>
          <div className="how-card">
            <FaUserFriends className="how-icon" />
            <h3>Parent Collaboration</h3>
            <p>Consistency with parents & teachers.</p>
          </div>
        </div>
      </section>

      <div className="image-card">
        <img src={beh3} alt="Therapist and child practicing behavior skills" />
      </div>

      <div className="child-support-container">
        <div className="left-box">
          <img
            src={bea1}
            alt="Child practicing behavioral skills"
            className="structured-image"
          />
          <p className="image-caption">Child practicing behavioral skills</p>
        </div>

        <div className="right-box">
          <h2>Helps in addressing below challenges for your child</h2>
          <ul className="challenges-list">
            <li>Frequent Tantrums or Aggressive Outbursts</li>
            <li>Difficulty Following Rules / Instructions</li>
            <li>Struggles with Peer Interactions</li>
            <li>Emotional Regulation Difficulties (anger, anxiety)</li>
            <li>Repetitive or Avoidance Behaviors</li>
            <li>Low Motivation & Attention Issues</li>
          </ul>
        </div>
      </div>

      <div className="therapy-container">
        {/* Left Side */}
        <div className="therapy-content">
          <h2>What to Expect from a Behavioral Therapy Session?</h2>
          <ul>
            <li>Structured 45–60 minute sessions tailored to each child</li>
            <li>1:1 support to ensure focus and progress</li>
            <li>Play-based and positive reinforcement strategies</li>
            <li>Easy-to-apply techniques to promote emotional control</li>
            <li>Parental guidance to reinforce strategies at home</li>
            <li>Regular progress reviews and adjustments</li>
            <li>Safe, supportive environment for behavioral change</li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="therapy-image-card">
          <img src={beh4} alt="Therapist guiding child in Behavioral Therapy" />
        </div>
      </div>

      <div className="benefit-container">
        <div className="therapy-content">
          <h2>Who Can Benefit?</h2>
          <ul>
            <li className="purplee">
              Children with Autism, ADHD, or developmental delays
            </li>
            <li className="purplee">
              Kids struggling with emotional outbursts, aggression, or defiance
            </li>
            <li className="purplee">
              Children facing difficulties in school or social environments
            </li>
          </ul>
          <div className="quote-line">
            At Tiny Steps, Behavioral Therapy empowers children to learn
            self-control, build confidence, and thrive in everyday life.
          </div>
        </div>
      </div>

      <div className="cta-container">
        <div className="clin">Take the next step with Tiny Steps Clinic</div>
        <p>
          Book a consultation to begin your child’s personalized Behavioral
          Therapy journey.
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

export default Behavioral;
