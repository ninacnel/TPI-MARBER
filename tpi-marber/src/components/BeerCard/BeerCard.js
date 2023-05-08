import { useState } from "react";

import React from "react";

const BeerCard = () => {
  return (
    <div class="card" style={{ margin: 10, padding: 10, width: 300 }}>
      <img class="card-img-top" src="..." alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">
          Pack <b>Bohemian Pilsener</b> x6
        </h5>
        <p class="card-text">descripcion qsy</p>
        <hr></hr>
        <h6 className="price">$2500</h6>
      </div>
      <div class="card-body">
        <button /*onClick={addToCart()}*/>Agregar a carrito</button>
      </div>
    </div>
  );
};

export default BeerCard;

//ni siquiera se usa este comp
