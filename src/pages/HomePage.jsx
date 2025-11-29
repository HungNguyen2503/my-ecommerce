// FILE: src/pages/HomePage.jsx

import { Link } from 'react-router-dom';
import ProductCard from '../components/products/ProductCard';
import { products } from '../data/products';
import '../styles/home.css';

function HomePage() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Premium Leather Cleaning Solutions</h1>
          <p className="hero-description">
            Professional-grade products to clean, condition, and protect your valuable leather goods. 
            From shoes and bags to car seats and furniture, we have the perfect solution for every leather type.
          </p>
          <Link to="/products" className="cta-button">View Products</Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <h2 className="section-title">Why Choose LeatherCare?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">🧼</div>
            <h3>Removes Dirt and Stains</h3>
            <p>Powerful formulas that effectively eliminate dirt, grime, and stubborn stains without damaging leather.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">✨</div>
            <h3>Keeps Leather Soft and Shiny</h3>
            <p>Nourishing ingredients that restore and maintain the natural softness and luxurious shine of leather.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🛡️</div>
            <h3>Helps Prevent Cracking</h3>
            <p>Protective conditioning that prevents drying and cracking, extending the life of your leather items.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🌿</div>
            <h3>Safe & Eco-Friendly</h3>
            <p>Made with safe, environmentally conscious ingredients that are gentle on leather and the planet.</p>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2 className="section-title">Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="view-all-container">
          <Link to="/products" className="view-all-button">View All Products</Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
