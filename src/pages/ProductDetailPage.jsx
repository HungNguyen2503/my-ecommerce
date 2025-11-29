// FILE: src/pages/ProductDetailPage.jsx

import { useParams, Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { products } from '../data/products';
import '../styles/product.css';

function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="not-found">
          <h2>Product Not Found</h2>
          <p>Sorry, the product you're looking for doesn't exist.</p>
          <Link to="/products" className="back-link">Back to Products</Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="product-detail-page">
      <Link to="/products" className="back-link">← Back to Products</Link>
      
      <div className="product-detail">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        
        <div className="product-detail-info">
          <h1 className="product-detail-name">{product.name}</h1>
          <p className="product-detail-price">{formatPrice(product.price)}</p>
          
          <div className="product-detail-specs">
            <div className="spec-item">
              <span className="spec-label">Volume:</span>
              <span className="spec-value">{product.volume}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Leather Type:</span>
              <span className="spec-value">{product.leatherType}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Scent:</span>
              <span className="spec-value">{product.scent}</span>
            </div>
          </div>
          
          <div className="product-detail-tags">
            {product.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          
          <div className="product-detail-description">
            <h3>Description</h3>
            <p>{product.description || product.shortDescription}</p>
          </div>
          
          <button onClick={handleAddToCart} className="add-to-cart-button">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
