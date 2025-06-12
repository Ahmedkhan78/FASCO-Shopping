// src/context/CartContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth();

  // Use a key based on user email/id or 'guest' if no user
  const storageKey = user ? `cartItems_${user.email}` : "cartItems_guest";

  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem(storageKey);
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [isMiniCartOpen, setMiniCartOpen] = useState(false);

  // Whenever user or cartItems change, sync localStorage
  useEffect(() => {
    // On user change, load the cart for new user
    const storedCart = localStorage.getItem(storageKey);
    setCartItems(storedCart ? JSON.parse(storedCart) : []);
  }, [user]);

  useEffect(() => {
    // Save cartItems to localStorage on change
    localStorage.setItem(storageKey, JSON.stringify(cartItems));
  }, [cartItems, storageKey]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + (item.quantity || 1) }
            : i
        );
      } else {
        return [...prev, { ...item, quantity: item.quantity || 1 }];
      }
    });
    setMiniCartOpen(true);
  };

  const closeMiniCart = () => setMiniCartOpen(false);

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const toggleGiftWrap = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, giftWrap: !item.giftWrap } : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum + item.quantity * parseFloat(item.price) + (item.giftWrap ? 10 : 0),
    0
  );

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Optional: clear cart on logout (if you want)
  // useEffect(() => {
  //   if (!user) {
  //     setCartItems([]);
  //   }
  // }, [user]);

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
