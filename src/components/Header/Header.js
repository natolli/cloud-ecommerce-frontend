// src/components/Header/Header.js
import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Container, Logo, Nav, Button, CartCount } from "./Header.styles";

const Header = () => {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <Container>
      <Logo onClick={() => navigate("/")}>🛒 E-Shop</Logo>
      <Nav>
        <Button onClick={() => navigate("/")}>Home</Button>
        <Button onClick={() => navigate("/cart")}>
          Cart{" "}
          <CartCount>
            {cart.reduce((acc, item) => acc + item.quantity, 0)}
          </CartCount>
        </Button>
        {user ? (
          <>
            <span>Hello, {user.name || "User"}</span>
            <Button onClick={logout}>Logout</Button>
          </>
        ) : (
          <Button onClick={() => navigate("/login")}>Login</Button>
        )}
      </Nav>
    </Container>
  );
};

export default Header;
