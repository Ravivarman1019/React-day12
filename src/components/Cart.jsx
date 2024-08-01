import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../slices/cartSlice';
import CartItem from './CartItem';
import axios from 'axios';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  useEffect(() => {
    axios.get('https://example.com/cart-data.json') // Replace with your JSON data URL
      .then(response => {
        dispatch(setCart(response.data));
      });
  }, [dispatch]);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <div>
        <h2>Total Quantity: {totalQuantity}</h2>
        <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Cart;
