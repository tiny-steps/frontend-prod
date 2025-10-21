import React from "react";
import "./Applied.css";
import sen1 from "./assets/sen1.jpeg";
import sen2 from "./assets/sen2.webp";
import sen3 from "./assets/sen3.avif";
import sen4 from "./assets/sen4.jpg";
import { useNavigate } from "react-router-dom";

// Icons
import { FaSmile, FaChild, FaHandsHelping, FaChartLine } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { MdOutlineAssignment, MdFamilyRestroom } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";

function Sensory() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Intro Section */}
      <div className="text">
        <div> Our Services</div>
        <h1> Sensory Integration Therapy </h1>
      </div>

      {/* What is Section */}
      <div className="card-container">
        <div className="card">
          <div className="card-text">
            <h2>What is Sensory Integration Therapy?</h2>
            <p>
              Sensory Integration Therapy (SIT) helps children who face
              challenges in processing and responding to sensory information
              such as touch, sound, movement, or sight. Through structured,
              play-based activities, it enables children to better regulate
              their senses, improve focus, and participate more confidently in
              daily life.
            </p>
          </div>
          <div className="card-image">
            <img src={sen1} alt="Sensory Therapy" />
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <section className="benefits-section">
        <h2 className="benefits-title">
          Key Benefits of Sensory Integration Therapy
        </h2>
        <div className="benefits-container">
          <div className="benefit-card pink">
            <GiBrain className="benefit-icon" />
            <h3>Improves Sensory Processing</h3>
            <p>Helps regulate responses to sensory input.</p>
          </div>
          <div className="benefit-card purple">
            <BiTargetLock className="benefit-icon" />
            <h3>Enhances Focus & Attention</h3>
            <p>Boosts learning and concentration skills.</p>
          </div>
          <div className="benefit-card orange">
            <FaSmile className="benefit-icon" />
            <h3>Reduces Sensory Overload</h3>
            <p>Lowers anxiety and sensory avoidance.</p>
          </div>
          <div className="benefit-card green">
            <FaChild className="benefit-icon" />
            <h3>Builds Confidence & Independence</h3>
            <p>Encourages exploration and engagement.</p>
          </div>
          <div className="benefit-card yellow">
            <FaChild className="benefit-icon" />
            <h3>Strengthens Coordination</h3>
            <p>Improves balance and body awareness.</p>
          </div>
          <div className="benefit-card blue">
            <FaChild className="benefit-icon" />
            <h3>Encourages Independence</h3>
            <p>Supports daily routines with ease.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section">
        <h2 className="how-title">How Sensory Integration Therapy Works</h2>
        <div className="how-container">
          <div className="how-card">
            <MdOutlineAssignment className="how-icon" />
            <h3>Assessment</h3>
            <p>Evaluate child’s sensory needs and behaviors</p>
          </div>
          <div className="how-card">
            <GiBrain className="how-icon" />
            <h3>Personalized Plan</h3>
            <p>Create sensory diets and therapy strategies.</p>
          </div>
          <div className="how-card">
            <FaHandsHelping className="how-icon" />
            <h3>Play-Based Activities</h3>
            <p>Swinging, jumping & balance work</p>
          </div>
          <div className="how-card">
            <FaSmile className="how-icon" />
            <h3>Sensory Tools</h3>
            <p>Textures, lights, sounds & movement</p>
          </div>
          <div className="how-card">
            <MdFamilyRestroom className="how-icon" />
            <h3>Gradual Exposure</h3>
            <p>Safe introduction to sensory experiences.</p>
          </div>
          <div className="how-card">
            <FaChartLine className="how-icon" />
            <h3>Parent Involvement</h3>
            <p>Strategies for home and daily routines.</p>
          </div>
        </div>
      </section>

      {/* Banner */}
      <div className="image-card">
        <img src={sen2} alt="Sensory therapy activities" />
      </div>

      {/* Challenges */}
      <div className="child-support-container">
        <div className="left-box">
          <img
            src={sen3}
            alt="Child in sensory activity"
            className="structured-image"
          />
          <p className="image-caption">Child engaged in sensory activity</p>
        </div>
        <div className="right-box">
          <h2>Helps in addressing below challenges for your child</h2>
          <ul className="challenges-list">
            <li>Over/under sensitivity to sound, light, touch, or movement</li>
            <li>Difficulty staying focused or easily distracted</li>
            <li>Trouble with balance, coordination, or body awareness</li>
            <li>Frequent meltdowns or anxiety in sensory-rich environments</li>
            <li>Avoidance of certain foods, clothes, or textures</li>
            <li>Struggles with transitions or adapting to change</li>
          </ul>
        </div>
      </div>

      {/* What to Expect */}
      <div className="therapy-container">
        <div className="therapy-content">
          <h2>What to Expect from a Sensory Integration Therapy Session?</h2>
          <ul>
            <li>45–60 minute sessions filled with sensory-rich activities</li>
            <li>Safe, engaging environment with swings, textures, and play</li>
            <li>Activities designed to regulate sensory input</li>
            <li>
              Fun exercises that build coordination, motor skills, and focus
            </li>
            <li>Strategies shared with parents for use in routines</li>
            <li>Progress tracked regularly for visible improvements</li>
            <li>A calming, supportive, and joyful experience</li>
          </ul>
        </div>
        <div className="therapy-image-card">
          <img src={sen4} alt="Therapist guiding sensory activities" />
        </div>
      </div>

      {/* Who Can Benefit */}
      <div className="benefit-container">
        <div className="therapy-content">
          <h2>Who Can Benefit?</h2>
          <ul>
            <li className="purplee">
              Children with autism, ADHD, or sensory processing disorders
            </li>
            <li className="purplee">
              Kids who struggle with coordination, balance, or movement
            </li>
            <li className="purplee">
              Children over/under sensitive to everyday stimuli
            </li>
            <li className="purplee">
              Kids with frequent meltdowns or sensory overload
            </li>
            <li className="purplee">
              Any child who needs support to feel comfortable and confident
            </li>
          </ul>
          <div className="quote-line">
            At Tiny Steps, Sensory Integration Therapy helps children make sense
            of their world, regulate their senses, and engage joyfully in
            everyday life.
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-container">
        <div className="clin">
          Discover the benefits of Sensory Integration Therapy
        </div>
        <p>
          Book a consultation to begin your child’s personalized SIT journey
          with Tiny Steps.
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

export default Sensory;
