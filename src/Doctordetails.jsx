import React from "react";
import "./Doctordetails.css";
import {
  FaUsers,
  FaHeart,
  FaHandsHelping,
  FaHome,
  FaBullseye,
  FaChartBar,
  FaBook,
} from "react-icons/fa";

const experts = [
  {
    name: "Dr.Harapriya jali",
    title: "Founder, Pediatric Neuro Developmental Therapist",

    description:
      "Expert in bobath, aqua therapy, gait training,motor training and swing therapy.",
    image: "src/assets/fou.jpg",
    linkedin:
      "https://www.linkedin.com/in/harapriya-jali-55563b370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Dr. Sweata Das",
    title: "Physiotherapist",
    description:
      "Focused to improve movement, balance and overall child development.",
    image: "src/assets/Therapist1.jpg",
    linkedin:
      "https://www.linkedin.com/in/dr-sweata-das-pt-22b0b61a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
  },
  {
    name: "Dr. Aradhana Nayak",
    title: " Occupational Therapist",
    description:
      " Expert in Sensory Integration therapy, Hand function skills training especially pre-writing and writing skills.",
    image: "src/assets/dct2.jpg",
    linkedin:
      "https://www.linkedin.com/in/aradhana-nayak-0bb60245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

function Doctordetails() {
  return (
    <div>
      <div className="expert-section">
        <h2>Meet Our Expert Team</h2>
        <p>
          Our team of dedicated specialists collaborates to design personalized
          programs tailored to each child’s unique needs. Passionate and
          experienced, our experts are committed to empowering every child to
          thrive.
        </p>

        <div className="expert-grid">
          {experts.map((expert, index) => (
            <div className="expert-card" key={index}>
              <div className="expert-image">
                <img src={expert.image} alt={expert.name} />
                <a
                  href={expert.linkedin}
                  className="linkedin-icon"
                  target="_blank"
                  rel="noreferrer">
                  in
                </a>
              </div>
              <h3>{expert.name}</h3>
              <h4>{expert.title}</h4>
              <p>{expert.description}</p>
            </div>
          ))}
        </div>
      </div>

      <section class="seven-step-section">
        <h2>Every Tiny Step Matters — Seven Steps Toward Brighter Tomorrows</h2>
        <h2> Why Families Trust Our Proven 7-step Child Development Process</h2>

        <ul class="step-list">
          <li>
            <span class="emoji">
              <FaUsers className="benefit-icon" />
            </span>
            Holistic, Family-Centered Approach
          </li>
          <li>
            <span class="emoji">
              <FaHeart className="benefit-icon" />
            </span>
            Certified and Compassionate Therapists
          </li>
          <li>
            <span class="emoji">
              <FaHandsHelping className="benefit-icon" />
            </span>
            Inclusive and Supportive Environment
          </li>
          <li>
            <span class="emoji">
              <FaHome className="benefit-icon" />
            </span>
            Safe, Progressive Spaces for Children to Grow
          </li>
          <li>
            <span class="emoji">
              <FaBullseye className="benefit-icon" />
            </span>
            Personalized, Goal-Oriented Development Plans
          </li>
          <li>
            <span class="emoji">
              <FaChartBar className="benefit-icon" />
            </span>
            Continuous Progress Tracking and Feedback
          </li>
          <li>
            <span class="emoji">
              <FaBook className="benefit-icon" />
            </span>
            Empowering Families Through Education and Support
          </li>
        </ul>

        <p class="bottom-message">
          Together, let’s take those <strong>tiny steps</strong> toward a
          brighter, more independent future for your child.
        </p>
      </section>
    </div>
  );
}

export default Doctordetails;
