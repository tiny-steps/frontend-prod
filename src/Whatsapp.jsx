import React, { useState } from "react";
import "./Whatsapp.css";

const Whatsapp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "9886062430";

  const togglePopup = () => setIsOpen(!isOpen);

  const openWhatsApp = () => {
    window.open(`https://wa.me/91${phoneNumber}`, "_blank");
  };

  return (
    <div className="whatsapp-container">
      {isOpen && (
        <div className="whatsapp-popup">
          <div className="popup-header">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="popup-icon"
            />
            <div className="popup-title">
              <h3>Start a Conversation</h3>
              <p>
                Hi! Click on one of our team members below to chat on{" "}
                <strong>WhatsApp</strong>
              </p>
            </div>
          </div>

          <span className="subtext">
            The team typically replies in a few minutes.
          </span>

          <div className="contact-card" onClick={openWhatsApp}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              alt="WhatsApp"
              className="contact-icon"
            />
            <span>Tiny Steps CDC</span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              alt="WhatsApp"
              className="open-icon"
            />
          </div>
        </div>
      )}

      <div className="whatsapp-toggle-wrapper" onClick={togglePopup}>
        {!isOpen ? (
          <div className="whatsapp-bubble">
            <span className="bubble-text">
              Need Help? <strong>Chat with us</strong>
            </span>
            <div className="bubble-icon">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="bubble-whatsapp-icon"
              />
            </div>
          </div>
        ) : (
          <div className="close-bubble">✖</div>
        )}
      </div>
    </div>
  );
};

export default Whatsapp;
