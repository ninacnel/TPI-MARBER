import "./App.css";
import NavBar from "./components/NavBar/NavBar";

import React, { useState } from "react";
import Catalog from "./components/Catalog/Catalog";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

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
      <Catalog products={products} onAddToCart={addToCart} />
      <ShoppingCart cartItems={cartItems} />
    </div>
  );
};

export default App;

// import BeerCard from "./components/BeerCard/BeerCard";
// import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
// import Catalog from "./components/Catalog/Catalog";

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       {/* <BeerCard /> */}
//       <Catalog />
//       <ShoppingCart />
//     </div>
//   );
// }

// export default App;
