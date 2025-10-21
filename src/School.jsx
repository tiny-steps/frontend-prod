import React from "react";
import "./Applied.css";
import { useNavigate } from "react-router-dom";

import {
  FaBrain,
  FaUsers,
  FaSmile,
  FaClipboardList,
  FaComments,
  FaHandHoldingHeart,
  FaSearch,
  FaRegClipboard,
  FaChalkboardTeacher,
  FaPuzzlePiece,
  FaChartLine,
} from "react-icons/fa";

import sch1 from "./assets/sch1.jpg";
import sch3 from "./assets/sch3.jpg";
import sch2 from "./assets/sch2.jpg";
import sch4 from "./assets/sch4.jpg";

function School() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Page Header */}
      <div className="text">
        <div> OUR SERVICES</div>
        <h1> School Readiness Program</h1>
      </div>

      {/* What is Online Intervention */}
      <div className="card-container">
        <div className="card">
          {/* Left - Text */}
          <div className="card-text">
            <h2>What is the School Readiness Program?</h2>
            <p>
              Tiny Steps’ School Readiness Program helps children develop the
              foundational academic, social, emotional, and behavioral skills
              needed for a confident and successful start to school. Through
              playful learning and individualized attention, we prepare your
              child for structured classroom environments.
            </p>
          </div>

          {/* Right - Image */}
          <div className="card-image">
            <img src={sch1} alt="Online Intervention" />
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <section className="benefits-section">
        <h2 className="benefits-title">
          Key Benefits of School Readiness Program
        </h2>
        <div className="benefits-container">
          <div className="benefit-card pink">
            <FaBrain className="benefit-icon" />
            <h3> Cognitive Preparation</h3>
            <p>Builds early literacy, numeracy, and problem-solving skills.</p>
          </div>
          <div className="benefit-card purple">
            <FaUsers className="benefit-icon" />
            <h3> Social Readiness</h3>
            <p>Encourages cooperation, sharing, and group participation.</p>
          </div>
          <div className="benefit-card orange">
            <FaSmile className="benefit-icon" />
            <h3> Emotional Regulationt</h3>
            <p>Develops confidence, resilience, and self-control.</p>
          </div>
          <div className="benefit-card green">
            <FaClipboardList className="benefit-icon" />
            <h3>Routine & Structure</h3>
            <p>Introduces classroom-like routines for smoother transitions.</p>
          </div>
          <div className="benefit-card blue">
            <FaComments className="benefit-icon" />
            <h3>Language Development</h3>
            <p>Supports vocabulary, communication, and expressive skills.</p>
          </div>
          <div className="benefit-card yellow">
            <FaHandHoldingHeart className="benefit-icon" />
            <h3>Family Involvement</h3>
            <p>
              Parents receive regular updates and tools to reinforce learning at
              home.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="how-section">
        <h2 className="how-title">How the School Readiness Program Works</h2>
        <div className="how-container">
          <div className="how-card">
            <FaSearch className="how-icon" />
            <h3> Initial Screening</h3>
            <p>
              We assess your child’s current developmental and school readiness
              levels.
            </p>
          </div>
          <div className="how-card">
            <FaRegClipboard className="how-icon" />
            <h3>Individualized Plan</h3>
            <p>
              Activities are tailored to strengthen specific areas of growth.
            </p>
          </div>
          <div className="how-card">
            <FaChalkboardTeacher className="how-icon" />
            <h3> Interactive Sessions</h3>
            <p>
              Led by early childhood educators and developmental specialists.
            </p>
          </div>
          <div className="how-card">
            <FaPuzzlePiece className="how-icon" />
            <h3>Play-Based Learning</h3>
            <p>
              Creative and fun activities that build real-world school skills.
            </p>
          </div>
          <div className="how-card">
            <FaChartLine className="how-icon" />
            <h3>Progress Reviews</h3>
            <p>Ongoing feedback to help families support learning at home.</p>
          </div>
        </div>
      </section>
      <div className="image-card">
        <img src={sch2} alt="Therapist and child working at table" />
      </div>
      {/* Challenges / Support Areas */}
      <div className="child-support-container">
        <div className="left-box">
          <img src={sch4} alt="Online support" className="structured-image" />
        </div>
        <div className="right-box">
          <h2>Helps in addressing below challenges for your child</h2>
          <ul className="challenges-list">
            <li>Pre-literacy and early math understanding</li>
            <li>Fine motor and pre-writing skills</li>
            <li>Social-emotional development and friendships</li>
            <li>Following instructions and managing transitions</li>
            <li>Attention, focus, and task completion</li>
            <li>Confidence and independence in new environments</li>
          </ul>
        </div>
      </div>

      {/* What to Expect */}
      <div className="therapy-container">
        <div className="therapy-content">
          <h2>What to Expect from School Readiness Program Session?</h2>
          <ul>
            <li>Small group or one-on-one sessions</li>
            <li>Engaging, structured learning routines</li>
            <li> Parent involvement and regular updates</li>
            <li>Emphasis on fun and emotional safety</li>
            <li> Transition planning for kindergarten or preschool</li>
          </ul>
        </div>
        <div className="therapy-image-card">
          <img src={sch3} alt="Virtual therapy session" />
        </div>
      </div>

      {/* Who Can Benefit */}
      <div className="benefit-container">
        <div className="therapy-content">
          <h2>Who Can Benefit?</h2>
          <ul>
            <li className="purplee">
              Children preparing to enter preschool or kindergarten
            </li>
            <li className="purplee">
              Kids needing extra support with communication, focus, or behavior
            </li>
            <li className="purplee">
              Families concerned about their child’s school readiness
            </li>
            <li className="purplee">
              Children who have not experienced a structured group setting yet
            </li>
          </ul>
          <div className="quote-line">
            With the right support, every child can feel confident and capable
            as they begin their school journey.
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-container">
        <div className="clin">Give Your Child a Confident Start</div>
        <p>
          Enroll in our School Readiness Program today and set the stage for
          lifelong learning success.
        </p>

        <div className="cta-buttons">
          <a
            href="https://wa.me/919886062430"
            target="_blank"
            rel="noreferrer"
            className="btn primary-btn">
            Enroll now
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

export default School;
