import React from "react";

const Catalog = ({ products, onAddToCart }) => {
  return (
    <div className="card-grid d-flex">
      {products.map((product) => (
        <div class="card d-flex w-75 border m-3 shadow" key={product.id}>
          <img class="card-img-top " src={product.image} alt={product.name} />
          <div class="card-body">
            <h5 class="card-title">{product.name}</h5>
            <p class="card-text">{product.description}</p>
            <hr></hr>
            <h6 class="price">{product.price}</h6>
          </div>
          <div class="card-body">
            <button
              className="btn btn-primary"
              onClick={() => onAddToCart(product)}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Catalog;

// style={{ margin: 1, padding: 1, width: 300 }}
