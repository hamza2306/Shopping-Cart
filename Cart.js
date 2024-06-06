import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems }) => {
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - Quantity: {item.quantity} - Price: ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <p>Total Quantity: {totalQuantity}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <Link to="/checkout">Proceed to Checkout</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
