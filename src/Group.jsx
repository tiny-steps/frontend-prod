import React from "react";
import "./Applied.css";
import gro5 from "./assets/gro5.jpg";
import gro6 from "./assets/gro6.jpg";
import gro1 from "./assets/gro1.png";
import gro7 from "./assets/gro7.jpg";
import { useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaHandsHelping,
  FaComments,
  FaSmileBeam,
} from "react-icons/fa";
import {
  FaClipboardList,
  FaUserFriends,
  FaPlay,
  FaShareAlt,
  FaThumbsUp,
  FaChartBar,
} from "react-icons/fa";

function Group() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Title */}
      <div className="text">
        <div> OUR SERVICES</div>
        <h1> Group Therapy </h1>
      </div>

      {/* Intro Section */}
      <div className="card-container">
        <div className="card">
          {/* Left Side - Text */}
          <div className="card-text">
            <h2>What is Group Therapy?</h2>
            <p>
              Group Therapy brings children together in a supportive setting
              where they can learn and practice social, emotional, and
              communication skills. Through shared activities, children gain
              confidence, build friendships, and learn how to interact
              positively with peers.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="card-image">
            <img src={gro6} alt="Group Therapy" />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2 className="benefits-title">Key Benefits of Group Therapy</h2>
        <div className="benefits-container">
          <div className="benefit-card pink">
            <FaUsers className="benefit-icon" />
            <p>Enhances Social Skills</p>
          </div>
          <div className="benefit-card purple">
            <FaComments className="benefit-icon" />
            <p>Improve Communication</p>
          </div>
          <div className="benefit-card orange">
            <FaHandsHelping className="benefit-icon" />
            <p>Builds Confidence</p>
          </div>
          <div className="benefit-card yellow">
            <FaSmileBeam className="benefit-icon" />
            <p>Encourages Empathy</p>
          </div>
          <div className="benefit-card green">
            <FaUserFriends className="benefit-icon" />
            <p>Friendship & Connection</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section">
        <h2 className="how-title">How Group Therapy Works</h2>
        <div className="how-container">
          <div className="how-card">
            <FaClipboardList className="how-icon" />
            <h3>Initial Assessment</h3>
            <p>Placing children in suitable groups.</p>
          </div>
          <div className="how-card">
            <FaUserFriends className="how-icon" />
            <h3>Small Group Sessions</h3>
            <p>Led by skilled therapists.</p>
          </div>
          <div className="how-card">
            <FaPlay className="how-icon" />
            <h3>Games & Role-Play</h3>
            <p>Structured play-based activities.</p>
          </div>
          <div className="how-card">
            <FaShareAlt className="how-icon" />
            <h3>Focus on Sharing</h3>
            <p>Encouraging cooperation.</p>
          </div>
          <div className="how-card">
            <FaThumbsUp className="how-icon" />
            <h3>Positive Reinforcement</h3>
            <p>Encouraging participation.</p>
          </div>
          <div className="how-card">
            <FaChartBar className="how-icon" />
            <h3>Progress Monitoring</h3>
            <p>Parent feedback and updates.</p>
          </div>
        </div>
      </section>

      <div className="image-card">
        <img src={gro1} alt="Therapist and child working at table" />
      </div>
      <div className="child-support-container">
        <div className="left-box">
          <img
            src={gro7}
            alt="Children engaged in group task"
            className="structured-image"
          />
        </div>

        <div className="right-box">
          <h2>Helps in addressing below challenges for your child</h2>
          <ul className="challenges-list">
            <li>Difficulty Making or Maintaining Friendships</li>
            <li>Shyness, Anxiety, or Social Withdrawal</li>
            <li>Struggles with Communication in Peer Groups</li>
            <li>Challenges in Sharing, Turn-Taking, or Teamwork</li>
            <li>Low Confidence in Group Settings</li>
            <li>Difficulty Managing Emotions Around Others</li>
          </ul>
        </div>
      </div>

      {/* What to Expect */}
      <div className="therapy-container">
        {/* Left Side */}
        <div className="therapy-content">
          <h2>What to Expect from a Group Therapy Session?</h2>
          <ul>
            <li>45–60 minute sessions in a small, supportive group</li>
            <li>
              Guided social activities such as games, discussions, and role-play
            </li>
            <li>
              Opportunities to practice teamwork, cooperation, and empathy
            </li>
            <li>
              Activities designed to boost confidence and peer interaction
            </li>
            <li>
              Parent updates and strategies to support social skills at home
            </li>
            <li>
              {" "}
              Safe, encouraging space where children feel accepted and valued
            </li>
          </ul>
        </div>

        <div className="therapy-image-card">
          <img src={gro5} alt="Group therapy session at Tiny Steps Clinic" />
        </div>
      </div>

      <div className="benefit-container">
        <div className="therapy-content">
          <h2>Who Can Benefit?</h2>
          <ul>
            <li className="purplee">
              Children with autism, ADHD, or developmental delays who need
              social skills support
            </li>
            <li className="purplee">
              Kids struggling with shyness, anxiety, or social difficulties
            </li>
            <li className="purplee">
              Children who need practice with sharing, cooperation, or group
              participation
            </li>
            <li className="purplee">
              Any child who will benefit from peer learning and encouragement
            </li>
          </ul>
          <div className="quote-line">
            At Tiny Steps, Group Therapy helps children connect, communicate,
            and grow together in a positive and supportive environment.
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-container">
        <div className="clin">Take the next step with Tiny Steps Clinic</div>
        <p>
          Book a consultation to see how group therapy can support your child’s
          social and emotional growth.
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

        <p className="cta-footerr">Together we grow, together we shine </p>
      </div>
    </div>
  );
}

export default Group;
