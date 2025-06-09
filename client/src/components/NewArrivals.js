import React from "react";
import images1 from "../assets/images/newarrivals/Images1.png";
import images2 from "../assets/images/newarrivals/Images2.png";
import images3 from "../assets/images/newarrivals/Images3.png";
import images4 from "../assets/images/newarrivals/Images4.png";
import images5 from "../assets/images/newarrivals/Images5.png";
import images6 from "../assets/images/newarrivals/Images6.png";

const categories = [
  "Men's Accessories",
  "Men's Clothing",
  "Women's Fashion",
  "Women's Accessories",
  "Discount Deals",
];

const products = [
  { title: "Full Sweater", image: images1 },
  { title: "Long Dress", image: images2 },
  { title: "Shiny Dress", image: images3 },
  { title: "White Dress", image: images4 },
  { title: "Colorful Dress", image: images5 },
  { title: "White Shirt", image: images6 },
];

const StarRating = () => (
  <div className="absolute top-2 right-2 text-yellow-500 text-sm z-10">
    {Array(5)
      .fill(0)
      .map((_, i) => (
        <span key={i}>★</span>
      ))}
  </div>
);

const ProductCard = ({ product }) => (
  <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300 relative">
    <div className="relative">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-72 object-cover rounded-md mb-4"
      />
    </div>

    <div className="relative space-y-1">
      <h3 className="font-semibold text-gray-900 text-lg">{product.title}</h3>
      <p className="text-gray-600 text-sm">Al Karam</p>
      <StarRating />
      <p className="text-gray-500 text-sm">(4.1k) Customer Reviews</p>
      <div className="text-lg font-semibold text-gray-800">$95.50</div>

      {/* Almost Sold Out - right bottom of content */}
      <div className="absolute bottom-2 right-2 text-sm text-red-600 font-semibold">
        Almost Sold Out
      </div>
    </div>
  </div>
);

const ProductGrid = () => (
  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
    {products.map((product, idx) => (
      <ProductCard product={product} key={idx} />
    ))}
  </div>
);

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-8">
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
        New Arrivals
      </h1>
      <p className="text-gray-600 max-w-2xl">
        Discover the latest trends in fashion, accessories, and more. Handpicked
        just for you!
      </p>

      {/* Category Buttons like VIEW MORE */}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {categories.map((category, idx) => (
          <button
            key={idx}
            className="relative overflow-hidden px-6 py-2 bg-black text-white rounded-lg font-medium border border-black transition-all duration-300 ease-in-out group  hover:text-black"
          >
            <span className="relative z-10">{category}</span>
            <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
          </button>
        ))}
      </div>
    </div>
  );
};

const NewArrivals = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-10">
      <Header />
      <ProductGrid />

      {/* VIEW MORE Button */}
      <div className="mt-12 flex justify-center">
        <button className="relative overflow-hidden px-6 py-2 bg-black text-white rounded-lg font-medium border border-black transition-all duration-300 group hover:text-black">
          <span className="relative z-10">VIEW MORE</span>
          <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;
