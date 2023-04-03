import React from "react";
import { CartContextProvider } from "../contexts/CartContext";
import HomePage from "./HomePage";

const App: React.FC = () => {
  return (
    <>
      <h1>Welcome to my bookstore</h1>
      <CartContextProvider>
        <HomePage />
      </CartContextProvider>
    </>
  );
};

export default App;
