import React from "react";

const ShoppingCart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Pedido</h2>
      {cartItems.length === 0 && <p>Carrito vacío</p>}
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Cantidad: {item.quantity}</p>
          <p>Subtotal: ${item.price * item.quantity}</p>
        </div>
      ))}
      <h3>Total: $ {totalPrice}</h3>
    </div>
  );
};

export default ShoppingCart;
