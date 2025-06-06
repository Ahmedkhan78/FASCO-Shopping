import React from "react";
import Navbar from "./Navbar";

import heroImage1 from "../assets/images/heroimage1.png";
import heroImage2 from "../assets/images/heroimage2.png";
import ladyTop from "../assets/images/lady-top.png";
import ladyBottom from "../assets/images/lady-bottom.png";
import CalvinKlein from "../assets/images/logos/CalvinKlein.png";
import Channel from "../assets/images/logos/Channel.png";
import Denim from "../assets/images/logos/Denim.png";
import lovisVuitton from "../assets/images/logos/lovisVuitton.png";
import Prada from "../assets/images/logos/Prada.png";

const Banner = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Image (50%) */}
        <div className="w-full md:w-[50%] bg-[#E0E0E0] flex items-center justify-center rounded">
          <img
            src={heroImage1}
            alt="Hero Left"
            className="w-full max-w-[392px] h-auto object-cover mt-10"
          />
        </div>

        {/* Center Column (50%) */}
        <div className="w-full md:w-[50%] flex flex-col justify-between gap-4">
          {/* Top Image */}
          <img
            src={ladyTop}
            alt="Lady Top"
            className="w-full h-[150px]  object-contain bg-[#E0E0E0] rounded"
          />

          {/* Text & Button */}
          <div className="bg-white text-center  space-y-3">
            {/* OUTLINED "ULTIMATE" TEXT */}
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 font-poppins">
              ULTIMATE
            </h1>

            {/* BOLD "SALE" TEXT */}
            <h2
              className="text-7xl md:text-10xl font-bold text-transparent font-poppins"
              style={{ WebkitTextStroke: "2px black" }}
            >
              SALE
            </h2>

            {/* Subheading */}
            <h3 className="text-lg md:text-xl text-gray-600 font-poppins">
              New Collection
            </h3>

            {/* Shop Now Button */}
            <button className="relative overflow-hidden mt-4 px-6 py-2 bg-black text-white rounded font-poppins border border-black transition-all duration-500 group hover:text-black">
              <span className="relative z-10">Shop Now</span>
              <span className="absolute inset-0 bg-white group-hover:w-full w-0 left-0 top-0 transition-all duration-500"></span>
              <span className="absolute inset-0 group-hover:border-black border-2 border-transparent rounded transition-all duration-500"></span>
            </button>
          </div>

          {/* Bottom Image */}
          <img
            src={ladyBottom}
            alt="Lady Bottom"
            className="w-full h-[150px] md:h-[250px] object-cover object-bottom bg-[#E0E0E0] rounded"
          />
        </div>

        {/* Right Image (50%) */}
        <div className="w-full md:w-[50%] bg-[#E0E0E0] flex items-center justify-center rounded">
          <img
            src={heroImage2}
            alt="Hero Right"
            className="w-full max-w-[320px] h-auto object-cover mt-10"
          />
        </div>
      </div>
    </section>
  );
};

const LogosSection = () => {
  const logos = [Channel, lovisVuitton, Prada, CalvinKlein, Denim];

  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="w-full">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              className="h-8 w-auto inline-block"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <Navbar />
      <Banner />
      <LogosSection />
    </div>
  );
};

export default Hero;
