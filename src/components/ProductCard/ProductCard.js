// src/components/ProductCard/ProductCard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { Card, Image, Title, Price, Button } from "./ProductCard.styles";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <Card>
      <Image
        src={product.image}
        alt={product.name}
        onClick={() =>
          navigate(`/product/${product.id}`, { state: { product } })
        }
      />
      <Title>{product.name}</Title>
      <Price>${product.price}</Price>
      <Button onClick={() => addToCart(product)}>Add to Cart</Button>
    </Card>
  );
};

export default ProductCard;
