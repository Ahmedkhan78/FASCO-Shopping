import React from "react";
import footerRightImage from "../assets/images/footer/image1.png";
import footerLeftImage from "../assets/images/footer/image2.png";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Top: Image & CTA Section */}
      <div className="relative py-12 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 max-w-screen-xl mx-auto">
          {/* Left Image */}
          <img
            src={footerRightImage}
            alt="Footer Left"
            className="w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[320px] object-cover rounded"
          />

          {/* Center Text Box */}
          <div className="text-center px-6 py-8 bg-white rounded shadow-2xl w-full max-w-[400px] flex-shrink-0">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins mb-4"
              style={{
                WebkitTextStroke: "1px #1f2937",
                color: "transparent",
              }}
            >
              Stay in the loop
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-poppins px-2 md:px-6">
              Subscribe to get updates on new arrivals and exclusive offers.
            </p>

            <button className="relative overflow-hidden mt-6 px-6 py-2 bg-black text-white rounded font-poppins border border-black transition-all duration-500 group hover:text-black">
              <span className="relative z-10">Subscribe Now</span>
              <span className="absolute inset-0 bg-white group-hover:w-full w-0 left-0 top-0 transition-all duration-500"></span>
              <span className="absolute inset-0 group-hover:border-black border-2 border-transparent rounded transition-all duration-500"></span>
            </button>
          </div>

          {/* Right Image */}
          <img
            src={footerLeftImage}
            alt="Footer Right"
            className="w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[320px] object-cover rounded"
          />
        </div>
      </div>

      {/* Bottom Links */}
      <div className="py-10 bg-white px-4">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h1 className="text-4xl font-bold font-poppins text-gray-900">
            Fasco
          </h1>
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
