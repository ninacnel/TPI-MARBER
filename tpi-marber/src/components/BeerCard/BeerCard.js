import { useState } from "react";

import React from "react";

const BeerCard = {({ beerName, beerType, beerPrice })

  return (
    <div class="card" style={{ margin: 10, padding: 10, width: 300 }}>
      <img
        class="card-img-top"
        src="https://i.pinimg.com/564x/43/0c/d3/430cd348c99ca43802ee40aa272220c3.jpg"
        alt="Card image cap"
      />
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