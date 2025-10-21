import React, { useState } from "react";
import "./Contact.css";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    center: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, email, center, subject, message } = formData;

    // Validation check
    if (!name || !phone || !email || !center || !subject || !message) {
      alert("⚠️ Please fill out all required fields before submitting.");
      return;
    }

    // Build WhatsApp message with \n line breaks
    const messageText =
      `Hello, I would like to enquire:\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email}\n` +
      `*Center:* ${center}\n` +
      `*Subject:* ${subject}\n` +
      `*Message:* ${message}`;

    // ✅ Encode text properly
    const encodedMessage = encodeURIComponent(messageText);

    // WhatsApp number (with country code, no + or spaces)
    const whatsappNumber = "919886062430";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, "_blank");

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      center: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-section">
      <h3>CONTACT US</h3>
      <div className="contact-heading">
        <h2>Looking for the right program for </h2>
        <h2>your child?</h2>
      </div>
      <p className="contact-subtext">
        At Tiny Steps, we’re here to guide, support, and celebrate your child’s
        journey. Let’s collaborate to nurture their unique abilities and open
        doors to endless possibilities.
      </p>

      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Name <span>*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>
            Phone <span>*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>
            Email <span>*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>
            Center Location <span>*</span>
          </label>
          <select
            name="center"
            value={formData.center}
            onChange={handleChange}
            required>
            <option value="">Select center</option>
            <option value="bangalore">Mahadevapura, Bangalore</option>
          </select>
        </div>

        <div className="form-group">
          <label>
            Subject <span>*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>
            Message <span>*</span>
          </label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Location Section */}
      <div className="location-section">
        <h4 className="location-subtitle">OUR CENTERS</h4>
        <h2 className="location-title">
          Tiny Steps Child Development Center
          <br />
          Bangalore , Karnataka
        </h2>
        <hr />

        <div className="location-container">
          <div className="location-details">
            <h5> Address</h5>
            <p>
              {" "}
              <FaMapMarkerAlt
                color="black"
                style={{ fontSize: "18px", marginRight: "8px" }}
              />
              52/1, Mahadevapura Main Rd, near DSR ELITE,
              <br />B Narayanapura, Mahadevapura,Bengaluru, Karnataka 560048.
            </p>

            <p className="icon-line">
              <span role="img" aria-label="location"></span>
            </p>

            <a
              className="directions"
              href="https://www.google.com/maps/place/Tiny+Steps+Child+Development+Centre+(Pediatric+Rehabilitation+Centre)/@12.9929325,77.6889173,17z"
              target="_blank"
              rel="noreferrer">
              <span role="img" aria-label="directions">
                ↪ Get Direction
              </span>{" "}
            </a>

            <h5>WORKING HOURS</h5>
            <p className="icon-line">
              <span role="img" aria-label="clock">
                🕒
              </span>{" "}
              Mon-Sun: 7:00 AM - 9:00 PM
            </p>

            <h5>CONTACT</h5>
            <p className="icon-line">
              <FaPhoneAlt color="black" />{" "}
              <a href="tel:+919886062430">+91 9886062430</a>
            </p>

            <h5>EMAIL</h5>
            <p className="icon-line">
              <span role="img" aria-label="email">
                ✉️
              </span>{" "}
              <a href="mailto:tinystepscdc@gmail.com">tinystepscdc@gmail.com</a>
            </p>
          </div>

          {/* Google Maps Embed */}
          <div className="location-map">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.670215057644!2d77.6889173!3d12.992932499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11d01c218539%3A0x64adbca730670700!2sTiny%20Steps%20Child%20Development%20Center%20(Pediatric%20Rehabilitation%20Center)!5e0!3m2!1sen!2sin!4v1758864384950!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
