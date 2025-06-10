import React from "react";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "₹999",
    image: "/images/default1.jpg",
    colors: ["red", "blue", "green"],
  },
  {
    id: 2,
    name: "Product 2",
    price: "₹799",
    image: "/images/default2.jpg",
    colors: ["black", "gray"],
  },
  {
    id: 3,
    name: "Product 3",
    price: "₹499",
    image: "/images/default3.jpg",
    colors: ["yellow", "pink"],
  },
  // ...total 9 products
];

const ProductList = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <div className="flex gap-2 mt-2">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className={`w-5 h-5 rounded-full border`}
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
