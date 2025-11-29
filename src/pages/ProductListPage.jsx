// FILE: src/pages/ProductListPage.jsx

import { useState } from 'react';
import ProductCard from '../components/products/ProductCard';
import ProductFilter from '../components/products/ProductFilter';
import { products } from '../data/products';
import '../styles/product.css';

function ProductListPage() {
  const [filters, setFilters] = useState({
    leatherType: 'All',
    priceRange: '0'
  });

  const priceRanges = [
    { label: 'All Prices', min: 0, max: Infinity },
    { label: 'Under 200,000₫', min: 0, max: 200000 },
    { label: '200,000₫ - 500,000₫', min: 200000, max: 500000 },
    { label: 'Over 500,000₫', min: 500000, max: Infinity }
  ];

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const filteredProducts = products.filter(product => {
    // Filter by leather type
    const leatherTypeMatch = filters.leatherType === 'All' || product.leatherType === filters.leatherType;
    
    // Filter by price range
    const selectedRange = priceRanges[parseInt(filters.priceRange)];
    const priceMatch = product.price >= selectedRange.min && product.price <= selectedRange.max;
    
    return leatherTypeMatch && priceMatch;
  });

  return (
    <div className="product-list-page">
      <div className="page-header">
        <h1>Our Products</h1>
        <p>Discover our complete range of professional leather care solutions</p>
      </div>

      <ProductFilter filters={filters} onFilterChange={handleFilterChange} />

      <div className="products-count">
        <p>Showing {filteredProducts.length} of {products.length} products</p>
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-products">
          <p>No products found matching your filters.</p>
        </div>
      )}
    </div>
  );
}

export default ProductListPage;
