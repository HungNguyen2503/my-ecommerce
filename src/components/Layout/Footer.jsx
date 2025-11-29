// FILE: src/components/Layout/Footer.jsx

import '../../styles/layout.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>LeatherCare</h3>
          <p>Premium leather cleaning solutions for all your leather goods.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@leathercare.com</p>
          <p>Phone: +84 123 456 789</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 LeatherCare. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
