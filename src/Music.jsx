import React from "react";

import { useNavigate } from "react-router-dom";
import {
  FaTheaterMasks,
  FaHeart,
  FaUsers,
  FaStar,
  FaBolt,
  FaRegClipboard,
  FaMusic,
  FaPaintBrush,
  FaTasks,
  FaChartLine,
} from "react-icons/fa";

import mus1 from "./assets/mus1.png";
import mus4 from "./assets/mus4.png";
import mus5 from "./assets/mus5.png";
import mus2 from "./assets/mus2.png";

function Music() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Title */}
      <div className="text">
        <div>OUR SERVICES</div>
        <h1> Music & Art Therapy</h1>
      </div>

      {/* Intro Card */}
      <div className="card-container">
        <div className="card">
          {/* Left Text */}
          <div className="card-text">
            <h2>What is Music & Art Therapy?</h2>
            <p>
              Music & Art Therapy uses creative expression—through music,
              rhythm, drawing, painting, and crafts—to support emotional,
              cognitive, and social development. It provides children with a
              safe, engaging way to express feelings, build confidence, and
              strengthen communication skills.
            </p>
          </div>

          {/* Right Image */}
          <div className="card-image">
            <img src={mus1} alt="Music & Art Therapy" />
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <section className="benefits-section">
        <h2 className="benefits-title">Key Benefits of Music & Art Therapy</h2>
        <div className="benefits-container">
          <div className="benefit-card blue">
            <FaTheaterMasks className="benefit-icon" />
            <p>Encourages Emotional Expression</p>
          </div>
          <div className="benefit-card green">
            <FaHeart className="benefit-icon" />
            <p>Reduces Stress & Anxiety</p>
          </div>
          <div className="benefit-card orange">
            <FaUsers className="benefit-icon" />
            <p>Improves Social Skills</p>
          </div>
          <div className="benefit-card pink">
            <FaStar className="benefit-icon" />
            <p>Boosts Creativity & Confidence</p>
          </div>
          <div className="benefit-card purple">
            <FaBolt className="benefit-icon" />
            <p>Supports Motor & Cognitive Skills</p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="how-section">
        <h2 className="how-title">How Music & Art Therapy Works</h2>
        <div className="how-container">
          <div className="how-card">
            <FaRegClipboard className="how-icon" />
            <h3>Initial Assessment</h3>
            <p>Understand child’s interests & needs</p>
          </div>
          <div className="how-card">
            <FaMusic className="how-icon" />
            <h3>Music & Rhythm</h3>
            <p>Engaging sessions with instruments & songs</p>
          </div>
          <div className="how-card">
            <FaPaintBrush className="how-icon" />
            <h3>Art-Based Exercises</h3>
            <p>Drawing, painting, and crafts</p>
          </div>
          <div className="how-card">
            <FaTasks className="how-icon" />
            <h3>Structured & Flexible</h3>
            <p>Creative sessions tailored to child’s pace</p>
          </div>
          <div className="how-card">
            <FaChartLine className="how-icon" />
            <h3>Progress Tracking</h3>
            <p>Regular updates with parent involvement</p>
          </div>
        </div>
      </section>

      {/* Banner */}
      <div className="image-card">
        <img src={mus4} alt="Music & Art Therapy Banner" />
      </div>

      {/* Challenges */}
      <div className="child-support-container">
        <div className="left-box">
          <img
            src={mus5}
            alt="Child engaged in Music & Art Therapy"
            className="structured-image"
          />
          <p className="image-caption">Child engaged in creative therapy</p>
        </div>

        <div className="right-box">
          <h2>Helps in addressing below challenges for your child</h2>
          <ul className="challenges-list">
            <li>Emotional Regulation Difficulties (anger, anxiety, sadness)</li>
            <li>Trouble Expressing Feelings or Needs in Words</li>
            <li>Social Withdrawal or Shyness</li>
            <li>Limited Creativity or Low Confidence</li>
            <li>Sensory Processing Challenges</li>
            <li>Stress or Difficulty Adjusting to Change</li>
          </ul>
        </div>
      </div>

      {/* What to Expect */}
      <div className="therapy-container">
        <div className="therapy-content">
          <h2>What to Expect from a Music & Art Therapy Session?</h2>
          <ul>
            <li>45–60 minute sessions of music, rhythm, or art activities</li>
            <li>Engaging, play-based methods to encourage participation</li>
            <li>
              Opportunities for self-expression in a safe, supportive setting
            </li>
            <li>
              Activities that support fine motor skills, coordination, and focus
            </li>
            <li>Therapist-guided exercises that promote emotional awareness</li>
            <li>Parent updates to encourage creativity at home</li>
            <li>A joyful, calming, and therapeutic experience</li>
          </ul>
        </div>

        <div className="therapy-image-card">
          <img src={mus2} alt="Music & Art Therapy Session" />
        </div>
      </div>

      {/* Who Can Benefit */}
      <div className="benefit-container">
        <div className="therapy-content">
          <h2>Who Can Benefit?</h2>
          <ul>
            <li className="purplee">
              Children with autism, ADHD, or developmental challenges
            </li>
            <li className="purplee">
              Kids experiencing emotional difficulties or anxiety
            </li>
            <li className="purplee">
              Children who struggle with self-expression through words
            </li>
            <li> Any child who can benefit from creative outlets for growth</li>
          </ul>
          <div className="quote-line">
            At tiny steps Music & Art Therapy helps children unlock creativity,
            express emotions, and grow with joy and confidence.
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-container">
        <div className="clin">Take the next step with Tiny Steps Clinic</div>
        <p>
          Book a consultation to begin your child’s Music & Art Therapy journey.
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

        <p className="cta-footerr"> Happy child and therapist high five </p>
      </div>
    </div>
  );
}

export default Music;
