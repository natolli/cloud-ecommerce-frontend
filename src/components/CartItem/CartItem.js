// src/components/CartItem/CartItem.js
import React from "react";
import { useCart } from "../../context/CartContext";
import {
  Item,
  Image,
  Info,
  Name,
  Quantity,
  Price,
  RemoveBtn,
} from "./CartItem.styles";

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <Item>
      <Image src={item.image} alt={item.name} />
      <Info>
        <Name>{item.name}</Name>
        <Quantity>Qty: {item.quantity}</Quantity>
        <Price>${(item.price * item.quantity).toFixed(2)}</Price>
        <RemoveBtn onClick={() => removeFromCart(item.productId)}>
          Remove
        </RemoveBtn>
      </Info>
    </Item>
  );
};

export default CartItem;
