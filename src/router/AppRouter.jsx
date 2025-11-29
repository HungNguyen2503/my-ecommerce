// FILE: src/router/AppRouter.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../components/Layout/MainLayout';
import HomePage from '../pages/HomePage';
import ProductListPage from '../pages/ProductListPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import CartPage from '../pages/CartPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductListPage />} />
          <Route path="products/:id" element={<ProductDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
