import React from 'react';
import './Footer.css'; // Import the updated CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Top Section */}
        <div className="footer-top">
          {/* Logo Section */}
          <div className="footer-logo">
            <img src="/src/assets/Logo.png" alt="CodEdge Logo" />
            <p className="footer-tagline">Empowering Innovation & Creativity</p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/internships">Internships</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/terms">Terms of Use</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>info.codedge@gmail.com</p>
            <p>+91 8882618218</p>
            <p>Sector-60 , Noida India-201301</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon github"
            >
              <i className="fab fa-github"></i>
              <span className="icon-label">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin"
            >
              <i className="fab fa-linkedin"></i>
              <span className="icon-label">LinkedIn</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
            >
              <i className="fab fa-instagram"></i>
              <span className="icon-label">Instagram</span>
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon telegram"
            >
              <i className="fab fa-telegram"></i>
              <span className="icon-label">Telegram</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p>&copy; 2025 CodEdge. All Rights Reserved.</p>
          <p>Designed with ❤️ by CodEdge Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
