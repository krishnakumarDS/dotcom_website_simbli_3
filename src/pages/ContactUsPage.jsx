import React from 'react';
import './GenericPage.css';
import './ContactUsPage.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactUsPage = () => {
  return (
    <div className="generic-page">
      <div className="generic-page-container">
        <h1 className="generic-page-title">Contact Us</h1>
        <p style={{textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem auto'}}>
            We're here to help and answer any question you might have. We look forward to hearing from you.
        </p>
        <div className="contact-grid">
            <div className="contact-info">
                <h3>Get in Touch</h3>
                <p>Have a question or want to see a demo? Reach out to us through any of the channels below.</p>
                <div className="info-item">
                    <FaMapMarkerAlt className="info-icon" />
                    <span>123 AI Avenue, Tech City, 12345</span>
                </div>
                <div className="info-item">
                    <FaEnvelope className="info-icon" />
                    <span>contact@simbli.ai</span>
                </div>
                <div className="info-item">
                    <FaPhone className="info-icon" />
                    <span>+1 (555) 123-4567</span>
                </div>
            </div>
            <form className="contact-form">
                <h3>Send us a Message</h3>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" name="message" rows="6" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;