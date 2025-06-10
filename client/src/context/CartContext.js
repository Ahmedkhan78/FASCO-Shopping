// src/context/CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isMiniCartOpen, setMiniCartOpen] = useState(false);

  // ✅ Add to cart (if exists, increase qty instead of duplicate)
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      } else {
        return [...prev, { ...item, quantity: item.quantity || 1 }];
      }
    });
    setMiniCartOpen(true);
  };

  // ✅ MiniCart visibility
  const closeMiniCart = () => setMiniCartOpen(false);

  // ✅ Quantity increase
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // ✅ Quantity decrease (min 1)
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // ✅ Toggle gift wrap
  const toggleGiftWrap = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, giftWrap: !item.giftWrap } : item
      )
    );
  };

  // ✅ Subtotal calculation
  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum + item.quantity * parseFloat(item.price) + (item.giftWrap ? 10 : 0),
    0
  );

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        closeMiniCart,
        isMiniCartOpen,
        setMiniCartOpen,
        increaseQty,
        decreaseQty,
        toggleGiftWrap,
        subtotal,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
