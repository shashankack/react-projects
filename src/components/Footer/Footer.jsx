import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCallOutline, IoHomeOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import "./Footer.css";

const Footer = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 540); // Adjust for small screens
    };

    handleResize(); // Initialize state based on current screen size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="contact-info">
            <h3>Contact Info</h3>
            <p>Email: info@gmail.in</p>
            <p>Phone: number</p>
            <p>Some Address here</p>
            <p>Some Address here</p>
          </div>
          <div className="contact-form">
            <h3>Contact Us</h3>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Message" required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>

        <div className="google-map">GOOGLE MAP WILL BE HERE!</div>

        <div className="footer-bottom">
          <div className="footer-logo">
            <img src="https://placehold.co/300" alt="Logo" />
            <p>© 2024 Some text here</p>
          </div>
          <div className="footer-links">
            <h3 onClick={() => isSmallScreen && toggleSection("links")}>
              HEADING
              {isSmallScreen && (
                <span className="dropdown-icon">
                  {openSection === "links" ? "-" : "+"}
                </span>
              )}
            </h3>
            <ul
              className={`${
                !isSmallScreen || openSection === "links" ? "visible" : "hidden"
              }`}
            >
              <li><a href="#">Link1</a></li>
              <li><a href="#">Link2</a></li>
              <li><a href="#">Link3</a></li>
              <li><a href="#">Link4</a></li>
              <li><a href="#">Link5</a></li>
            </ul>
          </div>
          <div className="footer-socials">
            <h3 onClick={() => isSmallScreen && toggleSection("socials")}>
              Socials
              {isSmallScreen && (
                <span className="dropdown-icon">
                  {openSection === "socials" ? "-" : "+"}
                </span>
              )}
            </h3>
            <ul
              className={`${
                !isSmallScreen || openSection === "socials"
                  ? "visible"
                  : "hidden"
              }`}
            >
              <li><a href="#"><FaFacebook /> Facebook</a></li>
              <li><a href="#"><FaInstagram /> Instagram</a></li>
              <li><a href="#"><FaLinkedin /> LinkedIn</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3 onClick={() => isSmallScreen && toggleSection("contact")}>
              Contact Us
              {isSmallScreen && (
                <span className="dropdown-icon">
                  {openSection === "contact" ? "-" : "+"}
                </span>
              )}
            </h3>
            <ul
              className={`${
                !isSmallScreen || openSection === "contact"
                  ? "visible"
                  : "hidden"
              }`}
            >
              <li><IoCallOutline /> +91 90197 25572</li>
              <li><CiMail /> someone@somewhere.com</li>
              <li><IoHomeOutline /> Somewhere on earth :)</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
