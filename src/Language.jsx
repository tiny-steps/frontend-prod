import React from "react";

import "./Applied.css";
import { useNavigate } from "react-router-dom";
import {
  Book,
  Type,
  BookOpen,
  PenTool,
  Zap,
  ClipboardList,
  ClipboardCheck,
  Users,
  Image,
  RefreshCcw,
  BarChart2,
} from "lucide-react";

import lag2 from "./assets/lag2.jpg";
import lag1 from "./assets/lag1.jpg";
import lag3 from "./assets/lag3.png";
import lag4 from "./assets/lag4.jpg";
function Language() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Page Title */}
      <div className="text">
        <div> OUR SERVICES</div>
        <h1> Language Therapy </h1>
      </div>

      {/* Intro Section */}
      <div className="card-container">
        <div className="card">
          <div className="card-text">
            <h2>What is Language Therapy?</h2>
            <p>
              Language Therapy focuses on helping children develop their
              understanding and use of language. It supports both receptive
              language (understanding what others say) and expressive language
              (using words, sentences, and communication). The goal is to help
              children express themselves clearly, build vocabulary, and improve
              overall communication.
            </p>
          </div>
          <div className="card-image">
            <img src={lag1} alt="Language Therapy" />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2 className="benefits-title">Key Benefits of Language Therapy</h2>
        <div className="benefits-container">
          <div className="benefit-card blue">
            <Book className="benefit-icon" />
            <p>Improves Understanding & Concepts</p>
          </div>
          <div className="benefit-card green">
            <Type className="benefit-icon" />
            <p>Builds Vocabulary & Sentences</p>
          </div>
          <div className="benefit-card orange">
            <BookOpen className="benefit-icon" />
            <p>Strengthens Storytelling Skills</p>
          </div>
          <div className="benefit-card pink">
            <PenTool className="benefit-icon" />
            <p>Enhances Reading & Writing Readiness</p>
          </div>
          <div className="benefit-card purple">
            <Zap className="benefit-icon" />
            <p>Boosts Confidence in Expression</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section">
        <h2 className="how-title">How Language Therapy Works</h2>
        <div className="how-container">
          <div className="how-card">
            <ClipboardList className="how-icon" />
            <h3>Initial Language Assessment</h3>
            <p>Understand strengths & areas to target.</p>
          </div>
          <div className="how-card">
            <ClipboardCheck className="how-icon" />
            <h3>Personalized Plan</h3>
            <p>Goals and activities tailored to the child.</p>
          </div>
          <div className="how-card">
            <Users className="how-icon" />
            <h3>1:1 or Small Group Sessions</h3>
            <p>Focused practice with therapist guidance.</p>
          </div>
          <div className="how-card">
            <Image className="how-icon" />
            <h3>Visual Aids & Stories</h3>
            <p>Picture cards, storybooks, and play-based learning.</p>
          </div>
          <div className="how-card">
            <RefreshCcw className="how-icon" />
            <h3>Receptive & Expressive Focus</h3>
            <p>Balanced work on understanding and producing language.</p>
          </div>
          <div className="how-card">
            <BarChart2 className="how-icon" />
            <h3>Progress Tracking</h3>
            <p>Regular updates with family involvement.</p>
          </div>
        </div>
      </section>

      <div className="image-card">
        <img src={lag3} alt="Therapist and child working at table" />
      </div>
      <div className="child-support-container">
        <div className="left-box">
          <img
            src={lag2}
            alt="Child engaged in language task"
            className="structured-image"
          />
          <p className="image-caption">Interactive language-building tasks</p>
        </div>
        <div className="right-box">
          <h2>Helps in addressing below challenges for your child</h2>
          <ul className="challenges-list">
            <li>Difficulty understanding or following instructions</li>
            <li>Limited Vocabulary or Poor Sentence Structure</li>
            <li>Struggles with Storytelling or Sequencing</li>
            <li>Problems with Reading & Writing Readiness</li>
            <li>Challenges in Expressing Needs, Wants, or Ideas</li>
            <li>Frustration due to Communication Barriers</li>
          </ul>
        </div>
      </div>

      {/* What to Expect */}
      <div className="therapy-container">
        <div className="therapy-content">
          <h2>What to Expect from a Language Therapy Session?</h2>
          <ul>
            <li>
              45–60 minute structured sessions tailored to the child’s needs
            </li>
            <li>
              Engaging activities like stories, picture cards, and role-play
            </li>
            <li>Direct teaching of new vocabulary and concepts</li>
            <li>Practice in framing clear sentences and expressing ideas</li>
            <li>Parental guidance for continuing practice at home</li>
            <li>Continuous progress tracking with adjustments as needed</li>
            <li>Safe, interactive, and child-friendly environment</li>
          </ul>
        </div>
        <div className="therapy-image-card">
          <img src={lag4} alt="Language therapy session" />
        </div>
      </div>

      {/* Who Can Benefit */}
      <div className="benefit-container">
        <div className="therapy-content">
          <h2>Who Can Benefit?</h2>
          <ul>
            <li className="purplee">
              Children with speech and language delays
            </li>
            <li className="purplee">
              Kids with autism, ADHD, or developmental conditions affecting
              communication
            </li>
            <li className="purplee">
              Children struggling with reading, writing, or comprehension
            </li>
            <li className="purplee">
              Any child needing support to improve expressive and receptive
              language
            </li>
          </ul>
          <div className="quote-line">
            At Tiny Steps, Language therapy helps children find their voice,
            build confidence,and connect with the wold around them.
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-container">
        <div className="clin">Take the next step with Tiny Steps Clinic</div>
        <p>
          Book a consultation to begin your child’s personalized Language
          Therapy journey.
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

export default Language;
