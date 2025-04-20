// src/pages/Checkout.js
import React from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import styled from "styled-components";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const { user } = useAuth();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const placeOrder = async () => {
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: user.id,
        items: cart,
        total,
      }),
    });

    if (res.ok) {
      alert("Order placed successfully!");
      clearCart();
    } else {
      alert("Failed to place order");
    }
  };

  return (
    <Container>
      <h2>Order Summary</h2>
      {cart.map((item) => (
        <Item key={item.id}>
          {item.name} × {item.quantity} = $
          {(item.price * item.quantity).toFixed(2)}
        </Item>
      ))}
      <Total>Total: ${total.toFixed(2)}</Total>
      <Button onClick={placeOrder}>Place Order</Button>
    </Container>
  );
};

export default Checkout;

const Container = styled.div`
  padding: 2rem;
`;

const Item = styled.p`
  margin-bottom: 0.5rem;
`;

const Total = styled.h3`
  margin-top: 1rem;
`;

const Button = styled.button`
  margin-top: 1.5rem;
  background: #28a745;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;

  &:hover {
    background: #218838;
  }
`;
