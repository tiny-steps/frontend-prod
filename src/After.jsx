import React from "react";
import "./Asd.css";
import { useNavigate } from "react-router-dom";

import {
  FaBook,
  FaUsers,
  FaPaintBrush,
  FaRunning,
  FaClock,
  FaClipboardList,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaChartLine,
  FaStar,
} from "react-icons/fa";

import aft2 from "./assets/aft2.jpg";
import aft6 from "./assets/aft6.jpg";
import aft3 from "./assets/aft3.jpg";
import aft5 from "./assets/aft5.jpg";

function After() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Page Header */}
      <div className="text">
        <div>OUR SERVICES</div>
        <h1>After School Club</h1>
      </div>

      {/* What is After School Club */}
      <div className="card-container">
        <div className="card">
          {/* Left Side - Text */}
          <div className="card-text">
            <h2>What is the After School Club?</h2>
            <p>
              A safe, engaging space for students to grow academically,
              socially, and emotionally beyond the school day.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="card-image">
            <img src={aft2} alt="After School Program" />
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <section className="benefits-section">
        <h2 className="benefits-title">Key Benefits of After School Club</h2>
        <div className="benefits-container">
          <div className="benefit-card pink">
            <FaBook className="benefit-icon" />
            <h3>Academic Support</h3>
            <p>Help with homework and skill-building.</p>
          </div>
          <div className="benefit-card purple">
            <FaUsers className="benefit-icon" />
            <h3>Social Interaction</h3>
            <p>Foster friendships and teamwork.</p>
          </div>
          <div className="benefit-card orange">
            <FaPaintBrush className="benefit-icon" />
            <h3>Creative Activities</h3>
            <p>Explore art, music, and games.</p>
          </div>
          <div className="benefit-card green">
            <FaRunning className="benefit-icon" />
            <h3>Physical Activity</h3>
            <p>Promote health and fitness through play.</p>
          </div>
          <div className="benefit-card blue">
            <FaClock className="benefit-icon" />
            <h3>Convenient Scheduling</h3>
            <p>Flexible hours to support busy families.</p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="how-section">
        <h2 className="how-title">How After School Club Works</h2>
        <div className="how-container">
          <div className="how-card">
            <FaClipboardList className="how-icon" />
            <h3>Enrollment & Orientation</h3>
            <p>Families sign up and get an overview.</p>
          </div>
          <div className="how-card">
            <FaCalendarAlt className="how-icon" />
            <h3>Daily Schedule</h3>
            <p>Structured mix of homework time, activities, and free play.</p>
          </div>
          <div className="how-card">
            <FaChalkboardTeacher className="how-icon" />
            <h3>Supervised Support</h3>
            <p>Trained staff guide and assist students.</p>
          </div>
          <div className="how-card">
            <FaChartLine className="how-icon" />
            <h3>Progress Tracking</h3>
            <p>Regular updates on academic & social growth.</p>
          </div>
          <div className="how-card">
            <FaStar className="how-icon" />
            <h3>Special Events</h3>
            <p>Exciting field trips, celebrations & showcases.</p>
          </div>
        </div>
      </section>
      <div className="image-card">
        <img src={aft6} alt="Therapist and child working at table" />
      </div>
      {/* Challenges Section */}
      <div className="child-support-container">
        <div className="left-box">
          <img
            src={aft3}
            alt="Child engaged in activity"
            className="structured-image"
          />
          <p className="image-caption">Child enjoying structured activities</p>
        </div>
        <div className="right-box">
          <h2>Helps in addressing below challenges for your child</h2>
          <ul className="challenges-list">
            <li>Difficulty staying focused after school</li>
            <li>Social skill development gaps</li>
            <li>Need for extra academic help</li>
            <li>Limited access to extracurricular opportunities</li>
          </ul>
        </div>
      </div>

      {/* What to Expect */}
      <div className="therapy-container">
        <div className="therapy-content">
          <h2>What to Expect from an After School Club Session?</h2>
          <ul>
            <li>Safe and welcoming environment</li>
            <li>Small group sizes for personal attention</li>
            <li>Variety of engaging activities</li>
            <li>Positive reinforcement & encouragement</li>
          </ul>
        </div>
        <div className="therapy-image-card">
          <img src={aft5} alt="After school session" />
        </div>
      </div>

      {/* Who Can Benefit */}
      <div className="benefit-container">
        <div className="therapy-content">
          <h2>Who Can Benefit?</h2>
          <ul>
            <li className="purplee">
              Children needing academic support or enrichment
            </li>
            <li className="purplee">
              Kids looking for sociol skills and teamwork oppurtunities
            </li>
            <li className="purplee">
              Students who thrive in small-group or structured settings
            </li>
            <li className="purplee">
              Families wanting safe, supervised after-school care
            </li>
          </ul>
          <div className="quote-line">
            After School Club helps kids grow academically, socially &
            emotionally in a fun,supportive environment.
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-container">
        <div className="clin">Join Our After School Club Today!</div>
        <p>
          Give your child a place to learn, play, and grow beyond the school
          day.
        </p>

        <div className="cta-buttons">
          <a
            href="https://wa.me/919886062430"
            target="_blank"
            rel="noreferrer"
            className="btn primary-btn">
            Enroll Now
          </a>
          <button
            onClick={() => navigate("/contact")}
            className="btn secondary-btn">
            Contact Us
          </button>
        </div>

        <p className="cta-footerr">Happy child and therapist high five </p>
      </div>
    </div>
  );
}

export default After;
