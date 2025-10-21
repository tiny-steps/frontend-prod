import React from "react";
import "./Applied.css";
import Aba from "./assets/Aba.jpg";
import bann from "./assets/bann.png";
import caaa from "./assets/caaa.png";
import abath from "./assets/abath.jpg";
import { useNavigate } from "react-router-dom";
import { FaCommentDots, FaUserFriends, FaSmile } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { FaClipboardList, FaChartLine } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { MdFamilyRestroom, MdOutlineAssignment } from "react-icons/md";

function Applied() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="text">
        <div> OUR SERVICES</div>
        <h1> Applied Behavior Analysis (ABA) Therapy </h1>
      </div>

      <div className="card-container">
        <div className="card">
          {/* Left Side - Text */}
          <div className="card-text">
            <h2>What is ABA Therapy?</h2>
            <p>
              ABA therapy focuses on understanding behavior and teaching new
              skills through positive reinforcement. It breaks down complex
              tasks into smaller, manageable steps, helping children learn at
              their own pace.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="card-image">
            <img src={Aba} alt="ABA Therapy" />
          </div>
        </div>
      </div>
      <section className="benefits-section">
        <h2 className="benefits-title">Key Benefits of ABA Therapy</h2>
        <div className="benefits-container">
          <div className="benefit-card pink">
            <FaCommentDots className="benefit-icon" />
            <p>Communication Skills</p>
          </div>
          <div className="benefit-card purple">
            <GiBrain className="benefit-icon" />
            <p>Learning & Focus</p>
          </div>
          <div className="benefit-card orange">
            <FaUserFriends className="benefit-icon" />
            <p>Social Skills</p>
          </div>
          <div className="benefit-card green">
            <FaSmile className="benefit-icon" />
            <p>Reduce Challenging Behaviors</p>
          </div>
        </div>
      </section>
      <section className="how-section">
        <h2 className="how-title">How ABA Therapy Works</h2>
        <div className="how-container">
          <div className="how-card">
            <MdOutlineAssignment className="how-icon" />
            <h3>Assessment</h3>
            <p>Understand strengths & needs</p>
          </div>
          <div className="how-card">
            <GiAchievement className="how-icon" />
            <h3>Personalized Plan</h3>
            <p>Set tailored, measurable goals</p>
          </div>
          <div className="how-card">
            <FaUserFriends className="how-icon" />
            <h3>1:1 Sessions</h3>
            <p>Therapist-led, child-centered</p>
          </div>
          <div className="how-card">
            <FaClipboardList className="how-icon" />
            <h3>Positive Reinforcement</h3>
            <p>Rewards that motivate</p>
          </div>
          <div className="how-card">
            <MdFamilyRestroom className="how-icon" />
            <h3>Family Involvement</h3>
            <p>Coach parents for carryover</p>
          </div>
          <div className="how-card">
            <FaChartLine className="how-icon" />
            <h3>Progress Tracking</h3>
            <p>Review & refine regularly</p>
          </div>
        </div>
      </section>
      <div className="image-card">
        <img src={bann} alt="Therapist and child working at table" />
      </div>
      <div className="child-support-container">
        <div className="left-box">
          <img
            src={caaa}
            alt="Child engaged in structured task"
            className="structured-image"
          />
          <p className="image-caption">Child engaged in structured task</p>
        </div>

        <div className="right-box">
          <h2>Helps in addressing below challenges for your child</h2>
          <ul className="challenges-list">
            <li>Difficulty in Communication</li>
            <li>Attention and Focus Issues</li>
            <li>Social Skill Challenges</li>
            <li>Repetitive or Challenging Behaviors</li>
            <li>Difficulty Following Instructions</li>
            <li>Limited Play or Interaction Skills</li>
          </ul>
        </div>
      </div>
      <div className="therapy-container">
        {/* Left Side */}
        <div className="therapy-content">
          <h2>What to Expect from an ABA Therapy Session?</h2>
          <ul>
            <li>Structured sessions lasting 45–60 minutes</li>
            <li>
              1:1 therapist-led interaction to maintain quality of therapy
            </li>
            <li>
              Personalized behavior and skill-building plans tailored to each
              child
            </li>
            <li>Parent involvement to support learning at home</li>
            <li>
              Play-based & reward-driven activities for motivation and
              engagement
            </li>
            <li>
              Progress tracking & regular reviews for continuous improvement
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="therapy-image-card">
          <img
            src={abath} // Replace with your real image
            alt="Therapist guiding child at Tiny Steps Clinic"
          />
        </div>
      </div>
      <div className="benefit-container">
        <div className="therapy-content">
          <h2>Who Can Benefit?</h2>
          <ul>
            <li className="purplee">
              Your child will learn from Certified ABA Therapists
            </li>
            <li className="purplee">
              Personalized, child-centered programs designed just for them
            </li>

            <div className="quote-line">
              We focus on building skills that last a lifetime.
            </div>
          </ul>
        </div>
      </div>
      <div className="cta-container">
        <div className="clin">Take the next step with Tiny Steps Clinic</div>
        <p>
          Book a consultation to begin your child’s personalized ABA journey.
        </p>

        <div className="cta-buttons">
          {/* WhatsApp Book Consultation */}
          <a
            href="https://wa.me/919886062430"
            target="_blank"
            rel="noreferrer"
            className="btn primary-btn">
            Book a Consultation
          </a>

          {/* Navigate to Contact Page */}
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

export default Applied;
