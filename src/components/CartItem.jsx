import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../slices/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
      <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
    </div>
  );
};

export default CartItem;
