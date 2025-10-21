import React from "react";
import { useLocation } from "react-router-dom";
import "./Services.css";

const therapies = [
  {
    id: "applied",
    title: "Applied Behavior Analysis (ABA)",
    desc: "Helps in learning & behavior skills.",
    icon: "🧩",
    link: "/applied",
  },
  {
    id: "aqua",
    title: "Aqua Therapy",
    desc: "Exercise-based therapy perfect in water.",
    icon: "💧",
    link: "/aqua",
  },
  {
    id: "behavioral",
    title: "Behavioral Therapy",
    desc: "Supports positive behaviors & reduces challenges.",
    icon: "💡",
    link: "/behavioral",
  },
  {
    id: "group",
    title: "Group Therapy",
    desc: "Encourages social interaction & peer learning.",
    icon: "👥",
    link: "/group",
  },
  {
    id: "language",
    title: "Language Therapy",
    desc: "Improves speech & language for better communication.",
    icon: "🗣️",
    link: "/language",
  },
  {
    id: "music",
    title: "Music & Art Therapy",
    desc: "Boosts creativity, emotions, and expression.",
    icon: "🎵",
    link: "/music",
  },
  {
    id: "occupational",
    title: "Occupational Therapy",
    desc: "Builds daily living skills & independence.",
    icon: "🛠️",
    link: "/occupational",
  },
  {
    id: "physio",
    title: "Physiotherapy",
    desc: "Improves strength, balance & coordination.",
    icon: "🏃",
    link: "/physio",
  },
  {
    id: "special",
    title: "Special Education Plan",
    desc: "Tailored education program for unique learning needs.",
    icon: "📘",
    link: "/special",
  },
  {
    id: "speech",
    title: "Speech Therapy",
    desc: "Enhances speech clarity & communication.",
    icon: "🎤",
    link: "/speech",
  },
  {
    id: "sensory",
    title: "Sensory Integration Therapy",
    desc: "Helps children manage sensory inputs & improve focus.",
    icon: "🖐️",
    link: "/sensory",
  },
  {
    id: "asdscreening",
    title: "ASD Screening",
    desc: "Early identification of autism spectrum disorder.",
    icon: "🧠",
    link: "/Asdscreening",
  },
  {
    id: "diagnosis",
    title: "Diagnosis",
    desc: "Professional evaluation for developmental challenges.",
    icon: "🧾",
    link: "/Diagnosis",
  },
  {
    id: "development",
    title: "Developmental Screening",
    desc: "Tracking growth milestones and early detection.",
    icon: "📊",
    link: "/Development",
  },

  // General Services Page
  {
    id: "academic",
    title: "Academic Skill Deficit Program",
    desc: "Supports children with academic learning needs.",
    icon: "📚",
    link: "/Academic",
  },
  {
    id: "after",
    title: "After School Club",
    desc: "Learning and fun activities after school hours.",
    icon: "🎒",
    link: "/After",
  },
  {
    id: "early",
    title: "Early Intervention Program",
    desc: "Support for children in early years development.",
    icon: "🌱",
    link: "/earlyinter",
  },
  {
    title: "IQ Testing",
    desc: "Measuring cognitive skills and intelligence levels.",
    icon: "🧩",
    link: "/Iq",
  },
  {
    id: "online",
    title: "Online Intervention Program",
    desc: "Therapy & learning via online sessions.",
    icon: "💻",
    link: "/Online",
  },
  {
    id: "school",
    title: "School Readiness Program",
    desc: "Preparing children for structured school learning.",
    icon: "🏫",
    link: "/School",
  },
];

const Therapies = () => {
  const location = useLocation();
  const activeId = location.hash.replace("#", "");

  return (
    <section className="therapies-section">
      <h2 className="therapies-title">Explore Our Services</h2>
      <p className="heding">
        We offer evidence-based therapies tailored to your child's unique needs
      </p>
      <div className="therapies-grid">
        {therapies.map((therapy, index) => (
          <div
            key={index}
            id={therapy.id}
            className={`therapy-card ${therapy.id}-card ${
              activeId === therapy.id ? "active-card" : ""
            }`}>
            <div className="therapy-icon">{therapy.icon}</div>
            <h3>{therapy.title}</h3>
            <p>{therapy.desc}</p>
            <a href={therapy.link} className="know-more">
              Know More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Therapies;
