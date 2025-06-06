import React from "react";
import peakyImage from "../assets/images/peaky.png"; // Adjust the path if needed
import { FaCheckCircle, FaShieldAlt, FaTruck, FaHeadset } from "react-icons/fa";

const PeakySlider = () => {
  return (
    <section className="w-full bg-[#F8F8F8]">
      <div className="flex flex-col md:flex-row w-full md:min-h-[600px]">
        {/* Left Side - Image */}
        <div className="relative w-full md:w-1/2  flex justify-center items-center p-4">
          <img
            src={peakyImage}
            alt="Peaky Blinders"
            className="w-full max-w-full h-auto md:h-full object-cover"
          />

          {/* Pointer 1 - Flat Cap */}
          <div className="absolute top-0 left-[50%] transform -translate-x-1/2">
            <div className="relative bg-white text-black text-sm px-3 py-2 rounded shadow">
              Flat Cap
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-600" />
            </div>
          </div>

          {/* Pointer 2 - Suspender */}
          <div className="absolute top-[17%] left-[37%] transform -translate-x-1/2">
            <div className="relative bg-white text-black text-sm px-3 py-2 rounded shadow">
              Suspender
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-600" />
            </div>
          </div>

          {/* Pointer 3 - Hugo Boss */}
          <div className="absolute top-[30%] left-[43%] transform -translate-x-1/2">
            <div className="relative bg-white text-black text-sm px-3 py-2 rounded shadow">
              Hugo Boss
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-600" />
            </div>
          </div>

          {/* Pointer 4 - Santoni */}
          <div className="absolute top-[75%] left-[40%] transform -translate-x-1/2">
            <div className="relative bg-white text-black text-sm px-3 py-2 rounded shadow">
              Santoni
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-600" />
            </div>
          </div>
        </div>

        {/* Right Side - Content */}

        <div className="w-full bg-[#DADADA] md:w-1/2 flex items-center justify-center px-6 py-10 md:py-0 clip-left-slant">
          <div className="text-center max-w-md font-poppins md:-translate-x-6">
            <p className="text-gray-500">Womens Collection</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Peaky Blinders
            </h2>

            <h3 className="text-md text-gray-500 tracking-wider mb-2">
              DESCRIPTION
            </h3>

            <p className="text-gray-600 text-base md:text-lg mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin.
            </p>

            <p className="text-black font-bold text-base mb-2">
              Size:{" "}
              <span className="font-semibold text-white bg-black p-2 rounded">
                M
              </span>
            </p>

            <span className="text-xl font-semibold text-black mb-6 block">
              $100.00
            </span>

            <button className="px-6 py-2 bg-black text-white rounded hover:bg-white hover:text-black border border-black transition-all duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* promotional feature */}
      <section className="bg-[#F8F8F8] mt-10 py-12   px-4 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row md:justify-between gap-8 flex-wrap text-center md:text-left font-poppins text-gray-800">
          {/* Feature 1 */}
          <div className="flex items-center gap-4 flex-1 min-w-[200px] justify-center md:justify-start">
            <FaCheckCircle className="text-black text-3xl" />
            <div>
              <p className="font-semibold text-lg">High Quality</p>
              <p className="text-sm text-gray-600">
                crafted from top materials
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-4 flex-1 min-w-[200px] justify-center md:justify-start">
            <FaShieldAlt className="text-black text-3xl" />
            <div>
              <p className="font-semibold text-lg">Warranty Protection</p>
              <p className="text-sm text-gray-600">Over 2 years</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-4 flex-1 min-w-[200px] justify-center md:justify-start">
            <FaTruck className="text-black text-3xl" />
            <div>
              <p className="font-semibold text-lg">Free Shipping</p>
              <p className="text-sm text-gray-600">Order over $150</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center gap-4 flex-1 min-w-[200px] justify-center md:justify-start">
            <FaHeadset className="text-black-600 text-3xl" />
            <div>
              <p className="font-semibold text-lg">24 / 7 Support</p>
              <p className="text-sm text-gray-600">Dedicated support</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PeakySlider;
