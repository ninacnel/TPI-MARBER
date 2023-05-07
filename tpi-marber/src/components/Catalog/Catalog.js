import React from "react";

const Catalog = ({ products, onAddToCart }) => {
  return (
    <div class="card" style={{ margin: 10, padding: 10, width: 300 }}>
      {products.map((product) => (
        <div key={product.id}>
          <img class="card-img-top" src={product.image} alt={product.name} />
          <div class="card-body">
            <h5 class="card-title">{product.name}</h5>
            <p class="card-text">{product.description}</p>
            <hr></hr>
            <h6 class="price">{product.price}</h6>
          </div>
          <div class="card-body">
            <button onClick={() => onAddToCart(product)}>
              Agregar al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Catalog;
