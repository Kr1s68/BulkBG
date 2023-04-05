import React, { useContext, useState, useEffect } from "react";

const CartContext = React.createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState({
    name: "",
    price: "",
    image: "",
  });

  function addToCart(item) {
    setCart({
      name: item.name,
      price: item.price,
      image: item.image,
    });
  }

  const value = { cart, addToCart };

  console.log(cart);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
