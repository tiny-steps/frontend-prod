import React from "react";
import "./Applied.css";
import { useNavigate } from "react-router-dom";

import {
  FaLaptop,
  FaGlobe,
  FaUserCog,
  FaUsers,
  FaCalendarAlt,
  FaSyncAlt,
  FaBook,
  FaClipboardList,
  FaUserFriends,
  FaFileAlt,
  FaChartLine,
  FaComments,
} from "react-icons/fa";

import onl1 from "./assets/onl1.jpg";
import onl3 from "./assets/onl3.jpg";
import onl2 from "./assets/onl2.jpg";
import onl4 from "./assets/onl4.jpg";

function Online() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Page Header */}
      <div className="text">
        <div>OUR SERVICES</div>
        <h1>Online Intervention Program</h1>
      </div>

      {/* What is Online Intervention */}
      <div className="card-container">
        <div className="card">
          {/* Left - Text */}
          <div className="card-text">
            <h2>What is the Online Intervention Program?</h2>
            <p>
              Tiny Steps' Online Intervention Program brings expert therapeutic
              support directly to your home. Designed for flexibility and
              accessibility, our virtual sessions provide individualized
              intervention plans tailored to your child’s developmental,
              academic, or behavioral needs.
            </p>
          </div>

          {/* Right - Image */}
          <div className="card-image">
            <img src={onl1} alt="Online Intervention" />
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <section className="benefits-section">
        <h2 className="benefits-title">
          Key Benefits of Online Intervention Program
        </h2>
        <div className="benefits-container">
          <div className="benefit-card pink">
            <FaLaptop className="benefit-icon" />
            <h3>Convenience</h3>
            <p>Access services from the comfort and safety of home.</p>
          </div>
          <div className="benefit-card purple">
            <FaGlobe className="benefit-icon" />
            <h3>Remote Access</h3>
            <p>
              Available to families in all locations, regardless of proximity to
              clinics.
            </p>
            <p></p>
          </div>
          <div className="benefit-card orange">
            <FaUserCog className="benefit-icon" />
            <h3>Tailored Support</h3>
            <p>Customized strategies for each child’s goals and challenges.</p>
          </div>
          <div className="benefit-card green">
            <FaUsers className="benefit-icon" />
            <h3>Parental Involvement</h3>
            <p>
              Parents play an active role in sessions and progress tracking.
            </p>
          </div>
          <div className="benefit-card blue">
            <FaCalendarAlt className="benefit-icon" />
            <h3>Flexible Scheduling</h3>
            <p>Sessions can be planned around school and family routines.</p>
          </div>
          <div className="benefit-card yellow">
            <FaSyncAlt className="benefit-icon" />
            <h3>Continuity of Care</h3>
            <p>
              Maintain support even during travel, transitions, or school
              breaks.
            </p>
          </div>
          <div className="benefit-card grey">
            <FaBook className="benefit-icon" />
            <h3>Evidence-Based Approach</h3>
            <p>
              Online sessions use the same proven methods as in-person therapy.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="how-section">
        <h2 className="how-title">How Online Intervention Program Works</h2>
        <div className="how-container">
          <div className="how-card">
            <FaClipboardList className="how-icon" />
            <h3>Initial Virtual Assessment</h3>
            <p>
              We evaluate your child’s needs through online observation and
              caregiver input.
            </p>
          </div>
          <div className="how-card">
            <FaUserFriends className="how-icon" />
            <h3>Customized Plan</h3>
            <p>
              Therapists design a personalized intervention schedule and
              approach.
            </p>
          </div>
          <div className="how-card">
            <FaFileAlt className="how-icon" />
            <h3>Live Interactive Sessions</h3>
            <p>
              Engaging one-on-one or group sessions led by licensed specialists.
            </p>
          </div>
          <div className="how-card">
            <FaChartLine className="how-icon" />
            <h3>Progress Monitoring</h3>
            <p>Regular updates and adaptations to meet your child’s pace.</p>
          </div>
          <div className="how-card">
            <FaComments className="how-icon" />
            <h3>Ongoing Communication</h3>
            <p>Continuous collaboration between families and professionals.</p>
          </div>
        </div>
      </section>
      <div className="image-card">
        <img src={onl3} alt="Therapist and child working at table" />
      </div>
      {/* Challenges / Support Areas */}
      <div className="child-support-container">
        <div className="left-box">
          <img src={onl2} alt="Online support" className="structured-image" />
          <p className="image-caption">
            Virtual support tailored to each child
          </p>
        </div>
        <div className="right-box">
          <h2>Helps in addressing below challenges for your child</h2>
          <ul className="challenges-list">
            <li>Speech and Language Development</li>
            <li>Academic and Learning Challenges</li>
            <li>Behavioral Support & Emotional Regulation</li>
            <li>Motor Skills & Sensory Integration</li>
            <li>Parent Coaching & Home Routines</li>
          </ul>
        </div>
      </div>

      {/* What to Expect */}
      <div className="therapy-container">
        <div className="therapy-content">
          <h2>What to Expect from an Online Intervention Program Session?</h2>
          <ul>
            <li>Easy-to-use video platforms & tools</li>
            <li>Flexible scheduling, including after-school slots</li>
            <li>Fun, engaging online activities designed for kids</li>
            <li>Collaboration with your child’s school if needed</li>
            <li>Ongoing feedback & adjustment of goals</li>
          </ul>
        </div>
        <div className="therapy-image-card">
          <img src={onl4} alt="Virtual therapy session" />
        </div>
      </div>

      {/* Who Can Benefit */}
      <div className="benefit-container">
        <div className="therapy-content">
          <h2>Who Can Benefit?</h2>
          <ul>
            <li className="purplee">
              Families unable to attend in-person sessions
            </li>
            <li className="purplee">
              Children with anxiety or health concerns
            </li>
            <li className="purplee">
              Students needing support during school breaks
            </li>
            <li className="purplee">
              Parents looking for home-based skill building
            </li>
          </ul>
          <div className="quote-line">
            At Tiny Steps Online Intervention makes expert therapy accessible,
            flexible, and just as personal — no matter where you are.
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-container">
        <div className="clin">Bring Therapy Home</div>
        <p>
          Enroll in our Online Intervention Program and start seeing progress,
          virtually.
        </p>

        <div className="cta-buttons">
          <a
            href="https://wa.me/919886062430"
            target="_blank"
            rel="noreferrer"
            className="btn primary-btn">
            Book a Session
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

export default Online;
