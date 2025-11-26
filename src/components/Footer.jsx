import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section footer-about">
            <h3 className="footer-logo">Simbli AI</h3>
            <p>Empowering businesses with autonomous AI agents to automate complex tasks, analyze data, and drive growth. Join the future of automation.</p>
            <div className="social-icons">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="mailto:contact@simbli.ai"><FaEnvelope /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/#features">Features</a></li>
              <li><a href="/#agents">Our Agents</a></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact-us">Contact</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
              <li><Link to="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>

          <div className="footer-section footer-subscribe">
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter for the latest on AI and automation.</p>
            <form className="subscribe-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Simbli AI. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;