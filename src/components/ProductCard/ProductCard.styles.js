// src/components/ProductCard/ProductCard.styles.js
import styled from "styled-components";

export const Card = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 250px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  cursor: pointer;
`;

export const Title = styled.h3`
  font-size: 1.1rem;
  margin: 0.5rem 0;
`;

export const Price = styled.p`
  font-size: 1rem;
  color: #555;
`;

export const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  margin-top: 0.5rem;

  &:hover {
    background: #0056b3;
  }
`;
