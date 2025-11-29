// FILE: src/components/products/ProductCard.jsx

import { Link } from 'react-router-dom';
import '../../styles/product.css';

function ProductCard({ product }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  return (
    <Link to={`/products/${product.id}`} className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{formatPrice(product.price)}</p>
        <div className="product-meta">
          <span className="product-leather-type">{product.leatherType}</span>
          <span className="product-volume">{product.volume}</span>
        </div>
        <p className="product-description">{product.shortDescription}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
