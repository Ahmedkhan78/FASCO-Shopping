import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };
  const handleShop = () => {
    if (user) {
      navigate("/products");
    } else {
      navigate("/signin");
    }
  };

  return (
    <nav className="bg-white font-poppins shadow-md">
      <div className="flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="text-2xl sm:text-3xl lg:text-[40px] font-bold font-volkhov text-gray-900">
          Fasco
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6">
          <ul className="flex space-x-4 text-sm sm:text-base text-[#484848]">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li
              className="hover:text-black cursor-pointer"
              onClick={handleShop}
            >
              Shop
            </li>
            <li className="hover:text-black cursor-pointer">New Arrivals</li>
            <li className="hover:text-black cursor-pointer">Packages</li>
          </ul>

          {/* Auth Buttons */}
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-800 font-semibold">
                Welcome, {user.name || user.email}
              </div>
              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex space-x-3">
              <button
                className="relative overflow-hidden px-4 py-2 border border-gray-800 text-gray-800 rounded text-sm transition-all duration-500 group hover:text-white"
                onClick={() => navigate("/signin")}
              >
                <span className="relative z-10">Log In</span>
                <span className="absolute inset-0 bg-gray-800 group-hover:w-full w-0 left-0 top-0 transition-all duration-500"></span>
              </button>

              <button
                className="relative overflow-hidden px-4 py-2 bg-gray-800 text-white rounded text-sm transition-all duration-500 group hover:text-black"
                onClick={() => navigate("/signup")}
              >
                <span className="relative z-10">Sign Up</span>
                <span className="absolute inset-0 bg-white group-hover:w-full w-0 left-0 top-0 transition-all duration-500"></span>
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center justify-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
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
      <div
        className={`transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden lg:hidden bg-gray-100 px-4 py-4`}
      >
        <ul className="flex flex-col items-center space-y-4 text-base text-gray-700">
          {["Home", "Shop", "New Arrivals", "Packages"].map((item) => (
            <li
              key={item}
              className="hover:text-black cursor-pointer"
              onClick={handleNavClick}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center space-y-3 mt-4">
          {user ? (
            <>
              <p className="text-center text-gray-800 font-semibold">
                Welcome, {user.name || user.email}
              </p>
              <button
                onClick={() => {
                  handleLogout();
                  handleNavClick();
                }}
                className="w-1/2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="relative overflow-hidden w-1/2 px-4 py-2 border border-gray-800 text-gray-800 rounded text-sm group"
                onClick={() => {
                  handleNavClick();
                  navigate("/signin");
                }}
              >
                <span className="relative z-10 group-hover:text-white">
                  Sign In
                </span>
                <span className="absolute inset-0 bg-gray-800 w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
              </button>

              <button
                className="relative overflow-hidden w-1/2 px-4 py-2 bg-gray-800 text-white rounded text-sm group"
                onClick={() => {
                  handleNavClick();
                  navigate("/signup");
                }}
              >
                <span className="relative z-10 group-hover:text-black">
                  Sign Up
                </span>
                <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
