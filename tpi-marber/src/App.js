import "./App.css";
import NavBar from "./components/NavBar/NavBar";

import React, { useState } from "react";
import Catalog from "./components/Catalog/Catalog";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      id: 1,
      name: "Bohemian",
      style: "blonde",
      capacity: "can",
      image:
        "https://i.pinimg.com/564x/43/0c/d3/430cd348c99ca43802ee40aa272220c3.jpg",
      description: "nose",
      price: 2500,
    },
    {
      id: 2,
      name: "Amber",
      style: "red",
      capacity: "can",
      image:
        "https://i.pinimg.com/564x/dc/b2/07/dcb207e764315e758b3967ae2dccf19c.jpg",
      description: "nose",
      price: 2600,
    },
    {
      id: 3,
      name: "Kune",
      style: "blonde",
      capacity: "can",
      image:
        "https://i.pinimg.com/564x/93/2d/f7/932df71d1b423a6a3d95d83f8174fefb.jpg",
      description: "nose",
      price: 2700,
    },
    {
      id: 4,
      name: "Weisse",
      style: "ipa",
      capacity: "can",
      image:
        "https://i.pinimg.com/564x/a5/9c/34/a59c34df6c673679a50ca7b0bb4d5277.jpg",
      description: "nose",
      price: 2000,
    },
    {
      id: 5,
      name: "Bohemian",
      style: "blonde",
      capacity: "can",
      image:
        "https://i.pinimg.com/564x/43/0c/d3/430cd348c99ca43802ee40aa272220c3.jpg",
      description: "nose",
      price: 2500,
    },
  ];

  const addToCart = (product) => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);
    if (existingCartItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...existingCartItem, quantity: existingCartItem.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      <NavBar />
      <Catalog products={products} onAddToCart={addToCart} />
      <ShoppingCart cartItems={cartItems} />
    </div>
  );
};

export default App;
