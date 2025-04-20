// src/components/Header/Header.styles.js
import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #222;
  color: white;
  padding: 1rem 2rem;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.button`
  background: #444;
  border: none;
  padding: 0.5rem 1rem;
  color: white;
  border-radius: 5px;

  &:hover {
    background: #666;
  }
`;

export const CartCount = styled.span`
  background: #ff4757;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  margin-left: 5px;
  font-size: 0.8rem;
`;
