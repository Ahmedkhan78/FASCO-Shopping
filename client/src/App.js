import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import EmailVerified from "./auth/EmailVerified";

import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/email-verified" element={<EmailVerified />}></Route>
          <Route path="/products" element={<ProductPage />}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
