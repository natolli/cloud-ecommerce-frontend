// src/pages/Cart.js
import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem/CartItem";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <Container>
      <h2>Your Cart</h2>
      {cart && (
        <>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
              <Summary>
                <p>
                  <strong>Total:</strong> ${total.toFixed(2)}
                </p>
                <Button onClick={() => navigate("/checkout")}>
                  Proceed to Checkout
                </Button>
                <Button secondary onClick={clearCart}>
                  Clear Cart
                </Button>
              </Summary>
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  padding: 2rem;
`;

const Summary = styled.div`
  margin-top: 1rem;
`;

const Button = styled.button`
  background: ${({ secondary }) => (secondary ? "#aaa" : "#007bff")};
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  margin-right: 0.5rem;
  border-radius: 6px;

  &:hover {
    background: ${({ secondary }) => (secondary ? "#888" : "#0056b3")};
  }
`;
