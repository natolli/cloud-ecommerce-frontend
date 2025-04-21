import React from "react";
import { useCart } from "../context/CartContext";
import styled from "styled-components";
import { CognitoUserPool } from "amazon-cognito-identity-js";

// Replace with your actual Cognito values
const poolData = {
  UserPoolId: "us-east-1_HhhUqRFK4", // ← Replace this
  ClientId: "4cslra82t15ci6ue61gsiju33p", // ← Replace this
};

const userPool = new CognitoUserPool(poolData);

const Checkout = () => {
  const { cart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const placeOrder = () => {
    const cognitoUser = userPool.getCurrentUser();

    if (!cognitoUser) {
      alert("User not logged in");
      return;
    }

    cognitoUser.getSession(async (err, session) => {
      if (err || !session.isValid()) {
        alert("Session expired. Please log in again.");
        return;
      }

      const idToken = session.getIdToken().getJwtToken();

      const res = await fetch(
        "https://ko19zy4goa.execute-api.us-east-1.amazonaws.com/prod/order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: idToken,
          },
          body: JSON.stringify({
            items: cart,
            totalAmount: total,
          }),
        }
      );

      if (res.ok) {
        alert("Order placed successfully!");
        clearCart();
      } else {
        const error = await res.json();
        alert("Failed to place order: " + (error.message || "Unknown error"));
      }
    });
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
