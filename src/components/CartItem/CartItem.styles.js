// src/components/CartItem/CartItem.styles.js
import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  gap: 1rem;
  background: white;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const Info = styled.div`
  flex: 1;
`;

export const Name = styled.h3`
  margin: 0;
`;

export const Quantity = styled.p`
  margin: 0.5rem 0;
`;

export const Price = styled.p`
  font-weight: bold;
  margin: 0.5rem 0;
`;

export const RemoveBtn = styled.button`
  background: #ff4d4f;
  color: white;
  border: none;
  padding: 0.4rem 0.75rem;
  border-radius: 4px;

  &:hover {
    background: #d9363e;
  }
`;
