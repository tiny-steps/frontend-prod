import React from "react";
import "./Asd.css";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaCompass,
  FaChartLine,
  FaHandsHelping,
  FaStopwatch,
  FaClipboardList,
  FaBookOpen,
  FaChalkboardTeacher,
  FaRegChartBar,
  FaClipboardCheck,
} from "react-icons/fa";

import aca1 from "./assets/aca1.png";
import aca3 from "./assets/aca3.webp";
import aca2 from "./assets/aca2.jpg";
import aca4 from "./assets/aca4.jpg";

function Academic() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="text">
        <div>OUR SERVICES</div>
        <h1> Academic Skill Deficit Program</h1>
      </div>

      <div className="card-container">
        <div className="card">
          <div className="card-text">
            <h2>What is the Academic Skill Deficit Program?</h2>
            <p>
              The Academic Skill Deficit Program is designed to support children
              who struggle with core learning areas like reading, writing, and
              math. Our evidence-based, individualized approach builds
              foundational academic skills and confidence, helping every child
              reach their full potential.
            </p>
          </div>

          <div className="card-image">
            <img src={aca1} alt="Academic Support" />
          </div>
        </div>
      </div>

      <section className="benefits-section">
        <h2 className="benefits-title">
          Key Benefits of the Academic Skill Deficit Program
        </h2>
        <div className="benefits-container">
          <div className="benefit-card pink">
            <FaSearch className="benefit-icon" />
            <h3>Early Identification</h3>
            <p> Spot signs of autism before school age for better outcomes.</p>
          </div>
          <div className="benefit-card purple">
            <FaCompass className="benefit-icon" />
            <h3>Guided Next Steps</h3>
            <p>Provides direction for further evaluation or therapy.</p>
          </div>
          <div className="benefit-card orange">
            <FaChartLine className="benefit-icon" />
            <h3>Track Development Over Time</h3>
            <p>Supports ongoing monitoring even without a diagnosis.</p>
          </div>
          <div className="benefit-card green">
            <FaHandsHelping className="benefit-icon" />
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

      <section className="how-section">
        <h2 className="how-title">
          How the Academic Skill Deficit Program Works
        </h2>
        <div className="how-container">
          <div className="how-card">
            <FaClipboardList className="how-icon" />
            <h3>Initial Assessment</h3>
            <p>
              Identifies strengths and areas needing support in reading,
              writing, and math.
            </p>
          </div>
          <div className="how-card">
            <FaBookOpen className="how-icon" />
            <h3>Individualized Plan</h3>
            <p>Personalized academic goals based on assessment results.</p>
          </div>
          <div className="how-card">
            <FaChalkboardTeacher className="how-icon" />
            <h3>1:1 or Small Group</h3>
            <p>Hands-on, interactive sessions with a learning specialist.</p>
          </div>
          <div className="how-card">
            <FaRegChartBar className="how-icon" />
            <h3>Ongoing Monitoring</h3>
            <p>Regular progress tracking and plan adjustments.</p>
          </div>
          <div className="how-card">
            <FaClipboardCheck className="how-icon" />
            <h3>End-of-Program Review</h3>
            <p>
              Evaluation of growth and recommendations for school/home support.
            </p>
          </div>
        </div>
      </section>
      <div className="image-card">
        <img src={aca2} alt="Therapist and child working at table" />
      </div>

      <div className="child-support-container">
        <div className="left-box">
          <img src={aca3} alt="Child learning" className="structured-image" />
        </div>
        <div className="right-box">
          <h2>Helps in addressing below challenges for your child</h2>
          <ul className="challenges-list">
            <li>Reading comprehension & fluency</li>
            <li>Basic math operations & problem-solving</li>
            <li>Written expression & grammar</li>
            <li>Study skills & learning strategies</li>
            <li>Attention, organization & memory</li>
            <li>Confidence & motivation to learn</li>
          </ul>
        </div>
      </div>

      {/* What to Expect */}
      <div className="therapy-container">
        <div className="therapy-content">
          <h2>What to Expect from a Academic Skill Deficit Program Session?</h2>
          <ul>
            <li>Weekly sessions (30–60 minutes each)</li>
            <li>Structured, skill-building curriculum</li>
            <li>Supportive & engaging teaching style</li>
            <li>Regular parent feedback & progress updates</li>
            <li>
              Option to integrate with school support plans (e.g. IEP/504)
            </li>
          </ul>
        </div>
        <div className="therapy-image-card">
          <img src={aca4} alt="Academic session with child" />
        </div>
      </div>

      {/* Who Can Benefit */}
      <div className="benefit-container">
        <div className="therapy-content">
          <h2>Who Can Benefit?</h2>
          <ul>
            <li className="purplee">
              Children with learning delays or academic struggles
            </li>
            <li className="purplee">
              Kids not responding well to classroom instruction
            </li>
            <li className="purplee">
              Students with ADHD or dyslexia, or processing difficulties
            </li>
            <li className="purplee">
              Families seeking personalized, outside-school support
            </li>
          </ul>
          <div className="quote-line">
            At Tiny steps with the right support, every child can rediscover the
            joy of learning.
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-container">
        <div className="clin">
          Build Strong Foundations for Lifelong Learning
        </div>
        <p>
          Enroll in the Academic Skill Deficit Program at Tiny Steps Clinic and
          empower your child with the tools to succeed.
        </p>

        <div className="cta-buttons">
          {/* WhatsApp */}
          <a
            href="https://wa.me/919886062430"
            target="_blank"
            rel="noreferrer"
            className="btn primary-btn">
            Enroll Now
          </a>

          {/* Contact Page */}
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

export default Academic;
