import React, { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

import "./Products.css";
import axios from "axios";

const Products = () => {
  const [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago("TEST-c83112be-2db8-4c9e-916e-7c852b74266a");

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/create_preference",
        {
          description: "Cerveza",
          price: 100,
          quantity: 1,
          currency_id: "ARS",
        }
      );

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <div>
      <h3>Store</h3>
      <div>
        <div key={1} className="card-beer">
          <h4>Cerveza roja</h4>
          <div className="card-footer">
            <p className="price">$100</p>
            <button onClick={handleBuy}>BUY</button>
          </div>
          {preferenceId && <Wallet initialization={{ preferenceId }} />}
        </div>
      </div>
    </div>
  );
};

export default Products;
