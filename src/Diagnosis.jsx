import React from "react";
import "./Applied.css";
import dia1 from "./assets/dia1.avif";
import dia2 from "./assets/dia2.jpg";
import dia3 from "./assets/dia3.jpg";
import dia4 from "./assets/dia4.jpg";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaClipboardList,
  FaShieldAlt,
  FaRegClock,
  FaBook,
  FaClipboard,
  FaChild,
  FaPencilAlt,
  FaUsers,
  FaFileAlt,
} from "react-icons/fa";

function Diagnosis() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="text">
        <div> OUR SERVICES</div>
        <h1> Developmental & Behavioral Diagnosis </h1>
      </div>

      <div className="card-container">
        <div className="card">
          <div className="card-text">
            <h2>What is a Diagnostic Evaluation?</h2>
            <p>
              A comprehensive diagnostic evaluation helps identify
              developmental, behavioral, and emotional conditions such as
              autism, ADHD, speech disorders, and more. It provides families
              with clarity, professional insights, and a roadmap for support.
            </p>
          </div>

          <div className="card-image">
            <img src={dia1} alt="Diagnosis session" />
          </div>
        </div>
      </div>

      <section className="benefits-section">
        <h2 className="benefits-title">Key Benefits of Diagnosis</h2>
        <div className="benefits-container">
          <div className="benefit-card pink">
            <FaSearch className="benefit-icon" />
            <h3>Clarity & Understanding</h3>
            <p>Pinpoints the root of challenges your child may be facing.</p>
          </div>
          <div className="benefit-card purple">
            <FaClipboardList className="benefit-icon" />

            <h3>Informed Action Plan</h3>
            <p>Leads to targeted therapies and educational support.</p>
          </div>
          <div className="benefit-card orange">
            <FaShieldAlt className="benefit-icon" />
            <h3>Support for Families</h3>
            <p>
              Equips parents with knowledge and confidence to help their child.
            </p>
          </div>
          <div className="benefit-card green">
            <FaRegClock className="benefit-icon" />
            <h3>Early Intervention</h3>
            <p>Enables timely access to services that improve outcomes.</p>
          </div>
          <div className="benefit-card blue">
            <FaBook className="benefit-icon" />
            <h3>Access to Resources</h3>
            <p>
              Opens doors to accommodations, educational plans, and community
              supports.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section">
        <h2 className="how-title">How Diagnosis Works</h2>
        <div className="how-container">
          <div className="how-card">
            <FaClipboard className="how-icon" />
            <h3>Clinical Interview</h3>
            <p>Caregiver discussion about developmental history</p>
          </div>
          <div className="how-card">
            <FaChild className="how-icon" />
            <h3>Child Evaluation</h3>
            <p>
              Direct assessment of the child’s behavior, skills, and
              interactions.
            </p>
          </div>
          <div className="how-card">
            <FaPencilAlt className="how-icon" />
            <h3>Standardized Tests</h3>
            <p>
              Use of diagnostic tools for autism, ADHD, speech/language, and
              more.
            </p>
          </div>
          <div className="how-card">
            <FaUsers className="how-icon" />
            <h3>Multi-disciplinary Review</h3>
            <p>
              Collaboration with psychologists, therapists, and pediatricians if
              needed.
            </p>
          </div>
          <div className="how-card">
            <FaFileAlt className="how-icon" />
            <h3>Diagnosis & Report</h3>
            <p>Formal feedback session with report and next steps.</p>
          </div>
        </div>
      </section>

      {/* Banner Image */}
      <div className="image-card">
        <img src={dia2} alt="Doctor and child" />
      </div>

      {/* Challenges */}
      <div className="child-support-container">
        <div className="left-box">
          <img
            src={dia4}
            alt="Child evaluation task"
            className="structured-image"
          />
        </div>

        <div className="right-box">
          <h2>Helps in addressing below challenges for your child</h2>
          <ul className="challenges-list">
            <li>Delays in speech, language, or motor skills</li>
            <li>Difficulty with attention, focus, or hyperactivity</li>
            <li>Repetitive behaviors or sensory sensitivities</li>
            <li>Trouble with peer interaction or emotional regulation</li>
            <li>Learning difficulties or academic struggles</li>
            <li>Unclear or conflicting previous assessments</li>
          </ul>
        </div>
      </div>

      {/* What to Expect */}
      <div className="therapy-container">
        <div className="therapy-content">
          <h2>What to Expect from a Diagnosis Session?</h2>
          <ul>
            <li>2–4 hour evaluation process across sessions </li>
            <li>Parent/caregiver clinical interview </li>
            <li>Direct interaction and standardized assessments </li>
            <li>Behavioral and developmental observation </li>
            <li>Written diagnostic report with recommendations </li>
            <li>Referrals for therapy or further support if needed </li>
            <li>Supportive, compassionate team throughout</li>
          </ul>
        </div>

        <div className="therapy-image-card">
          <img src={dia3} alt="Therapist guiding child" />
        </div>
      </div>

      {/* Who Can Benefit */}
      <div className="benefit-container">
        <div className="therapy-content">
          <h2>Who Can Benefit?</h2>
          <ul>
            <li className="purplee">
              Children with unclear or delayed progress
            </li>
            <li className="purplee">
              Children previously screened for ASD, ADHD, or speech delays
            </li>
            <li className="purplee">
              Families seeking a second opinion or formal diagnosis
            </li>
            <li className="purplee">
              Schools/doctors recommending deeper evaluation
            </li>
          </ul>
          <div>
            <p className="quote-line">
              A diagnosis is not a label — it’s a map that guides families
              toward the right support and peace of mind.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-container">
        <div className="clin">Take the Next Step Toward Clarity</div>
        <p>
          Book a diagnostic evaluation at Tiny Steps Clinic and get expert
          insight into your child’s development.
        </p>

        <div className="cta-buttons">
          <a
            href="https://wa.me/919886062430"
            target="_blank"
            rel="noreferrer"
            className="btn primary-btn">
            Book a Diagnosis
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

        <p className="cta-footerr">Happy child and therapist high-five </p>
      </div>
    </div>
  );
}

export default Diagnosis;
