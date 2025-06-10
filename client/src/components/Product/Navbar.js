import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
// adjust path as needed

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { setMiniCartOpen, cartItems } = useCart();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Products", path: "/products" },
    { name: "Pages", path: "/pages" },
  ];

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md px-6 py-4 font-poppins max-w-screen-xl mx-auto">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div
          className="text-3xl font-bold text-gray-900 font-volkhov cursor-pointer"
          onClick={() => navigate("/")}
        >
          Fasco
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Links */}
          <ul className="flex space-x-6 text-gray-700 text-base">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="hover:text-black cursor-pointer"
                onClick={() => navigate(link.path)}
              >
                {link.name}
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-5 text-xl text-gray-600">
            <FaSearch className="cursor-pointer hover:text-black" />
            <FaUser
              className="cursor-pointer hover:text-black"
              onClick={() =>
                user ? navigate("/profile") : navigate("/signin")
              }
            />
            <FaHeart
              className="cursor-pointer hover:text-black"
              onClick={() => navigate("/wishlist")}
            />
            <div
              className="relative cursor-pointer"
              onClick={() => setMiniCartOpen(true)}
            >
              <FaShoppingCart className="hover:text-black" />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalQuantity}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 space-y-4 px-4 pb-4 bg-gray-50 rounded shadow-md">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="text-gray-800 hover:text-black cursor-pointer"
              onClick={() => {
                navigate(link.path);
                setIsMenuOpen(false);
              }}
            >
              {link.name}
            </div>
          ))}
          <div className="flex gap-6 mt-4 text-xl text-gray-700 justify-center">
            <FaSearch />
            <FaUser
              onClick={() => {
                navigate(user ? "/profile" : "/signin");
                setIsMenuOpen(false);
              }}
            />
            <FaHeart
              onClick={() => {
                navigate("/wishlist");
                setIsMenuOpen(false);
              }}
            />
            <div
              className="relative cursor-pointer"
              onClick={() => setMiniCartOpen(true)}
            >
              <FaShoppingCart className="hover:text-black" />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalQuantity}
                </span>
              )}
            </div>
          </div>
          {user && (
            <button
              className="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
