// src/pages/ProductDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`/api/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <Container>
      <Image src={product.image} alt={product.name} />
      <Details>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <Price>${product.price.toFixed(2)}</Price>
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
