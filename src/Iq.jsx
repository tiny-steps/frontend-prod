import React from "react";
import "./Applied.css";
import iq5 from "./assets/iq5.jpg"; // replace with actual IQ image
import iq2 from "./assets/iq2.jpg";
import iq3 from "./assets/iq3.jpg";
import iq4 from "./assets/iq4.jpg";
import { useNavigate } from "react-router-dom";
import {
  FaBrain,
  FaLightbulb,
  FaRocket,
  FaSchool,
  FaUsers,
  FaFileAlt,
  FaTasks,
  FaChartLine,
  FaFileSignature,
  FaComments,
} from "react-icons/fa";

function Iq() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="text">
        <div> OUR SERVICES</div>
        <h1> Intelligence Quotient (IQ) Testing </h1>
      </div>

      <div className="card-container">
        <div className="card">
          {/* Left Side - Text */}
          <div className="card-text">
            <h2>What is IQ Testing?</h2>
            <p>
              IQ Testing at Tiny Steps provides a reliable measure of your
              child’s cognitive strengths and challenges. This structured
              assessment can guide personalized learning, identify giftedness or
              learning needs, and support educational planning.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="card-image">
            <img src={iq5} alt="IQ Testing" />
          </div>
        </div>
      </div>

      <section className="benefits-section">
        <h2 className="benefits-title">Key Benefits of IQ Testing</h2>
        <div className="benefits-container">
          <div className="benefit-card pink">
            <FaBrain className="benefit-icon" />
            <h3>Cognitive Profile</h3>
            <p>
              Measures reasoning, memory, attention, and problem-solving skills.
            </p>
          </div>
          <div className="benefit-card purple">
            <FaLightbulb className="benefit-icon" />
            <h3>Personalized Learning</h3>
            <p>
              Supports tailored educational strategies and classroom
              accommodations.
            </p>
          </div>
          <div className="benefit-card orange">
            <FaRocket className="benefit-icon" />
            <h3>Giftedness Identification</h3>
            <p>
              Recognizes advanced abilities for enrichment or acceleration
              programs.
            </p>
          </div>
          <div className="benefit-card green">
            <FaSchool className="benefit-icon" />
            <h3>Supports IEP / 504 Plan</h3>
            <p>
              Provides objective data for school-based interventions or
              accommodations.
            </p>
          </div>
          <div className="benefit-card blue">
            <FaUsers className="benefit-icon" />
            <h3>Empowers Families & Educators</h3>
            <p>
              Gives clarity on a child’s potential and how best to nurture it.
            </p>
          </div>
        </div>
      </section>

      <section className="how-section">
        <h2 className="how-title">How IQ Testing Works</h2>
        <div className="how-container">
          <div className="how-card">
            <FaFileAlt className="how-icon" />
            <h3>Pre-Consultation</h3>
            <p>Discussion with parents to understand goals and background.</p>
          </div>
          <div className="how-card">
            <FaTasks className="how-icon" />
            <h3>Standardized Testing</h3>
            <p>
              Child completes cognitive tasks administered by a professional.
            </p>
          </div>
          <div className="how-card">
            <FaChartLine className="how-icon" />
            <h3>Scoring & Interpretation</h3>
            <p>
              Results analyzed across various domains (verbal, non-verbal,
              processing, etc.).
            </p>
          </div>
          <div className="how-card">
            <FaFileSignature className="how-icon" />
            <h3>Comprehensive Report</h3>
            <p>Scores, insights, and tailored recommendations provided.</p>
          </div>
          <div className="how-card">
            <FaComments className="how-icon" />
            <h3>Feedback Session</h3>
            <p>
              Review results and next steps with a psychologist or specialist.
            </p>
          </div>
        </div>
      </section>

      <div className="image-card">
        <img src={iq2} alt="IQ Testing Banner" />
      </div>

      <div className="child-support-container">
        <div className="left-box">
          <img
            src={iq3}
            alt="Child in IQ testing session"
            className="structured-image"
          />
          <p className="image-caption">Child engaged in IQ tasks</p>
        </div>

        <div className="right-box">
          <h2>Helps in addressing below challenges for your child</h2>
          <ul className="challenges-list">
            <li>Identifying giftedness or high potential</li>
            <li>Diagnosing intellectual disability or learning difficulties</li>
            <li>Clarifying attention, memory, or reasoning issues</li>
            <li>Informing educational support or placement decisions</li>
            <li>Supporting behavior or emotional development concerns</li>
          </ul>
        </div>
      </div>

      <div className="therapy-container">
        {/* Left Side */}
        <div className="therapy-content">
          <h2>What to Expect from an IQ Testing Session?</h2>
          <ul>
            <li>1–2 hours of direct testing (age dependent)</li>
            <li> Quiet, comfortable, child-friendly testing environment</li>
            <li>Standardized, research-based tools (e.g., WISC, WPPSI)</li>
            <li>Personalized explanation of results</li>
            <li>Official documentation for schools or professionals</li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="therapy-image-card">
          <img src={iq4} alt="Psychologist guiding child" />
        </div>
      </div>

      <div className="benefit-container">
        <div className="therapy-content">
          <h2>Who Can Benefit?</h2>
          <ul>
            <li className="purplee">
              Children struggling with learning or academic performance
            </li>
            <li className="purplee">
              Kids who may be gifted and need advanced learning paths
            </li>
            <li className="purplee">
              Students experiencing attention, memory, or problem-solving
              difficulties
            </li>
            <li>
              Parents seeking clarity on their child’s intellectual strengths
              and needs
            </li>
          </ul>
          <div className="quote-line">
            At Tiny Steps, IQ testing provides deep insight into a child's
            cognitive strengths, helping families make confident decisions for
            their education and future.
          </div>
        </div>
      </div>

      <div className="cta-container">
        <div className="clin">Gain Clarity, Confidence, and Support</div>
        <p>
          Book an IQ Testing session at Tiny Steps Clinic today and take the
          next step toward understanding your child’s potential.
        </p>

        <div className="cta-buttons">
          {/* WhatsApp Book Consultation */}
          <a
            href="https://wa.me/919886062430"
            target="_blank"
            rel="noreferrer"
            className="btn primary-btn">
            Book a Session
          </a>

          {/* Navigate to Contact Page */}
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

export default Iq;
