import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    name: "Suzan B.",
    role: "UI Designer",
    quote:
      "Items that I ordered were the best investment I ever made. I can't say enough about your quality service.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John D.",
    role: "Product Manager",
    quote:
      "Exceptional quality and customer support. I’ll definitely be coming back for more.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Aisha R.",
    role: "Software Engineer",
    quote:
      "Fast delivery, great packaging, and the products were exactly what I expected.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const ReviewSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-volkhov text-gray-900">
          This Is What Our Customers Say
        </h2>
        <p className="mt-3 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis
        </p>
      </div>

      {/* 🟢 Mobile View */}
      <div className="block md:hidden">
        <div className="max-w-md mx-auto bg-white p-6 pt-12 rounded-xl shadow-md text-center relative">
          <div className="absolute -top-8 right-6 w-16 h-16">
            <img
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
            />
          </div>

          {/* ⭐⭐⭐⭐⭐ */}

          <p className="italic text-gray-800 mb-4 text-sm">
            “{testimonials[activeIndex].quote}”
          </p>
          <div className="flex justify-center mb-2 text-yellow-500 text-lg">
            {Array(5)
              .fill()
              .map((_, i) => (
                <span key={i}>★</span>
              ))}
          </div>
          <div className="w-[60%] h-[2px] bg-black mx-auto my-4 rounded"></div>
          <h4 className="font-semibold text-gray-900">
            {testimonials[activeIndex].name}
          </h4>
          <p className="text-sm text-gray-500">
            {testimonials[activeIndex].role}
          </p>

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
      </div>

      {/* 🖥️ Desktop/Tablet View */}
      <div className="relative max-w-6xl mx-auto h-[320px] hidden md:block">
        <div className="flex justify-center items-center space-x-6 relative h-full">
          {testimonials.map((item, index) => {
            let position = "opacity-0 scale-90 translate-x-0 z-0";
            if (index === activeIndex) {
              position = "opacity-100 scale-100 z-20";
            } else if (
              index ===
              (activeIndex - 1 + testimonials.length) % testimonials.length
            ) {
              position = "opacity-50 scale-95 -translate-x-20 z-10";
            } else if (index === (activeIndex + 1) % testimonials.length) {
              position = "opacity-50 scale-95 translate-x-20 z-10";
            }

            return (
              <div
                key={index}
                className={`absolute transition-all duration-500 ease-in-out transform bg-gray-100 rounded-xl shadow-lg w-[500px] p-6 pt-12 text-center ${position}`}
              >
                <div className="absolute -top-8 right-6 w-16 h-16">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                  />
                </div>

                <p className="italic text-gray-800 mb-4">“{item.quote}”</p>
                {/* ⭐⭐⭐⭐⭐ */}
                <div className="flex justify-center mb-2 text-yellow-500 text-lg">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                </div>
                <div className="w-[70%] h-[2px] bg-black mx-auto my-4 rounded"></div>
                <h4 className="font-semibold text-gray-900">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            );
          })}
        </div>

        {/* Navigation Icons */}
        <div className="flex justify-center mt-10 space-x-6">
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
    </section>
  );
};

export default ReviewSection;
