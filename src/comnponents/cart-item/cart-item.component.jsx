import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="quantity">Quantity: {quantity}</span>
      <span className="price">Total: ${price * quantity}</span>
    </div>
  </div>
);

export default CartItem;
