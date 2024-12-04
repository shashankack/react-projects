import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCallOutline, IoHomeOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import "./Footer.css";

const Footer = () => {
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

      <div className="google-map">
        GOOGLE MAP WILL BE HERE!
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <img src="https://placehold.co/300" alt="Logo" />
          <p>© 2024 Some text here</p>
        </div>
        <div className="footer-links">
          <h3>HEADING</h3>
          <ul>
            <li><a href="#">Link1</a></li>
            <li><a href="#">Link2</a></li>
            <li><a href="#">Link3</a></li>
            <li><a href="#">Link4</a></li>
            <li><a href="#">Link5</a></li>
          </ul>
        </div>
        <div className="footer-socials">
          <h3>Socials</h3>
          <ul>
            <li><a href="#"><FaFacebook /> Facebook</a></li>
            <li><a href="#"><FaInstagram /> Instagram</a></li>
            <li><a href="#"><FaLinkedin /> LinkedIn</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
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
