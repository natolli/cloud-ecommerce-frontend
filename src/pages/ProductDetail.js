// src/pages/ProductDetail.js
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useCart } from "../context/CartContext";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const pro = location.state?.product;
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(pro);
  }, []);

  if (!product) return <p>Loading...</p>;

  return (
    <Container>
      <Image src={product.image} alt={product.name} />
      <Details>
        <h1>{product.name}</h1>
        <h2>{product.category}</h2>
        <p>{product.description}</p>
        <Price>${product.price}</Price>
        <Button onClick={() => addToCart(product)}>Add to Cart</Button>
      </Details>
    </Container>
  );
};

export default ProductDetail;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
`;

const Image = styled.img`
  width: 400px;
  height: auto;
  object-fit: cover;
`;

const Details = styled.div`
  flex: 1;
`;

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Button = styled.button`
  margin-top: 1rem;
  background: #007bff;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;

  &:hover {
    background: #0056b3;
  }
`;
