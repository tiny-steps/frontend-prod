import React from "react";
import "./Applied.css";
import sph1 from "./assets/sph1.png";
import sph5 from "./assets/sph5.jpg";
import sph2 from "./assets/sph2.webp";
import sph4 from "./assets/sph4.webp";

import {
  FaVolumeUp,
  FaBookOpen,
  FaHandshake,
  FaUserCheck,
} from "react-icons/fa";
import { MdHearing, MdOutlineAssignment } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineHighlight, AiOutlinePicture } from "react-icons/ai";
import { GiPuzzle, GiTalk } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function Speech() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="text">
        <div>Our Services</div>
        <h1>Speech Therapy</h1>
      </div>

      {/* Intro Section */}
      <div className="card-container">
        <div className="card">
          <div className="card-text">
            <h2>What is Speech Therapy?</h2>
            <p>
              Speech Therapy helps children develop communication skills,
              including speech, language, and social interaction. Through
              play-based methods and engaging exercises, it empowers children to
              express themselves clearly and confidently.
            </p>
          </div>
          <div className="card-image">
            <img src={sph5} alt="Speech Therapy" />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2 className="benefits-title">Key Benefits of Speech Therapy</h2>
        <div className="benefits-container">
          <div className="benefit-card pink">
            <FaVolumeUp className="benefit-icon" />
            <h3>Improves Speech Clarity</h3>
            <p>Work on pronunciation and clear articulation.</p>
          </div>
          <div className="benefit-card purple">
            <FaBookOpen className="benefit-icon" />
            <h3>Enhances Vocabulary</h3>
            <p>Builds language and sentence formation skills.</p>
          </div>
          <div className="benefit-card orange">
            <FaHandshake className="benefit-icon" />
            <h3>Supports Social Interaction</h3>
            <p>Practice conversation, eye contact, and turn-taking.</p>
          </div>
          <div className="benefit-card green">
            <FaUserCheck className="benefit-icon" />
            <h3>Builds Confidence</h3>
            <p>Encourages self-expression and speaking in different settings</p>
          </div>
          <div className="benefit-card blue">
            <MdHearing className="benefit-icon" />
            <h3>Strengthens Listening</h3>
            <p>Improve comprehension and following instructions</p>
          </div>
          <div className="benefit-card yellow">
            <GiTalk className="benefit-icon" />
            <h3>Encourages Independence</h3>
            <p>Support for everyday communication needs.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section">
        <h2 className="how-title">How Speech Therapy Works</h2>
        <div className="how-container">
          <div className="how-card">
            <MdOutlineAssignment className="how-icon" />
            <h3>Initial Assessment</h3>
            <p>Assess speech, language, and communication needs.</p>
          </div>
          <div className="how-card">
            <AiOutlineHighlight className="how-icon" />
            <h3>Individualized Plan</h3>
            <p>Create goals tailored to communication development.</p>
          </div>
          <div className="how-card">
            <GiPuzzle className="how-icon" />
            <h3>Interactive Activities</h3>
            <p>Games, stories, songs to make learning fun.</p>
          </div>
          <div className="how-card">
            <AiOutlinePicture className="how-icon" />
            <h3>Visuals & Gestures</h3>
            <p>Use pictures, signs, and repetition for learning.</p>
          </div>
          <div className="how-card">
            <BsFillPeopleFill className="how-icon" />
            <h3>Social Practice</h3>
            <p>Role-play and play-based settings for real-life skills.</p>
          </div>
          <div className="how-card">
            <FaUserCheck className="how-icon" />
            <h3>Parent Involvement</h3>
            <p>Home practice strategies and progress support.</p>
          </div>
        </div>
      </section>

      {/* Banner Image */}
      <div className="image-card">
        <img src={sph4} alt="Speech therapy session" />
      </div>

      {/* Challenges Addressed */}
      <div className="child-support-container">
        <div className="left-box">
          <img src={sph2} alt="Child speaking" className="structured-image" />
          <p className="image-caption">Building strong communication skills</p>
        </div>
        <div className="right-box">
          <h2>Helps in addressing below challenges for your child</h2>
          <ul className="challenges-list">
            <li>Speech delay or difficulty in pronunciation</li>
            <li>Limited vocabulary or trouble forming sentences</li>
            <li>Stammering or fluency disorders</li>
            <li>Trouble understanding or following instructions</li>
            <li>Social communication challenges (eye contact, conversation)</li>
            <li>Low confidence in speaking or expressing needs</li>
          </ul>
        </div>
      </div>

      {/* What to Expect */}
      <div className="therapy-container">
        <div className="therapy-content">
          <h2>What to Expect from a Speech Therapy Session?</h2>
          <ul>
            <li>45–60 minute interactive sessions tailored to the child</li>
            <li>Engaging, play-based exercises with visuals and sounds</li>
            <li>Step-by-step practice to improve clarity and fluency</li>
            <li>
              Activities that support listening, understanding, and responding
            </li>
            <li>Encouragement of social communication through role-play</li>
            <li>Guidance for parents to support speech at home</li>
            <li>
              A supportive, motivating, and confidence-building environment
            </li>
          </ul>
        </div>
        <div className="therapy-image-card">
          <img src={sph1} alt="Speech therapist with child" />
        </div>
      </div>

      {/* Who Can Benefit */}
      <div className="benefit-container">
        <div className="therapy-content">
          <h2>Who Can Benefit?</h2>
          <ul>
            <li className="purplee">
              Children with autism, ADHD, or developmental delays
            </li>
            <li className="purplee">Kids with speech or language disorders</li>
            <li className="purplee">
              Children struggling with fluency (stammering, unclear speech)
            </li>
            <li className="purplee">
              Kids facing difficulties in social interaction or expression
            </li>
            <li className="purplee">
              Any child who needs support to build strong communication skills
            </li>
          </ul>
          <div className="quote-line">
            At Tiny Steps, Speech Therapy helps children find their voice,
            express themselves with clarity, and connect with the world with
            confidence.
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-container">
        <div className="clin">Take the next step with Tiny Steps Clinic</div>
        <p>
          Book a consultation to begin your child’s personalized Speech Therapy
          journey.
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

        <p className="cta-footerr">Happy child and therapist high five </p>
      </div>
    </div>
  );
}

export default Speech;
