// FILE: src/App.jsx

import { CartProvider } from './context/CartContext';
import AppRouter from './router/AppRouter';
import './App.css';

function App() {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
}

export default App;
