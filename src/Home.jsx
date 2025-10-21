import React from "react";

import hom1 from "./assets/hom1.jpg";

import hom2 from "./assets/hom2.jpg";
import "./Home.css";
import { Link, useLocation } from "react-router-dom";
import Doctordetails from "./Doctordetails";
import Reviewslider from "./Reviewslider";
import Services from "./Services";

import { FaPhoneAlt } from "react-icons/fa";

function Home() {
  const location = useLocation();
  const stats = [
    { icon: "🎈", number: "1", label: "Location in Bangalore" },
    { icon: "👶", number: "500+", label: "Children Served" },
    { icon: "🗨️", number: "1,200+", label: "Speech Sessions" },
    { icon: "🏃", number: "800+", label: "Therapy Hours" },
    { icon: "🏆", number: "95%", label: "Success Rate" },
    { icon: "👨‍👩‍👧", number: "300+", label: "Families Supported" },
    { icon: "🧑‍⚕️", number: "5", label: "Certified therapists" },
  ];

  return (
    <div>
      <section className="banner">
        <div className="banner-left">
          <p className="tagline">Play. Partner. Empower.</p>
          <h1 className="title">
            <span> Partnering with Parents,</span>
            <span>Empowering Every Child</span>
          </h1>
          <p className="desc">
            Nurturing Bright Futures: Discover Why Tiny Steps is Bangalore’s
            Most Trusted Child Development Center for Holistic Early Learning.
          </p>
          <div className="actions">
            <a
              href="https://wa.me/919886062430"
              target="_blank"
              rel="noopener noreferrer"
              className="enroll-btn">
              Book Appointment
            </a>
          </div>
          <div className="rating">
            ⭐⭐⭐⭐⭐ <span>5.0 rating on Google</span>
          </div>
          <div className="contact">
            <FaPhoneAlt className="phone-icon" />
            <div>
              <p>+91 9886062430</p>
            </div>
          </div>
        </div>

        <div className="banner-right">
          <img src={hom1} alt="Child with mask" className="main-img" />
          <img src={hom2} alt="Child playing" className="small-img" />
        </div>
      </section>
      <div className="homeabt-container">
        {/* First Section */}
        <section className="homeabt-section homeabt-bg1">
          <div className="homeabt-image">
            <img
              className="laa"
              src="src/assets/laaaa.webp"
              alt="Child Therapy"
            />
          </div>
          <div className="homeabt-text">
            <h4>ABOUT US</h4>
            <h2>
              Welcome to Tiny Steps Child <br />
              Development Center – Partnering <br />
              with Parents, Empowering Every Child
            </h2>
            <p>
              At Tiny Steps Child Development Center, we understand the journey
              — the challenges, the hopes, and the triumphs — and we walk
              alongside families every step of the way. Founded by Dr. Harapriya
              Jali, with over nine years of experience in inclusive education,
              hospital settings, and special schooling, our center brings
              together professional expertise, compassion, and personalized care
              so that every child has the opportunity to flourish.
            </p>
            <p>
              Since opening our doors in October 2023, we have had the privilege
              of supporting many families, offering a holistic, tailored
              approach to child development — combining evidence-based
              therapies, nurturing environments, and close collaboration to
              nurture growth at every milestone.
            </p>
            <Link to="/about" className="homeabt-btn">
              Know more
            </Link>
          </div>
        </section>
      </div>

      <div className="servie">
        <Services />
      </div>

      <div className="impact-section">
        <h2>Transforming Lives Together</h2>
        <p>
          Our impact is measured by the countless children and families we
          support every day. Together, we celebrate milestones and foster growth
          with love and dedication.
        </p>

        <div className="impact-grid">
          {stats.map((item, index) => (
            <div className="impact-card" key={index}>
              <div className="impact-icon">{item.icon}</div>
              <div className="impact-number">{item.number}</div>
              <div className="impact-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section>
        <div>
          <Doctordetails />
        </div>
      </section>

      <section>
        <div className="review">
          <Reviewslider />
        </div>
      </section>
      <section className="updates-section">
        <h2>
          🎉 What’s New This Anniversary at <span>Tiny Steps CDC</span>
        </h2>
        <p className="subtitle">Based on Parents' Suggestions!</p>

        <div className="updates-container">
          {/* Card 1 */}
          <div className="update-card">
            <h3>✨ Live Online Sessions</h3>
            <p>
              We’re making it easier for families to access therapy. Join our
              live, interactive sessions with expert therapists – now available
              online for both Indian and international parents.
            </p>
            <a href="mailto:tinystepscdc@gmail.com" className="btn">
              📩 Interested? Email Us
            </a>
          </div>

          {/* Card 2 */}
          <div className="update-card">
            <h3>🎓 Real-Time Internship Program</h3>
            <p>
              Are you an aspiring therapist? Gain hands-on experience and
              professional mentorship through our structured internship program
              – now accepting applications!
            </p>
            <a href="mailto:tinystepscdc@gmail.com" className="btn">
              📩 Apply Now &nbsp; &nbsp; &nbsp; &nbsp;
            </a>
          </div>

          {/* Card 3 */}
          <div className="update-card">
            <h3>📍 New Branch Location Requests</h3>
            <p>
              We’re growing! Want to see Tiny Steps CDC in your area? Help us
              expand by suggesting new branch locations near you.
            </p>
            <br />

            <a href="mailto:tinystepscdc@gmail.com" className="btn">
              📬 Send Suggestions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
