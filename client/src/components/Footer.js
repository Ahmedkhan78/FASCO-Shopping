import React from "react";
import footerRightImage from "../assets/images/footer/image1.png";
import footerLeftImage from "../assets/images/footer/image2.png";

const Footer = () => {
  return (
    <footer className="max-w-screen-xl mx-auto px-4">
      {/* Top: Background Image Section */}
      <div className="relative h-[400px]  mx-auto flex items-center justify-center">
        {/* Left Image */}
        <img
          src={footerRightImage}
          alt="Footer Left"
          className="absolute left-0 top-0 h-full object-cover z-0"
        />

        {/* Right Image */}
        <img
          src={footerLeftImage}
          alt="Footer Right"
          className="absolute right-0 top-0 h-full object-cover z-0"
        />

        {/* Center Content */}
        <div className="relative z-10 text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins">
            Stay in the loop
          </h2>
          <p className="text-gray-600 mt-2 font-poppins">
            Subscribe to get updates on new arrivals and exclusive offers.
          </p>
          <button className="mt-6 px-6 py-2 bg-black text-white rounded hover:bg-white hover:text-black border hover:border-black transition font-poppins">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Bottom: Footer Nav Style Section */}
      <div className="py-10 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <h1 className="text-4xl font-bold font-poppins text-gray-900">
            Fasco
          </h1>

          {/* Links */}
          <ul className="flex flex-wrap justify-center gap-6 text-gray-700 text-base font-poppins">
            <li className="cursor-pointer hover:text-black">Support</li>
            <li className="cursor-pointer hover:text-black">Center</li>
            <li className="cursor-pointer hover:text-black">Invoicing</li>
            <li className="cursor-pointer hover:text-black">Contract</li>
            <li className="cursor-pointer hover:text-black">Careers</li>
            <li className="cursor-pointer hover:text-black">Blogs</li>
            <li className="cursor-pointer hover:text-black">FAQs</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
