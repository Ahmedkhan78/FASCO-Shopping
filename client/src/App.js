import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import EmailVerified from "./auth/EmailVerified";

import ProductPage from "./pages/ProductPage";
import ProductDetails from "./components/Product/ProductDetails";
import { CartProvider } from "./context/CartContext";
import ViewCart from "./components/Product/ViewCart";
import CheckoutPage from "./components/Product/CheckoutPage";

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/email-verified" element={<EmailVerified />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<ViewCart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
