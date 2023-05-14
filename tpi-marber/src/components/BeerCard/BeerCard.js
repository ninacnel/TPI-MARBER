import { useState } from "react";

import React from "react";

const BeerCard = ({ beerName, beerPrice, beerImage }) => {
  return (
    <div class="card" style={{ margin: 10, padding: 10, width: 300 }}>
      <img class="card-img-top" src="..." alt="Beer photo not found" />
      <div class="card-body">
        <h5 class="card-title">{beerName}</h5>
        <p class="card-text">info</p>
        <hr></hr>
        <h6 className="price">${beerPrice}</h6>
      </div>
      <div class="card-body">
        <button /*onClick={addToCart()}*/>Agregar a carrito</button>
      </div>
    </div>
  );
};

export default BeerCard;

//ni siquiera se usa este comp
