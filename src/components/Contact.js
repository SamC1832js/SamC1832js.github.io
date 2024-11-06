import React, { useState, useRef, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaLinkedin,
  FaEnvelope,
  FaGithub,
  FaPhone,
} from "react-icons/fa";
import "./Contact.css";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const infoContainerRef = useRef(null);
  const fieldContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fadeIn");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    if (infoContainerRef.current) observer.observe(infoContainerRef.current);
    if (fieldContainerRef.current) observer.observe(fieldContainerRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <div className="contact-container">
      <div className="contact-layout">
        <div ref={infoContainerRef} className="contact-info-container">
          <h1>
            Get In <span className="secondary-color">Touch</span>
          </h1>
          <div className="contact-info">
            <FaMapMarkerAlt /> {/* Map icon */}
            <span>Katy, Texas, USA</span>
          </div>
          <div className="contact-info">
            <FaLinkedin /> {/* LinkedIn icon */}
            <a
              href="https://www.linkedin.com/in/cheng-sam-cheang"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cheng Sam Cheang
            </a>
          </div>
          <div className="contact-info">
            <FaEnvelope /> {/* Email icon */}
            <a href="mailto:samcheangc@gmail.com">samcheangc@gmail.com</a>
          </div>
          <div className="contact-info">
            <FaGithub /> {/* GitHub icon */}
            <a
              href="https://github.com/SamC-1832"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cheng Sam Cheang
            </a>
          </div>
          <div className="contact-info">
            <FaPhone /> {/* Phone icon */}
            <span>+1 281 722 9885</span>
          </div>
        </div>
        <form
          ref={fieldContainerRef}
          className="contact-field"
          action="https://usebasin.com/f/a4685fb1c06e"
          method="POST"
        >
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              required
            />
          </div>
          <button type="submit" value="Submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
