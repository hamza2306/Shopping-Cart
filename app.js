import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prevItems, product];
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListing addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
};

export default App;
