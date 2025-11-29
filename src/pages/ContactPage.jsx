// FILE: src/pages/ContactPage.jsx

import { useState } from 'react';
import '../styles/home.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <div className="contact-details">
            <div className="contact-item">
              <h3>Email</h3>
              <p>info@leathercare.com</p>
              <p>support@leathercare.com</p>
            </div>
            <div className="contact-item">
              <h3>Phone</h3>
              <p>+84 123 456 789</p>
              <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
            <div className="contact-item">
              <h3>Address</h3>
              <p>123 Leather Street</p>
              <p>District 1, Ho Chi Minh City</p>
              <p>Vietnam</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send us a Message</h2>
          
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell us how we can help you..."
            />
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
