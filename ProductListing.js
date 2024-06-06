import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 20, image: 'https://via.placeholder.com/150' },
  // Add more products as needed
];

const ProductListing = ({ addToCart }) => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, quantity) => {
    setQuantities((prev) => ({ ...prev, [id]: quantity }));
  };

  return (
    <div>
      <h1>Product Listing</h1>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <input
            type="number"
            min="1"
            value={quantities[product.id] || 1}
            onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
          />
          <button onClick={() => addToCart({ ...product, quantity: quantities[product.id] || 1 })}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
