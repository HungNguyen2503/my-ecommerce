// FILE: src/components/products/ProductFilter.jsx

import '../../styles/product.css';

function ProductFilter({ filters, onFilterChange }) {
  const leatherTypes = ['All', 'Smooth Leather', 'Suede', 'Automotive Leather', 'Synthetic', 'All Leather Types'];
  const priceRanges = [
    { label: 'All Prices', min: 0, max: Infinity },
    { label: 'Under 200,000₫', min: 0, max: 200000 },
    { label: '200,000₫ - 500,000₫', min: 200000, max: 500000 },
    { label: 'Over 500,000₫', min: 500000, max: Infinity }
  ];

  return (
    <div className="product-filter">
      <div className="filter-group">
        <label htmlFor="leather-type">Leather Type:</label>
        <select
          id="leather-type"
          value={filters.leatherType}
          onChange={(e) => onFilterChange('leatherType', e.target.value)}
          className="filter-select"
        >
          {leatherTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="price-range">Price Range:</label>
        <select
          id="price-range"
          value={filters.priceRange}
          onChange={(e) => onFilterChange('priceRange', e.target.value)}
          className="filter-select"
        >
          {priceRanges.map((range, index) => (
            <option key={index} value={index}>{range.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default ProductFilter;
