import React from "react";

const ShoppingCart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="d-flex justify-content-center m-5 border">
      <div>
        <h2>Pedido</h2>
        {cartItems.length === 0 && <p>Carrito vacío</p>}
        {cartItems.map((item) => (
          <div key={item.id}>
            <h5>{item.name}</h5>
            <p>Cantidad: {item.quantity}</p>
            <p>Subtotal: ${item.price * item.quantity}</p>
          </div>
        ))}
        <h3>Total: $ {totalPrice}</h3>
      </div>
    </div>
  );
};

export default ShoppingCart;
