import React from "react";
import "./Applied.css";
import Ear1 from "./assets/Ear1.jpg";
import ear2 from "./assets/ear2.jpg";
import ear3 from "./assets/ear3.jpg";
import ear4 from "./assets/ear4.jpg";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaBullseye,
  FaUsers,
  FaChartBar,
  FaFileAlt,
  FaClipboardList,
  FaUserMd,
  FaChartLine,
  FaMedal,
} from "react-icons/fa";

function Earlyinter() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Page Intro */}
      <div className="text">
        <div>OUR SERVICES</div>
        <h1>Early Intervention Program</h1>
      </div>

      {/* What is Early Intervention */}
      <div className="card-container">
        <div className="card">
          <div className="card-text">
            <h2> What is Early Intervention?</h2>
            <p>
              Providing specialized support for young children to promote
              healthy development and address challenges early.
            </p>
          </div>
          <div className="card-image">
            <img src={Ear1} alt="Early Intervention Program" />
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <section className="benefits-section">
        <h2 className="benefits-title">
          Key Benefits of Early Intervention Program
        </h2>
        <div className="benefits-container">
          <div className="benefit-card pink">
            <FaSearch className="benefit-icon" />
            <h3>Early Detection</h3>
            <p>Identifies developmental delays or concerns promptly.</p>
          </div>
          <div className="benefit-card purple">
            <FaBullseye className="benefit-icon" />
            <h3>Targeted Support</h3>
            <p>Customized plans addressing each child's unique needs.</p>
          </div>
          <div className="benefit-card orange">
            <FaUsers className="benefit-icon" />
            <h3>Family Involvement</h3>
            <p>Empowers parents with tools and guidance to support progress.</p>
          </div>
          <div className="benefit-card green">
            <FaChartBar className="benefit-icon" />
            <h3>Improved Outcomes</h3>
            <p>Enhances long-term development and learning potential.</p>
          </div>
        </div>
      </section>

      {/* How the Program Works */}
      <section className="how-section">
        <h2 className="how-title">How Early Intervention Program Works</h2>
        <div className="how-container">
          <div className="how-card">
            <FaFileAlt className="how-icon" />
            <h3>Comprehensive Evaluation</h3>
            <p>Assessment by specialists to understand developmental status.</p>
          </div>
          <div className="how-card">
            <FaClipboardList className="how-icon" />
            <h3>Individualized Plan</h3>
            <p>Goals tailored to support specific growth areas.</p>
          </div>
          <div className="how-card">
            <FaUserMd className="how-icon" />
            <h3>Therapeutic Sessions</h3>
            <p>
              Speech, occupational, physical, or behavioral therapies as needed.
            </p>
          </div>
          <div className="how-card">
            <FaChartLine className="how-icon" />
            <h3>Regular Monitoring</h3>
            <p>Ongoing progress checks and updates</p>
          </div>
          <div className="how-card">
            <FaMedal className="how-icon" />
            <h3>Family Training</h3>
            <p>Guidance for parents to reinforce skills at home</p>
          </div>
        </div>
      </section>

      {/* Banner Image */}
      <div className="image-card">
        <img src={ear2} alt="Therapist with child in early program" />
      </div>

      {/* Challenges */}
      <div className="child-support-container">
        <div className="left-box">
          <img
            src={ear3}
            alt="Child in early therapy session"
            className="structured-image"
          />
          <p className="image-caption">Therapist guiding a young child</p>
        </div>
        <div className="right-box">
          <h2>Helps in addressing below challenges for your child</h2>
          <ul className="challenges-list">
            <li>Delayed speech or language skills</li>
            <li>Motor skill difficulties</li>
            <li>Social or emotional delays</li>
            <li>Learning and attention challenges</li>
          </ul>
        </div>
      </div>

      {/* What to Expect */}
      <div className="therapy-container">
        <div className="therapy-content">
          <h2>What to Expect from an Early Intervention Program Session?</h2>
          <ul>
            <li>Individualized, family-centered approach</li>
            <li>Multidisciplinary team involvement</li>
            <li>Therapy tailored to developmental needs</li>
            <li>Ongoing support and progress updates</li>
          </ul>
        </div>
        <div className="therapy-image-card">
          <img src={ear4} alt="Family with therapist during program" />
        </div>
      </div>

      {/* Who Can Benefit */}
      <div className="benefit-container">
        <div className="therapy-content">
          <h2>Who Can Benefit?</h2>
          <ul>
            <li className="purplee">
              Infants and toddlers showing signs of developmental delays
            </li>
            <li className="purplee">
              Children with diagnosed or suspected disabilities
            </li>
            <li className="purplee">
              Families seeking early support and guidance
            </li>
            <li className="purplee">
              Caregivers wanting to understand developmental milestones
            </li>
          </ul>
          <p className="quote-line">
            Early support can make a significant difference in a child’s
            development and lifelong success.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-container">
        <div className="clin">Start Early for Lasting Impact</div>
        <p>
          Enroll in the Early Intervention Program at Tiny Steps Clinic and give
          your child a strong foundation for growth and success.
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

export default Earlyinter;
