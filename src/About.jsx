import React from "react";
import "./About.css";
import about from "./assets/about.jpg";
import {
  FaUserFriends,
  FaHeart,
  FaHandshake,
  FaUsers,
  FaShieldAlt,
  FaChild,
  FaLeaf,
} from "react-icons/fa";
import { FaSmile, FaClock } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <section className="about-heading-section">
        <div className="about-heading-container">
          <p className="about-subtitle">ABOUT US</p>
          <h1 className="about-title">
            With Tiny Steps Today, We Build Endless Possibilities Tomorrow
          </h1>
        </div>
      </section>
      <section className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img src={about} alt="Child playing" />
          </div>
          <div className="about-text">
            <p>
              Parenting is a journey filled with joy, questions, and challenges.
              Throughout this journey, every parent deserves a reliable support
              system that truly understands their needs. Tiny Steps Child
              Development Center was established to provide exactly that.
            </p>
            <p>
              Founded in 2023 by "Dr. Harapriya Jali", Tiny Steps began with a
              clear mission: to make paediatric and developmental care more
              personalized, consistent, and compassionate. What started as a
              single clinic has now grown into a trusted network of
              neighbourhood center, offering families comprehensive services
              under one roof — from consultations and assessments to therapy and
              ongoing support.
            </p>
            <p>
              Today, Tiny Steps is proud to welcome families seven days a week.
              Our compassionate team listens with care, treats with dedication,
              and partners with parents at every stage of their child’s
              development.
            </p>
            <p>
              Our multidisciplinary team of specialists — including speech
              therapists, occupational therapists, behavioural therapists, ABA
              practitioners, and aqua therapy experts — works collaboratively to
              create safe, nurturing, and inclusive environments. Every child is
              given the opportunity to feel understood, valued, and empowered to
              reach their fullest potential.
            </p>
            <p>
              We also provide secure progress tracking and continuous parent
              engagement, ensuring therapy remains effective, transparent, and
              enjoyable for children and families alike.
            </p>
            <p>
              At Tiny Steps, your child’s growth and well-being are our
              unwavering commitment — because every small step contributes to a
              brighter, healthier future.
            </p>
          </div>
        </div>
      </section>
      <section className="values-section">
        <h2 className="principles-title">What Drives Everything We Do</h2>
        <p className="principles-subtitle">
          Our values aren't just words on a wall—they're the heartbeat of every
          interaction, every therapy session, and every moment we spend with
          your family.
        </p>
        <div className="values-container">
          {/* Card 1 */}

          <div className="value-card blue">
            <div className="icon-1">
              <FaUserFriends />
            </div>
            <h3>Inclusive</h3>
            <p>
              At Tiny Steps, we believe every child deserves to feel welcomed
              and celebrated. Our doors are open to all families, creating a
              supportive community where diversity is embraced and each child’s
              unique strengths are valued.
            </p>
          </div>

          {/* Card 2 */}
          <div className="value-card peach">
            <div className="icon-2">
              <FaHeart />
            </div>
            <h3>Responsible</h3>
            <p>
              We take our responsibility to heart. Our dedicated team is
              committed to providing expert, consistent care — ensuring every
              child’s growth, well-being, and happiness remain our top
              priorities throughout their developmental journey.
            </p>
          </div>

          {/* Card 3 */}
          <div className="value-card green">
            <div className="icon-3">
              <FaHandshake />
            </div>
            <h3>Respectful</h3>
            <p>
              We honour every child’s individuality by fostering understanding,
              kindness, and empathy. By treating children with dignity and
              respect, we nurture their sense of self-worth and confidence to
              take bold steps forward.
            </p>
          </div>

          {/* Card 4 */}
          <div className="value-card yellow">
            <div className="icon-4">
              <FaUsers />
            </div>
            <h3>Collaborative</h3>
            <p>
              We walk hand in hand with parents, families, and educators.
              Through strong collaboration, shared expertise, and a warm,
              supportive environment, we create meaningful progress and
              remarkable outcomes together.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          {/* Vision */}
          <div className="vision-section">
            <h3 className="title">VISION</h3>
            <p className="text">
              <h3> Tiny Steps Today, Endless Possibilities Tomorrow</h3>
              We envision a future where every child has the opportunity to grow
              with confidence, unlock their full potential, and embrace life
              with joy and independence.
            </p>
          </div>
          <hr className="line-pink" />

          {/* Mission */}
          <div className="mission-section">
            <h3 className="title">MISSION</h3>
            <p className="text">
              At Tiny Steps, our mission is to make each child’s developmental
              journey meaningful and empowering. Through compassionate care,
              innovative therapies, and close partnerships with parents, we
              create an environment where every child feels supported,
              understood, and inspired to thrive.
            </p>
          </div>
          <hr className="line-violet" />
        </div>
      </section>
      <section>
        <section className="our">
          <div className="subheading"> Guiding Principles</div>
          <div className="heading">Guiding Every Step with care</div>
        </section>
      </section>
      <section className="principles-section">
        <h2 className="principles-title"></h2>
        <p className="principles-subtitle"></p>

        <div className="principles-grid">
          {/* Card 1 */}
          <div className="principle-card yelloww">
            <FaUsers className="icon" />
            <h3>Inclusive & Welcoming</h3>
            <p>
              Every child belongs. We celebrate diversity and create a safe,
              nurturing space where every family feels respected and valued.
            </p>
          </div>

          {/* Card 2 */}
          <div className="principle-card pinkk">
            <FaHeart className="icon" />
            <h3>Compassion in Every Step</h3>
            <p>
              Care with heart. We meet every family with empathy and kindness;
              ensuring children feel supported as they grow.
            </p>
          </div>

          {/* Card 3 */}
          <div className="principle-card greenn">
            <FaShieldAlt className="icon" />
            <h3>Responsible & Transparent</h3>
            <p>
              Trust matters. Parents place their greatest treasure in our hands
              – we honor that with consistent, transparent, and ethical care.
            </p>
          </div>

          {/* Card 4 */}
          <div className="principle-card orangee">
            <FaChild className="icon" />
            <h3>Respectful & Child-Centred</h3>
            <p>
              Every child is unique. We treat every child with dignity and
              respect, empowering them to believe in themselves.
            </p>
          </div>

          {/* Card 5 */}
          <div className="principle-card bluee">
            <FaHandshake className="icon" />
            <h3>Collaborative Care</h3>
            <p>
              Together, we grow. We partner with parents in every step,
              co-creating personalized therapy plans for the best outcomes.
            </p>
          </div>

          {/* Card 6 */}
          <div className="principle-card lightgreen">
            <FaLeaf className="icon" />
            <h3>Holistic Growth</h3>
            <p>
              Beyond milestones. We nurture physical, emotional, social, and
              behavioral development for well-rounded progress.
            </p>
          </div>
          {/* Card 7 */}
          <div className="principle-card lightred">
            <FaSmile className="icon" />
            <h3>Playful & Positive Environment</h3>
            <p>
              Therapy feels like play — joyful, engaging, and motivating. Every
              little achievement is celebrated.
            </p>
          </div>
          {/* Card 8 */}
          <div className="principle-card lightskyblue">
            <FaClock className="icon" />
            <h3>Always Accessible</h3>
            <p>
              Open 7 days a week, so support is always nearby when families need
              it most.
            </p>
          </div>
        </div>
      </section>
      <section className="features-section">
        <div className="features-footer">
          <span className="star">✦</span>
          <p>
            At Tiny Steps, small steps create big futures — today’s progress
            shapes tomorrow’s possibilities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
