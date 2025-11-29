// FILE: src/pages/AboutPage.jsx

import '../styles/home.css';

function AboutPage() {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>About LeatherCare</h1>
        <p>Your trusted partner in leather care and protection</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2020, LeatherCare was born from a passion for preserving and protecting 
            the beauty of leather goods. We recognized that quality leather products deserve 
            quality care, and we set out to create the finest leather cleaning and conditioning 
            solutions on the market.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to help you protect and extend the life of your valuable 
            leather items. Whether it's your favorite pair of shoes, a cherished handbag, or 
            your car's leather interior, we provide professional-grade solutions that deliver 
            exceptional results.
          </p>
        </section>

        <section className="about-section">
          <h2>Quality & Safety</h2>
          <p>
            All our products are carefully formulated using safe, high-quality ingredients. 
            We test every formula extensively to ensure it effectively cleans and protects 
            leather while being gentle on the material. Our products are free from harsh 
            chemicals that can damage or discolor leather.
          </p>
        </section>

        <section className="about-section">
          <h2>Eco-Friendly Approach</h2>
          <p>
            We're committed to environmental responsibility. Our products are developed with 
            eco-friendly practices in mind, using biodegradable ingredients whenever possible 
            and minimizing our environmental impact. We believe in protecting not just your 
            leather, but our planet too.
          </p>
        </section>

        <section className="about-section">
          <h2>Expert Care for Every Leather Type</h2>
          <p>
            Different leather types require different care approaches. That's why we've 
            developed specialized formulas for smooth leather, suede, nubuck, synthetic 
            leather, and automotive leather. Each product is designed to address the unique 
            needs of its intended leather type, ensuring optimal results every time.
          </p>
        </section>

        <div className="about-values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Quality First</h3>
              <p>We never compromise on the quality of our formulations or ingredients.</p>
            </div>
            <div className="value-card">
              <h3>Customer Trust</h3>
              <p>Your satisfaction and trust are the foundation of everything we do.</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We continuously research and develop better solutions for leather care.</p>
            </div>
            <div className="value-card">
              <h3>Sustainability</h3>
              <p>We're committed to environmentally responsible practices and products.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
