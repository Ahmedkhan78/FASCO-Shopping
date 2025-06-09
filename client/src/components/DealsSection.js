import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import image1 from "../assets/images/Deals/image1.png";
import image2 from "../assets/images/Deals/image2.png";
import image3 from "../assets/images/Deals/image3.png";
import image4 from "../assets/images/newarrivals/Images4.png";
import image5 from "../assets/images/newarrivals/Images5.png";
import image6 from "../assets/images/newarrivals/Images6.png";

const images = [image1, image2, image3, image4, image5, image6];

const DealsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-06-13T00:00:00");
    const difference = targetDate - new Date();

    let timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0"
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const getPrevIndex = () => (activeIndex - 1 + images.length) % images.length;
  const getNextIndex = () => (activeIndex + 1) % images.length;

  return (
    <div className="max-w-screen mx-auto px-4 py-16 bg-white ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT: Text Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-4">Deals Of The Month</h2>
          <p className="text-gray-600 mb-6 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem.
          </p>
          <button className="relative overflow-hidden px-6 py-2 mb-5 bg-black text-white rounded-lg font-medium border border-black transition-all duration-300 group hover:text-black">
            <span className="hover:text-black">BUY NOW</span>
            <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
          </button>
          <p className="text-black font-medium text-2xl mb-4 mx-20">
            Hurry, Before It’s Too Late!
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 text-base sm:text-xl font-mono mb-6">
            {Object.entries(timeLeft).map(([key, value], index, array) => (
              <div key={key} className="flex items-center">
                <div className="bg-white text-black border border-black px-3 sm:px-4 py-2 rounded text-center min-w-[60px]">
                  <div className="text-lg sm:text-2xl font-bold">{value}</div>
                  <div className="text-xs mt-1 uppercase tracking-widest">
                    {key}
                  </div>
                </div>

                {index < array.length - 1 && (
                  <span className="mx-1 sm:mx-2 text-lg sm:text-2xl font-bold text-black">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Images in One Row */}
        {/* Image Row with center focus */}
        <div className="flex  items-center gap-2">
          {/* Left Small Image (Previous) */}
          <div className="w-2/5 sm:w-1/5 h-[240px] sm:h-[300px] bg-gray-200 rounded overflow-hidden">
            <img
              src={images[getPrevIndex()]}
              alt="Previous Deal"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Center Big Image (Active) */}
          <div className="w-3/5 sm:w-3/5 h-[400px] sm:h-[400px] bg-gray-100 rounded overflow-hidden relative">
            <img
              src={images[activeIndex]}
              alt="Main Deal"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-black text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded leading-tight">
              <div className="text-[10px] sm:text-xs">01 ---- Spring</div>
              <div className="text-xs sm:text-base font-bold">Sale 30% OFF</div>
            </div>
          </div>

          {/* Right Small Image (Next) */}
          <div className="w-2/5 sm:w-1/5 h-[240px] sm:h-[300px] bg-gray-200 rounded overflow-hidden">
            <img
              src={images[getNextIndex()]}
              alt="Next Deal"
              className="w-screen h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 space-x-6">
        <button
          onClick={prevSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-800 
                hover:bg-gray-800 hover:text-white active:bg-black active:text-white transition duration-200"
          aria-label="Previous Slide"
        >
          <FiChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-800 
                hover:bg-gray-800 hover:text-white active:bg-black active:text-white transition duration-200"
          aria-label="Next Slide"
        >
          <FiChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default DealsSection;
