// FILE: src/pages/CartPage.jsx

import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';
import '../styles/product.css';

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const handleCheckout = () => {
    alert('Checkout demo - No payment processing in this demo');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="page-header">
          <h1>Shopping Cart</h1>
        </div>
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/products" className="continue-shopping">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="page-header">
        <h1>Shopping Cart</h1>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-meta">{item.leatherType} • {item.volume}</p>
                <p className="cart-item-price">{formatPrice(item.price)}</p>
              </div>

              <div className="cart-item-quantity">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="quantity-button"
                >
                  -
                </button>
                <span className="quantity-value">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="quantity-button"
                >
                  +
                </button>
              </div>

              <div className="cart-item-total">
                <p>{formatPrice(item.price * item.quantity)}</p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="remove-button"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>{formatPrice(getCartTotal())}</span>
          </div>
          
          <div className="summary-row">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          
          <div className="summary-row total">
            <span>Total:</span>
            <span>{formatPrice(getCartTotal())}</span>
          </div>

          <button onClick={handleCheckout} className="checkout-button">
            Demo Checkout
          </button>

          <Link to="/products" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
