import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white font-poppins py-8">
      <div className="flex items-center justify-between px-4 py-4">
        {/* Left: Logo */}
        <div className="text-[52px] font-bold font-volkhov text-gray-900">
          Fasco
        </div>

        {/* Right: Nav Links & Auth Buttons */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 text-lg text-gray-700 font-medium">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">Shop</li>
            <li className="hover:text-black cursor-pointer">New Arrivals</li>
            <li className="hover:text-black cursor-pointer">Packages</li>
          </ul>
          <div className="space-x-4">
            <button className="px-5 py-2 border border-gray-800 text-gray-800 rounded hover:bg-gray-800 hover:text-white transition">
              Sign In
            </button>
            <button className="px-5 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-gray-100 px-4 py-4 space-y-4`}
      >
        <ul className="space-y-4 text-lg text-gray-700">
          <li className="hover:text-black cursor-pointer">Home</li>
          <li className="hover:text-black cursor-pointer">Shop</li>
          <li className="hover:text-black cursor-pointer">New Arrivals</li>
          <li className="hover:text-black cursor-pointer">Packages</li>
        </ul>
        <div className="space-y-4">
          <button className="w-full px-5 py-2 border border-gray-800 text-gray-800 rounded hover:bg-gray-800 hover:text-white transition">
            Sign In
          </button>
          <button className="w-full px-5 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
