// FILE: src/components/Layout/Header.jsx

import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import '../../styles/layout.css';

function Header() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          LeatherCare
        </Link>
        
        <nav className="nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Products
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Contact
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => isActive ? 'nav-link cart-link active' : 'nav-link cart-link'}>
            Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </NavLink>
        </nav>

        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="search-input"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
